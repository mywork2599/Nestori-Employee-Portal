@echo off
cd /d "%~dp0"
git remote set-url origin https://github.com/mywork2599/Nestori-Employee-Portal.git
:loop
git add .
git commit -m "Auto update from VS Code"
git push
timeout /t 120 >nul
goto loop
