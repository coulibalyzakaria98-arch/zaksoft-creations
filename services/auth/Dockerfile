# Dockerfile pour le service Auth
FROM node:20-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./
# Copier le schéma Prisma AVANT npm install pour que postinstall fonctionne
COPY prisma ./prisma/

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Générer le client Prisma au cas où
RUN npx prisma generate

EXPOSE 3001

ENV PORT 3001
ENV NODE_ENV production

CMD ["npm", "run", "start"]
