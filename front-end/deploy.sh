#!/bin/bash
echo "Starting SHH session..."
ssh root@ip_address "cd /home/resources && git pull && docker compose build && docker compose down && docker compose up -d && docker compose ps -a && docker logs nginx"
echo "Done."