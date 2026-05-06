import { View, Text, Image, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Share } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useState, useEffect } from 'react';
import { marketplaceService } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { Star, Download, Heart, Share2, Award, Users, Trash2, ArrowLeft, ShieldCheck } from 'lucide-react-native';

export default function TemplateDetailScreen() {
  const { id } = useLocalSearchParams();
  const [template, setTemplate] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [importing, setImporting] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { credits, refreshUser } = useAuth();

  useEffect(() => {
    if (id) fetchTemplate();
  }, [id]);

  const fetchTemplate = async () => {
    try {
      const data = await marketplaceService.getTemplate(id as string);
      setTemplate(data);
      setIsFavorite(data.isFavorite || false);
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de charger les détails.');
      router.back();
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async () => {
    if (credits < template.price) {
      Alert.alert(
        'Crédits insuffisants',
        'Voulez-vous recharger votre compte ?',
        [
          { text: 'Plus tard', style: 'cancel' },
          { text: 'Recharger', onPress: () => router.push('/profile' as any) }
        ]
      );
      return;
    }

    Alert.alert(
      'Confirmer l\'achat',
      `Voulez-vous dépenser ${template.price} crédits pour ce template ?`,
      [
        { text: 'Annuler', style: 'cancel' },
        { 
          text: 'Confirmer', 
          onPress: async () => {
            setImporting(true);
            try {
              await marketplaceService.importTemplate(template.id);
              Alert.alert('Succès !', 'Template ajouté à votre bibliothèque.');
              refreshUser();
              router.push('/marketplace/downloads' as any);
            } catch (error) {
              Alert.alert('Échec', 'L\'achat n\'a pas pu être finalisé.');
            } finally {
              setImporting(false);
            }
          }
        }
      ]
    );
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Boostez vos créations IA avec "${template.name}" sur ZAKSOFT Créations !`,
        url: `https://zaksoft.com/t/${template.id}`
      });
    } catch (err) {}
  };

  if (loading) return <View className="flex-1 justify-center items-center"><ActivityIndicator size="large" color="#4f46e5" /></View>;

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="relative h-96">
          {template.thumbnail ? (
            <Image source={{ uri: template.thumbnail }} className="w-full h-full" resizeMode="cover" />
          ) : (
            <View className="w-full h-full bg-gray-900 items-center justify-center">
               <Text className="text-8xl opacity-30">
                 {template.type === 'image_prompt' ? '🎨' : template.type === 'video_prompt' ? '🎬' : '🌐'}
               </Text>
            </View>
          )}
          
          <TouchableOpacity 
            onPress={() => router.back()}
            className="absolute top-12 left-6 w-12 h-12 bg-black/20 backdrop-blur-xl rounded-2xl items-center justify-center border border-white/20"
          >
            <ArrowLeft size={24} color="white" />
          </TouchableOpacity>

          <View className="absolute top-12 right-6 flex-row gap-3">
            <TouchableOpacity 
              onPress={() => setIsFavorite(!isFavorite)}
              className="w-12 h-12 bg-black/20 backdrop-blur-xl rounded-2xl items-center justify-center border border-white/20"
            >
              <Heart size={24} color={isFavorite ? "#ef4444" : "white"} fill={isFavorite ? "#ef4444" : "none"} />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleShare}
              className="w-12 h-12 bg-black/20 backdrop-blur-xl rounded-2xl items-center justify-center border border-white/20"
            >
              <Share2 size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </View>

        <View className="px-8 -mt-12 relative z-10">
          <View className="bg-indigo-600 self-start px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-indigo-200">
            <Text className="text-white font-black text-[10px] uppercase tracking-widest">
              {template.type.replace('_', ' ')}
            </Text>
          </View>
          
          <Text className="text-3xl font-black text-gray-900 tracking-tight leading-tight">{template.name}</Text>
          
          <View className="flex-row items-center gap-3 mt-4 mb-8">
             <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
               <Text className="text-gray-400 font-bold">{template.author.email.charAt(0).toUpperCase()}</Text>
             </View>
             <View>
               <Text className="text-gray-900 font-bold text-sm">Posté par {template.author.email.split('@')[0]}</Text>
               <Text className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter">Créateur Vérifié <ShieldCheck size={10} color="#10b981" /></Text>
             </View>
          </View>

          <View className="flex-row justify-between bg-gray-50 rounded-3xl p-6 mb-8">
             <View className="items-center flex-1 border-r border-gray-200">
                <Text className="text-gray-900 font-black text-lg">{template.avgRating > 0 ? template.avgRating.toFixed(1) : '—'}</Text>
                <Text className="text-gray-400 text-[10px] font-bold uppercase mt-1">Note IA</Text>
             </View>
             <View className="items-center flex-1 border-r border-gray-200">
                <Text className="text-gray-900 font-black text-lg">{template._count.downloads}</Text>
                <Text className="text-gray-400 text-[10px] font-bold uppercase mt-1">Ventes</Text>
             </View>
             <View className="items-center flex-1">
                <Text className="text-indigo-600 font-black text-lg">{template.price === 0 ? 'FREE' : template.price}</Text>
                <Text className="text-gray-400 text-[10px] font-bold uppercase mt-1">Crédits</Text>
             </View>
          </View>

          <Text className="text-gray-900 font-extrabold text-xl mb-4">À propos de ce template</Text>
          <Text className="text-gray-500 font-medium leading-6 mb-8">
            {template.description || "Ce template exceptionnel vous permet d'obtenir des résultats professionnels instantanément en exploitant les meilleurs modèles d'IA générative."}
          </Text>

          <View className="bg-gray-900 rounded-[32px] p-6 mb-12">
             <View className="flex-row justify-between items-center mb-4">
                <Text className="text-white font-bold">Aperçu Technique</Text>
                <Download size={18} color="#4f46e5" />
             </View>
             <View className="bg-white/5 rounded-2xl p-4">
                <Text className="text-indigo-200 font-mono text-xs leading-5">
                   {JSON.stringify(template.config, null, 2).slice(0, 250)}...
                </Text>
             </View>
          </View>
        </View>
      </ScrollView>

      <View className="px-8 pb-10 pt-4 bg-white border-t border-gray-100">
        <TouchableOpacity
          onPress={handlePurchase}
          disabled={importing}
          className="bg-indigo-600 rounded-3xl py-5 items-center shadow-xl shadow-indigo-100 flex-row justify-center gap-4"
        >
          {importing ? <ActivityIndicator color="white" /> : <Download size={24} color="white" />}
          <Text className="text-white font-black text-lg">
            {importing ? 'Finalisation...' : template.price === 0 ? 'Importation Gratuite' : `Acheter (${template.price} CR)`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
