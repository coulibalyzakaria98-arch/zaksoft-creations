#!/bin/bash
# start.sh - Script de démarrage pour le service Auth
# set -e : si la synchro du schéma échoue, on arrête le conteneur (échec visible
# dans les logs Render) plutôt que de démarrer un serveur qui renverra des 500.
set -e

echo "🔄 Synchronisation de la base de données..."
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
SCHEMA_PATH="$REPO_ROOT/packages/database/schema.prisma"

if [ ! -f "$SCHEMA_PATH" ]; then
  echo "❌ Impossible de trouver le fichier schema.prisma à : $SCHEMA_PATH" >&2
  exit 1
fi

npx prisma db push --schema="$SCHEMA_PATH"

echo "🚀 Lancement du service Auth..."
node dist/index.js
