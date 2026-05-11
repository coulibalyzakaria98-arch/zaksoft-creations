// apps/web/src/hooks/useAuth.tsx
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface User {
  id: string;
  email: string;
  credits: number;
  tier: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  credits: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function setTokenCookie(token: string | null) {
  if (typeof document === 'undefined') return;

  if (token) {
    document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24}`;
  } else {
    document.cookie = 'token=; path=/; max-age=0';
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Récupérer l'utilisateur depuis le localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setTokenCookie('mock-token');
    } else {
      setTokenCookie(null);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Simulation pour le test
      const mockUser = {
        id: '1',
        email,
        credits: 1234,
        tier: 'pro'
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      setTokenCookie('mock-token');

      toast.success('Connexion réussie ! Bienvenue sur ZAKSOFT.');
      router.push('/');
    } catch (error) {
      toast.error('Erreur de connexion. Vérifiez vos identifiants.');
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setTokenCookie(null);
    toast.success('Déconnexion réussie');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, credits: user?.credits || 0 }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
