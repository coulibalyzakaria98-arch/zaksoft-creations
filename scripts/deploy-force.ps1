# scripts/deploy-force.ps1

Write-Host "🧹 Nettoyage des caches locaux..." -ForegroundColor Cyan
Remove-Item -Path ".next", ".turbo", "apps/web/.next", "apps/web/.turbo" -Recurse -Force -ErrorAction SilentlyContinue
Get-ChildItem -Path "packages" -Directory | ForEach-Object {
    Remove-Item -Path "$($_.FullName)\.turbo" -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host "📦 Rebuild complet sans cache..." -ForegroundColor Cyan
pnpm install --frozen-lockfile
pnpm build --no-cache

Write-Host "🚀 Déploiement forcé vers Vercel..." -ForegroundColor Cyan
npx vercel --prod --force

Write-Host "✅ Déploiement terminé" -ForegroundColor Green
Write-Host "⚠️ N'oubliez pas de faire Ctrl+Shift+R sur votre navigateur" -ForegroundColor Yellow
