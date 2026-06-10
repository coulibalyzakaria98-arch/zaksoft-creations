# ============================================
# ZAKSOFT Créations - Cleanup & Restore Script
# ============================================
# Objectif : Nettoyer complètement l'environnement
# et restaurer une base saine
# ============================================

param(
    [switch]$DryRun = $false,  # Mode simulation (ne supprime rien)
    [switch]$SkipBuild = $false # Skip build after install
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ZAKSOFT Créations - Cleanup & Restore  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($DryRun) {
    Write-Host "WARNING: MODE DRY RUN - Aucune modification réelle" -ForegroundColor Yellow
    Write-Host ""
}

# ============================================
# 1. STOP - Arrêter les processus
# ============================================
Write-Host "INFO: [1/6] Arrêt des processus..." -ForegroundColor Yellow

if (-not $DryRun) {
    # Arrêter les processus Node.js
    Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force
    Get-Process -Name "turbo" -ErrorAction SilentlyContinue | Stop-Process -Force
    Get-Process -Name "pnpm" -ErrorAction SilentlyContinue | Stop-Process -Force
    Write-Host "   SUCCESS: Processus arrêtés" -ForegroundColor Green
} else {
    Write-Host "   [DRY RUN] Killing node/turbo/pnpm processes" -ForegroundColor DarkGray
}

# ============================================
# 2. CLEAN - Supprimer les artefacts
# ============================================
Write-Host ""
Write-Host "INFO: [2/6] Nettoyage des artefacts..." -ForegroundColor Yellow

$foldersToRemove = @(
    "node_modules",
    "apps/*/node_modules",
    "packages/*/node_modules", 
    "services/*/node_modules",
    "apps/*/.next",
    "apps/*/.turbo",
    "packages/*/.turbo",
    "services/*/.turbo",
    "services/*/dist",
    "packages/*/dist",
    "apps/*/dist",
    "**/prisma/generated"
)

$filesToRemove = @(
    "pnpm-lock.yaml",
    "**/tsconfig.tsbuildinfo",
    "**/prisma/schema.prisma.backup*"
)

# Supprimer les dossiers
foreach ($pattern in $foldersToRemove) {
    $removed = 0
    Get-ChildItem -Path $pattern -Recurse -ErrorAction SilentlyContinue | ForEach-Object {
        if (-not $DryRun) {
            Remove-Item -Path $_.FullName -Recurse -Force -ErrorAction SilentlyContinue
            Write-Host "   DELETED: $($_.FullName)" -ForegroundColor DarkGray
        } else {
            Write-Host "   [DRY RUN] Would delete: $($_.FullName)" -ForegroundColor DarkGray
        }
        $removed++
    }
    if ($removed -eq 0 -and $DryRun) {
        Write-Host "   [DRY RUN] Would check: $pattern" -ForegroundColor DarkGray
    }
}

# Supprimer les fichiers
foreach ($pattern in $filesToRemove) {
    Get-ChildItem -Path $pattern -Recurse -ErrorAction SilentlyContinue | ForEach-Object {
        if (-not $DryRun) {
            Remove-Item -Path $_.FullName -Force -ErrorAction SilentlyContinue
            Write-Host "   DELETED: $($_.FullName)" -ForegroundColor DarkGray
        } else {
            Write-Host "   [DRY RUN] Would delete: $($_.FullName)" -ForegroundColor DarkGray
        }
    }
}

if (-not $DryRun) {
    Write-Host "   SUCCESS: Nettoyage terminé" -ForegroundColor Green
}

# ============================================
# 3. PRUNE - Nettoyer le cache pnpm
# ============================================
Write-Host ""
Write-Host "INFO: [3/6] Nettoyage du cache pnpm..." -ForegroundColor Yellow

if (-not $DryRun) {
    try {
        pnpm store prune
        Write-Host "   SUCCESS: Cache pnpm nettoyé" -ForegroundColor Green
    }
    catch {
        Write-Host "   WARNING: pnpm non trouvé, vérification de l'installation..." -ForegroundColor Yellow
    }
} else {
    Write-Host "   [DRY RUN] Would run: pnpm store prune" -ForegroundColor DarkGray
}

# ============================================
# 4. INSTALL - Réinstaller les dépendances
# ============================================
Write-Host ""
Write-Host "INFO: [4/6] Réinstallation des dépendances..." -ForegroundColor Yellow

if (-not $DryRun) {
    try {
        Write-Host "   EXEC: pnpm install..." -ForegroundColor DarkGray
        pnpm install --no-frozen-lockfile
        Write-Host "   SUCCESS: Dépendances installées" -ForegroundColor Green
    }
    catch {
        Write-Host "   ERROR: Erreur lors de pnpm install" -ForegroundColor Red
        Write-Host "   Details: $_" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "   [DRY RUN] Would run: pnpm install --no-frozen-lockfile" -ForegroundColor DarkGray
}

# ============================================
# 5. GENERATE - Générer les clients Prisma
# ============================================
Write-Host ""
Write-Host "INFO: [5/6] Génération des clients Prisma..." -ForegroundColor Yellow

if (-not $DryRun -and (-not $SkipBuild)) {
    # Détecter tous les schémas Prisma
    $prismaSchemas = Get-ChildItem -Path "packages/*/prisma/schema.prisma" -Recurse -ErrorAction SilentlyContinue
    $prismaSchemas += Get-ChildItem -Path "services/*/prisma/schema.prisma" -Recurse -ErrorAction SilentlyContinue
    $prismaSchemas += Get-ChildItem -Path "apps/*/prisma/schema.prisma" -Recurse -ErrorAction SilentlyContinue
    
    foreach ($schema in $prismaSchemas) {
        $dir = Split-Path $schema.FullName -Parent
        $parentDir = Split-Path $dir -Parent
        Write-Host "   GENERATING for: $parentDir" -ForegroundColor DarkGray
        
        try {
            Push-Location $parentDir
            npx prisma generate --schema=./prisma/schema.prisma
            Pop-Location
        }
        catch {
            Write-Host "   WARNING: Erreur sur $parentDir" -ForegroundColor Yellow
            Pop-Location
        }
    }
    Write-Host "   SUCCESS: Clients Prisma générés" -ForegroundColor Green
} elseif ($DryRun) {
    Write-Host "   [DRY RUN] Would generate Prisma clients" -ForegroundColor DarkGray
}

# ============================================
# 6. VERIFY - Vérification du build
# ============================================
Write-Host ""
Write-Host "INFO: [6/6] Vérification du build..." -ForegroundColor Yellow

if (-not $DryRun -and (-not $SkipBuild)) {
    try {
        Write-Host "   BUILD: Exécution: pnpm run build..." -ForegroundColor DarkGray
        
        pnpm run build
        
        Write-Host "   SUCCESS: Build réussi" -ForegroundColor Green
    }
    catch {
        Write-Host "   WARNING: Le build a échoué" -ForegroundColor Yellow
    }
}

# ============================================
# RAPPORT FINAL
# ============================================
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
if ($DryRun) {
    Write-Host "  MODE DRY RUN - Aucune modification" -ForegroundColor Yellow
} else {
    Write-Host "  SUCCESS: CLEANUP TERMINÉ AVEC SUCCÈS" -ForegroundColor Green
}
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
