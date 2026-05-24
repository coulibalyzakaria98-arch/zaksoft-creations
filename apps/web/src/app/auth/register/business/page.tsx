'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Sparkles, Building2, Briefcase, Users, ArrowRight } from 'lucide-react';

export default function BusinessRegisterPage() {
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    companyName: '',
    companySize: '',
    position: '',
    industry: '',
    website: '',
    intendedUse: '',
    budget: '',
    howDidYouHear: '',
    newsletter: false,
    termsAccepted: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(formData);
      toast.success('Compte professionnel créé avec succès !');
    } catch (error) {
      toast.error('Erreur lors de la création du compte');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg blur opacity-50" />
              <Sparkles className="relative w-8 h-8 text-orange-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white">Inscription B2B</h1>
          <p className="text-gray-400 mt-2">Créez votre compte professionnel</p>
        </div>

        {/* Formulaire */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1 : Identité */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                Informations personnelles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Prénom"
                  onChange={handleChange}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nom"
                  onChange={handleChange}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email professionnel"
                  onChange={handleChange}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  onChange={handleChange}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Section 2 : Entreprise */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-orange-500" />
                Informations entreprise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Nom de l'entreprise"
                  onChange={handleChange}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <select
                  name="companySize"
                  onChange={handleChange}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Taille de l&apos;entreprise</option>
                  <option>1-10 employés</option>
                  <option>11-50 employés</option>
                  <option>51-200 employés</option>
                  <option>201-1000 employés</option>
                  <option>1000+ employés</option>
                </select>
                <input
                  type="text"
                  name="position"
                  placeholder="Votre poste"
                  onChange={handleChange}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <select
                  name="industry"
                  onChange={handleChange}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Secteur d&apos;activité</option>
                  <option>Technologie / SaaS</option>
                  <option>E-commerce / Retail</option>
                  <option>Marketing / Communication</option>
                  <option>Design / Création</option>
                  <option>Autre</option>
                </select>
                <input
                  type="url"
                  name="website"
                  placeholder="Site web (optionnel)"
                  onChange={handleChange}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Section 3 : Projet */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-orange-500" />
                Votre projet
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="intendedUse"
                  onChange={handleChange}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Utilisation prévue</option>
                  <option>Création de contenu réseaux sociaux</option>
                  <option>Génération d&apos;images pour site web</option>
                  <option>Création de vidéos marketing</option>
                  <option>Développement de sites web</option>
                  <option>Autre</option>
                </select>
                <select
                  name="budget"
                  onChange={handleChange}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Budget mensuel estimé</option>
                  <option>Moins de 50€</option>
                  <option>50€ - 100€</option>
                  <option>100€ - 200€</option>
                  <option>200€ - 500€</option>
                  <option>500€+</option>
                </select>
                <select
                  name="howDidYouHear"
                  onChange={handleChange}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Comment nous avez-vous connu ?</option>
                  <option>Recherche Google</option>
                  <option>LinkedIn / Twitter</option>
                  <option>Recommandation</option>
                  <option>Publicité</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="newsletter"
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-white/20 bg-black/50 text-orange-500 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-300">Recevoir la newsletter</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-white/20 bg-black/50 text-orange-500 focus:ring-orange-500"
                  required
                />
                <span className="text-sm text-gray-300">
                  J&apos;accepte les <Link href="/legal/terms" className="text-orange-500 hover:underline">conditions d&apos;utilisation</Link>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? 'Création en cours...' : 'Créer mon compte professionnel'}
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-center text-gray-400">
              Déjà inscrit ?{' '}
              <Link href="/auth/login" className="text-orange-500 hover:underline">
                Se connecter
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
