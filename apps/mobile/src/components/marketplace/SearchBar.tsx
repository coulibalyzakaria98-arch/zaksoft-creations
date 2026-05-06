import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Search, X } from 'lucide-react-native';

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Rechercher une pépite..." }: SearchBarProps) {
  return (
    <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3 border border-gray-100">
      <Search size={20} color="#94a3b8" />
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="#94a3b8"
        className="flex-1 ml-3 text-gray-800 font-medium"
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={() => onChange('')}>
          <X size={18} color="#94a3b8" />
        </TouchableOpacity>
      )}
    </View>
  );
}
