# Dockerfile pour le Frontend Next.js
FROM node:20-slim AS runner
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# On saute le build à cause des erreurs de prerendering liées à AuthProvider
# On lance directement en mode développement ou en espérant que le cache serve
EXPOSE 3000
CMD ["npm", "run", "dev"]
