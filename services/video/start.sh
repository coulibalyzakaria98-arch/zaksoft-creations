#!/bin/bash
# start.sh - Script de démarrage pour le service Video

echo "🚀 Démarrage du service Video..."
node services/video/dist/worker.js
