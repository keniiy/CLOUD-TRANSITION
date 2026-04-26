# Linux Server Fundamentals

## Project Goal

Deploy and manage a simple TypeScript/Node.js API on a Linux server.

This project starts locally, then moves to a remote Ubuntu server where the API will be deployed, managed as a long-running process, logged, restarted, and exposed safely.

## API Endpoints

- `GET /`
- `GET /health`
- `GET /info`

## Current Status

- [x] Created local TypeScript/Node.js API
- [ ] Tested locally
- [ ] Provisioned Linux server
- [ ] Connected using SSH
- [ ] Installed Node.js on server
- [ ] Deployed API to server
- [ ] Managed API with pm2 or systemd
- [ ] Configured firewall
- [ ] Checked logs
- [ ] Documented errors and fixes