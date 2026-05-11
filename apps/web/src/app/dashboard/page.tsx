'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  Image,
  Video,
  BarChart3,
  CreditCard,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  {
    title: 'Images générées',
    value: '1,234',
    change: '+12%',
    changeType: 'positive' as const,
    icon: Image,
  },
  {
    title: 'Vidéos créées',
    value: '89',
    change: '+8%',
    changeType: 'positive' as const,
    icon: Video,
  },
  {
    title: 'Crédits utilisés',
    value: '2,456',
    change: '-3%',
    changeType: 'negative' as const,
    icon: Zap,
  },
  {
    title: 'Revenus',
    value: '€1,234',
    change: '+23%',
    changeType: 'positive' as const,
    icon: TrendingUp,
  },
];

const quickActions = [
  {
    title: 'Créer une image',
    description: 'Générez des images uniques avec l\'IA',
    href: '/design/generate',
    icon: Image,
    color: 'bg-blue-500',
  },
  {
    title: 'Créer une vidéo',
    description: 'Transformez vos idées en vidéos captivantes',
    href: '/video/generate',
    icon: Video,
    color: 'bg-purple-500',
  },
  {
    title: 'Explorer le marketplace',
    description: 'Découvrez et achetez des créations',
    href: '/marketplace',
    icon: Sparkles,
    color: 'bg-green-500',
  },
  {
    title: 'Voir les analytics',
    description: 'Analysez vos performances',
    href: '/analytics',
    icon: BarChart3,
    color: 'bg-orange-500',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Tableau de bord
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Bienvenue sur votre plateforme de création IA
          </p>
        </div>
        <Badge variant="secondary" className="px-3 py-1">
          <Users className="w-4 h-4 mr-1" />
          Plan Pro
        </Badge>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <p className={cn(
                "text-xs flex items-center mt-1",
                stat.changeType === 'positive'
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              )}>
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change} par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Actions rapides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform",
                    action.color
                  )}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Activité récente</CardTitle>
          <CardDescription>
            Vos dernières actions sur la plateforme
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Image générée avec succès
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Il y a 2 heures • Portrait artistique
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Vidéo créée et publiée
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Il y a 5 heures • Animation produit
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Crédits rechargés
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Il y a 1 jour • +500 crédits
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Helper function for conditional classes
function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}