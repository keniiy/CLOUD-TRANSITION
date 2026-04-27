

# Service Setup Notes

## Current Stage

Stage 1: Linux Server Fundamentals

## Goal

Deploy and manage a simple TypeScript/Node.js API on an Ubuntu Linux server running on AWS EC2.

This file tracks the step-by-step setup process for the service.

## Service Being Deployed

The service is located at:

```text
services/node-api-service
```

It is a simple TypeScript/Node.js API with these endpoints:

- `GET /`
- `GET /health`
- `GET /info`

## Why This Service Exists

This service is intentionally simple.

The goal of this stage is not complex business logic.

The goal is to learn the cloud server lifecycle:

1. Create a Linux server
2. Connect to the server with SSH
3. Install required runtime tools
4. Move application code to the server
5. Run the application
6. Keep the application alive
7. Check logs
8. Restart the application
9. Control network access safely
10. Document the full process

## Setup Flow

### Step 1: Build and test the API locally

Status: Done

The API was created locally first to confirm the code works before deploying it to the server.

Local test endpoints:

```bash
curl http://localhost:3000
curl http://localhost:3000/health
curl http://localhost:3000/info
```

### Step 2: Create the EC2 Linux server

Status: Done

The EC2 instance was created in AWS.

Instance details:

- Instance name: `cloud-transition-linux-server`
- Instance ID: `i-0ecce121dda99ea81`
- Region: `eu-west-2` London
- Public IPv4 address: `3.11.8.243`
- Public DNS: `ec2-3-11-8-243.eu-west-2.compute.amazonaws.com`
- Private IPv4 address: `172.31.10.135`
- Instance type: `t3.micro`
- AMI: Ubuntu Server 24.04 LTS
- Key pair: `cloud-transition-key`

### Step 3: Connect to the server using SSH

Status: Not started -> Done

The next step is to connect from my Mac to the EC2 instance using SSH.

The SSH connection will use the `.pem` private key downloaded from AWS.

Expected SSH format:

```bash
ssh -i ~/.ssh/cloud-transition/cloud-transition-key.pem ubuntu@3.11.8.243
```

The username is `ubuntu` because the EC2 instance is running Ubuntu.

### Step 4: Prepare the server

Status: Not started -> Done

After connecting to the server, I will update the package list and install basic tools.

Expected server commands:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y curl git build-essential
```

Why these tools are needed:

- `curl` is used to test URLs and APIs from the terminal
- `git` is used to clone the project from GitHub
- `build-essential` provides compiler tools needed by some Node.js packages

### Step 5: Install Node.js on the server

Status: Not started -> Done 

The server needs Node.js to run the TypeScript/Node.js API.

For this project, I will install a stable Node.js LTS version.

After installation, I should verify:

```bash
node -v
npm -v
```

### Step 6: Clone the CLOUD TRANSITION repository

Status: Not started -> Done

After Node.js is installed, I will clone the project from GitHub onto the server.

Expected location:

```text
/home/ubuntu/CLOUD_TRANSITION
```

### Step 7: Install project dependencies

Status: Not started -> Done

Inside the Node API service folder:

```bash
cd ~/CLOUD_TRANSITION/services/node-api-service
npm install
```

### Step 8: Run the API on the server

Status: Not started -> Done

First, I will run the API manually to confirm it works.

Expected command:

```bash
npm run dev
```

Then I will test it locally on the server:

```bash
curl http://localhost:3000/health
curl http://localhost:3000/info
```

After local server testing works, I will test it from my Mac/browser using the EC2 public IP:

```text
http://3.11.8.243:3000/health
```

### Step 9: Keep the API running

Status: Not started

Running the app manually is not enough because it stops when the terminal closes.

I will use either `pm2` or `systemd` to keep it running as a long-running process.

For this stage, the first option will likely be `pm2` because it is simpler for learning process management.

### Step 10: Check logs and restart service

Status: Not started

I need to learn how to inspect logs, restart the service, and confirm the process is running.

Expected checks:

```bash
ps aux | grep node
pm2 list
pm2 logs
pm2 restart all
```

If using `systemd`, expected checks later:

```bash
sudo systemctl status cloud-transition-node-api
sudo journalctl -u cloud-transition-node-api -f
```

## Current Checklist

- [x] Local API created
- [x] Local API tested
- [x] EC2 instance created
- [x] SSH connection completed
- [x] Server packages updated
- [x] Basic tools installed
- [x] Node.js installed
- [x] Repository cloned to server
- [x] API dependencies installed
- [x] API running manually on server
- [ ] API accessible through public IP and port 3000
- [ ] API managed by pm2 or systemd
- [ ] Logs checked
- [ ] Restart process tested

## Notes

This stage is focused on understanding server fundamentals before moving into higher-level cloud tooling.

Later stages will improve this deployment with Nginx, HTTPS, Docker, CI/CD, Terraform, ECS, Kubernetes, monitoring, and security hardening.