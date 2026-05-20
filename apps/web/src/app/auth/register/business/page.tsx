/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Building2, Briefcase, Users } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
            <h1 className="text-2xl font-bold text-white">Inscription B2B</h1>
            <p className="text-indigo-200 mt-1">Créez votre compte professionnel</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Section 1 : Identité */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                Informations personnelles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="firstName" placeholder="Prénom" onChange={handleChange} className="p-3 border rounded-lg" required />
                <input type="text" name="lastName" placeholder="Nom" onChange={handleChange} className="p-3 border rounded-lg" required />
                <input type="email" name="email" placeholder="Email professionnel" onChange={handleChange} className="p-3 border rounded-lg" required />
                <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} className="p-3 border rounded-lg" required />
              </div>
            </div>

            {/* Section 2 : Entreprise */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-indigo-600" />
                Informations entreprise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="companyName" placeholder="Nom de l'entreprise" onChange={handleChange} className="p-3 border rounded-lg" />
                <select name="companySize" onChange={handleChange} className="p-3 border rounded-lg">
                  <option value="">Taille de l'entreprise</option>
                  <option>1-10 employés</option>
                  <option>11-50 employés</option>
                  <option>51-200 employés</option>
                  <option>201-1000 employés</option>
                  <option>1000+ employés</option>
                </select>
                <input type="text" name="position" placeholder="Votre poste" onChange={handleChange} className="p-3 border rounded-lg" />
                <select name="industry" onChange={handleChange} className="p-3 border rounded-lg">
                  <option value="">Secteur d'activité</option>
                  <option>Technologie / SaaS</option>
                  <option>E-commerce / Retail</option>
                  <option>Marketing / Communication</option>
                  <option>Design / Création</option>
                  <option>Autre</option>
                </select>
                <input type="url" name="website" placeholder="Site web (optionnel)" onChange={handleChange} className="p-3 border rounded-lg" />
              </div>
            </div>

            {/* Section 3 : Projet */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                Votre projet
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select name="intendedUse" onChange={handleChange} className="p-3 border rounded-lg">
                  <option value="">Utilisation prévue</option>
                  <option>Création de contenu réseaux sociaux</option>
                  <option>Génération d'images pour site web</option>
                  <option>Création de vidéos marketing</option>
                  <option>Développement de sites web</option>
                  <option>Autre</option>
                </select>
                <select name="budget" onChange={handleChange} className="p-3 border rounded-lg">
                  <option value="">Budget mensuel estimé</option>
                  <option>Moins de 50€</option>
                  <option>50€ - 100€</option>
                  <option>100€ - 200€</option>
                  <option>200€ - 500€</option>
                  <option>500€+</option>
                </select>
                <select name="howDidYouHear" onChange={handleChange} className="p-3 border rounded-lg">
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
                <input type="checkbox" name="newsletter" onChange={handleChange} className="w-4 h-4" />
                <span className="text-sm text-gray-700">Recevoir la newsletter</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" name="termsAccepted" onChange={handleChange} className="w-4 h-4" required />
                <span className="text-sm text-gray-700">
                  J'accepte les <Link href="/terms" className="text-indigo-600">conditions d'utilisation</Link>
                </span>
              </label>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
              {loading ? 'Création en cours...' : 'Créer mon compte professionnel'}
            </button>

            <p className="text-center text-gray-600">
              Déjà inscrit ? <Link href="/auth/login" className="text-indigo-600">Se connecter</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
