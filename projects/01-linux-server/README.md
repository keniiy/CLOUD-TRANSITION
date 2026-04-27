# Linux Server Fundamentals

## Project Goal

Deploy and manage a simple TypeScript/Node.js API on a Linux server.

This project starts locally, then moves to a remote Ubuntu EC2 server where the API will be deployed, managed as a long-running process, logged, restarted, and exposed safely.

## Why This Stage Matters

Cloud engineering starts with understanding servers.

Before moving into Docker, CI/CD, Terraform, ECS, Kubernetes, and platform engineering, I need to understand the foundation:

- How to create a Linux server
- How to connect with SSH
- How to install runtime tools
- How to run an application
- How to inspect logs
- How to restart a service
- How to control network access safely

## API Endpoints

- `GET /`
- `GET /health`
- `GET /info`

## Current Status

- [x] Created local TypeScript/Node.js API
- [x] Tested locally
- [x] Provisioned Linux server
- [x] Connected using SSH
- [x] Installed Node.js on server
- [ ] Deployed API to server
- [ ] Managed API with pm2 or systemd
- [ ] Configured firewall
- [ ] Checked logs
- [ ] Documented errors and fixes

## EC2 Instance Summary

- Instance name: `cloud-transition-linux-server`
- Instance ID: `i-0ecce121dda99ea81`
- Region: `eu-west-2` London
- Public IPv4 address: `3.11.8.243`
- Public DNS: `ec2-3-11-8-243.eu-west-2.compute.amazonaws.com`
- Private IPv4 address: `172.31.10.135`
- Instance type: `t3.micro`
- vCPUs: `2`
- Memory: `1 GiB`
- AMI: Ubuntu Server 24.04 LTS
- AMI name: `ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-20260313`
- Key pair: `cloud-transition-key`
- IAM role: None currently attached
- IMDSv2: Required

## What I Have Learned So Far

### EC2 Instance

An EC2 instance is a virtual server running in AWS.

For this stage, I am using EC2 to create an Ubuntu Linux server where I will deploy and manage a TypeScript/Node.js API.

### AMI

AMI means Amazon Machine Image.

It is the operating system image used to create the server.

For this project, I selected Ubuntu Server 24.04 LTS because it is widely used for Linux server deployment, Node.js hosting, Docker, and DevOps workflows.

### Instance Type

The instance type defines the server size.

It controls CPU, memory, networking capacity, and cost.

For this stage, I am using `t3.micro` because the API is lightweight and does not need much compute power.

### Key Pair

The key pair is used for SSH access.

AWS keeps the public key on the server, while I keep the private `.pem` key on my Mac.

The private key must be protected and should never be shared.

### Security Group

A security group acts like a virtual firewall for the EC2 instance.

It controls what traffic can reach the server.

For this stage, I only allow the traffic needed for SSH access and API testing.

### Storage / EBS Volume

The EC2 root volume is the disk attached to the server.

It stores the operating system, installed packages, application files, and logs.

Storage is different from RAM.

RAM is temporary working memory, while the EBS volume is persistent disk storage.

### File Systems Section

The file systems section provides optional storage integrations like S3 Files, EFS, and FSx.

For this stage, I do not need them.

The default 8 GiB root EBS volume is enough for running the Linux server and Node.js API.


### Node.js Runtime

The EC2 server needs Node.js because the API is built with TypeScript/Node.js.

I installed Node.js LTS on the server so the API can be built and executed in the Linux environment.

### PM2

PM2 is a Node.js process manager.

It allows the API to keep running after the SSH terminal closes.

It also provides commands for checking process status, viewing logs, restarting the app, and stopping the app.

## Next Step

The next step is to deploy the API to the server and manage it with PM2 or systemd.

