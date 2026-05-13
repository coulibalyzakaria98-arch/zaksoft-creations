'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { toast } from 'sonner';
import { Eye, EyeOff, Building2, User, Briefcase, Globe, Loader2, Send } from 'lucide-react';

export default function RegisterPage() {
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Champs du formulaire
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    
    // Informations professionnelles
    companyName: '',
    companySize: '',
    position: '',
    industry: '',
    
    // Informations projet
    website: '',
    intendedUse: '',
    budget: '',
    howDidYouHear: '',
    
    // Préférences
    newsletter: false,
    termsAccepted: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const companySizes = [
    'Indépendant / Freelance',
    '1-10 employés',
    '11-50 employés',
    '51-200 employés',
    '201-1000 employés',
    '1000+ employés'
  ];

  const industries = [
    'Technologie / SaaS',
    'E-commerce / Retail',
    'Marketing / Communication',
    'Design / Création',
    'Médias / Divertissement',
    'Éducation / Formation',
    'Santé / Médical',
    'Finance / Assurance',
    'Autre'
  ];

  const intendedUses = [
    'Création de contenu pour réseaux sociaux',
    'Génération d\'images pour site web',
    'Création de vidéos marketing',
    'Développement de sites web',
    'Design produit / UI',
    'Usage personnel / loisirs',
    'Autre'
  ];

  const budgetOptions = [
    'Moins de 50€ / mois',
    '50€ - 100€ / mois',
    '100€ - 200€ / mois',
    '200€ - 500€ / mois',
    '500€+ / mois',
    'Je ne sais pas encore'
  ];

  const howDidYouHearOptions = [
    'Recherche Google',
    'LinkedIn / Twitter',
    'Recommandation',
    'Article / Blog',
    'Publicité',
    'Autre'
  ];

  const validateField = (name: string, value: any) => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'Prénom requis';
        if (value.length < 2) return 'Prénom trop court';
        return '';
      case 'lastName':
        if (!value.trim()) return 'Nom requis';
        if (value.length < 2) return 'Nom trop court';
        return '';
      case 'email':
        if (!value) return 'Email requis';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email invalide';
        return '';
      case 'password':
        if (!value) return 'Mot de passe requis';
        if (value.length < 8) return '8 caractères minimum';
        if (!/[A-Z]/.test(value)) return 'Une majuscule requise';
        if (!/[0-9]/.test(value)) return 'Un chiffre requis';
        return '';
      case 'confirmPassword':
        if (value !== formData.password) return 'Les mots de passe ne correspondent pas';
        return '';
      case 'termsAccepted':
        if (!value) return 'Vous devez accepter les conditions';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Validation en temps réel
    const error = validateField(name, type === 'checkbox' ? checked : value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Validation complète
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      toast.error('Veuillez corriger les erreurs');
      return;
    }
    
    try {
      // Envoyer les données au backend
      await register({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        companyName: formData.companyName,
        companySize: formData.companySize,
        position: formData.position,
        industry: formData.industry,
        intendedUse: formData.intendedUse,
        howDidYouHear: formData.howDidYouHear,
        newsletter: formData.newsletter,
        website: formData.website,
        budget: formData.budget
      });
      
      toast.success('Compte créé avec succès !');
    } catch (error) {
      toast.error('Erreur lors de la création du compte');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 text-white">
            <h1 className="text-2xl font-bold">Créer un compte</h1>
            <p className="text-indigo-200 mt-1">Rejoignez ZAKSOFT et libérez votre créativité</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Informations personnelles */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-indigo-600" />
                Informations personnelles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
            </div>
            
            {/* Informations professionnelles */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                Informations professionnelles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Entreprise / Structure</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Taille de l&apos;entreprise</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Sélectionnez</option>
                    {companySizes.map(size => <option key={size} value={size}>{size}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Poste / Fonction</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Ex: Directeur Marketing"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Secteur d&apos;activité</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Sélectionnez</option>
                    {industries.map(industry => <option key={industry} value={industry}>{industry}</option>)}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Compte */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Compte</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe *</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  <div className="mt-2 text-xs text-gray-500">
                    <p>Exigences : minimum 8 caractères, 1 majuscule, 1 chiffre</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe *</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>
            </div>
            
            {/* Projet */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Votre projet</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Utilisation prévue</label>
                  <select
                    name="intendedUse"
                    value={formData.intendedUse}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Sélectionnez</option>
                    {intendedUses.map(use => <option key={use} value={use}>{use}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Budget mensuel estimé</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Sélectionnez</option>
                    {budgetOptions.map(budget => <option key={budget} value={budget}>{budget}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Site web (optionnel)</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Comment nous avez-vous connu ?</label>
                  <select
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Sélectionnez</option>
                    {howDidYouHearOptions.map(option => <option key={option} value={option}>{option}</option>)}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Options */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
                />
                <span className="text-sm text-gray-700">Je souhaite recevoir la newsletter et les offres spéciales</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className={`w-4 h-4 rounded focus:ring-indigo-500 ${errors.termsAccepted ? 'border-red-500' : 'border-gray-300'}`}
                />
                <span className="text-sm text-gray-700">
                  J&apos;accepte les <Link href="/terms" className="text-indigo-600 hover:underline font-medium">Conditions d&apos;utilisation</Link> et la{' '}
                  <Link href="/privacy" className="text-indigo-600 hover:underline font-medium">Politique de confidentialité</Link>
                </span>
              </label>
              {errors.termsAccepted && <p className="text-red-500 text-xs">{errors.termsAccepted}</p>}
            </div>
            
            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Création en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Créer un compte
                </>
              )}
            </button>
            
            <p className="text-center text-gray-600">
              Déjà inscrit ?{' '}
              <Link href="/auth/login" className="text-indigo-600 hover:underline font-medium">
                Se connecter
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
