# Dockerfile avec build intégré
FROM node:20-slim

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json ./
RUN npm install && npm cache clean --force

# Copier tout le code source
COPY . .

# Faire le build Next.js dans Docker
RUN npm run build

# Créer un utilisateur non-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production

CMD ["npm", "start"]
