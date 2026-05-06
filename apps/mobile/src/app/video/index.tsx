import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useState } from 'react';
import { videoService } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { Video, Mic, Subtitles, Layers } from 'lucide-react-native';

export default function VideoGenerationScreen() {
  const [prompt, setPrompt] = useState('');
  const [duration, setDuration] = useState(5);
  const [generating, setGenerating] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);
  const { credits, refreshUser } = useAuth();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      Alert.alert('Champs requis', 'Veuillez décrire la vidéo que vous souhaitez générer.');
      return;
    }
    
    if (credits < 10) {
      Alert.alert('Crédits insuffisants', 'Cette action nécessite 10 crédits. Veuillez recharger votre compte.');
      return;
    }
    
    setGenerating(true);
    
    try {
      const { jobId: id } = await videoService.generate({
        prompt,
        duration,
        ratio: '16:9'
      });
      setJobId(id);
      
      const interval = setInterval(async () => {
        try {
          const status = await videoService.getStatus(id);
          if (status.status === 'completed') {
            clearInterval(interval);
            setGenerating(false);
            Alert.alert('Création terminée !', 'Votre vidéo est prête à être visionnée.');
            refreshUser();
          } else if (status.status === 'failed') {
            clearInterval(interval);
            setGenerating(false);
            Alert.alert('Échec de génération', 'Une erreur est survenue lors du rendu de la vidéo.');
          }
        } catch (err) {
          // Continue polling or handle error
        }
      }, 4000);
      
    } catch (error) {
      setGenerating(false);
      Alert.alert('Erreur', "Impossible de lancer la génération. Vérifiez votre connexion.");
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
      <View className="p-6">
        <View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
          <View className="flex-row items-center gap-2 mb-4">
            <Layers size={18} color="#4f46e5" />
            <Text className="text-gray-900 font-bold text-base">Prompt Créatif</Text>
          </View>
          <TextInput
            placeholder="Décrivez chaque détail : mouvement, éclairage, style..."
            value={prompt}
            onChangeText={setPrompt}
            multiline
            numberOfLines={6}
            className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 min-h-[140px] font-medium"
            textAlignVertical="top"
          />
        </View>
        
        <View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
          <Text className="text-gray-900 font-bold text-base mb-4">Durée de la séquence</Text>
          <View className="flex-row gap-3">
            {[2, 5, 10, 15].map((d) => (
              <TouchableOpacity
                key={d}
                onPress={() => setDuration(d)}
                className={`flex-1 py-4 rounded-2xl items-center border ${duration === d ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-100'}`}
              >
                <Text className={`font-bold ${duration === d ? 'text-white' : 'text-gray-600'}`}>{d}s</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View className="flex-row gap-4 mb-10">
          <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-3 bg-white border border-gray-100 py-4 rounded-3xl shadow-sm">
            <Mic size={20} color="#4f46e5" />
            <Text className="text-gray-900 font-bold">Voix IA</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-3 bg-white border border-gray-100 py-4 rounded-3xl shadow-sm">
            <Subtitles size={20} color="#4f46e5" />
            <Text className="text-gray-900 font-bold">Sous-titres</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          onPress={handleGenerate}
          disabled={generating}
          className="bg-indigo-600 rounded-3xl py-5 items-center shadow-xl shadow-indigo-100 active:scale-95 transition-all"
        >
          {generating ? (
            <ActivityIndicator color="white" />
          ) : (
            <View className="flex-row items-center gap-3">
              <Video color="white" size={24} />
              <Text className="text-white font-bold text-lg">Lancer le rendu vidéo</Text>
            </View>
          )}
        </TouchableOpacity>
        
        {jobId && (
          <View className="mt-6 bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
            <Text className="text-indigo-600 text-center font-bold">Rendu en cours : {jobId.slice(-8).toUpperCase()}</Text>
            <Text className="text-indigo-400 text-center text-xs mt-1">Ne fermez pas l'application pour un résultat optimal.</Text>
          </View>
        )}
        
        <View className="mt-8 items-center bg-gray-100 py-3 rounded-full self-center px-6">
          <Text className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">
            Estimation : {duration <= 5 ? '10' : duration <= 10 ? '20' : '50'} crédits ZAKSOFT
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
