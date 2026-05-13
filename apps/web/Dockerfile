# Dockerfile pour le frontend (Next.js)
FROM node:20-slim

# Installer pnpm
RUN npm install -g pnpm@8.15.0

WORKDIR /app

# Copier les fichiers de dépendances (si build depuis apps/web)
# Note: Dans un monorepo, il est préférable d'avoir accès au lockfile racine.
COPY package.json ./
# Si vous avez un pnpm-lock.yaml local ou si vous copiez celui de la racine
# COPY pnpm-lock.yaml ./ 

RUN pnpm install --prod=false

# Copier tout le code source (respecte .dockerignore)
COPY . .

# Faire le build Next.js
RUN pnpm run build

# Créer un utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production

# Utiliser next start pour lancer l'application
CMD ["pnpm", "start"]
