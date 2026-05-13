export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-3xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Page non trouvée</h1>
        <p className="text-gray-600 mb-6">La page demandée est introuvable.</p>
        <a href="/" className="rounded-full border border-slate-200 px-5 py-3 text-slate-700 hover:bg-slate-100">
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
