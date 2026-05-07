# Request Flow

## Previous Flow
Before Nginx, the request flow was:

```text
Mac / Browser
  ↓
http://3.11.8.243:3000
  ↓
Node.js API
```

This worked, but it exposed the application port directly.

## Why Direct Port 3000 Was Temporary
Exposing port 3000 directly works for learning and testing.

However, it is not ideal as a production-style public entry point.

Port 3000 is an application runtime port.

Public web traffic usually enters through standard web ports:

- HTTP: 80
- HTTPS: 443

Using Nginx lets the Node.js API continue running internally on `localhost:3000`, while users access the service through Nginx.

## New Flow With Nginx

```text
Mac / Browser
  ↓
http://3.11.8.243
  ↓
Nginx on port 80
  ↓
Node.js API on localhost:3000
```

## Future Flow With Domain And HTTPS

```text
Browser
  ↓
https://api.example.com
  ↓
Nginx on port 443
  ↓
Node.js API on localhost:3000
```

## What Nginx Does
Nginx receives the public HTTP request and forwards it to the Node.js API running locally on the server.

The browser does not need to know that the Node.js app is running on port 3000.

The browser only talks to Nginx.

Nginx talks to the app.

## Why This Is Better
Using Nginx provides:

- Standard public web ports
- Cleaner request flow
- A place to add HTTPS
- A way to hide internal app ports
- A place to add access logs
- A way to route multiple services later
- A production-style entry point

## Mixed-Service Platform Relevance
This matters for the wider `CLOUD TRANSITION` project.

Later, the platform may run:

```text
Node.js API      -> localhost:3000
Python service   -> localhost:8000
Admin service    -> localhost:5000
```

Nginx can route traffic to different services.

Example:

```text
/api      -> Node.js service
/worker   -> Python service
/admin    -> Admin service
```

Or with domains:

```text
api.example.com      -> Node.js service
worker.example.com   -> Python service
admin.example.com    -> Admin service
```

This is closer to platform engineering because the public entry point is separated from internal service ports.

## Key Lesson
Running an app is not the same as exposing it properly.

Stage 1 proved the app could run on a cloud server.

Stage 2 improves how traffic reaches that app.