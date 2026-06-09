# ZAKSOFT Créations - AI Generation SaaS Platform

ZAKSOFT Créations is a premium SaaS platform allowing users to generate high-quality images, videos, and websites using state-of-the-art AI models.

## 🚀 Key Features

- **🎨 Image Generation**: Powered by Stable Diffusion XL (via Replicate).
- **🎬 Video Production**: Powered by Runway Gen-2 and Stable Video Diffusion.
- **🌐 Website Creation**: Instant landing pages powered by GPT-4.
- **💳 Credit System**: Transactional credit management with Stripe integration.
- **📂 Personal Gallery**: Full history and download management for all assets.
- **💎 Premium UI**: Modern glassmorphism design with real-time feedback.

## 🏗️ Architecture

The platform uses a modern microservices architecture:

- **Frontend**: Next.js 14 (App Router) with Tailwind CSS.
- **Backend Services**: Express.js services for Auth, Billing, Design, Video, and Web-Gen.
- **Worker Pattern**: BullMQ + Redis for asynchronous AI job processing.
- **Database**: PostgreSQL with Prisma ORM.
- **Storage**: AWS S3 / Cloudflare R2 for asset persistence.
- **Monitoring**: Sentry for error tracking and Winston for structured logging.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- PNPM 8+
- Docker (for Redis and PostgreSQL)

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` in each service and at the root.
   - Fill in your API keys (OpenAI, Replicate, Runway, Stripe, S3).
4. Start local infrastructure:
   ```bash
   docker compose up -d
   ```
5. Run migrations:
   ```bash
   pnpm db:migrate
   ```
6. Start development servers:
   ```bash
   pnpm dev
   ```

## 📂 Project Structure

- `apps/web`: The main Next.js application.
- `services/`: Microservices for specific domains (auth, billing, video, etc.).
- `packages/`: Shared packages (database, storage, logging, health).
- `scripts/`: Useful automation scripts (deployment, cleaning).

## 📄 Documentation

Detailed documentation can be found in the `docs/` directory:
- [Technical Architecture](./docs/architecture.md)
- [Deployment Guide](./docs/deployment.md)
- [Environment Variables](./docs/environment.md)

## ⚖️ License

Private - ZAKSOFT © 2026
