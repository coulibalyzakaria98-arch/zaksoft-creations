# Dockerfile pour le service Auth
FROM node:20-slim

# Installer OpenSSL (nécessaire pour Prisma)
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copier les fichiers de dépendances ET le dossier prisma
COPY package*.json ./
COPY prisma ./prisma/

# Installer les dépendances (le postinstall pourra générer le client)
RUN npm install

# Copier le reste du code
COPY . .

# Générer le client Prisma (au cas où)
RUN npx prisma generate

EXPOSE 3001

ENV PORT 3001
ENV NODE_ENV production

CMD ["npm", "run", "start"]
