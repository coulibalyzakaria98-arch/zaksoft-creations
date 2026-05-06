// apps/web/src/app/request-reset/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { requestPasswordReset } from '@/services/authApi'; // Assuming authApi is updated

export default function RequestResetPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsSubmitting(true);

    try {
      await requestPasswordReset(email);
      setMessage('Un email de réinitialisation a été envoyé. Vérifiez votre boîte de réception.');
      setEmail(''); // Clear email input after successful submission
    } catch (err) {
      console.error('Password reset request failed:', err);
      setError('Une erreur est survenue. Veuillez réessayer.');
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
          <h1 className="text-2xl font-bold text-gray-900">Mot de passe oublié ?</h1>
          <p className="text-gray-600 mt-2">Entrez votre email pour recevoir un lien de réinitialisation.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
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
            disabled={isSubmitting || !email}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Envoi...' : 'Envoyer le lien de réinitialisation'}
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
