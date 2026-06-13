FROM node:20-slim AS builder

# Install pnpm
RUN npm install -g pnpm@8.15.0

WORKDIR /app

# Copy workspace configuration and lockfile
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

# Copy all package.json files to allow for partial install
# This is a bit tedious in a Dockerfile without a helper script, 
# but we can copy the relevant directories' package.json
COPY packages/database/package.json ./packages/database/
COPY packages/health/package.json ./packages/health/
COPY packages/logging/package.json ./packages/logging/
COPY services/auth/package.json ./services/auth/

# Install dependencies (only what's needed for the workspace)
RUN pnpm install --frozen-lockfile

# Copy the source code for the relevant packages
COPY packages/database ./packages/database
COPY packages/health ./packages/health
COPY packages/logging ./packages/logging
COPY services/auth ./services/auth

# Build the packages
RUN pnpm --filter @zaksoft/database build
RUN pnpm --filter @zaksoft/health build
RUN pnpm --filter @zaksoft/logging build
RUN pnpm --filter @zaksoft/auth build

# Final stage
FROM node:20-slim
WORKDIR /app

# Install production dependencies only
RUN npm install -g pnpm@8.15.0

# Copy workspace files
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages/database/package.json ./packages/database/
COPY packages/health/package.json ./packages/health/
COPY packages/logging/package.json ./packages/logging/
COPY services/auth/package.json ./services/auth/

# Install production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy built assets
COPY --from=builder /app/packages/database/dist ./packages/database/dist
COPY --from=builder /app/packages/database/generated-client ./packages/database/generated-client
COPY --from=builder /app/packages/health/dist ./packages/health/dist
COPY --from=builder /app/packages/logging/dist ./packages/logging/dist
COPY --from=builder /app/services/auth/dist ./services/auth/dist

# Expose the port
EXPOSE 3001

# Start script to run migrations and then the app
RUN echo '#!/bin/sh\npnpm --filter @zaksoft/database db:push\nnode services/auth/dist/index.js' > /app/start.sh && chmod +x /app/start.sh

# Start the application
CMD ["/app/start.sh"]
