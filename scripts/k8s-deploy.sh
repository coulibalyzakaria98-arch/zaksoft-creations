#!/bin/bash
# scripts/k8s-deploy.sh

set -e

echo "🚀 Déploiement de ZAKSOFT Créations sur Kubernetes"

# Vérification des prérequis
echo "🔍 Vérification des prérequis..."
command -v kubectl >/dev/null 2>&1 || { echo "❌ kubectl requis mais non installé"; exit 1; }
# Docker check might be more complex depending on the context, but basic check for availability.
command -v docker >/dev/null 2>&1 || { echo "❌ docker requis mais non installé"; exit 1; }

# Vérification de la connexion au cluster
echo "🔌 Vérification de la connexion au cluster..."
kubectl cluster-info >/dev/null 2>&1 || { echo "❌ Impossible de se connecter au cluster Kubernetes"; exit 1; }

# Création du namespace
echo "📦 Création du namespace zaksoft..."
# Use --dry-run=client to create the YAML definition without applying it, then pipe to kubectl apply
kubectl create namespace zaksoft --dry-run=client -o yaml | kubectl apply -f -

# Application des secrets et configmap
echo "🔐 Application des secrets et configurations..."
# Note: Secrets should ideally be managed securely (e.g., Vault, ExternalSecrets, SealedSecrets).
# This inline approach is for demonstration/simplicity.
kubectl apply -f - <<EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: zaksoft-config
  namespace: zaksoft
data:
  REDIS_HOST: "redis-service"
  REDIS_PORT: "6379"
  POSTGRES_HOST: "postgres-service"
  POSTGRES_DB: "zaksoft"
  NODE_ENV: "production"
  API_GATEWAY_URL: "https://api.zaksoft-creations.com"
EOF

# Using placeholder secrets for demonstration. Production secrets MUST be handled securely.
# These should ideally come from a secure store like Vault or be managed via Kubernetes Secrets with encryption.
kubectl apply -f - <<EOF
apiVersion: v1
kind: Secret
metadata:
  name: zaksoft-secrets
  namespace: zaksoft
type: Opaque
stringData:
  JWT_SECRET: "dev-jwt-secret-for-local-testing-only-replace-me"
  POSTGRES_PASSWORD: "devpassword123"
  OPENAI_API_KEY: "sk-test-openai-key-replace-me"
  RUNWAY_API_KEY: "test-runway-key-replace-me"
  PIKA_API_KEY: "test-pika-key-replace-me"
  ELEVENLABS_API_KEY: "test-elevenlabs-key-replace-me"
  STRIPE_SECRET_KEY: "sk_test_xxxx-replace-me"
  STRIPE_WEBHOOK_SECRET: "whsec_test_xxxx-replace-me"
  STRIPE_BASIC_PRICE_ID: "price_test_basic"
  STRIPE_PRO_PRICE_ID: "price_test_pro"
  S3_ACCESS_KEY: "minioadmin"
  S3_SECRET_KEY: "minioadmin123"
  S3_BUCKET: "zaksoft-media"
EOF

# Application des services de base
echo "🗄️ Déploiement des services de base (PostgreSQL, Redis)..."
kubectl apply -f - <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-pvc
  namespace: zaksoft
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: standard # Ensure this storage class is available in your cluster
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres
  namespace: zaksoft
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:15-alpine
        ports:
        - containerPort: 5432
        env:
        - name: POSTGRES_DB
          value: "zaksoft"
        - name: POSTGRES_USER
          value: "zaksoft"
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: zaksoft-secrets
              key: POSTGRES_PASSWORD
        volumeMounts:
        - name: postgres-storage
          mountPath: /var/lib/postgresql/data
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
      volumes:
      - name: postgres-storage
        persistentVolumeClaim:
          claimName: postgres-pvc
---
apiVersion: v1
kind: Service
metadata:
  name: postgres-service
  namespace: zaksoft
spec:
  selector:
    app: postgres
  ports:
  - port: 5432
    targetPort: 5432
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis
  namespace: zaksoft
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis:7-alpine
        ports:
        - containerPort: 6379
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: redis-service
  namespace: zaksoft
