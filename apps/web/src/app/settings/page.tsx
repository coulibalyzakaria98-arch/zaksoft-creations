'use client';

import { useAuth } from '@/hooks/useAuth';
import { PageSkeleton } from '@/components/ui/skeletons/PageSkeleton';

export default function SettingsPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <PageSkeleton header cards={0} />;
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Paramètres</h1>
      
      <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
        {/* Profil */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Profil</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="text-gray-900 mt-1">{user?.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Plan</label>
              <p className="text-gray-900 mt-1 capitalize">{user?.tier || 'Gratuit'}</p>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <label className="flex items-center justify-between">
            <span className="text-gray-700">Notifications email</span>
            <input type="checkbox" className="w-4 h-4 text-indigo-600" />
          </label>
        </div>

        {/* Danger Zone */}
        <div className="border-t pt-6">
          <h2 className="text-lg font-semibold text-red-600 mb-4">Zone dangereuse</h2>
          <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm hover:bg-red-100">
            Supprimer mon compte
          </button>
        </div>
      </div>
    </div>
  );
}
