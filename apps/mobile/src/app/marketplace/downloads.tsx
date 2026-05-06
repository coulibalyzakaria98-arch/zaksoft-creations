import { View, Text, FlatList, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { marketplaceService } from '../../services/api';
import { Download, Play, Trash2, ChevronRight, LayoutGrid } from 'lucide-react-native';
import { router, useFocusEffect } from 'expo-router';

export default function DownloadsScreen() {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDownloads = useCallback(async () => {
    setLoading(true);
    try {
      const data = await marketplaceService.getMyDownloads();
      setDownloads(data || []);
    } catch (error) {
      console.error('Failed to load downloads', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchDownloads();
    }, [fetchDownloads])
  );

  const handleUseTemplate = (template: any) => {
    switch (template.type) {
      case 'image_prompt':
        router.push({ pathname: '/design' as any, params: { preset: JSON.stringify(template.config) } });
        break;
      case 'video_prompt':
        router.push({ pathname: '/video' as any, params: { preset: JSON.stringify(template.config) } });
        break;
      case 'website_template':
        router.push({ pathname: '/web' as any, params: { preset: JSON.stringify(template.config) } });
        break;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'image_prompt': return 'Studio Image';
      case 'video_prompt': return 'Studio Vidéo';
      case 'website_template': return 'Générateur Web';
      default: return 'Outil IA';
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white px-8 pt-6 pb-8 rounded-b-[40px] shadow-sm z-10">
        <Text className="text-3xl font-black text-gray-900 tracking-tight">Ma Bibliothèque</Text>
        <Text className="text-gray-400 font-bold text-xs uppercase mt-2 tracking-[2px]">Templates & Ressources</Text>
      </View>

      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#4f46e5" />
        </View>
      ) : (
        <FlatList
          data={downloads}
          keyExtractor={(item: any) => item.id}
          contentContainerStyle={{ padding: 24, paddingTop: 32 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }: { item: any }) => (
            <TouchableOpacity
              onPress={() => handleUseTemplate(item.template)}
              className="bg-white rounded-[32px] p-6 mb-5 shadow-sm border border-gray-100 flex-row items-center gap-5 active:scale-[0.97] transition-all"
            >
              <View className="w-16 h-16 bg-indigo-50 rounded-2xl items-center justify-center border border-indigo-100">
                <Text className="text-3xl">
                   {item.template.type === 'image_prompt' ? '🎨' : item.template.type === 'video_prompt' ? '🎬' : '🌐'}
                </Text>
              </View>
              
              <View className="flex-1">
                <Text className="font-extrabold text-gray-900 text-lg leading-tight" numberOfLines={1}>{item.template.name}</Text>
                <Text className="text-indigo-600 font-black text-[10px] uppercase mt-1 tracking-wider">{getTypeLabel(item.template.type)}</Text>
              </View>
              
              <View className="bg-gray-900 w-10 h-10 rounded-full items-center justify-center shadow-lg shadow-gray-400">
                 <Play size={16} color="white" fill="white" />
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View className="py-24 items-center">
              <View className="bg-gray-100 p-10 rounded-full mb-8">
                 <LayoutGrid size={50} color="#cbd5e1" />
              </View>
              <Text className="text-gray-900 font-black text-xl">Bibliothèque vide</Text>
              <Text className="text-gray-400 text-center mt-3 text-sm font-medium leading-5 max-w-[240px]">
                Vos acquisitions apparaîtront ici. Commencez par explorer le Marketplace.
              </Text>
              <TouchableOpacity 
                onPress={() => router.push('/marketplace')}
                className="mt-10 bg-indigo-600 px-8 py-4 rounded-2xl"
              >
                 <Text className="text-white font-extrabold text-xs uppercase tracking-widest">Voir le Marketplace</Text>
              </TouchableOpacity>
            </View>
          }
        />
      )}
    </View>
  );
}
