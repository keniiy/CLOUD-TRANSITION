# Commands Used

This file tracks the exact commands used during the Linux Server Fundamentals stage.

## 1. Local API Setup

Run from the local machine:

```bash
# Navigate to the service folder on the local machine
cd ~/Desktop/CLOUD\ TRANSITION/services/node-api-service

# Initialize a new Node.js project
npm init -y
npm install express dotenv
npm install -D typescript ts-node-dev @types/node @types/express
npx tsc --init


# Create the source folder and main file
mkdir src
touch src/index.ts
touch .env.example
```

## 2. Mac SSH Setup
Run from the local machine:

```bash
# Generate an SSH key pair if you don't have one
mkdir -p ~/.ssh/cloud-transition # Create a folder for project SSH keys
mv ~/Downloads/cloud-transition-key.pem ~/.ssh/cloud-transition/ # Move the downloaded key to the SSH folder NOTE: The key file should have .pem extension and be named cloud-transition-key.pem
chmod 400 ~/.ssh/cloud-transition/cloud-transition-key.pem # Set correct permissions for the key
```


# 3. SSH into the EC2 Linux server
Run from the local machine:

```bash
ssh -i ~/.ssh/cloud-transition/cloud-transition-key.pem ubuntu@<EC2_INSTANCE_PUBLIC_IP>
```

# 4. Prepare the server
Run from the EC2 server terminal:
```bash
sudo apt update # Update the package list
sudo apt upgrade -y # Upgrade installed packages
sudo apt install -y curl git build-essential # Install curl, git, and build tools
```

# 5. Server info Checks Commands (Optional but useful for learning)
Run from the EC2 server terminal:
```bash
whoami # Check current user
pwd # Check current directory
hostname # Check server hostname
uname -a # Check server OS and kernel info
lsb_release -a # Check Ubuntu version
```
