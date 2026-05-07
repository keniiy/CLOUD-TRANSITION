# Nginx Config

## Project Goal

Use Nginx as a reverse proxy so public requests on port `80` are forwarded to the Node.js API on `localhost:3000`.

## Active Site File

```text
/etc/nginx/sites-available/node-api
```

## Config Used

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name 3.11.8.243;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Why This Config Matters

- `listen 80` accepts public HTTP traffic
- `proxy_pass` forwards traffic to the internal app
- forwarded headers preserve request context for logs and debugging

## Enablement Commands

```bash
sudo ln -s /etc/nginx/sites-available/node-api /etc/nginx/sites-enabled/node-api
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

## Validation Commands

```bash
curl http://localhost/health
curl http://3.11.8.243/health
```
# Nginx Config

This file documents the reverse proxy config used to expose the Node.js API through Nginx.

## Active Site File

```text
/etc/nginx/sites-available/node-api
```

## Config Content

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name 3.11.8.243;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Why These Settings Matter

- `listen 80` accepts public HTTP traffic.
- `server_name` matches the current public IP.
- `proxy_pass` forwards requests internally to the app on `localhost:3000`.
- `X-Forwarded-*` headers preserve client and protocol context for app logs.

## Enablement Steps

```bash
sudo ln -s /etc/nginx/sites-available/node-api /etc/nginx/sites-enabled/node-api
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

## Validation

```bash
curl http://localhost/health
curl http://3.11.8.243/health
```

Expected result: API health response through Nginx on port `80`.
