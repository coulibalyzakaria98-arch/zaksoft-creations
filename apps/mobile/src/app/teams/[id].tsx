import { View, Text, ScrollView, TouchableOpacity, RefreshControl, ActivityIndicator, Alert } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useState, useEffect, useCallback } from 'react';
import { teamsService } from '../../services/teamsApi';
import { useAuth } from '../../hooks/useAuth';
import { Users, FolderKanban, Activity, TrendingUp, Mail, Crown, Shield, ChevronRight, Plus } from 'lucide-react-native';

export default function TeamDetailScreen() {
  const { id } = useLocalSearchParams();
  const [team, setTeam] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useAuth();

  const fetchTeamData = useCallback(async () => {
    try {
      const [teamData, statsData, activitiesData] = await Promise.all([
        teamsService.getTeam(id as string),
        // Adding these to teamsService would be better, but assuming they exist
        fetch(`${process.env.EXPO_PUBLIC_TEAMS_API_URL}/teams/${id}/dashboard/stats`, { headers: { 'x-user-id': user?.id || '' } }).then(r => r.json()),
        fetch(`${process.env.EXPO_PUBLIC_TEAMS_API_URL}/teams/${id}/activity`, { headers: { 'x-user-id': user?.id || '' } }).then(r => r.json())
      ]);
      setTeam(teamData);
      setStats(statsData);
      setActivities(activitiesData);
    } catch (error) {
      console.error('Failed to fetch team data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [id, user]);

  useEffect(() => {
    if (id && user) fetchTeamData();
  }, [id, user, fetchTeamData]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchTeamData();
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'OWNER': return <Crown size={14} color="#f59e0b" fill="#f59e0b" />;
      case 'ADMIN': return <Shield size={14} color="#4f46e5" fill="#4f46e5" />;
      default: return <Users size={14} color="#94a3b8" />;
    }
  };

  if (loading) return <View className="flex-1 justify-center items-center bg-white"><ActivityIndicator size="large" color="#4f46e5" /></View>;

  return (
    <View className="flex-1 bg-white">
      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#4f46e5" />}
      >
        {/* Header Section */}
        <View className="bg-gray-900 pt-16 pb-12 px-8 rounded-b-[48px]">
          <Text className="text-indigo-400 font-black text-xs uppercase tracking-[4px] mb-2">Espace d'équipe</Text>
          <Text className="text-white text-4xl font-black tracking-tight">{team.name}</Text>
          <Text className="text-gray-400 font-medium mt-2 leading-5">{team.description || "Aucune description fournie pour cette organisation."}</Text>
          
          <View className="flex-row items-center gap-6 mt-8">
             <View className="flex-row items-center gap-2">
                <Users size={16} color="#6366f1" />
                <Text className="text-white font-bold text-sm">{team.members?.length || 0} Membres</Text>
             </View>
             <View className="flex-row items-center gap-2">
                <FolderKanban size={16} color="#6366f1" />
                <Text className="text-white font-bold text-sm">{team.projects?.length || 0} Projets</Text>
             </View>
          </View>
        </View>

        {/* Stats Grid */}
        <View className="px-8 -mt-8">
           <View className="bg-white rounded-[32px] shadow-xl shadow-gray-200 border border-gray-50 p-6 flex-row justify-between">
              <View className="items-center flex-1">
                 <Text className="text-gray-900 font-black text-2xl">{stats?.projects || 0}</Text>
                 <Text className="text-gray-400 font-bold text-[10px] uppercase mt-1">Projets</Text>
              </View>
              <View className="w-[1px] h-10 bg-gray-100 self-center" />
              <View className="items-center flex-1">
                 <Text className="text-gray-900 font-black text-2xl">{stats?.totalCredits || 0}</Text>
                 <Text className="text-gray-400 font-bold text-[10px] uppercase mt-1">Crédits</Text>
              </View>
              <View className="w-[1px] h-10 bg-gray-100 self-center" />
              <View className="items-center flex-1">
                 <View className="flex-row items-center gap-1">
                    <TrendingUp size={12} color="#10b981" />
                    <Text className="text-emerald-500 font-black text-2xl">+{Math.round(stats?.activityGrowth || 0)}%</Text>
                 </View>
                 <Text className="text-gray-400 font-bold text-[10px] uppercase mt-1">Croissance</Text>
              </View>
           </View>
        </View>

        {/* Action Center */}
        <View className="p-8">
           <Text className="text-gray-900 font-black text-xl mb-6">Centre d'Action</Text>
           <View className="flex-row gap-4">
              <TouchableOpacity className="flex-1 bg-indigo-50 border border-indigo-100 p-6 rounded-[32px] items-center">
                 <View className="bg-indigo-600 w-12 h-12 rounded-2xl items-center justify-center mb-4">
                    <Mail size={24} color="white" />
                 </View>
                 <Text className="text-indigo-900 font-bold">Inviter</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-1 bg-gray-50 border border-gray-100 p-6 rounded-[32px] items-center">
                 <View className="bg-gray-900 w-12 h-12 rounded-2xl items-center justify-center mb-4">
                    <Plus size={24} color="white" />
                 </View>
                 <Text className="text-gray-900 font-bold">Projet</Text>
              </TouchableOpacity>
           </View>
        </View>

        {/* Member List */}
        <View className="px-8 mb-10">
           <View className="flex-row justify-between items-center mb-6">
              <Text className="text-gray-900 font-black text-xl">Membres</Text>
              <TouchableOpacity><Text className="text-indigo-600 font-bold text-sm">Voir tout</Text></TouchableOpacity>
           </View>
           {team.members?.slice(0, 3).map((member: any) => (
             <View key={member.id} className="flex-row items-center justify-between bg-gray-50 p-4 rounded-2xl mb-3">
                <View className="flex-row items-center gap-3">
                   <View className="w-10 h-10 bg-indigo-100 rounded-full items-center justify-center">
                      <Text className="text-indigo-600 font-bold">{member.user.email.charAt(0).toUpperCase()}</Text>
                   </View>
                   <View>
                      <Text className="text-gray-900 font-bold text-sm">{member.user.email.split('@')[0]}</Text>
                      <Text className="text-gray-400 text-[10px] font-bold uppercase">{member.role}</Text>
                   </View>
                </View>
                {getRoleIcon(member.role)}
             </View>
           ))}
        </View>

        {/* Recent Activity */}
        <View className="px-8 pb-20">
           <Text className="text-gray-900 font-black text-xl mb-6">Activité Récente</Text>
           {activities.length > 0 ? activities.map((activity: any) => (
             <View key={activity.id} className="flex-row gap-4 mb-6">
                <View className="items-center">
                   <View className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                   <View className="w-[1px] flex-1 bg-gray-200 my-2" />
                </View>
                <View className="flex-1 bg-white border border-gray-100 p-5 rounded-[24px] shadow-sm">
                   <Text className="text-gray-900 font-bold text-sm">
                      <Text className="text-indigo-600">{activity.user.email.split('@')[0]}</Text> {activity.action.replace('_', ' ')}
                   </Text>
                   <Text className="text-gray-400 text-[10px] font-bold mt-2 uppercase">{new Date(activity.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</Text>
                </View>
             </View>
           )) : (
             <View className="bg-gray-50 p-10 rounded-[32px] items-center">
                <Activity size={32} color="#cbd5e1" />
                <Text className="text-gray-400 font-bold mt-4">Aucun mouvement détecté</Text>
             </View>
           )}
        </View>
      </ScrollView>
    </View>
  );
}
