# Dockerfile
FROM node:20-slim

# Installer les dépendances système nécessaires pour Prisma
RUN apt-get update -y && apt-get install -y openssl libssl-dev && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Générer le client Prisma
RUN npx prisma generate

# Exposer le port
EXPOSE 3001

# Démarrer avec ts-node
CMD ["npx", "ts-node", "src/index.ts"]
