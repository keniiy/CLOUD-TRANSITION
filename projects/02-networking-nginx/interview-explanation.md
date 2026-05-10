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
