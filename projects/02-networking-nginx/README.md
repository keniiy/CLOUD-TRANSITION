# Networking, Nginx, DNS, and HTTPS

## Project Goal

Expose the existing Node.js API through Nginx instead of accessing the app directly on port `3000`.

Before this stage, the API was accessed externally through:

```text
http://3.11.8.243:3000/health
```

In this stage, Nginx will receive public HTTP traffic on port `80` and forward requests internally to the Node.js API running on `localhost:3000`.

Target access:

```text
http://3.11.8.243/health
```

## Why This Stage Matters

In Stage 1, I proved that the Node.js API can run on an Ubuntu EC2 server.

That direct setup looked like this:

```text
Browser / Mac
  ->
EC2 public IP on port 3000
  ->
Node.js API
```

This works for learning, but it is not a clean production-style entry point.

In production-style systems, users usually access applications through standard web ports:

- HTTP: 80
- HTTPS: 443

The application itself can keep running on an internal runtime port such as 3000.

Nginx sits in front of the app and forwards traffic to it.

## API Endpoints

- `GET /`
- `GET /health`
- `GET /info`

## Current Status

- [x] Created Stage 2 project folder
- [x] Added Stage 2 README.md
- [x] Added Stage 2 commands.md
- [x] Added Stage 2 request-flow.md
- [x] Added Stage 2 nginx-config.md
- [x] Added Stage 2 errors-and-fixes.md
- [x] Added Stage 2 interview-explanation.md
- [x] Confirmed Node API is still running with PM2
- [x] Installed Nginx on EC2
- [x] Confirmed Nginx is active/running
- [x] Confirmed Nginx default page works locally on EC2
- [x] Allowed HTTP port 80 in AWS security group
- [x] Confirmed Nginx default page works from Mac/browser
- [x] Created Nginx reverse proxy config
- [x] Enabled Nginx reverse proxy config
- [x] Tested Nginx reverse proxy config
- [x] Removed default Nginx site if needed
- [x] Tested Nginx config with `sudo nginx -t`
- [x] Reloaded Nginx
- [x] Tested API through Nginx from EC2
- [x] Tested API through Nginx from Mac
- [x] Removed public access to port 3000
- [x] Confirmed API still works through Nginx after port 3000 is blocked publicly
- [x] Checked Nginx access logs
- [x] Checked Nginx error logs
- [x] Documented Stage 2 errors and fixes
- [x] Updated Stage 2 interview explanation
- [x] Prepared for DNS/domain setup
- [ ] Prepared for HTTPS setup

## EC2 Instance Summary

- Instance name: `cloud-transition-linux-server`
- Region: `eu-west-2` London
- Public IPv4 address: `3.11.8.243`
- Public DNS: `ec2-3-11-8-243.eu-west-2.compute.amazonaws.com`
- Node.js API internal port: `3000`
- Nginx public HTTP port: `80` (target)
- Future HTTPS port: `443` (target)

## What I Have Learned So Far

### Nginx

Nginx is a web server and reverse proxy.

For this stage, it will receive public traffic and forward it to the Node.js API.

### Reverse Proxy

A reverse proxy receives client requests and forwards them to an internal service.

The client does not need direct access to the internal application port.

### HTTP And HTTPS Ports

Port `80` is the standard public port for HTTP.

Port `443` is the standard public port for HTTPS.

### Internal App Port

The Node.js API can keep running on `localhost:3000` while Nginx handles external access.

### Security Group Impact

AWS security groups control which ports are reachable from outside the EC2 instance.

For this stage, HTTP port `80` should be allowed, and public access to port `3000` should be removed after Nginx is working.

### Final Working Endpoint

```bash
curl http://cloudtransition.duckdns.org/health
```