# Cost Control

## Goal

Keep the CLOUD TRANSITION project low-cost and avoid unexpected AWS charges.

## Why This Matters

Cloud resources can cost money even when they are used for learning.

A Cloud Engineer needs to understand cost risk before creating more resources.

## Current Cost Areas

### EC2

The EC2 instance may create compute charges while running.

### Public IPv4

AWS may charge for public IPv4 usage.

### Elastic IP

Elastic IPs can create charges, especially if allocated and not properly associated or used.

### EBS Volume

The EC2 root disk is an EBS volume and may create storage cost.

### Data Transfer

Outbound internet traffic can create cost at higher usage levels.

### S3

S3 storage and requests can create small charges.

## Safety Controls

- Root MFA checked
- Budget alert checked
- Small EC2 instance used
- No RDS yet
- No NAT Gateway yet
- No Load Balancer yet
- No EKS yet

## Resources To Avoid For Now

These can increase cost quickly:

- NAT Gateway
- RDS
- Application Load Balancer
- EKS
- Large EC2 instances
- Unused Elastic IPs
- Large S3 storage
- CloudWatch log ingestion at scale

## Cleanup Plan

If I need to pause the project, I should check:

- EC2 instance state
- Elastic IP association
- EBS volumes
- S3 buckets
- Security groups
- CloudWatch logs
- Any unused resources

## Completion Checklist

- [ ] Reviewed billing dashboard
- [ ] Confirmed budget alert
- [ ] Checked current monthly spend
- [ ] Understood EC2 cost risk
- [ ] Understood public IPv4 cost risk
- [ ] Understood Elastic IP cost risk
- [ ] Documented cleanup plan
