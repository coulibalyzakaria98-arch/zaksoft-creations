import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator, Alert, FlatList } from 'react-native';
import { useState } from 'react';
import { designService } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { Image as ImageIcon, Sparkles, Download, Trash2 } from 'lucide-react-native';

export default function DesignScreen() {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [size, setSize] = useState('1024x1024');
  const [generating, setGenerating] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [currentJobId, setCurrentJobId] = useState<string | null>(null);
  const { credits, refreshUser } = useAuth();

  const sizes = [
    { label: '512×512', value: '512x512', cost: 1 },
    { label: '1024×1024', value: '1024x1024', cost: 2 },
    { label: '4K', value: '4k', cost: 5 }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      Alert.alert('Champs vide', 'Veuillez décrire l\'image que vous souhaitez créer.');
      return;
    }
    
    const cost = sizes.find(s => s.value === size)?.cost || 2;
    if (credits < cost) {
      Alert.alert('Crédits insuffisants', 'Vous avez besoin de plus de crédits pour cette résolution.');
      return;
    }
    
    setGenerating(true);
    
    try {
      const { jobId } = await designService.generate(prompt, size, negativePrompt);
      setCurrentJobId(jobId);
      
      const interval = setInterval(async () => {
        try {
          const status = await designService.getStatus(jobId);
          if (status.status === 'completed' && status.url) {
            setImages(prev => [status.url, ...prev]);
            clearInterval(interval);
            setGenerating(false);
            setCurrentJobId(null);
            refreshUser();
          } else if (status.status === 'failed') {
            clearInterval(interval);
            setGenerating(false);
            setCurrentJobId(null);
            Alert.alert('Échec', 'La génération d\'image a échoué.');
          }
        } catch (err) {
          // Keep polling
        }
      }, 3000);
      
    } catch (error) {
      setGenerating(false);
      Alert.alert('Erreur', 'Impossible de lancer la génération.');
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
      <View className="p-6">
        <View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
          <Text className="text-gray-900 font-bold text-base mb-4">Studio de Design</Text>
          
          <TextInput
            placeholder="Un chat astronaute explorant une galaxie de bonbons..."
            value={prompt}
            onChangeText={setPrompt}
            multiline
            numberOfLines={3}
            className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 min-h-[100px] font-medium mb-4"
            textAlignVertical="top"
          />
          
          <Text className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider ml-1">Paramètres avancés</Text>
          <TextInput
            placeholder="Exclure : flou, texte, déformé..."
            value={negativePrompt}
            onChangeText={setNegativePrompt}
            className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 font-medium mb-6"
          />
          
          <Text className="text-gray-900 font-bold text-sm mb-3 ml-1">Résolution de sortie</Text>
          <View className="flex-row gap-2">
            {sizes.map((s) => (
              <TouchableOpacity
                key={s.value}
                onPress={() => setSize(s.value)}
                className={`flex-1 py-3 rounded-xl items-center border ${size === s.value ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-100'}`}
              >
                <Text className={`font-bold text-xs ${size === s.value ? 'text-white' : 'text-gray-600'}`}>{s.label}</Text>
                <Text className={`text-[10px] mt-0.5 ${size === s.value ? 'text-indigo-200' : 'text-gray-400'}`}>
                  {s.cost} crédits
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <TouchableOpacity
          onPress={handleGenerate}
          disabled={generating}
          className="bg-indigo-600 rounded-3xl py-5 items-center shadow-xl shadow-indigo-100 active:scale-95 transition-all mb-8"
        >
          {generating ? (
            <View className="flex-row items-center gap-3">
              <ActivityIndicator color="white" />
              <Text className="text-white font-bold text-lg">Création artistique...</Text>
            </View>
          ) : (
            <View className="flex-row items-center gap-3">
              <Sparkles color="white" size={24} />
              <Text className="text-white font-bold text-lg">Générer l'œuvre</Text>
            </View>
          )}
        </TouchableOpacity>
        
        {currentJobId && (
          <View className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-8">
            <Text className="text-amber-700 text-center font-bold text-sm">IA au travail : {currentJobId.slice(-8).toUpperCase()}</Text>
          </View>
        )}
        
        {images.length > 0 && (
          <View className="mb-10">
            <Text className="text-gray-900 font-bold text-xl mb-6">Galerie de Créations</Text>
            {images.map((img, index) => (
              <View key={index} className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 mb-6">
                <Image source={{ uri: img }} className="w-full h-80" resizeMode="cover" />
                <View className="p-4 flex-row justify-between items-center bg-white">
                  <Text className="text-gray-400 font-bold text-xs uppercase">Généré aujourd'hui</Text>
                  <View className="flex-row gap-3">
                    <TouchableOpacity 
                      onPress={() => removeImage(index)}
                      className="bg-red-50 p-2.5 rounded-full"
                    >
                      <Trash2 size={18} color="#ef4444" />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-indigo-50 p-2.5 rounded-full">
                      <Download size={18} color="#4f46e5" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
