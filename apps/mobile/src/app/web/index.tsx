import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Alert, Linking } from 'react-native';
import { useState } from 'react';
import { webService } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { Globe, Code, ExternalLink, Copy, CheckCircle2 } from 'lucide-react-native';

export default function WebScreen() {
  const [description, setDescription] = useState('');
  const [pages, setPages] = useState('Accueil, À propos, Services, Contact');
  const [template, setTemplate] = useState('modern');
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<{ websiteId: string; previewUrl: string } | null>(null);
  const { credits, refreshUser } = useAuth();

  const templates = [
    { value: 'modern', label: 'Moderne', icon: '✨' },
    { value: 'minimal', label: 'Minimal', icon: '🎯' },
    { value: 'corporate', label: 'Pro', icon: '💼' },
    { value: 'creative', label: 'Créatif', icon: '🎨' }
  ];

  const handleGenerate = async () => {
    if (!description.trim()) {
      Alert.alert('Description manquante', 'Veuillez décrire le site web que vous souhaitez créer.');
      return;
    }
    
    if (credits < 10) {
      Alert.alert('Crédits insuffisants', 'Cette opération nécessite au moins 10 crédits.');
      return;
    }
    
    setGenerating(true);
    setResult(null);
    
    try {
      const { jobId } = await webService.generate({
        description,
        pages: pages.split(',').map(p => p.trim()),
        template
      });
      
      const interval = setInterval(async () => {
        try {
          const status = await webService.getStatus(jobId);
          if (status.status === 'completed' && status.url) {
            setResult({ websiteId: jobId, previewUrl: status.url });
            clearInterval(interval);
            setGenerating(false);
            refreshUser();
          } else if (status.status === 'failed') {
            clearInterval(interval);
            setGenerating(false);
            Alert.alert('Erreur de rendu', 'Le moteur de génération web a rencontré un problème.');
          }
        } catch (err) {
          // Retry
        }
      }, 4000);
      
    } catch (error) {
      setGenerating(false);
      Alert.alert('Erreur réseau', 'Impossible de se connecter au service Web-Gen.');
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
      <View className="p-6">
        <View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
          <View className="flex-row items-center gap-2 mb-6">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Globe size={18} color="white" />
            </div>
            <Text className="text-gray-900 font-bold text-lg">Web Generator</Text>
          </View>

          <Text className="text-gray-700 font-bold text-sm mb-2">Description du projet</Text>
          <TextInput
            placeholder="Un site pour un restaurant gastronomique italien avec réservation en ligne..."
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 min-h-[120px] font-medium mb-6"
            textAlignVertical="top"
          />
          
          <Text className="text-gray-700 font-bold text-sm mb-2">Architecture (pages)</Text>
          <TextInput
            placeholder="Accueil, Menu, Histoire, Contact"
            value={pages}
            onChangeText={setPages}
            className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 font-medium mb-6"
          />
          
          <Text className="text-gray-700 font-bold text-sm mb-3">Style visuel</Text>
          <View className="flex-row flex-wrap gap-2 mb-4">
            {templates.map((t) => (
              <TouchableOpacity
                key={t.value}
                onPress={() => setTemplate(t.value)}
                className={`px-4 py-3 rounded-2xl flex-row items-center gap-2 border ${template === t.value ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-100'}`}
              >
                <Text className="text-lg">{t.icon}</Text>
                <Text className={`font-bold text-sm ${template === t.value ? 'text-white' : 'text-gray-600'}`}>
                  {t.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <TouchableOpacity
          onPress={handleGenerate}
          disabled={generating}
          className="bg-indigo-600 rounded-3xl py-5 items-center shadow-xl shadow-indigo-100 active:scale-95 transition-all mb-10"
        >
          {generating ? (
            <View className="flex-row items-center gap-3">
              <ActivityIndicator color="white" />
              <Text className="text-white font-bold text-lg">Codage en cours...</Text>
            </View>
          ) : (
            <View className="flex-row items-center gap-3">
              <Code color="white" size={24} />
              <Text className="text-white font-bold text-lg">Générer le Site React</Text>
            </View>
          )}
        </TouchableOpacity>
        
        {result && (
          <View className="bg-white rounded-3xl p-8 border-2 border-emerald-100 shadow-sm relative overflow-hidden">
            <View className="absolute -right-4 -top-4 bg-emerald-50 w-24 h-24 rounded-full flex items-center justify-center pt-4 pl-0">
               <CheckCircle2 size={40} color="#10b981" />
            </View>

            <Text className="text-gray-900 font-extrabold text-xl mb-2">Prêt à l'emploi !</Text>
            <Text className="text-gray-500 text-sm mb-6">Votre site web a été généré et optimisé pour le mobile.</Text>
            
            <View className="bg-gray-50 rounded-2xl p-4 flex-row justify-between items-center mb-8 border border-gray-100">
              <Text className="text-indigo-600 font-bold text-xs flex-1 mr-4" numberOfLines={1}>{result.previewUrl}</Text>
              <TouchableOpacity onPress={() => Alert.alert('Copié', 'URL copiée dans le presse-papier')}>
                <Copy size={20} color="#4f46e5" />
              </TouchableOpacity>
            </View>
            
            <View className="flex-row gap-4">
              <TouchableOpacity
                onPress={() => Linking.openURL(result.previewUrl)}
                className="flex-1 bg-indigo-600 py-4 rounded-2xl flex-row items-center justify-center gap-2 shadow-lg shadow-indigo-100"
              >
                <ExternalLink size={20} color="white" />
                <Text className="text-white font-bold">Voir le site</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                className="flex-1 bg-gray-900 py-4 rounded-2xl flex-row items-center justify-center gap-2"
              >
                <Globe size={20} color="white" />
                <Text className="text-white font-bold">Déployer</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
