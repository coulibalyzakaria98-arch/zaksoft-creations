FROM node:20-slim AS builder
RUN npm install -g pnpm@8.15.0
WORKDIR /app
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages/database/package.json ./packages/database/
COPY packages/health/package.json ./packages/health/
COPY packages/logging/package.json ./packages/logging/
COPY packages/storage/package.json ./packages/storage/
COPY services/design/package.json ./services/design/
RUN pnpm install --frozen-lockfile
COPY packages/database ./packages/database
COPY packages/health ./packages/health
COPY packages/logging ./packages/logging
COPY packages/storage ./packages/storage
COPY services/design ./services/design
RUN pnpm --filter @zaksoft/database build
RUN pnpm --filter @zaksoft/health build
RUN pnpm --filter @zaksoft/logging build
RUN pnpm --filter @zaksoft/storage build
RUN pnpm --filter @zaksoft/design build

FROM node:20-slim
WORKDIR /app
RUN npm install -g pnpm@8.15.0
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages/database/package.json ./packages/database/
COPY packages/health/package.json ./packages/health/
COPY packages/logging/package.json ./packages/logging/
COPY packages/storage/package.json ./packages/storage/
COPY services/design/package.json ./services/design/
RUN pnpm install --prod --frozen-lockfile
COPY --from=builder /app/packages/database/dist ./packages/database/dist
COPY --from=builder /app/packages/database/generated-client ./packages/database/generated-client
COPY --from=builder /app/packages/health/dist ./packages/health/dist
COPY --from=builder /app/packages/logging/dist ./packages/logging/dist
COPY --from=builder /app/packages/storage/dist ./packages/storage/dist
COPY --from=builder /app/services/design/dist ./services/design/dist
EXPOSE 3003
CMD ["node", "services/design/dist/worker.js"]
