# AWS Foundation

## Project Goal

Understand and strengthen the AWS foundation around the current CLOUD TRANSITION deployment.

Stages 1 and 2 focused on deploying the Node.js API, managing it with PM2, exposing it through Nginx, connecting a DuckDNS domain, and enabling HTTPS.

Stage 3 focuses on understanding the AWS services supporting that deployment.

## Current Working Endpoint

```text
https://cloudtransition.duckdns.org/health
```

## Current Architecture

```text
Mac / Browser
  ↓
HTTPS
  ↓
cloudtransition.duckdns.org
  ↓
EC2 public IP
  ↓
AWS Security Group
  ↓
Nginx on 80/443
  ↓
Node.js API on localhost:3000
  ↓
PM2 process manager
```

## Why This Stage Matters

Running an app is not enough for Cloud Engineering.

A Cloud Engineer must understand the AWS resources around the app:

- where the server runs
- how the server is accessed
- what network rules protect it
- how public IPs behave
- how billing is controlled
- how logs and monitoring work
- how object storage works
- how to tag and clean up resources

This stage turns the deployment into a properly understood AWS foundation.

## AWS Services Involved So Far

- EC2
- Security Groups
- Key Pairs
- IAM
- Billing / Budgets
- Public IPv4
- Ubuntu AMI
- CloudWatch basic metrics
- DuckDNS domain pointing to AWS public IP

## Non-AWS Components Involved

- Ubuntu Linux
- Node.js
- PM2
- Nginx
- Certbot
- Let’s Encrypt
- DuckDNS
- GitHub

## Main Learning Areas

### AWS Region

The deployment currently runs in:

`eu-west-2` (London)

This matters because AWS resources are created inside specific regions.

### EC2

EC2 provides the Ubuntu Linux server running the Node.js API, Nginx, PM2, and Certbot.

### Security Group

The security group controls inbound traffic to the EC2 instance.

Current intended public access:

- SSH: `22` — My IP
- HTTP: `80` — `0.0.0.0/0`
- HTTPS: `443` — `0.0.0.0/0`

Port `3000` should not be publicly exposed anymore.

### Elastic IP

The current EC2 public IP may change if the instance is stopped and started.

An Elastic IP provides a stable public IP address.

This matters because DuckDNS points to the public IP.

### CloudWatch

CloudWatch helps observe AWS resources.

This stage introduces EC2 monitoring, status checks, CPU metrics, network metrics, and the difference between AWS metrics and application logs.

### S3

S3 introduces object storage.

This stage covers buckets, objects, private access, basic permissions, and safe cleanup.

### Cost Control

This project must stay low-cost.

This stage includes checking budgets, billing, public IPv4 cost risk, Elastic IP rules, and cleanup steps.

## Current Status

- [x] Created Stage 3 project folder
- [x] Added Stage 3 README.md
- [ ] Added AWS services inventory (see `aws-services.md`)
- [ ] Reviewed current AWS resources
- [ ] Documented current EC2 details
- [ ] Reviewed current security group rules
- [ ] Confirmed port 3000 is not publicly exposed
- [ ] Learned Elastic IP purpose
- [ ] Attached Elastic IP to EC2
- [ ] Updated DuckDNS to point to Elastic IP
- [ ] Confirmed HTTPS still works after Elastic IP
- [ ] Documented Elastic IP (see `elastic-ip.md`)
- [ ] Reviewed AWS billing and budget
- [ ] Added CloudWatch basics (see `cloudwatch-basics.md`)
- [ ] Added S3 basics (see `s3-basics.md`)
- [ ] Added cost-control notes (see `cost-control.md`)
- [ ] Added Stage 3 interview explanation (see `interview-explanation.md`)

## Stage 3 Completion Criteria

This stage is complete when I can explain:

- what AWS resources this project uses
- why the app runs in `eu-west-2`
- what EC2 provides
- what the instance type means
- what the security group allows
- why port 3000 is no longer public
- why Elastic IP matters
- how DuckDNS points to the server
- what CloudWatch is for
- what S3 is for
- where the cost risks are
- how to clean up the resources safely

## Next Step

Create the AWS services inventory and document all AWS resources currently used by this project (see `aws-services.md`).
