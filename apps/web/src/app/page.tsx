// apps/web/src/app/page.tsx
export default function HomePage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          ZAKSOFT Créations
        </h1>
        <p className="text-gray-600 mb-8">
          Plateforme de création de contenu par intelligence artificielle
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Design Graphique</h2>
            <p className="text-gray-500">Générez des images uniques avec l'IA</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Génération Vidéo</h2>
            <p className="text-gray-500">Créez des vidéos à partir de texte</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Génération Web</h2>
            <p className="text-gray-500">Sites web complets en 1 minute</p>
          </div>
        </div>
      </div>
    </div>
  );
}
