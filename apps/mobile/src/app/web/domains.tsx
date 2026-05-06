import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Globe, CheckCircle, XCircle, Copy } from 'lucide-react-native';

export default function DomainsScreen() {
  const { websiteId } = useLocalSearchParams();
  const [domains, setDomains] = useState<any[]>([]);
  const [newDomain, setNewDomain] = useState('');
  const [loading, setLoading] = useState(true);

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-3xl font-black text-gray-900 mb-2">Domaines</Text>
      <Text className="text-gray-500 mb-8 font-medium">Connectez votre propre marque à votre site généré.</Text>
      
      <View className="bg-gray-50 p-6 rounded-[32px] border border-gray-100 mb-8">
        <Text className="text-gray-900 font-bold mb-4">Ajouter un domaine personnalisé</Text>
        <View className="flex-row gap-3">
          <TextInput
            value={newDomain}
            onChangeText={setNewDomain}
            placeholder="mon-site.com"
            className="flex-1 bg-white border border-gray-200 rounded-2xl px-5 py-4 font-bold"
            autoCapitalize="none"
          />
          <TouchableOpacity className="bg-indigo-600 px-6 py-4 rounded-2xl justify-center">
            <Text className="text-white font-black">LIER</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-white rounded-[32px] border border-gray-100 p-8 items-center justify-center">
         <Globe size={48} color="#e2e8f0" />
         <Text className="text-gray-400 font-bold mt-4">Aucun domaine lié pour le moment</Text>
      </View>
    </ScrollView>
  );
}
