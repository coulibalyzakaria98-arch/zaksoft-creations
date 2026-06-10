"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RootLayout;
var expo_router_1 = require("expo-router");
var expo_status_bar_1 = require("expo-status-bar");
var useAuth_1 = require("../hooks/useAuth");
var react_query_1 = require("@tanstack/react-query");
var queryClient = new react_query_1.QueryClient();
function RootLayout() {
    return (<react_query_1.QueryClientProvider client={queryClient}>
      <useAuth_1.AuthProvider>
        <expo_status_bar_1.StatusBar style="dark"/>
        <expo_router_1.Stack screenOptions={{
            headerStyle: { backgroundColor: '#ffffff' },
            headerTintColor: '#1e293b',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShadowVisible: false
        }}>
          <expo_router_1.Stack.Screen name="index" options={{ headerShown: false, title: 'Accueil' }}/>
          <expo_router_1.Stack.Screen name="auth/login" options={{ title: 'Connexion' }}/>
          <expo_router_1.Stack.Screen name="auth/register" options={{ title: 'Inscription' }}/>
          <expo_router_1.Stack.Screen name="design/index" options={{ title: 'Studio Design' }}/>
          <expo_router_1.Stack.Screen name="video/index" options={{ title: 'Studio Vidéo' }}/>
          <expo_router_1.Stack.Screen name="web/index" options={{ title: 'Web-Gen' }}/>
          <expo_router_1.Stack.Screen name="marketplace/index" options={{ title: 'Marketplace' }}/>
          <expo_router_1.Stack.Screen name="marketplace/create" options={{ title: 'Nouveau Template' }}/>
          <expo_router_1.Stack.Screen name="profile/index" options={{ title: 'Mon profil' }}/>
        </expo_router_1.Stack>
      </useAuth_1.AuthProvider>
    </react_query_1.QueryClientProvider>);
}
