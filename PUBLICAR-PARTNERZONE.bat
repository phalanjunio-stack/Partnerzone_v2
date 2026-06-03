@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================
echo   PUBLICAR catalogo no PartnerZone (vitrine)
echo ============================================
echo.
echo Lendo o catalog.json gerado pelo servidor e publicando no site...
echo.
node scripts\publish-catalog.js %*
echo.
echo ----- fim -----
pause
