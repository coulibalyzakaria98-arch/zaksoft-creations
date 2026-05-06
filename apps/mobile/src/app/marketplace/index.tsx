import { View, Text, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { marketplaceService } from '../../services/api';
import { TemplateCard } from '../../components/marketplace/TemplateCard';
import { SearchBar } from '../../components/marketplace/SearchBar';
import { CategoryPills } from '../../components/marketplace/CategoryPills';
import { useFocusEffect, router } from 'expo-router';
import { Plus, ShoppingBag } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MarketplaceScreen() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const fetchTemplates = useCallback(async () => {
    try {
      const data = await marketplaceService.getTemplates({
        search,
        type: selectedCategory !== 'all' ? selectedCategory : '',
        sort: 'popular',
        limit: 30
      });
      setTemplates(data.data || []);
    } catch (error) {
      console.error('Failed to fetch templates:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [search, selectedCategory]);

  useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  useFocusEffect(
    useCallback(() => {
      fetchTemplates();
    }, [fetchTemplates])
  );

  const onRefresh = () => {
    setRefreshing(true);
    fetchTemplates();
  };

  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white px-8 pt-6 pb-6 shadow-sm z-10 rounded-b-[40px]">
        <View className="flex-row justify-between items-center mb-8">
          <View>
            <Text className="text-3xl font-black text-gray-900 tracking-tight">Marketplace</Text>
            <Text className="text-gray-400 text-[10px] font-extrabold uppercase mt-1 tracking-[3px]">Le futur du design</Text>
          </View>
          <View className="flex-row gap-3">
             <TouchableOpacity
               onPress={() => router.push('/marketplace/downloads' as any)}
               className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center"
             >
               <ShoppingBag size={22} color="#1e293b" />
             </TouchableOpacity>
             <TouchableOpacity
               onPress={() => router.push('/marketplace/create')}
               className="bg-indigo-600 w-12 h-12 rounded-2xl items-center justify-center shadow-lg shadow-indigo-100"
             >
               <Plus size={26} color="white" />
             </TouchableOpacity>
          </View>
        </View>
        
        <View className="mb-6">
           <SearchBar value={search} onChange={setSearch} />
        </View>
        
        <CategoryPills selected={selectedCategory} onSelect={setSelectedCategory} />
      </View>

      <FlatList
        data={templates}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <TemplateCard template={item} />}
        contentContainerStyle={{ padding: 24, paddingTop: 32 }}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#4f46e5" />}
        ListEmptyComponent={
          !loading && (
            <View className="py-24 items-center">
              <Text className="text-gray-400 font-bold">Aucun template trouvé</Text>
            </View>
          )
        }
      />

      {loading && !refreshing && (
        <View className="absolute inset-0 justify-center items-center bg-gray-50/60 z-20">
          <ActivityIndicator size="large" color="#4f46e5" />
        </View>
      )}
    </View>
  );
}
