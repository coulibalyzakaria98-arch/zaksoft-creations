import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../hooks/useAuth';
import { Image as ImageIcon, Video, Globe, ShoppingBag, User } from 'lucide-react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const { user, credits } = useAuth();

  const services = [
    { name: 'Design', icon: ImageIcon, route: '/design', color: '#6366f1' },
    { name: 'Vidéo', icon: Video, route: '/video', color: '#ec4899' },
    { name: 'Web', icon: Globe, route: '/web', color: '#10b981' },
    { name: 'Marketplace', icon: ShoppingBag, route: '/marketplace', color: '#f59e0b' }
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="bg-indigo-600 pt-8 pb-12 px-6 rounded-b-3xl">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-white text-2xl font-bold">ZAKSOFT</Text>
              <Text className="text-indigo-200 text-sm">Créations IA</Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/profile')}>
              <View className="w-12 h-12 bg-indigo-500 rounded-full items-center justify-center">
                <User color="white" size={24} />
              </View>
            </TouchableOpacity>
          </View>
          
          {/* Credits Card */}
          <View className="mt-6 bg-indigo-500 rounded-2xl p-4">
            <Text className="text-indigo-100 text-sm">Crédits disponibles</Text>
            <Text className="text-white text-4xl font-bold mt-1">{credits}</Text>
            <Text className="text-indigo-100 text-xs mt-2 font-medium">
              Plan {user?.tier?.toUpperCase() || 'FREE'}
            </Text>
          </View>
        </View>
        
        {/* Services Grid */}
        <div className="px-6 mt-8">
          <Text className="text-gray-900 text-xl font-bold mb-6">
            Services IA
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {services.map((service) => (
              <TouchableOpacity
                key={service.name}
                onPress={() => router.push(service.route as any)}
                className="w-[47%] bg-white rounded-2xl p-5 shadow-sm mb-5 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl items-center justify-center mb-4" style={{ backgroundColor: `${service.color}15` }}>
                  <service.icon color={service.color} size={28} />
                </div>
                <Text className="text-gray-900 font-bold text-base">{service.name}</Text>
                <Text className="text-gray-500 text-xs mt-1">Exploiter la puissance IA</Text>
              </TouchableOpacity>
            ))}
          </View>
        </div>
        
        {/* Promo Section */}
        <View className="px-6 mb-10">
          <TouchableOpacity className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 shadow-md overflow-hidden relative">
             <View className="relative z-10">
               <Text className="text-white font-bold text-lg">Passez au plan PRO</Text>
               <Text className="text-indigo-100 text-sm mt-1 max-w-[70%]">Débloquez les générations 4K et les vidéos de 30s.</Text>
               <View className="bg-white px-4 py-2 rounded-lg self-start mt-4">
                 <Text className="text-indigo-600 font-bold text-xs">EN SAVOIR PLUS</Text>
               </View>
             </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
