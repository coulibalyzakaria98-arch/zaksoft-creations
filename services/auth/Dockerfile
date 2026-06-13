# ============================================
# STAGE 1: Builder
# ============================================
FROM node:20-slim AS builder

# Install pnpm and build tools
RUN npm install -g pnpm@8.15.0 && \
    apt-get update && \
    apt-get install -y python3 make g++ && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy the entire monorepo to ensure pnpm can link workspaces correctly
COPY . .

# Install dependencies and build
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @zaksoft/database build
RUN pnpm --filter @zaksoft/health build
RUN pnpm --filter @zaksoft/logging build
RUN pnpm --filter @zaksoft/auth build

# ============================================
# STAGE 2: Final Image
# ============================================
FROM node:20-slim
RUN npm install -g pnpm@8.15.0

WORKDIR /app

# Copy production node_modules and workspace files
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/pnpm-workspace.yaml ./pnpm-workspace.yaml

# Copy shared packages
COPY --from=builder /app/packages/database/dist ./packages/database/dist
COPY --from=builder /app/packages/database/generated-client ./packages/database/generated-client
COPY --from=builder /app/packages/database/package.json ./packages/database/package.json
COPY --from=builder /app/packages/health/dist ./packages/health/dist
COPY --from=builder /app/packages/health/package.json ./packages/health/package.json
COPY --from=builder /app/packages/logging/dist ./packages/logging/dist
COPY --from=builder /app/packages/logging/package.json ./packages/logging/package.json

# Copy the specific service
COPY --from=builder /app/services/auth/dist ./services/auth/dist
COPY --from=builder /app/services/auth/package.json ./services/auth/package.json
COPY --from=builder /app/services/auth/start.sh ./services/auth/start.sh

# Ensure start script is executable
RUN chmod +x ./services/auth/start.sh

EXPOSE 3001
CMD ["./services/auth/start.sh"]
