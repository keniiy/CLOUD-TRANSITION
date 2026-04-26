# IAM Safety Basics

## Why I am learning this now

I am currently preparing to launch my first EC2 Linux server for the CLOUD TRANSITION project.

Before creating cloud resources, I need to understand the basic AWS security concepts so I do not use the account carelessly or create resources with unsafe permissions.

This is not a full IAM deep dive yet. It is a safety checkpoint.

## Current Stage

Stage 1: Linux Server Fundamentals

## Current Goal

Launch a safe EC2 Linux server, connect to it using SSH, and deploy my Node.js API.

Before doing that, I need to understand:

- Root user
- IAM user
- IAM policy
- IAM role
- MFA
- Security group
- EC2 key pair

## Root User

The root user is the main owner of the AWS account.

It has full access to almost everything in the account.

The root user should not be used for daily work.

Root should mainly be used for account-level tasks like billing, account recovery, or initial security setup.

## IAM User

An IAM user is a login identity created inside the AWS account.

Instead of using root every day, I should use an IAM user for normal AWS console work.

Example:

- cloud-admin
- terraform-user
- deploy-user

## IAM Policy

An IAM policy is a permission document.

It defines what an identity can do in AWS.

Example permissions:

- Allow creating EC2 instances
- Allow reading from S3
- Allow writing logs to CloudWatch
- Allow Terraform to create infrastructure

Simple mental model:

IAM policy = permission rules.

## IAM Role

An IAM role is a temporary identity that a service, user, or external system can assume.

Later in this project, I will use roles for:

- EC2 accessing AWS services
- ECS tasks writing logs to CloudWatch
- GitHub Actions deploying infrastructure
- Terraform provisioning AWS resources

Simple mental model:

IAM role = temporary job badge.

## MFA

MFA means Multi-Factor Authentication.

It adds another layer of security beyond password.

This usually means using an authenticator app to generate a code during login.

MFA should be enabled for:

- Root user
- IAM admin user

## Security Group

A security group is different from IAM.

IAM controls who can manage AWS resources.

Security groups control network traffic to AWS resources.

For EC2, a security group acts like a firewall.

Example:

- Allow SSH on port 22 from my IP only
- Allow app traffic on port 3000 from my IP only
- Block everything else

## EC2 Key Pair

An EC2 key pair is used to connect to a Linux EC2 server using SSH.

AWS keeps the public key.

I keep the private key on my Mac.

The private key is usually a `.pem` file.

The `.pem` file must be protected and should never be shared.

## Existing AWS Account Discovery

I found an existing customer-managed IAM policy:

- Policy name: loyaone-terraform-automation-policy
- Purpose: Terraform automation for LoyaOne microservices
- Services included: EC2, ECS, EKS, RDS, S3, IAM, Lambda, Route 53, CloudWatch, and others

Decision:

- Do not edit this policy
- Do not delete this policy
- Do not attach it to anything new for CLOUD TRANSITION yet
- Create separate resources for CLOUD TRANSITION
- Tag all new resources with Project=CLOUD_TRANSITION

## Difference Between IAM and Security Groups

IAM answers:

Who is allowed to manage or use AWS resources?

Security groups answer:

What network traffic is allowed to reach a resource?

Example:

IAM may allow me to create an EC2 server.

A security group controls whether SSH, HTTP, HTTPS, or app traffic can reach that EC2 server.

## What I Need Before Launching EC2

Before launching the EC2 server, I should confirm:

- Root account has MFA
- IAM admin user has MFA
- Budget alert exists
- I am not using root for daily work
- I understand the `.pem` key is sensitive
- I understand security groups control traffic
- I understand not to touch the old LoyaOne policy

## Summary

For this stage, IAM is only a safety foundation.

I am not learning advanced IAM yet.

Advanced IAM topics like permission boundaries, OIDC, cross-account roles, SCPs, and Terraform IAM modules will come later.