spec:
  selector:
    app: redis
  ports:
  - port: 6379
    targetPort: 6379
EOF

echo "⏳ Attente des services de base (15s)..."
sleep 15

# Application des services métier
echo "🧩 Déploiement des services métier..."
kubectl apply -f - <<EOF
# --- Auth Service ---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth-service
  namespace: zaksoft
spec:
  replicas: 2
  selector:
    matchLabels:
      app: auth
  template:
    metadata:
      labels:
        app: auth
    spec:
      containers:
      - name: auth
        image: ghcr.io/zaksoft/auth:latest # Using actual image name from previous manifest
        ports:
        - containerPort: 3001
          name: http
        env:
        - name: JWT_SECRET
          valueFrom:
            secretKeyRef:
              name: zaksoft-secrets
              key: JWT_SECRET
        - name: DATABASE_URL
          value: "postgresql://zaksoft:$(POSTGRES_PASSWORD)@postgres-service:5432/zaksoft"
        - name: REDIS_URL
          value: "redis://redis-service:6379"
        envFrom:
        - secretRef:
            name: zaksoft-secrets
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: auth-service
  namespace: zaksoft
spec:
  selector:
    app: auth
  ports:
  - port: 3001
    targetPort: 3001
---
# --- Design Service ---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: design-service
  namespace: zaksoft
spec:
  replicas: 2
  selector:
    matchLabels:
      app: design
  template:
    metadata:
      labels:
        app: design
    spec:
      containers:
      - name: design
        image: ghcr.io/zaksoft/design:latest # Using actual image name
        ports:
        - containerPort: 3003
        env:
        - name: REDIS_URL
          value: "redis://redis-service:6379"
        - name: SD_BRIDGE_URL
          value: "http://sd-bridge:7861"
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
---
apiVersion: v1
kind: Service
metadata:
  name: design-service
  namespace: zaksoft
spec:
  selector:
    app: design
  ports:
  - port: 3003
    targetPort: 3003
---
# SD Bridge (GPU Required) - Ensure proper image and resources are configured for GPU
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sd-bridge
  namespace: zaksoft
spec:
  replicas: 1
  selector:
    matchLabels:
      app: sd-bridge
  template:
    metadata:
      labels:
        app: sd-bridge
    spec:
      containers:
      - name: sd-bridge
        image: ghcr.io/zaksoft/sd-bridge:latest # Using actual image name
        ports:
        - containerPort: 7861
        resources:
          requests:
            memory: "4Gi"
            cpu: "2"
            nvidia.com/gpu: 1 # GPU resource request
          limits:
            memory: "8Gi"
            cpu: "4"
            nvidia.com/gpu: 1 # GPU resource limit
---
apiVersion: v1
kind: Service
metadata:
  name: sd-bridge
  namespace: zaksoft
spec:
  selector:
    app: sd-bridge
  ports:
  - port: 7861
    targetPort: 7861
---
# --- Web Gen Service ---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webgen-service
  namespace: zaksoft
spec:
  replicas: 2
  selector:
    matchLabels:
      app: webgen
  template:
    metadata:
      labels:
        app: webgen
    spec:
      containers:
      - name: webgen
        image: ghcr.io/zaksoft/web-gen:latest # Using actual image name
        ports:
        - containerPort: 3004
        env:
        - name: REDIS_URL
          value: "redis://redis-service:6379"
        - name: OPENAI_API_KEY
          valueFrom:
            secretKeyRef:
              name: zaksoft-secrets
              key: OPENAI_API_KEY
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
---
apiVersion: v1
kind: Service
metadata:
  name: webgen-service
  namespace: zaksoft
spec:
  selector:
    app: webgen
  ports:
  - port: 3004
    targetPort: 3004
---
# --- Video Service ---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: video-service
  namespace: zaksoft
