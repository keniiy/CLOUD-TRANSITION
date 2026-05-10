# CLOUD TRANSITION Progress Tracker

## Current Stage

- Stage 3: AWS Foundation - IN PROGRESS

## Stage 0: Project Setup

- [x] Created CLOUD_TRANSITION folder
- [x] Created folder structure
- [x] Added README.md
- [x] Added ROADMAP.md
- [x] Added PROGRESS.md
- [x] Added MASTER_PROMPT.md
- [x] Created first project folder
- [x] Pushed first commit to GitHub

## Mini Stage: IAM Safety Basics

- [x] Created IAM safety basics note
- [x] Understood root user
- [x] Understood IAM user
- [x] Understood IAM policy
- [x] Understood IAM role
- [x] Understood MFA
- [x] Understood security group
- [x] Understood EC2 key pair
- [x] Checked root MFA
- [x] Checked budget alert

## Stage 1: Linux Server Fundamentals

- [x] Created local TypeScript/Node.js API
- [x] Tested API locally
- [x] Created Ubuntu EC2 instance
- [x] Connected from Mac to EC2 using SSH
- [x] Installed basic server tools
- [x] Installed Node.js on EC2
- [x] Installed PM2 on EC2
- [x] Cloned CLOUD-TRANSITION repo onto EC2
- [x] Installed API dependencies on EC2
- [x] Ran API manually on EC2
- [x] Tested API from inside EC2
- [x] Tested API from Mac through public IP and port 3000
- [x] Fixed security group access for port 3000
- [x] Managed API with PM2
- [x] Checked PM2 logs
- [x] Tested PM2 restart
- [x] Documented commands
- [x] Documented errors and fixes
- [x] Documented interview explanation
- [x] Completed Stage 1

## Stage 2: Networking, Nginx, DNS, and HTTPS

- [x] Started Stage 2
- [x] Created Stage 2 project folder
- [x] Added Stage 2 README.md
- [x] Added Stage 2 commands.md
- [x] Added Stage 2 request-flow.md
- [x] Added Stage 2 nginx-config.md
- [x] Added Stage 2 errors-and-fixes.md
- [x] Added Stage 2 interview-explanation.md
- [x] Confirm Node API is still running with PM2
- [x] Install Nginx on EC2
- [x] Confirm Nginx is active/running
- [x] Confirm Nginx default page works locally on EC2
- [x] Allow HTTP port 80 in AWS security group
- [x] Confirm Nginx default page works from Mac/browser
- [x] Create Nginx reverse proxy config
- [x] Enable Nginx reverse proxy config
- [x] Remove default Nginx site if needed
- [x] Test Nginx config with `sudo nginx -t`
- [x] Reload Nginx
- [x] Test API through Nginx from EC2
- [x] Test API through Nginx from Mac
- [x] Remove public access to port 3000
- [x] Confirm API still works through Nginx after port 3000 is blocked publicly
- [x] Check Nginx access logs
- [x] Check Nginx error logs
- [x] Document Stage 2 errors and fixes
- [x] Update Stage 2 interview explanation
- [x] Prepare for DNS/domain setup
- [x] Prepare for HTTPS setup

## Stage 3: AWS Foundation - IN PROGRESS

- [x] Start Stage 3
- [x] Created Stage 3 project folder
- [x] Added Stage 3 README.md

### AWS Account And Region

- [ ] Review AWS account structure
- [ ] Confirm active AWS region
- [ ] Document why `eu-west-2` is used
- [ ] Review availability zones
- [ ] Document current EC2 availability zone

### AWS Resource Inventory

- [ ] Add AWS services inventory
- [ ] Review current AWS resources
- [ ] Document EC2 instance details
- [ ] Document AMI details
- [ ] Document instance type
- [ ] Document key pair
- [ ] Document security group
- [ ] Document public IP
- [ ] Document DuckDNS domain
- [ ] Document Nginx and HTTPS relationship

### Elastic IP

- [ ] Learn what Elastic IP is
- [ ] Attach Elastic IP to EC2
- [ ] Update DuckDNS to point to Elastic IP
- [ ] Confirm HTTPS still works after Elastic IP
- [ ] Document Elastic IP
- [ ] Understand Elastic IP cost warning

