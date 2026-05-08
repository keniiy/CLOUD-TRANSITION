# Commands Used

This file tracks the exact commands used during the Networking, Nginx, DNS, and HTTPS stage.

## 0. First SSH into the EC2 server and confirm the API is running

Run from the local machine:

```bash
ssh -i ~/.ssh/cloud-transition/cloud-transition-key.pem ubuntu@<EC2_INSTANCE_PUBLIC_IP>
#sample
ssh -i ~/.ssh/cloud-transition/cloud-transition-key.pem ubuntu@3.11.8.243
```

## 1. Confirm API Is Running On EC2

Run from the EC2 server:

```bash
pm2 list
curl http://localhost:3000/health
```

## 2. Install Nginx

Run from the EC2 server:

```bash
sudo apt update
sudo apt install -y nginx
nginx -v
```

## 3. Confirm Nginx is active/running

Run from the EC2 server:

```bash
sudo systemctl status nginx
```

## 4. Confirm Nginx default page works locally on EC2

Run from the EC2 server:

```bash
curl http://localhost/
```

Expected result: Nginx default page.

```text
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
body {
    width: 35em;
    margin: 0 auto;
    font-family: Tahoma, Verdana, Arial, sans-serif;
}
```

## 5. Allow HTTP port 80 in AWS security group

Want to log into the AWS console and allow HTTP port 80 in the security group.

EC2 Instance -> Security Group -> Inbound rules -> Edit inbound rules -> Add rule -> Custom TCP -> Port range: 80 -> Source: 0.0.0.0/0 -> Save

```bash
Type: HTTP

Protocol: TCP

Port: 80

Source: 0.0.0.0/0

Description: Allow public HTTP traffic to Nginx
```

## 6. Confirm Nginx default page works from Mac/browser

Run from the local machine:

```bash
curl http://3.11.8.243/
```

Expected result: Nginx default page.

```text
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
body {
    width: 35em;
    margin: 0 auto;
    font-family: Tahoma, Verdana, Arial, sans-serif;
}
```