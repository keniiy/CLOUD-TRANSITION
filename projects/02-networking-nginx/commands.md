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

## 7. Create Nginx reverse proxy config

Next we need to create a Nginx reverse proxy config to forward public HTTP traffic to the Node.js API running on localhost:3000.

Run from the EC2 server:

```bash
sudo nano /etc/nginx/sites-available/cloud-transition-node-api
```

Paste in the following config:

```nginx
server {
    listen 80;
    server_name 3.11.8.243;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

command to save and exit:

```bash
CTRL + O
Enter
CTRL + X
```

## 8. Enable Nginx reverse proxy config

Run from the EC2 server:

```bash
sudo ln -s /etc/nginx/sites-available/cloud-transition-node-api /etc/nginx/sites-enabled/ cloud-transition-node-api #site-enabled is a symlink to the site-available config
sudo rm -f /etc/nginx/sites-enabled/default #remove the default site because we are using the cloud-transition-node-api config
sudo nginx -t #test the config
sudo systemctl reload nginx #reload Nginx to apply the changes
```

## 9. Test Nginx reverse proxy config

Run from the EC2 server:

```bash
curl http://localhost/health
```

Expected result: The Node.js API health check response.

```json
{
    "status": "ok",
    "message": "API is running"
}
```

## 10. Remove public access to port 3000

Run from the EC2 server:

```bash
sudo ufw delete allow 3000/tcp
```

or go to the AWS console and remove the inbound rule for port 3000.

EC2 Instance -> Security Group -> Inbound rules -> Edit inbound rules -> Remove rule -> Custom TCP -> Port range: 3000 -> Source: 0.0.0.0/0 -> Save

and try to access the API through the public IP and port 3000.

Expected result: The API is not accessible.

```bash
curl http://3.11.8.243:3000/health
```

Expected result: The API is not accessible.

```text
curl: (7) Failed to connect to 3.11.8.243 port 3000: Connection refused
```

## 11. Test API through Nginx from EC2

Run from the EC2 server:

```bash
curl http://localhost:3000/health
curl http://localhost/health
```

Expected result: The Node.js API health check response.

```json
{
    "status": "ok",
    "message": "API is running"
}
```

## 12. Examine Nginx access logs

Run from the EC2 server:

```bash
sudo tail -n 20 /var/log/nginx/access.log #tail is used to show the last 20 lines of the file
sudo tail -f /var/log/nginx/access.log #tail -f is used to show the file in real time
sudo less /var/log/nginx/access.log #less is used to show the file in a pager
```

Expected result: The Nginx access logs.

```text
GET /health HTTP/1.1
GET /info HTTP/1.1
127.0.0.1 - - [08/May/2026:12:00:00 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/8.0.1"
and so on...
```

## 13. Examine Nginx error logs

Run from the EC2 server:

```bash
sudo tail -n 20 /var/log/nginx/error.log #tail is used to show the last 20 lines of the file
sudo tail -f /var/log/nginx/error.log #tail -f is used to show the file in real time
sudo less /var/log/nginx/error.log #less is used to show the file in a pager
```

Expected result: The Nginx error logs.

```text
2026/05/08 12:00:00 [error] 12345#12345: *1 connect() to 127.0.0.1:3000 failed (111: Connection refused) while connecting to upstream, client: 127.0.0.1, server: 3.11.8.243, request: "GET /health HTTP/1.1", upstream: "http://127.0.0.1:3000/health", host: "3.11.8.243"
and so on...
```

## 14. Get a Domain Name

From FreeDNS.org, get a domain name.
i use DuckDNS.org for this project.

after creating the domain, i need to add the DNS records to the domain.

```text
Type: A
Name: @
Value: 3.11.8.243
```

```text
Type: A
Name: www
Value: 3.11.8.243
```

Then test the domain by running the following command from the local machine:

```bash
curl http://cloudtransition.duckdns.org/health
```

Expected result: The Node.js API health check response.

```json
{
    "status": "ok",
    "message": "API is running"
}
```

## 15. Update Nginx reverse proxy config to use the domain name

SSH into the EC2 server:

```bash
sudo nano /etc/nginx/sites-available/cloud-transition-node-api
```

Paste in the following config:

```nginx
#change the server_name to the domain name
server {
    listen 80;
    server_name cloudtransition.duckdns.org;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

command to save and exit:

```bash
CTRL + O
Enter
CTRL + X
```

Then run:

```bash
sudo nginx -t #test the config
sudo systemctl reload nginx #reload Nginx to apply the changes
```

Then test the domain by running the following command from the local machine:

```bash
curl http://cloudtransition.duckdns.org/health
```

Expected result: The Node.js API health check response.

```json
{
    "status": "ok",
    "message": "API is running"
}
```

## 16. Prepare for HTTPS setup

Run from the EC2 server:

```text
EC2 Instance -> Security Group -> Inbound rules -> Edit inbound rules -> Add rule -> Custom TCP -> Port range: 443 -> Source: 0.0.0.0/0 -> Save
```

## 17. Install Certbot

Run from the EC2 server:

```bash
sudo apt update

sudo apt install -y certbot python3-certbot-nginx
```

Then Request the SSL certificate:

```bash
sudo certbot --nginx -d ${domain_name}
#example
sudo certbot --nginx -d cloudtransition.duckdns.org
```

THEN FINISH THE SSL CERTIFICATE REQUEST BY FOLLOWING THE PROMPTS. :)
