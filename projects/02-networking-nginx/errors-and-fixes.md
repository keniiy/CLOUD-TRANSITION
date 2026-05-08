# Errors and Fixes

This file tracks real issues encountered during Stage 2.

## Issue 1: Issue: Nginx symlink already existed

### Problem

When enabling the Nginx reverse proxy config, I got the following error:

```bash
sudo ln -s /etc/nginx/sites-available/cloud-transition-node-api /etc/nginx/sites-enabled/cloud-transition-node-api
```

### Error

```bash
ln: failed to create symbolic link '/etc/nginx/sites-enabled/cloud-transition-node-api': File exists
```

### Cause

The symlink already existed.

### Solution

i did not remove the existing symlink before creating a new one.

i simply continued with the command and it worked.

```bash
sudo nginx -t #test the config
sudo systemctl reload nginx #reload Nginx to apply the changes
```

### Lesson

Nginx stores available configs in /etc/nginx/sites-available/.

A config becomes active when it is linked into /etc/nginx/sites-enabled/.

If the symlink already exists, the config is already enabled.
