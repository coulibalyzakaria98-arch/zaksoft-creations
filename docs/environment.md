# Environment Variables Reference

This document lists all the environment variables required to run ZAKSOFT Créations.

## Core Application
| Variable | Description | Example |
| :--- | :--- | :--- |
| `NODE_ENV` | Current environment | `production`, `development` |
| `NEXT_PUBLIC_APP_URL` | Frontend base URL | `https://zaksoft.com` |

## Persistence
| Variable | Description | Example |
| :--- | :--- | :--- |
| `DATABASE_URL` | PostgreSQL connection URL | `postgresql://...` |
| `REDIS_URL` | Redis connection URL | `redis://...` |

## Authentication
| Variable | Description | Example |
| :--- | :--- | :--- |
| `JWT_SECRET` | Secret key for JWT signing | `your_secret_key` |
| `NEXTAUTH_SECRET` | Secret key for NextAuth sessions | `your_secret_key` |

## Stripe (Payments)
| Variable | Description | Example |
| :--- | :--- | :--- |
| `STRIPE_SECRET_KEY` | Stripe private key | `sk_live_...` |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook verification key | `whsec_...` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe public key | `pk_live_...` |
| `STRIPE_BASIC_PRICE_ID` | Price ID for Basic plan | `price_...` |
| `STRIPE_PRO_PRICE_ID` | Price ID for Pro plan | `price_...` |
| `STRIPE_ENTERPRISE_PRICE_ID` | Price ID for Enterprise plan | `price_...` |

## AI APIs
| Variable | Description | Example |
| :--- | :--- | :--- |
| `REPLICATE_API_KEY` | Replicate token | `r8_...` |
| `RUNWAY_API_KEY` | Runway token | `rw_...` |
| `OPENAI_API_KEY` | OpenAI secret key | `sk-proj_...` |
| `ELEVENLABS_API_KEY` | ElevenLabs API key | `...` |

## Storage (S3)
| Variable | Description | Example |
| :--- | :--- | :--- |
| `S3_ACCESS_KEY_ID` | S3 Access Key | `...` |
| `S3_SECRET_ACCESS_KEY` | S3 Secret Key | `...` |
| `S3_BUCKET` | Bucket name | `zaksoft-prod` |
| `S3_REGION` | Bucket region | `eu-west-3` |
| `S3_ENDPOINT` | Custom endpoint (for R2) | `https://...` |

## Monitoring
| Variable | Description | Example |
| :--- | :--- | :--- |
| `SENTRY_DSN` | Sentry Data Source Name | `https://...` |
| `LOG_LEVEL` | Logging level | `info`, `debug`, `error` |
