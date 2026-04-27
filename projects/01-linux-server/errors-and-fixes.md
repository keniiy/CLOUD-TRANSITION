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