'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { ArrowRight, Building2 } from 'lucide-react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register({ email, password });
      toast.success('Inscription réussie !');
    } catch (error) {
      toast.error('Erreur lors de l\'inscription');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Link href="/" className="group relative">
              <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-lg group-hover:opacity-100 transition duration-500" />
              <Image
                src="/logo.png"
                alt="ZAKSOFT AI"
                width={64}
                height={64}
                className="relative object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-white">Créer un compte</h1>

          <p className="text-gray-400 mt-2">Commencez à utiliser ZAKSOFT en quelques secondes</p>
        </div>

        {/* Formulaire */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Adresse email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                placeholder="vous@exemple.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? 'Création...' : 'Créer un compte'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/auth/login" className="text-orange-500 hover:text-orange-400 text-sm transition">
              Déjà inscrit ? Se connecter
            </Link>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Building2 className="w-4 h-4 text-gray-500" />
              <Link href="/auth/register/business" className="text-gray-400 hover:text-gray-300 text-sm transition">
                Vous êtes une entreprise ? Inscription B2B
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
