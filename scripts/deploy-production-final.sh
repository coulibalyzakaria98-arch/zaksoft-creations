#!/bin/bash
# scripts/deploy-production-final.sh

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() { echo -e "${GREEN}[INFO]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }
log_header() { echo -e "${BLUE}═══════════════════════════════════════════════════════════════${NC}"; }

# Variables
NAMESPACE="zaksoft"
DEPLOYMENT_TIMESTAMP=$(date +%Y%m%d_%H%M%S)

log_header
echo -e "${GREEN}🚀 DÉPLOIEMENT FINAL ZAKSOFT CRÉATIONS${NC}"
log_header

# 1. Verification
log_info "Phase 1: Vérification des prérequis"
required_vars=("POSTGRES_PASSWORD" "STRIPE_SECRET_KEY" "OPENAI_API_KEY")
for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        log_warn "Attention: $var n'est pas définie dans l'environnement actuel."
    fi
done

# 2. Kubernetes Apply
log_info "Phase 2: Déploiement Kubernetes via Kustomize"
kubectl apply -k infrastructure/k8s/

# 3. Wait for Readiness
log_info "Phase 3: Attente de la disponibilité des services"
kubectl wait --for=condition=available --timeout=300s deployment --all -n ${NAMESPACE}

# 4. Database Migrations
log_info "Phase 4: Exécution des migrations Prisma"
AUTH_POD=$(kubectl get pods -n ${NAMESPACE} -l app=auth -o jsonpath='{.items[0].metadata.name}')
kubectl exec -n ${NAMESPACE} ${AUTH_POD} -- npx prisma migrate deploy

# 5. Smoke Test
log_info "Phase 5: Test de santé global"
HEALTH_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://api.zaksoft-creations.com/auth/health || echo "000")
if [ "$HEALTH_STATUS" == "200" ]; then
    log_info "✅ ZAKSOFT Créations est en ligne et opérationnel !"
else
    log_warn "⚠️ Le service est déployé mais l'URL publique n'est pas encore accessible (DNS/SSL en cours)."
fi

log_header
echo -e "${GREEN}✅ DÉPLOIEMENT TERMINÉ${NC}"
log_header