### Security Groups

- [ ] Review current security group rules
- [ ] Confirm SSH is restricted to My IP
- [ ] Confirm HTTP port 80 is public
- [ ] Confirm HTTPS port 443 is public
- [ ] Confirm port 3000 is not publicly exposed
- [ ] Document why port 3000 should stay private
- [ ] Document dynamic IP issue for SSH access

### IAM Foundation

- [ ] Review root user usage
- [ ] Review IAM user usage
- [ ] Review current IAM permissions
- [ ] Document IAM policy basics
- [ ] Document IAM role basics
- [ ] Understand why EC2 currently has no IAM role
- [ ] Learn when EC2 needs an IAM role

### Billing And Cost Control

- [ ] Review AWS billing dashboard
- [ ] Review monthly budget alert
- [ ] Check current EC2 running cost
- [ ] Understand public IPv4 cost risk
- [ ] Understand Elastic IP cost rules
- [ ] Document cleanup plan
- [ ] Add cost-control notes

### Tags And Resource Organization

- [ ] Review current EC2 tags
- [ ] Add/confirm `Project=CLOUD_TRANSITION` tag
- [ ] Add/confirm `Stage=AWS_Foundation` tag where useful
- [ ] Document why tags matter

### CloudWatch Basics

- [ ] Learn what CloudWatch is
- [ ] Check EC2 basic monitoring
- [ ] Review EC2 CPU metrics
- [ ] Review network metrics
- [ ] Review status checks
- [ ] Add CloudWatch basics notes
- [ ] Understand difference between Nginx logs and CloudWatch metrics

### S3 Basics

- [ ] Learn what S3 is
- [ ] Create a simple private S3 bucket
- [ ] Upload a test object
- [ ] Review bucket permissions
- [ ] Keep bucket private
- [ ] Delete test object if not needed
- [ ] Add S3 basics notes

### Shared Responsibility Model

- [ ] Learn AWS shared responsibility model
- [ ] Document what AWS manages
- [ ] Document what I manage
- [ ] Connect shared responsibility to EC2, security groups, patches, and app security

### Stage 3 Documentation

- [ ] Update `aws-services.md`
- [ ] Update `elastic-ip.md`
- [ ] Update `cloudwatch-basics.md`
- [ ] Update `s3-basics.md`
- [ ] Update `cost-control.md`
- [ ] Update `commands.md`
- [ ] Update `errors-and-fixes.md`
- [ ] Add Stage 3 interview explanation

### Stage 3 Completion

- [ ] Explain all AWS resources currently used
- [ ] Explain region and availability zone
- [ ] Explain EC2, AMI, instance type, and key pair
- [ ] Explain security group rules
- [ ] Explain Elastic IP
- [ ] Explain CloudWatch basics
- [ ] Explain S3 basics
- [ ] Explain billing risks and cleanup
- [ ] Complete Stage 3

## Stage 4: RDS and S3 Integration

- [ ] Start Stage 4

## Stage 5: Docker for Node and Python Services

- [ ] Start Stage 5

## Stage 6: CI/CD with GitHub Actions

- [ ] Start Stage 6

## Stage 7: Load Balancing and Scaling

- [ ] Start Stage 7

## Stage 8: Python Cloud Automation

- [ ] Start Stage 8

## Stage 9: Terraform Basics

- [ ] Start Stage 9

## Stage 10: Terraform Production Infrastructure

- [ ] Start Stage 10

## Stage 11: ECS Fargate

- [ ] Start Stage 11

## Stage 12: Kubernetes Fundamentals

- [ ] Start Stage 12

## Stage 13: Monitoring and Observability

- [ ] Start Stage 13

## Stage 14: Cloud Security

- [ ] Start Stage 14

## Stage 15: Platform Engineering Templates

- [ ] Start Stage 15

## Stage 16: Capstone Multi-Service Cloud Platform

- [ ] Start Stage 16

## Stage 17: LinkedIn, CV, and Applications

- [ ] Start Stage 17

## Current Blockers

- None

## Next Step

- Review AWS account structure
