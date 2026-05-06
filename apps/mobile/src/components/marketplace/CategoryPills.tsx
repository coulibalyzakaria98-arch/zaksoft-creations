import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const CATEGORIES = [
  { value: 'all', label: 'Tous', icon: '💎' },
  { value: 'image_prompt', label: 'Images', icon: '🎨' },
  { value: 'video_prompt', label: 'Vidéos', icon: '🎬' },
  { value: 'website_template', label: 'Sites Web', icon: '🌐' }
];

interface CategoryPillsProps {
  selected: string;
  onSelect: (value: string) => void;
}

export function CategoryPills({ selected, onSelect }: CategoryPillsProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
      <View className="flex-row gap-2">
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.value}
            onPress={() => onSelect(cat.value)}
            className={`px-6 py-2.5 rounded-full border transition-all ${selected === cat.value ? 'bg-gray-900 border-gray-900' : 'bg-white border-gray-100'}`}
          >
            <Text className={`font-bold text-xs ${selected === cat.value ? 'text-white' : 'text-gray-500'}`}>
              {cat.icon} {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
