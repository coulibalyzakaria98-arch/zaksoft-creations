import { View, Text, ScrollView, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { notificationService } from '../services/notifications';
import { useAuth } from '../hooks/useAuth';
import { Bell, X, CheckCircle, AlertCircle, Users, Zap } from 'lucide-react-native';

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (user) {
      fetchNotifications();
      const interval = setInterval(fetchNotifications, 60000);
      return () => clearInterval(interval);
    }
  }, [user]);

  const fetchNotifications = async () => {
    if (!user) return;
    try {
      const data = await notificationService.getNotifications(user.id);
      setNotifications(data);
      const { count } = await notificationService.getUnreadCount(user.id);
      setUnreadCount(count);
    } catch (e) {
      console.error('Failed to fetch notifications', e);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'JOB_COMPLETED': return <CheckCircle size={20} color="#10b981" />;
      case 'JOB_FAILED': return <AlertCircle size={20} color="#ef4444" />;
      case 'TEAM_INVITE': return <Users size={20} color="#4f46e5" />;
      default: return <Zap size={20} color="#f59e0b" />;
    }
  };

  return (
    <View className="flex-1">
      {/* Global Notification Trigger (usually placed in header) */}
      <View className="absolute top-12 right-6 z-50">
        <TouchableOpacity 
          onPress={() => setModalVisible(true)}
          className="bg-white/90 p-3 rounded-2xl shadow-sm border border-gray-100"
        >
          <Bell size={24} color="#1f2937" />
          {unreadCount > 0 && (
            <View className="absolute -top-1 -right-1 bg-indigo-600 rounded-full w-5 h-5 items-center justify-center border-2 border-white">
              <Text className="text-white text-[10px] font-black">{unreadCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView className="flex-1 bg-white">
          <View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-100">
            <Text className="text-2xl font-black text-gray-900">Notifications</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <X size={24} color="#94a3b8" />
            </TouchableOpacity>
          </View>
          
          <ScrollView className="flex-1 px-6 pt-4">
            {notifications.length === 0 ? (
              <View className="flex-1 items-center justify-center pt-20">
                <Bell size={64} color="#f1f5f9" />
                <Text className="text-gray-400 font-bold mt-4">Aucune notification pour le moment</Text>
              </View>
            ) : (
              notifications.map((notif: any) => (
                <TouchableOpacity 
                  key={notif.id}
                  className={`flex-row gap-4 p-5 rounded-3xl mb-4 border ${notif.readAt ? 'bg-white border-gray-50' : 'bg-indigo-50/50 border-indigo-100'}`}
                >
                  <View className={`w-12 h-12 rounded-2xl items-center justify-center ${notif.readAt ? 'bg-gray-50' : 'bg-white'}`}>
                    {getIcon(notif.type)}
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 font-bold text-base">{notif.title}</Text>
                    <Text className="text-gray-500 text-sm mt-1 leading-5">{notif.body}</Text>
                    <Text className="text-gray-400 text-[10px] font-bold uppercase mt-3 tracking-widest">
                      {new Date(notif.sentAt).toLocaleDateString()}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {children}
    </View>
  );
}
