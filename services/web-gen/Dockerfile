FROM node:20-slim AS builder
RUN npm install -g pnpm@8.15.0
WORKDIR /app
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages/database/package.json ./packages/database/
COPY packages/health/package.json ./packages/health/
COPY packages/logging/package.json ./packages/logging/
COPY packages/storage/package.json ./packages/storage/
COPY services/web-gen/package.json ./services/web-gen/
RUN pnpm install --frozen-lockfile
COPY packages/database ./packages/database
COPY packages/health ./packages/health
COPY packages/logging ./packages/logging
COPY packages/storage ./packages/storage
COPY services/web-gen ./services/web-gen
RUN pnpm --filter @zaksoft/database build
RUN pnpm --filter @zaksoft/health build
RUN pnpm --filter @zaksoft/logging build
RUN pnpm --filter @zaksoft/storage build
RUN pnpm --filter @zaksoft/web-gen build

FROM node:20-slim
WORKDIR /app
RUN npm install -g pnpm@8.15.0
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages/database/package.json ./packages/database/
COPY packages/health/package.json ./packages/health/
COPY packages/logging/package.json ./packages/logging/
COPY packages/storage/package.json ./packages/storage/
COPY services/web-gen/package.json ./services/web-gen/
RUN pnpm install --prod --frozen-lockfile
COPY --from=builder /app/packages/database/dist ./packages/database/dist
COPY --from=builder /app/packages/database/generated-client ./packages/database/generated-client
COPY --from=builder /app/packages/health/dist ./packages/health/dist
COPY --from=builder /app/packages/logging/dist ./packages/logging/dist
COPY --from=builder /app/packages/storage/dist ./packages/storage/dist
COPY --from=builder /app/services/web-gen/dist ./services/web-gen/dist
EXPOSE 3004
CMD ["node", "services/web-gen/dist/worker.js"]
