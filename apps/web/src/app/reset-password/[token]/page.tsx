// apps/web/src/app/reset-password/[token]/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { resetPassword } from '@/services/authApi'; // Assuming authApi is updated
import { useRouter, useParams } from 'next/navigation';

export default function ResetPasswordPage() {
  const router = useRouter();
  const params = useParams();
  const token = params.token as string; // Extract token from URL

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsSubmitting(true);

    if (newPassword !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      setIsSubmitting(false);
      return;
    }

    if (!token) {
      setError('Token de réinitialisation invalide.');
      setIsSubmitting(false);
      return;
    }

    try {
      await resetPassword(token, newPassword);
      setMessage('Votre mot de passe a été réinitialisé avec succès.');
      // Optionally redirect to login page after a short delay
      setTimeout(() => router.push('/login'), 3000);
    } catch (err) {
      console.error('Password reset failed:', err);
      setError('La réinitialisation du mot de passe a échoué. Le token peut être invalide ou expiré.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Définir un nouveau mot de passe</h1>
          <p className="text-gray-600 mt-2">Entrez votre nouveau mot de passe ci-dessous.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nouveau mot de passe
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
              minLength={6}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmer le nouveau mot de passe
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
              minLength={6}
            />
          </div>

          {message && (
            <div className="text-green-600 text-sm text-center">{message}</div>
          )}
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !newPassword || !confirmPassword || newPassword.length < 6}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Réinitialisation...' : 'Définir mon nouveau mot de passe'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Vous vous souvenez de votre mot de passe ?{' '}
          <Link href="/login" className="text-indigo-600 hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
