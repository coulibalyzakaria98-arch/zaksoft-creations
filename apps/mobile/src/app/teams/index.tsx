import { View, Text, TouchableOpacity, ScrollView, Alert, TextInput, Modal, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { teamsService } from '../../services/teamsApi';
import { Users, Plus, Mail, LogOut, Crown, Shield, User, ChevronRight } from 'lucide-react-native';
import { router } from 'expo-router';

export default function TeamsScreen() {
  const [teams, setTeams] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    setLoading(true);
    try {
      const [teamsData, invitationsData] = await Promise.all([
        teamsService.getMyTeams(),
        teamsService.getInvitations().catch(() => [])
      ]);
      setTeams(teamsData);
      setInvitations(invitationsData);
    } catch (error) {
      console.error("Failed to refresh teams data", error);
    } finally {
      setLoading(false);
    }
  };

  const createTeam = async () => {
    if (!newTeamName.trim()) return;
    
    setCreating(true);
    try {
      await teamsService.createTeam({ name: newTeamName });
      setModalVisible(false);
      setNewTeamName('');
      await refreshData();
      Alert.alert('Succès', 'Équipe créée avec succès !');
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de créer l\'équipe.');
    } finally {
      setCreating(false);
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'OWNER': return <Crown size={14} color="#f59e0b" fill="#f59e0b" />;
      case 'ADMIN': return <Shield size={14} color="#4f46e5" />;
      default: return <User size={14} color="#94a3b8" />;
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white px-6 pt-6 pb-6 shadow-sm z-10 rounded-b-3xl">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-2xl font-extrabold text-gray-900 tracking-tight">Mes Équipes</Text>
            <Text className="text-gray-400 text-xs font-bold uppercase mt-1 tracking-widest">Espace Collaboratif</Text>
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            className="bg-indigo-600 w-12 h-12 rounded-2xl items-center justify-center shadow-lg shadow-indigo-100"
          >
            <Plus size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ padding: 24 }} showsVerticalScrollIndicator={false}>
        {/* Invitations Section */}
        {invitations.length > 0 && (
          <View className="mb-10">
            <Text className="text-gray-900 font-extrabold text-lg mb-4">Invitations en attente ({invitations.length})</Text>
            {invitations.map((inv: any) => (
              <View key={inv.id} className="bg-white rounded-3xl p-6 mb-4 border border-indigo-100 shadow-sm">
                <View className="flex-row items-center gap-4 mb-4">
                   <View className="bg-indigo-50 w-12 h-12 rounded-2xl items-center justify-center">
                      <Users size={24} color="#4f46e5" />
                   </View>
                   <View className="flex-1">
                      <Text className="font-extrabold text-gray-900 text-base">{inv.team.name}</Text>
                      <Text className="text-gray-400 text-xs font-medium">Invité par {inv.inviter.email}</Text>
                   </View>
                </View>
                <View className="flex-row gap-3">
                  <TouchableOpacity
                    onPress={() => teamsService.acceptInvitation(inv.token).then(refreshData)}
                    className="flex-1 bg-indigo-600 py-3.5 rounded-2xl shadow-sm shadow-indigo-100"
                  >
                    <Text className="text-white text-center font-bold">Accepter</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="flex-1 bg-gray-50 py-3.5 rounded-2xl border border-gray-100"
                  >
                    <Text className="text-gray-500 text-center font-bold">Ignorer</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
        
        {/* Teams List */}
        <Text className="text-gray-900 font-extrabold text-lg mb-6">Équipes Rejointes</Text>
        
        {loading ? (
          <ActivityIndicator color="#4f46e5" size="large" className="mt-10" />
        ) : teams.length === 0 ? (
          <View className="bg-white rounded-[40px] p-12 items-center border border-dashed border-gray-200">
            <View className="bg-gray-50 w-20 h-20 rounded-full items-center justify-center mb-6">
               <Users size={32} color="#cbd5e1" />
            </View>
            <Text className="text-gray-900 font-bold text-lg">Aucune équipe</Text>
            <Text className="text-gray-400 text-center mt-2 text-sm leading-5">Créez votre propre équipe pour collaborer sur des projets IA avec vos collègues.</Text>
            <TouchableOpacity 
              onPress={() => setModalVisible(true)}
              className="mt-8 bg-gray-900 px-8 py-4 rounded-2xl"
            >
               <Text className="text-white font-extrabold text-sm uppercase tracking-widest">Créer une équipe</Text>
            </TouchableOpacity>
          </View>
        ) : (
          teams.map((team: any) => (
            <TouchableOpacity
              key={team.id}
              onPress={() => router.push(`/teams/${team.id}` as any)}
              className="bg-white rounded-3xl p-5 mb-4 shadow-sm border border-gray-100 flex-row justify-between items-center group active:scale-[0.98] transition-all"
            >
              <View className="flex-row items-center gap-4 flex-1">
                <View className="w-14 h-14 bg-gray-50 rounded-2xl items-center justify-center">
                   {team.avatar ? (
                     <Image source={{ uri: team.avatar }} className="w-full h-full rounded-2xl" />
                   ) : (
                     <Text className="text-xl font-black text-indigo-200">{team.name.charAt(0).toUpperCase()}</Text>
                   )}
                </View>
                <View className="flex-1">
                  <View className="flex-row items-center gap-2">
                    <Text className="font-extrabold text-gray-900 text-lg leading-tight">{team.name}</Text>
                    <View className="bg-indigo-50 p-1 rounded-lg">
                       {getRoleIcon(team.members[0]?.role)}
                    </View>
                  </View>
                  <Text className="text-gray-400 text-xs font-bold mt-1 uppercase tracking-tighter">
                    {team._count.members} Membres • {team._count.projects} Projets
                  </Text>
                </View>
              </View>
              <View className="bg-gray-50 p-2 rounded-xl">
                 <ChevronRight size={20} color="#cbd5e1" />
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
      
      {/* Create Team Modal */}
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View className="flex-1 justify-center items-center bg-gray-900/60 p-6">
          <View className="bg-white rounded-[40px] p-8 w-full shadow-2xl">
            <View className="bg-indigo-100 w-16 h-16 rounded-3xl items-center justify-center mb-6">
               <Users size={32} color="#4f46e5" />
            </View>
            <Text className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Nouvelle Équipe</Text>
            <Text className="text-gray-500 mb-8 text-sm font-medium">Donnez un nom inspirant à votre nouvel espace de collaboration.</Text>
            
            <TextInput
              placeholder="Nom de l'organisation"
              value={newTeamName}
              onChangeText={setNewTeamName}
              placeholderTextColor="#94a3b8"
              className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-8 text-gray-900 font-bold text-lg outline-none"
              autoFocus
            />
            
            <View className="flex-row gap-4">
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="flex-1 py-4 rounded-2xl items-center"
              >
                <Text className="text-gray-400 font-bold">Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={createTeam}
                disabled={creating || !newTeamName.trim()}
                className="flex-[2] py-4 rounded-2xl bg-indigo-600 items-center shadow-lg shadow-indigo-200 disabled:opacity-50"
              >
                {creating ? <ActivityIndicator color="white" /> : <Text className="text-white font-bold text-base">Lancer l'équipe</Text>}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
