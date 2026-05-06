#!/bin/bash
# scripts/deploy.sh

# Build et push des images
docker build -t ghcr.io/zaksoft/auth:latest -f services/auth/Dockerfile .
docker build -t ghcr.io/zaksoft/video:latest -f services/video/Dockerfile .
docker build -t ghcr.io/zaksoft/frontend:latest -f apps/web/Dockerfile .

docker push ghcr.io/zaksoft/auth:latest
docker push ghcr.io/zaksoft/video:latest
docker push ghcr.io/zaksoft/frontend:latest

# Appliquer les configurations K8s
kubectl apply -f infrastructure/k8s/base-config.yaml
kubectl apply -f infrastructure/k8s/auth-deployment.yaml
kubectl apply -f infrastructure/k8s/video-deployment.yaml
kubectl apply -f infrastructure/k8s/ingress.yaml
kubectl apply -f infrastructure/k8s/hpa.yaml

# Vérifier le statut
kubectl get pods -n zaksoft
kubectl get ingress -n zaksoft
