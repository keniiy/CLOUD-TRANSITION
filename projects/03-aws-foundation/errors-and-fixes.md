# Errors and Fixes

This file tracks real issues encountered during Stage 3.

## Issue Entry Format

Each issue should use:

```text
Problem:
Cause:
Fix:
Lesson:
```

## Real Issues

No Stage 3 issues documented yet.

## Potential Issue — Elastic IP Changes Public IP

Problem: after attaching an Elastic IP, DuckDNS may still point to the old IP.

Cause: DNS A record not updated after IP change.

Fix: update DuckDNS to the Elastic IP and test DNS.

## Potential Issue — HTTPS Fails After IP Change

Problem: the domain resolves incorrectly or Nginx/Certbot routing breaks.

Checks:

```bash
nslookup cloudtransition.duckdns.org
curl http://cloudtransition.duckdns.org/health
curl https://cloudtransition.duckdns.org/health
sudo nginx -t
```

## Potential Issue — SSH Fails After Elastic IP

Problem: SSH command uses the old public IP.

Cause: Elastic IP replaced the auto-assigned public IP.

Fix: use the new Elastic IP or connect via hostname if configured.

## Potential Issue — Unexpected AWS Charge

Problem: a resource is running or allocated longer than expected.

Checks:

- Billing dashboard
- EC2 instances
- Elastic IPs
- EBS volumes
- S3 buckets
