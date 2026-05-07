## Issue: GitHub clone failed using normal password

### Problem

When trying to clone the repository from the EC2 server, GitHub asked for a username and password.

The password did not work.

Error message:

```text
remote: Invalid username or token. Password authentication is not supported for Git operations.
fatal: Authentication failed for 'https://github.com/<USERNAME>/<REPO>.git'
```

### Cause
GitHub no longer supports password authentication for Git operations.

### Solution
To fix this, I need to use a Personal Access Token (PAT) instead of my password.
1. Go to GitHub > Settings > Developer settings > Personal access tokens
2. Generate a new token with the necessary scopes (e.g., repo)
3. Use the token as the password when cloning the repository
Example clone command:

```bash
git clone https://<TOKEN>@github.com/<USERNAME>/<REPO>.git
```

### Problem

After running the app with PM2, the API was not accessible from my Mac using the EC2 public IP.

### Cause
The security group for the EC2 instance only allowed inbound traffic on port 22 (SSH) but did not allow traffic on port 3000 where the API was running.

### Solution
To fix this, I added a new inbound rule to the security group to allow TCP traffic on port 3000 from my IP address.
1. Go to AWS EC2 > Security Groups
2. Select the security group attached to the EC2 instance
3. Click on the Inbound rules tab
4. Click Edit inbound rules
5. Add a new rule:
- Type: Custom TCP
- Port range: 3000
- Source: My IP
6. Save the rules and test the API again using the public IP and port 3000.

## Issues: Public IP changes and security group access

### Problem

My EC2 security group allows SSH and port 3000 only from my public IP.

When my public IP changes, SSH and API access time out.

### Cause

My internet provider may assign a dynamic public IP.

AWS security group rules using `My IP` are strict and only allow the exact IP address with `/32`.

### Why this is still safer

Restricting SSH to my IP is safer than opening SSH to `0.0.0.0/0`.

Opening SSH to the whole internet would allow anyone to attempt connections to the server.

### Current approach

For this learning stage, I will update the security group when my IP changes.

### Future improvement

Later, I will learn AWS Systems Manager Session Manager so I can connect to EC2 without exposing SSH publicly.