FROM node:20-slim
RUN apt-get update -y && apt-get install -y openssl libssl-dev && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate --schema ./prisma/schema.prisma
EXPOSE 3005
CMD ["npx", "ts-node", "src/index.ts"]
