import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from '../hooks/useAuth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: '#ffffff' },
            headerTintColor: '#1e293b',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShadowVisible: false
          }}
        >
          <Stack.Screen 
            name="index" 
            options={{ headerShown: false, title: 'Accueil' }}
          />
          <Stack.Screen 
            name="auth/login" 
            options={{ title: 'Connexion' }}
          />
          <Stack.Screen 
            name="auth/register" 
            options={{ title: 'Inscription' }}
          />
          <Stack.Screen 
            name="design/index" 
            options={{ title: 'Studio Design' }}
          />
          <Stack.Screen 
            name="video/index" 
            options={{ title: 'Studio Vidéo' }}
          />
          <Stack.Screen 
            name="web/index" 
            options={{ title: 'Web-Gen' }}
          />
          <Stack.Screen 
            name="marketplace/index" 
            options={{ title: 'Marketplace' }}
          />
          <Stack.Screen 
            name="marketplace/create" 
            options={{ title: 'Nouveau Template' }}
          />
          <Stack.Screen 
            name="profile/index" 
            options={{ title: 'Mon profil' }}
          />
        </Stack>
      </AuthProvider>
    </QueryClientProvider>
  );
}
