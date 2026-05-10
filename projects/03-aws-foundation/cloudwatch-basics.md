# CloudWatch Basics

## Goal

Understand basic AWS monitoring for the EC2 instance.

## What CloudWatch Is

CloudWatch is AWS’s monitoring and observability service.

It collects metrics, logs, and alarms from AWS resources.

For this stage, I am focusing only on basic EC2 monitoring.

## EC2 Metrics To Review

The main EC2 metrics to inspect are:

- CPU utilization
- Network in
- Network out
- Status check failed
- Disk-related metrics if available

## Why This Matters

Cloud engineers need to know whether infrastructure is healthy.

For EC2, CloudWatch can help answer:

- Is the instance under CPU pressure?
- Is network traffic reaching the instance?
- Are AWS status checks passing?
- Did the instance fail a health check?

## CloudWatch Versus Application Logs

CloudWatch metrics show AWS infrastructure behavior.

Nginx logs show HTTP request behavior.

PM2 logs show Node.js application behavior.

They are related, but they are not the same.

## Current Log Locations

Nginx logs:

```text
/var/log/nginx/access.log
/var/log/nginx/error.log
```

PM2 logs:

```bash
pm2 logs cloud-transition-node-api
```

CloudWatch metrics: AWS Console → EC2 → Instance → Monitoring.

## Completion Checklist

- [ ] Opened EC2 monitoring tab
- [ ] Reviewed CPU utilization
- [ ] Reviewed network in/out
- [ ] Reviewed status checks
- [ ] Compared CloudWatch metrics with Nginx logs
- [ ] Documented what CloudWatch shows by default
