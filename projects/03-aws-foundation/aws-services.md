# AWS Services Inventory

## Goal

Document all AWS services and resources currently involved in the CLOUD TRANSITION deployment.

This file answers:

```text
What AWS resources exist?
What are they used for?
Why do they matter?
What risks or costs do they introduce?
```

## Current AWS Region

`eu-west-2` (London)

Reason: this region is close to the UK and matches my current location.

## AWS Resources Currently Used

### EC2

Resource: `cloud-transition-linux-server`

Purpose: runs the Ubuntu Linux server hosting:

- Node.js API
- PM2
- Nginx
- Certbot
- project repository

Known details:

- Instance ID: `i-0ecce121dda99ea81`
- Instance type: `t3.micro`
- AMI: Ubuntu Server 24.04 LTS
- Public IP: `3.11.8.243`
- Private IP: `172.31.10.135`
- Region: `eu-west-2`

Why it matters: EC2 is the compute layer for the current deployment.

### Security Group

Resource: `launch-wizard-1`

Purpose: controls inbound and outbound network traffic to the EC2 instance.

Current intended inbound rules:

- SSH — TCP `22` — My IP
- HTTP — TCP `80` — `0.0.0.0/0`
- HTTPS — TCP `443` — `0.0.0.0/0`

Important note: port `3000` should not be publicly exposed. The Node.js app runs internally on `localhost:3000`, and Nginx forwards public traffic to it.

Why it matters: security groups are the AWS firewall around the EC2 instance.

### Key Pair

Resource: `cloud-transition-key`

Purpose: allows SSH access from my Mac to the EC2 Ubuntu server.

Private key location on Mac:

```text
~/.ssh/cloud-transition/cloud-transition-key.pem
```

Why it matters: without the private key, I cannot SSH into the server.

Security note: the `.pem` file must not be committed to GitHub or shared.

### Public IPv4 Address

Current value: `3.11.8.243`

Purpose: allows public internet access to the EC2 instance.

Risk: the current public IP is auto-assigned and may change if the instance is stopped and started.

Next improvement: attach an Elastic IP.

### IAM

Current use: IAM is used for AWS account access and permissions.

Current EC2 IAM role: none attached.

Why it matters: the EC2 instance currently does not need to call AWS APIs directly. Later, if EC2 needs to access S3, CloudWatch logs, or other AWS services securely, it should use an IAM role instead of hardcoded credentials.

### Billing / Budgets

Purpose: protects against unexpected AWS cost.

Current checkpoint: root MFA checked; budget alert checked.

Why it matters: even small cloud projects can cost money if resources are left running or configured incorrectly.

## Non-AWS Services Used With AWS

### DuckDNS

Domain: `cloudtransition.duckdns.org`

Purpose: maps a domain name to the EC2 public IP.

Current endpoint:

```text
https://cloudtransition.duckdns.org/health
```

### Let’s Encrypt / Certbot

Purpose: provides free SSL/TLS certificate for HTTPS.

Certificate domain: `cloudtransition.duckdns.org`

### GitHub

Purpose: stores project code and documentation.

Repository: `CLOUD-TRANSITION`

## Current Architecture Summary

```text
User
  ↓
cloudtransition.duckdns.org
  ↓
EC2 public IP
  ↓
Security Group
  ↓
Nginx on 80/443
  ↓
Node.js API on localhost:3000
```

## Questions To Answer During This Stage

- What happens if the EC2 instance stops?
- What happens if the public IP changes?
- What is the cost of the current setup?
- Should the instance have an IAM role?
- What metrics does CloudWatch show by default?
- What should be tagged for cleanup?
