@echo off
echo Starting SHH session...

set "COMAND1=cd /home/resources && git pull"
set "COMAND2=docker compose build"
set "COMAND3=docker compose down"
set "COMAND4=docker compose up -d"
set "COMAND5=docker compose ps -a"
set "COMAND6=docker logs nginx"

set "FULL_COMMAND=%COMAND1% && %COMAND2% && %COMAND3% && %COMAND4% && %COMAND5% && %COMAND6%"

ssh root@ip_address "%FULL_COMMAND%"

if %ERRORLEVEL% neq 0 (
    echo Error：SSH command failed width error code %ERRORLEVEL%.
) else (
    echo Done.
)