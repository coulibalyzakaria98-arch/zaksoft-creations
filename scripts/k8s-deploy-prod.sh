#!/bin/bash
# scripts/k8s-deploy-prod.sh

set -e

echo "🚀 Lancement du déploiement production ZAKSOFT"

# Appliquer le Kustomization
kubectl apply -k infrastructure/k8s/

# Attendre que les services soient prêts
echo "⏳ Attente du déploiement..."
kubectl wait --for=condition=available --timeout=300s deployment/auth-service -n zaksoft
kubectl wait --for=condition=available --timeout=300s deployment/frontend -n zaksoft

echo "✅ ZAKSOFT Créations est en ligne !"
echo "🌐 URL: https://zaksoft-creations.com"
echo "📊 API: https://api.zaksoft-creations.com"
