#!/bin/bash
SERVICES=("video" "design" "web-gen" "api-portal" "teams" "marketplace" "analytics" "billing" "notifications")

for service in "${SERVICES[@]}"; do
  echo "📦 Processing $service..."
  
  # Ensure the service directory exists
  if [ ! -d "services/$service" ]; then
    echo "⚠️ Service $service not found, skipping."
    continue
  fi

  # Add dependencies using pnpm
  cd services/$service
  pnpm add @zaksoft/health@workspace:* @zaksoft/logging@workspace:*
  
  cd ../..
done

echo "✅ Health checks and logging dependencies added to all services"
