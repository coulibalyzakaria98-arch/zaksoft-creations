#!/bin/bash
# start.sh - Script de démarrage pour le service Auth
# set -e : si la synchro du schéma échoue, on arrête le conteneur (échec visible
# dans les logs Render) plutôt que de démarrer un serveur qui renverra des 500.
set -e

echo "🔄 Synchronisation du schéma de la base de données..."
pnpm --filter @zaksoft/database db:push

echo "🚀 Démarrage du service Auth..."
node services/auth/dist/index.js
