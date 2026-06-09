# scripts/deploy-all.ps1

Write-Host "🧹 Nettoyage des caches..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .turbo -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force apps/web/.next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force apps/web/.turbo -ErrorAction SilentlyContinue

Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
pnpm install --frozen-lockfile

Write-Host "🏗️ Build du projet..." -ForegroundColor Yellow
pnpm build --no-cache

Write-Host "🚀 Déploiement forcé vers Vercel..." -ForegroundColor Yellow
npx vercel --prod --force

Write-Host "✅ Déploiement terminé !" -ForegroundColor Green
Write-Host "⚠️ N'oubliez pas : Ctrl+Shift+R sur votre navigateur" -ForegroundColor Yellow
