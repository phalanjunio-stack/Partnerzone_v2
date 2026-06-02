@echo off
chcp 65001 >nul
title PartnerZone NOVODESIGN - Servidor local
cd /d "%~dp0site"

echo.
echo  ====================================================
echo    PartnerZone (NOVODESIGN) - servidor local
echo  ----------------------------------------------------
echo    Pasta : %cd%
echo    URL   : http://localhost:4321
echo  ====================================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo  [ERRO] Node.js nao encontrado.
  echo  Instale em https://nodejs.org e tente de novo.
  echo.
  pause
  exit /b 1
)

echo  Abrindo o navegador em ~2s...
start "" cmd /c "timeout /t 2 >nul & start "" http://localhost:4321"

echo  Iniciando o servidor... (feche esta janela ou Ctrl+C para parar)
echo.
npx --yes serve -l 4321 .

echo.
echo  Servidor encerrado.
pause
