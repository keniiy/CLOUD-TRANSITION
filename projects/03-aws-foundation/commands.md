# Commands Used

This file tracks exact commands and checks used during Stage 3.

## Test Current HTTPS Endpoint

Run from Mac:

```bash
curl https://cloudtransition.duckdns.org/health
curl https://cloudtransition.duckdns.org/info
```

## Check DNS

Run from Mac:

```bash
nslookup cloudtransition.duckdns.org
```

## SSH Into EC2

Run from Mac:

```bash
ssh -i ~/.ssh/cloud-transition/cloud-transition-key.pem ubuntu@3.11.8.243
```

## Check App And Nginx On EC2

Run inside EC2:

```bash
pm2 list
curl http://localhost:3000/health
curl http://localhost/health
sudo systemctl status nginx
```

## Check Nginx Logs

Run inside EC2:

```bash
sudo tail -n 20 /var/log/nginx/access.log
sudo tail -n 20 /var/log/nginx/error.log
```

## CloudWatch Checks

These are done in AWS Console:

EC2 → Instances → `cloud-transition-linux-server` → Monitoring

## S3 Checks

These are done in AWS Console:

S3 → Buckets

## Billing Checks

These are done in AWS Console:

Billing and Cost Management → Bills

Billing and Cost Management → Budgets
