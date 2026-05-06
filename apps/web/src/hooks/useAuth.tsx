// apps/web/src/hooks/useAuth.tsx
'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { User, login as apiLogin, register as apiRegister, getMe, requestPasswordReset as apiRequestPasswordReset, resetPassword as apiResetPassword } from '../services/authApi';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  requestPasswordReset: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = Cookies.get('token') || localStorage.getItem('token');
      if (storedToken) {
        try {
          const userData = await getMe(storedToken);
          setUser(userData);
          setToken(storedToken);
          // Sync both if only one was present
          if (!Cookies.get('token')) Cookies.set('token', storedToken, { expires: 7, secure: true, sameSite: 'strict' });
          if (!localStorage.getItem('token')) localStorage.setItem('token', storedToken);
        } catch (error) {
          // Token is invalid or expired, clear it
          localStorage.removeItem('token');
          Cookies.remove('token');
          setToken(null);
          setUser(null);
        }
      }
      setIsLoading(false);
    };
    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const { accessToken, user } = await apiLogin(email, password) as any;
    const tokenToUse = accessToken;
    
    localStorage.setItem('token', tokenToUse);
    Cookies.set('token', tokenToUse, { expires: 7, secure: true, sameSite: 'strict' });
    
    setToken(tokenToUse);
    setUser(user);
    router.push('/');
  };

  const register = async (email: string, password: string) => {
    const { accessToken, user } = await apiRegister(email, password) as any;
    const tokenToUse = accessToken;
    
    localStorage.setItem('token', tokenToUse);
    Cookies.set('token', tokenToUse, { expires: 7, secure: true, sameSite: 'strict' });
    
    setToken(tokenToUse);
    setUser(user);
    router.push('/');
  };

  const logout = () => {
    localStorage.removeItem('token');
    Cookies.remove('token');
    setToken(null);
    setUser(null);
    router.push('/login');
  };

  // Password reset functions
  const requestPasswordReset = async (email: string) => {
    await apiRequestPasswordReset(email);
  };

  const resetPassword = async (token: string, newPassword: string) => {
    await apiResetPassword(token, newPassword);
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, register, logout, requestPasswordReset, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
