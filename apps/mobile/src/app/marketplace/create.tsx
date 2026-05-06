import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Switch, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { marketplaceService } from '../../services/api';
import { router } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import { ArrowLeft, Send, Code, Info, Coins, Eye, EyeOff } from 'lucide-react-native';

export default function CreateTemplateScreen() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'image_prompt',
    config: '',
    price: '0',
    isPublic: true
  });

  const handleSubmit = async () => {
    if (!formData.name || !formData.config) {
      Alert.alert('Champs obligatoires', 'Veuillez au moins renseigner un nom et une configuration.');
      return;
    }
    
    let config;
    try {
      config = JSON.parse(formData.config);
    } catch {
      Alert.alert('Erreur JSON', 'Le champ configuration doit être un JSON valide.');
      return;
    }
    
    setLoading(true);
    
    try {
      await marketplaceService.createTemplate({
        ...formData,
        config,
        price: parseInt(formData.price) || 0,
        authorId: user?.id
      });
      Alert.alert('Publication réussie !', 'Votre template est maintenant disponible sur le Marketplace.');
      router.back();
    } catch (error) {
      Alert.alert('Échec de publication', 'Une erreur réseau est survenue.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
      <View className="p-6">
        <View className="flex-row items-center gap-4 mb-8">
           <TouchableOpacity onPress={() => router.back()} className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
             <ArrowLeft size={20} color="#1e293b" />
           </TouchableOpacity>
           <Text className="text-2xl font-extrabold text-gray-900 tracking-tight">Vendre un Template</Text>
        </View>

        <View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8 space-y-6">
          <View>
            <Text className="text-gray-900 font-bold text-sm mb-2">Titre du Template</Text>
            <TextInput
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              placeholder="ex: Portrait HDR 8K Cinematic"
              className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 font-medium"
            />
          </View>
          
          <View className="mt-4">
            <Text className="text-gray-900 font-bold text-sm mb-2">Description</Text>
            <TextInput
              value={formData.description}
              onChangeText={(text) => setFormData({ ...formData, description: text })}
              placeholder="Décrivez les résultats obtenus avec ce template..."
              multiline
              numberOfLines={3}
              className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 font-medium min-h-[100px]"
              textAlignVertical="top"
            />
          </View>
          
          <View className="mt-4">
            <Text className="text-gray-900 font-bold text-sm mb-3">Catégorie</Text>
            <View className="flex-row gap-2">
              {[
                { id: 'image_prompt', label: 'Image' },
                { id: 'video_prompt', label: 'Vidéo' },
                { id: 'website_template', label: 'Web' }
              ].map((type) => (
                <TouchableOpacity
                  key={type.id}
                  onPress={() => setFormData({ ...formData, type: type.id })}
                  className={`flex-1 py-3 rounded-2xl items-center border transition-all ${formData.type === type.id ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-100'}`}
                >
                  <Text className={`font-bold text-xs ${formData.type === type.id ? 'text-white' : 'text-gray-600'}`}>
                    {type.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <View className="mt-4">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-gray-900 font-bold text-sm">Configuration JSON</Text>
              <div className="bg-indigo-50 px-2 py-1 rounded">
                <Code size={14} color="#4f46e5" />
              </div>
            </View>
            <TextInput
              value={formData.config}
              onChangeText={(text) => setFormData({ ...formData, config: text })}
              placeholder='{"prompt": "...", "steps": 50}'
              multiline
              numberOfLines={6}
              className="bg-gray-900 rounded-2xl p-4 text-indigo-200 font-mono text-xs min-h-[140px]"
              textAlignVertical="top"
            />
          </View>
        </View>

        <View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8">
           <View className="flex-row justify-between items-center mb-6">
              <View className="flex-row items-center gap-2">
                <Coins size={18} color="#4f46e5" />
                <Text className="text-gray-900 font-bold">Tarification (crédits)</Text>
              </View>
              <TextInput
                value={formData.price}
                onChangeText={(text) => setFormData({ ...formData, price: text })}
                placeholder="0"
                keyboardType="numeric"
                className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-indigo-600 font-extrabold text-right min-w-[80px]"
              />
           </View>
           
           <View className="flex-row justify-between items-center mb-2">
              <View className="flex-row items-center gap-2">
                {formData.isPublic ? <Eye size={18} color="#10b981" /> : <EyeOff size={18} color="#94a3b8" />}
                <Text className="text-gray-900 font-bold">Rendre public</Text>
              </View>
              <Switch
                value={formData.isPublic}
                onValueChange={(value) => setFormData({ ...formData, isPublic: value })}
                trackColor={{ false: '#e5e7eb', true: '#4f46e5' }}
              />
           </View>
           <Text className="text-[10px] text-gray-400 font-medium ml-7">Les templates publics sont visibles par toute la communauté.</Text>
        </View>
        
        <TouchableOpacity
          onPress={handleSubmit}
          disabled={loading}
          className="bg-indigo-600 rounded-3xl py-5 items-center shadow-xl shadow-indigo-100 active:scale-95 transition-all mb-10 flex-row justify-center gap-3"
        >
          {loading ? <ActivityIndicator color="white" /> : <Send size={20} color="white" />}
          <Text className="text-white font-bold text-lg">
            {loading ? 'Publication...' : 'Publier le Template'}
          </Text>
        </TouchableOpacity>
        
        <View className="bg-indigo-50 rounded-2xl p-4 flex-row gap-3 mb-10">
           <Info size={20} color="#4f46e5" />
           <Text className="text-indigo-700 text-xs flex-1 font-medium leading-4">
             En publiant, vous acceptez que ZAKSOFT prélève 30% de commission sur vos ventes. Vous recevrez 5 crédits bonus pour chaque nouvelle publication.
           </Text>
        </View>
      </View>
    </ScrollView>
  );
}
