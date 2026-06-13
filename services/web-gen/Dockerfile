# ============================================
# STAGE 1: Builder
# ============================================
FROM node:20-slim AS builder
RUN npm install -g pnpm@8.15.0 && \
    apt-get update && \
    apt-get install -y python3 make g++ && \
    rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @zaksoft/database build
RUN pnpm --filter @zaksoft/health build
RUN pnpm --filter @zaksoft/logging build
RUN pnpm --filter @zaksoft/storage build
RUN pnpm --filter @zaksoft/web-gen build

# ============================================
# STAGE 2: Final Image
# ============================================
FROM node:20-slim
RUN npm install -g pnpm@8.15.0
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/packages/database/dist ./packages/database/dist
COPY --from=builder /app/packages/database/generated-client ./packages/database/generated-client
COPY --from=builder /app/packages/database/package.json ./packages/database/package.json
COPY --from=builder /app/packages/health/dist ./packages/health/dist
COPY --from=builder /app/packages/health/package.json ./packages/health/package.json
COPY --from=builder /app/packages/logging/dist ./packages/logging/dist
COPY --from=builder /app/packages/logging/package.json ./packages/logging/package.json
COPY --from=builder /app/packages/storage/dist ./packages/storage/dist
COPY --from=builder /app/packages/storage/package.json ./packages/storage/package.json
COPY --from=builder /app/services/web-gen/dist ./services/web-gen/dist
COPY --from=builder /app/services/web-gen/package.json ./services/web-gen/package.json
COPY --from=builder /app/services/web-gen/start.sh ./services/web-gen/start.sh
RUN chmod +x ./services/web-gen/start.sh
EXPOSE 3004
CMD ["./services/web-gen/start.sh"]
