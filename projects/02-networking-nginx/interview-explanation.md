# Interview Explanation

## Stage 2 Goal

In this stage, I am introducing Nginx as a reverse proxy in front of the Node.js API.

The goal is to stop exposing the application directly on port `3000` and expose HTTP on port `80` instead.

## Architecture Before

```text
Client -> EC2 public IP:3000 -> Node.js API
```

## Target Architecture

```text
Client -> EC2 public IP:80 -> Nginx -> localhost:3000 -> Node.js API
```

## Why This Change Matters

- public traffic uses standard web port `80`
- app runtime port `3000` stays internal
- Nginx becomes the edge layer for routing and logging
- setup is ready for DNS and HTTPS on `443`

## Validation Plan

I will validate this stage by:

- confirming API health on `localhost:3000`
- installing and starting Nginx
- creating and enabling reverse proxy config
- validating config with `sudo nginx -t`
- testing `http://3.11.8.243/health` from EC2 and Mac
- removing public security group access to `3000`
- re-testing endpoint through Nginx

## Error Handling Plan

If I see `502 Bad Gateway`, I will check:

1. Is the app running (`pm2 list`)?
2. Is upstream reachable (`curl http://localhost:3000/health`)?
3. Is Nginx config valid (`sudo nginx -t`)?
4. What do Nginx error logs show?
# Interview Explanation

## Stage 2 Goal

In this stage, I introduced Nginx as a reverse proxy in front of the Node.js API.

The target was to stop exposing the application directly on port `3000` and instead expose HTTP on port `80`.

## Architecture Before

```text
Client -> EC2 public IP:3000 -> Node.js API
```

## Architecture After

```text
Client -> EC2 public IP:80 -> Nginx -> localhost:3000 -> Node.js API
```

## Why This Change Matters

- public traffic now uses standard web port `80`
- app runtime port `3000` stays internal
- Nginx becomes the edge layer for routing and logging
- the setup is ready for DNS and HTTPS on `443`

## Validation I Performed

- verified API health on `localhost:3000`
- installed and started Nginx
- created and enabled reverse proxy config
- validated config with `sudo nginx -t`
- tested `http://3.11.8.243/health` from EC2 and Mac
- removed public security group access to `3000`
- re-tested endpoint through Nginx

## How I Debug Common Failures

If I see `502 Bad Gateway`, I check:

1. Is the app running (`pm2 list`)?
2. Is upstream reachable (`curl http://localhost:3000/health`)?
3. Is Nginx config valid (`sudo nginx -t`)?
4. What do Nginx error logs show?

This gives a repeatable troubleshooting path for reverse proxy issues.
# Interview Explanation

## Stage 2 Overview

In Stage 2, I introduced Nginx as a reverse proxy in front of my Node.js API.

Before this change, clients accessed the API directly on port `3000`.
Now clients use port `80`, and Nginx forwards requests internally to `localhost:3000`.

## Problem Being Solved

Directly exposing application runtime ports is acceptable for initial testing, but not a clean production-style design.

I wanted a standard web entry point where:

- clients connect over HTTP/HTTPS ports,
- the app runs on an internal port,
- proxying, logging, and later TLS are handled at the edge.

## Architecture Before

```text
Client -> EC2 public IP:3000 -> Node.js API
```

## Architecture After

```text
Client -> EC2 public IP:80 -> Nginx -> localhost:3000 -> Node.js API
```

## Key Nginx Behavior

Nginx terminates the incoming HTTP connection and forwards traffic to the upstream app using `proxy_pass`.

I also set forwarded headers so the upstream app can inspect client and protocol metadata.

## Security And Operations Impact

- Public access moved to standard web port `80`.
- Port `3000` no longer needs public exposure.
- Logs are visible in Nginx access/error logs.
- The setup is ready for DNS and HTTPS (`443`) in the next phase.

## How I Validated It

- Confirmed Node API health on `localhost:3000`.
- Confirmed Nginx health and config syntax with `nginx -t`.
- Tested `http://3.11.8.243/health` from EC2 and from Mac.
- Removed public security group access to `3000`.
- Re-validated API still works through Nginx.

## Common Failure Mode I Can Debug

If I get `502 Bad Gateway`, I check:

1. Is the Node app running (`pm2 list`)?
2. Is upstream reachable (`curl http://localhost:3000/health`)?
3. Is Nginx config valid (`sudo nginx -t`)?
4. What do `/var/log/nginx/error.log` and access logs show?

This gives me a repeatable path to restore service quickly.
