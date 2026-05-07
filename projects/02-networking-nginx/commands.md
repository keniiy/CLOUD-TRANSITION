# Commands Used

This file tracks the exact commands used during the Networking, Nginx, DNS, and HTTPS stage.

## 1. Confirm API Is Running On EC2

Run from the EC2 server:

```bash
pm2 list
curl http://localhost:3000/health
```

## 2. Install Nginx

Run from the EC2 server:

```bash
sudo apt update
sudo apt install -y nginx
nginx -v
```
