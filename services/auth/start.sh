#!/bin/bash
# start.sh - Script de démarrage pour le service Auth

echo "🔄 Synchronisation du schéma de la base de données..."
pnpm --filter @zaksoft/database db:push

echo "🚀 Démarrage du service Auth..."
node services/auth/dist/index.js
