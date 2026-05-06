# CONTRIBUTING.md

## Structure du projet
ZAKSOFT Créations utilise un monorepo Turborepo avec pnpm.

## Setup initial
```bash
git clone https://github.com/zaksoft/creations.git
cd creations
pnpm install
cp .env.example .env.local
docker-compose -f infrastructure/docker/docker-compose.dev.yml up -d
pnpm run dev
```

## Commandes utiles
| Commande | Description |
|----------|-------------|
| `pnpm run dev` | Lance tous les services en mode dev |
| `pnpm run test` | Exécute les tests |
| `pnpm run lint` | Vérifie le code |
| `pnpm run build` | Build de production |

## Standards
- **Commits** : Conventionnelle (feat:, fix:, docs:)
- **Branches** : `feature/*`, `fix/*`, `release/*`
- **Code** : ESLint + Prettier + TypeScript strict
