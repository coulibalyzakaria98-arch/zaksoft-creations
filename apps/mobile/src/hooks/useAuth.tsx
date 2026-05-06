import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import * as SecureStore from 'expo-secure-store';
import { authService } from '../services/api';

interface User {
  id: string;
  email: string;
  tier: string;
  credits: number;
}

interface AuthContextType {
  user: User | null;
  credits: number;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const token = await SecureStore.getItemAsync('auth_token');
      if (token) {
        const userData = await authService.getMe();
        setUser(userData);
      }
    } catch (error) {
      console.error('Failed to load user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const { token, user } = await authService.login(email, password);
    await SecureStore.setItemAsync('auth_token', token);
    setUser(user);
  };

  const register = async (email: string, password: string) => {
    const { token, user } = await authService.register(email, password);
    await SecureStore.setItemAsync('auth_token', token);
    setUser(user);
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('auth_token');
    setUser(null);
  };

  const refreshUser = async () => {
    try {
      const userData = await authService.getMe();
      setUser(userData);
    } catch (err) {
      console.error("Refresh user failed", err);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      credits: user?.credits || 0,
      isLoading,
      login,
      register,
      logout,
      refreshUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
