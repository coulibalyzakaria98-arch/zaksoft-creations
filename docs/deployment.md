# Deployment Guide

ZAKSOFT Créations is designed to be deployed across multiple platforms for maximum performance and cost-efficiency.

## 1. Frontend (Vercel)
The Next.js frontend is optimized for **Vercel**.
- **Build Command**: `pnpm build`
- **Output Directory**: `.next`
- **Environment Variables**: Add all `NEXT_PUBLIC_*` and server-side keys (JWT_SECRET, etc.).

## 2. Backend Services (Railway / Fly.io / DigitalOcean)
Express services can be deployed as Docker containers.
- **Dockerfiles**: Each service has its own `.dockerignore`.
- **Scaling**: Increase instances for `Design`, `Video`, and `WebGen` services based on traffic.
- **Port mapping**: Ensure internal ports match the service configuration.

## 3. Database (Neon / Supabase / RDS)
Use a managed PostgreSQL instance for production.
- **Migrations**: Run `pnpm prisma migrate deploy` during the build process.
- **Connection Pooling**: Use `DIRECT_URL` for migrations and a connection pooler URL for regular traffic.

## 4. Redis (Upstash / Redis Labs)
Required for BullMQ.
- **BullMQ Requirements**: Ensure Redis has `maxmemory-policy` set to `noeviction` for reliable job processing.

## 5. Storage (Cloudflare R2 / AWS S3)
Recommended: **Cloudflare R2** for zero egress fees.
- **Permissions**: The API key must have `PutObject` and `GetObject` permissions.
- **Public URL**: Configure a custom domain or S3 bucket URL to serve assets.

## 6. Monitoring (Sentry)
1. Create a Sentry project for each service.
2. Add `SENTRY_DSN` to your environment variables.
3. Errors will be automatically captured in the dashboard.
