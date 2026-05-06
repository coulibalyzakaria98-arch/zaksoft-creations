import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Star, Download } from 'lucide-react-native';

interface TemplateCardProps {
  template: {
    id: string;
    name: string;
    description: string;
    type: string;
    thumbnail: string | null;
    price: number;
    avgRating: number | null;
    author: { email: string };
    _count: { downloads: number };
  };
}

export function TemplateCard({ template }: TemplateCardProps) {
  const getTypeIcon = () => {
    switch (template.type) {
      case 'image_prompt': return '🎨';
      case 'video_prompt': return '🎬';
      case 'website_template': return '🌐';
      default: return '📦';
    }
  };

  return (
    <TouchableOpacity
      onPress={() => router.push(`/marketplace/${template.id}` as any)}
      className="bg-white rounded-3xl shadow-sm mb-6 overflow-hidden border border-gray-100 active:scale-[0.98] transition-all"
    >
      <View className="aspect-[16/10] bg-gray-50 items-center justify-center relative">
        {template.thumbnail ? (
          <Image source={{ uri: template.thumbnail }} className="w-full h-full" resizeMode="cover" />
        ) : (
          <Text className="text-5xl opacity-20">{getTypeIcon()}</Text>
        )}
        <View className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          <Text className="text-[10px] font-bold text-gray-800 uppercase tracking-tighter">Par {template.author.email.split('@')[0]}</Text>
        </View>
      </View>

      <View className="p-5">
        <View className="flex-row justify-between items-start gap-2">
          <View className="flex-1">
            <Text className="font-extrabold text-gray-900 text-lg leading-tight" numberOfLines={1}>{template.name}</Text>
            <Text className="text-gray-400 text-xs mt-1 font-medium" numberOfLines={1}>
              {template.description || "Aucune description."}
            </Text>
          </View>
          <View className="bg-indigo-50 px-3 py-1.5 rounded-xl">
            <Text className="text-indigo-600 font-extrabold text-sm">
              {template.price === 0 ? 'OFFERT' : `${template.price} CR`}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-6">
          <View className="flex-row items-center gap-4">
            <View className="flex-row items-center gap-1.5">
              <Star size={16} color="#fbbf24" fill="#fbbf24" />
              <Text className="text-gray-900 font-bold text-xs">{template.avgRating && template.avgRating > 0 ? template.avgRating.toFixed(1) : 'NEW'}</Text>
            </View>
            <View className="flex-row items-center gap-1.5">
              <Download size={16} color="#94a3b8" />
              <Text className="text-gray-500 font-bold text-xs">{template._count.downloads}</Text>
            </View>
          </View>
          
          <View className="bg-gray-900 px-6 py-2.5 rounded-2xl">
            <Text className="text-white text-xs font-extrabold uppercase tracking-widest">Détails</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
