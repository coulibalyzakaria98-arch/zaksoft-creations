import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { router } from 'expo-router';
import { Sparkles, Mail, Lock, ArrowRight } from 'lucide-react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }
    
    setLoading(true);
    try {
      await login(email, password);
      router.replace('/');
    } catch (error) {
      Alert.alert('Erreur', 'Email ou mot de passe incorrect');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <View className="flex-1 justify-center px-8">
        <View className="items-center mb-12">
          <View className="w-24 h-24 bg-indigo-50 rounded-3xl items-center justify-center mb-6 transform -rotate-6">
            <Sparkles size={48} color="#4f46e5" />
          </View>
          <Text className="text-3xl font-extrabold text-gray-900 tracking-tight">Bon retour !</Text>
          <Text className="text-gray-500 mt-2 text-center">Connectez-vous pour continuer vos créations IA.</Text>
        </View>
        
        <View className="space-y-4">
          <View className="relative">
            <View className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <Mail size={20} color="#94a3b8" />
            </View>
            <TextInput
              placeholder="Email professionnel"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              className="bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-gray-900 font-medium outline-none"
            />
          </View>
          
          <View className="relative mt-4">
            <View className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <Lock size={20} color="#94a3b8" />
            </View>
            <TextInput
              placeholder="Mot de passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              className="bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-gray-900 font-medium outline-none"
            />
          </View>
        </View>
        
        <TouchableOpacity className="mt-4 self-end">
          <Text className="text-indigo-600 font-bold text-sm">Mot de passe oublié ?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          className="bg-indigo-600 rounded-2xl py-5 items-center mt-10 shadow-lg shadow-indigo-200 active:scale-95 transition-all"
        >
          <View className="flex-row items-center gap-3">
            <Text className="text-white font-bold text-lg">
              {loading ? 'Connexion en cours...' : 'Se connecter'}
            </Text>
            {!loading && <ArrowRight size={20} color="white" />}
          </View>
        </TouchableOpacity>
        
        <View className="flex-row justify-center mt-10">
          <Text className="text-gray-500 font-medium">Nouveau ici ? </Text>
          <TouchableOpacity onPress={() => router.push('/auth/register')}>
            <Text className="text-indigo-600 font-bold">Créer un compte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
