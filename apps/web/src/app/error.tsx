'use client';

export const dynamic = 'force-dynamic';

export default function AppError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-3xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Erreur interne</h1>
        <p className="text-gray-600 mb-6">Une erreur est survenue dans l&apos;application.</p>
        <pre className="whitespace-pre-wrap text-left text-sm text-red-700 bg-red-50 rounded-md p-4 mb-6">
          {error.message}
        </pre>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            className="rounded-full bg-slate-900 text-white px-5 py-3 hover:bg-slate-700"
            onClick={reset}
          >
            Réessayer
          </button>
          <a href="/" className="rounded-full border border-slate-200 px-5 py-3 text-slate-700 hover:bg-slate-100">
            Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </div>
  );
}
