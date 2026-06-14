export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: 'monthly' | 'yearly';
  credits: number;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Gratuit',
    price: 0,
    period: 'monthly',
    credits: 10,
    features: [
      '10 crédits/mois',
      'Images 512×512',
      'Support communautaire',
      'Historique 7 jours'
    ],
    buttonText: 'Commencer',
    buttonLink: '/register'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 19,
    period: 'monthly',
    credits: 500,
    features: [
      '500 crédits/mois',
      'Images 4K',
      'Vidéos illimitées',
      'Support prioritaire 24/7',
      'API accès',
      'Historique illimité'
    ],
    popular: true,
    buttonText: 'Choisir Pro',
    buttonLink: '/billing?plan=pro'
  },
  {
    id: 'business',
    name: 'Business',
    price: 99,
    period: 'monthly',
    credits: 2500,
    features: [
      '2500 crédits/mois',
      'Images 8K',
      'Vidéos illimitées',
      'Support dédié',
      'API complète',
      'SLA garanti 99.9%',
      'Team collaboration'
    ],
    buttonText: 'Contacter les ventes',
    buttonLink: '/contact'
  }
];
