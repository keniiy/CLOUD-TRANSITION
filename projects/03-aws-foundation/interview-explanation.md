# Interview Explanation

## Project Summary

In this stage, I reviewed the AWS foundation supporting my deployed Node.js API.

The application was already running on EC2, exposed through Nginx, connected to a DuckDNS domain, and secured with HTTPS.

Stage 3 focused on understanding the AWS services behind that setup.

## What I Reviewed

- EC2 instance
- Region and availability zone
- AMI
- Instance type
- Security group
- Key pair
- Public IP behavior
- Elastic IP
- IAM basics
- Billing and budgets
- CloudWatch basics
- S3 basics
- Resource cleanup

## Why This Matters

Cloud engineering is not only about deploying an app.

It also requires understanding the resources that support the app, how traffic reaches it, how permissions work, how cost is controlled, and how the system can be monitored.

## How I Explain The Current AWS Setup

The app runs on an Ubuntu EC2 instance in the London region.

The EC2 instance runs Nginx, which receives HTTPS traffic and forwards requests to a Node.js API running locally on port `3000`.

A security group controls access to the server.

DuckDNS maps a domain name to the EC2 public IP.

Certbot and Let’s Encrypt provide HTTPS.

## Why Elastic IP Matters

The original EC2 public IP was auto-assigned.

That means it could change if the instance was stopped and started.

Elastic IP gives the deployment a stable public IP, which is important because DNS depends on the server IP staying consistent.

## Stage 3 Interview Summary

I strengthened the deployment by reviewing the AWS foundation around it.

This included documenting the EC2 instance, security group, public IP behavior, IAM basics, billing controls, CloudWatch monitoring, S3 basics, and cleanup risks.

This helped me move from simply deploying a server to understanding the AWS environment that supports it.