spec:
  replicas: 2
  selector:
    matchLabels:
      app: video
  template:
    metadata:
      labels:
        app: video
    spec:
      containers:
      - name: video
        image: ghcr.io/zaksoft/video:latest # Using actual image name
        ports:
        - containerPort: 3002
        env:
        - name: REDIS_URL
          value: "redis://redis-service:6379"
        - name: RUNWAY_API_KEY
          valueFrom:
            secretKeyRef:
              name: zaksoft-secrets
              key: RUNWAY_API_KEY
        - name: ELEVENLABS_API_KEY
          valueFrom:
            secretKeyRef:
              name: zaksoft-secrets
              key: ELEVENLABS_API_KEY
        resources:
          requests:
            memory: "1Gi"
            cpu: "1000m"
          limits:
            memory: "2Gi"
            cpu: "2000m"
---
apiVersion: v1
kind: Service
metadata:
  name: video-service
  namespace: zaksoft
spec:
  selector:
    app: video
  ports:
  - port: 3002
    targetPort: 3002
---
# --- Frontend Service ---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
  namespace: zaksoft
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
      - name: frontend
        image: ghcr.io/zaksoft/frontend:latest # Using actual image name
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"
---
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
  namespace: zaksoft
spec:
  selector:
    app: frontend
  ports:
  - port: 80
    targetPort: 80
EOF

echo "⏳ Attente du déploiement des services (20s)..."
sleep 20

# Application de l'Ingress
echo "🌐 Configuration de l'Ingress..."
kubectl apply -f - <<EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: zaksoft-ingress
  namespace: zaksoft
  annotations:
    kubernetes.io/ingress.class: "nginx" # Assumes Nginx ingress controller is installed
    # cert-manager.io/cluster-issuer: "letsencrypt-prod" # Uncomment for production TLS
    # nginx.ingress.kubernetes.io/rewrite-target: / # May need adjustment based on app setup
    # nginx.ingress.kubernetes.io/proxy-body-size: "100m"
    # nginx.ingress.kubernetes.io/proxy-read-timeout: "300"
    # nginx.ingress.kubernetes.io/proxy-send-timeout: "300"
spec:
  # tls: # Uncomment and configure for production TLS
  # - hosts:
  #   - zaksoft-creations.com
  #   - api.zaksoft-creations.com
  #   secretName: zaksoft-tls
  rules:
  - host: localhost # Using localhost for local testing, adjust for production domain
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-service
            port:
              number: 80
      - path: /auth
        pathType: Prefix
        backend:
          service:
            name: auth-service
            port:
              number: 3001
      - path: /design
        pathType: Prefix
        backend:
          service:
            name: design-service
            port:
              number: 3003
      - path: /web
        pathType: Prefix
        backend:
          service:
            name: webgen-service
            port:
              number: 3004
      - path: /video
        pathType: Prefix
        backend:
          service:
            name: video-service
            port:
              number: 3002
EOF

# Application des HPA (Horizontal Pod Autoscalers)
echo "📈 Configuration de l'auto-scaling (HPA)..."
kubectl apply -f - <<EOF
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: auth-hpa
  namespace: zaksoft
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: auth-service
  minReplicas: 2 # Reduced minReplicas for faster testing/dev if needed
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: video-hpa
  namespace: zaksoft
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: video-service
  minReplicas: 2
  maxReplicas: 15
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  # - type: Pods # Requires custom metrics setup for BullMQ queue length
  #   pods:
  #     metric:
  #       name: bullmq_queue_length
  #     target:
  #       type: AverageValue
  #       averageValue: 50
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: frontend-hpa
  namespace: zaksoft
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: frontend
  minReplicas: 2
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 80
EOF

echo "⏳ Attente de la finalisation des déploiements (30s)..."
sleep 30

# Vérification finale
echo ""
echo "✅ Déploiement terminé !"
echo ""
echo "📊 Statut des pods :"
kubectl get pods -n zaksoft
echo ""
echo "🔌 Services exposés :"
kubectl get svc -n zaksoft
echo ""
echo "🌐 Ingress :"
kubectl get ingress -n zaksoft
echo ""
echo "🚀 Pour accéder à l'application :"
echo "   kubectl port-forward -n zaksoft svc/frontend-service 8080:80"
echo "   Puis ouvrir http://localhost:8080"
echo ""
echo "💡 Pour exécuter le script de monitoring :"
echo "   ./scripts/k8s-monitor.sh"
