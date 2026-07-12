#!/bin/bash
# start.sh - Script de démarrage pour le service Auth
# set -e : si la synchro du schéma échoue, on arrête le conteneur (échec visible
# dans les logs Render) plutôt que de démarrer un serveur qui renverra des 500.
set -e

echo "🔄 Synchronisation de la base de données..."
npx prisma db push

echo "🚀 Lancement du service Auth..."
node dist/index.js
