# Commands Used

This file tracks the exact commands used during the Linux Server Fundamentals stage.

## 1. Local API Setup

Run from the local machine:

```bash
cd ~/Desktop/CLOUD\ TRANSITION/services/node-api-service

npm init -y
npm install express dotenv
npm install -D typescript ts-node-dev @types/node @types/express
npx tsc --init

mkdir src
touch src/index.ts
touch .env.example