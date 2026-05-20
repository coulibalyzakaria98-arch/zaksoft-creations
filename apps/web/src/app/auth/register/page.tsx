'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { registerSchema, type RegisterFormData, validateForm } from '@/lib/validation';

const initialFormData: RegisterFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  companyName: '',
  companySize: '1-10',
  position: '',
  industry: '',
  website: '',
  intendedUse: '',
  budget: '',
  howDidYouHear: '',
  newsletter: false,
  termsAccepted: false,
};

export default function AuthRegisterPage() {
  const { register } = useAuth();
  const [formData, setFormData] = useState<RegisterFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof RegisterFormData, value: string | boolean) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    const validation = validateForm(registerSchema, formData);
    if (!validation.success) {
      setErrors(validation.errors || {});
      return;
    }

    setIsSubmitting(true);

    try {
      await register(formData);
    } catch (error) {
      console.error('Registration failed:', error);
      setErrors({ general: 'Impossible de créer le compte. Vérifiez vos informations et réessayez.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-10">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-indigo-600">Inscription B2B</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Créez votre compte professionnel
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Rejoignez ZAKSOFT Créations avec un parcours d{String.fromCharCode(39)}inscription optimisé pour les équipes et les projets professionnels.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
          <Card className="shadow-2xl border-0">
            <CardHeader className="space-y-2">
              <CardTitle>Formulaire d{String.fromCharCode(39)}inscription enrichi</CardTitle>
              <CardDescription>
                Complétez les informations de votre entreprise pour accéder à une expérience IA dédiée aux besoins B2B.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(event) => handleChange('firstName', event.target.value)}
                      placeholder="Prénom"
                    />
                    {errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(event) => handleChange('lastName', event.target.value)}
                      placeholder="Nom"
                    />
                    {errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Adresse email professionnelle</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    placeholder="contact@entreprise.com"
                  />
                  {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(event) => handleChange('password', event.target.value)}
                    placeholder="8 caractères minimum"
                  />
                  {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Nom de l&apos;entreprise</Label>
                    <Input
                      id="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={(event) => handleChange('companyName', event.target.value)}
                      placeholder="Nom de l&apos;entreprise"
                    />
                    {errors.companyName && <p className="text-sm text-red-600">{errors.companyName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companySize">Taille de l&apos;entreprise</Label>
                    <select
                      id="companySize"
                      value={formData.companySize}
                      onChange={(event) => handleChange('companySize', event.target.value)}
                      className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    >
                      <option value="1-10">1-10 employés</option>
                      <option value="11-50">11-50 employés</option>
                      <option value="51-200">51-200 employés</option>
                      <option value="201-500">201-500 employés</option>
                      <option value="500+">500+ employés</option>
                    </select>
                    {errors.companySize && <p className="text-sm text-red-600">{errors.companySize}</p>}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="position">Poste</Label>
                    <Input
                      id="position"
                      type="text"
                      value={formData.position}
                      onChange={(event) => handleChange('position', event.target.value)}
                      placeholder="Votre rôle"
                    />
                    {errors.position && <p className="text-sm text-red-600">{errors.position}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Secteur d&apos;activité</Label>
                    <Input
                      id="industry"
                      type="text"
                      value={formData.industry}
                      onChange={(event) => handleChange('industry', event.target.value)}
                      placeholder="Ex: Marketing, SaaS, Retail"
                    />
                    {errors.industry && <p className="text-sm text-red-600">{errors.industry}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Site web</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(event) => handleChange('website', event.target.value)}
                    placeholder="https://monentreprise.com"
                  />
                  {errors.website && <p className="text-sm text-red-600">{errors.website}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="intendedUse">Objectif</Label>
                  <textarea
                    id="intendedUse"
                    value={formData.intendedUse}
                    onChange={(event) => handleChange('intendedUse', event.target.value)}
                    placeholder="Expliquez brièvement votre usage prévu"
                    className="min-h-[120px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                  {errors.intendedUse && <p className="text-sm text-red-600">{errors.intendedUse}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget mensuel estimé</Label>
                  <Input
                    id="budget"
                    type="text"
                    value={formData.budget}
                    onChange={(event) => handleChange('budget', event.target.value)}
                    placeholder="Ex: 500€ - 2 000€"
                  />
                  {errors.budget && <p className="text-sm text-red-600">{errors.budget}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="howDidYouHear">Comment nous avez-vous connu ?</Label>
                  <Input
                    id="howDidYouHear"
                    type="text"
                    value={formData.howDidYouHear}
                    onChange={(event) => handleChange('howDidYouHear', event.target.value)}
                    placeholder="Ex: Recommandation, recherche en ligne"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      id="newsletter"
                      type="checkbox"
                      checked={formData.newsletter}
                      onChange={(event) => handleChange('newsletter', event.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <Label htmlFor="newsletter" className="mb-0">
                      Je souhaite recevoir des conseils sur l&apos;optimisation IA pour mon entreprise.
                    </Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <input
                      id="termsAccepted"
                      type="checkbox"
                      checked={formData.termsAccepted}
                      onChange={(event) => handleChange('termsAccepted', event.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <Label htmlFor="termsAccepted" className="mb-0 max-w-2xl">
                      J{String.fromCharCode(39)}accepte les conditions d{String.fromCharCode(39)}utilisation et la politique de confidentialité.
                    </Label>
                  </div>
                  {errors.termsAccepted && <p className="text-sm text-red-600">{errors.termsAccepted}</p>}
                </div>

                {errors.general && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errors.general}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                >
                  {isSubmitting ? 'Création du compte...' : 'Créer mon espace professionnel'}
                </Button>

                <p className="text-center text-sm text-slate-600">
                  Vous avez déjà un compte ?{' '}
                  <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Connectez{String.fromCharCode(39)}vous
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Avantages B2B</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">Une solution pensée pour les équipes</h2>
              <p className="mt-2 text-slate-600">
                Accédez à un onboarding rapide, à un suivi dédié et à une expérience adaptée aux besoins des entreprises.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-indigo-50 p-4">
                <p className="font-medium text-slate-900">Gestion centralisée</p>
                <p className="mt-2 text-sm text-slate-600">Une plateforme unique pour vos projets, équipes et crédits IA.</p>
              </div>
              <div className="rounded-2xl bg-indigo-50 p-4">
                <p className="font-medium text-slate-900">Support prioritaire</p>
                <p className="mt-2 text-sm text-slate-600">Accompagnement dédié pour accélérer votre intégration.</p>
              </div>
              <div className="rounded-2xl bg-indigo-50 p-4">
                <p className="font-medium text-slate-900">Vision business</p>
                <p className="mt-2 text-sm text-slate-600">Nous adaptons les recommandations à votre stratégie d{String.fromCharCode(39)}entreprise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
