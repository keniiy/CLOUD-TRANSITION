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

## Issue 2: Issue:  Nginx inherited sockets notice

### Problem 2

When looking through the Nginx error logs, I got the following warning:

```bash
sudo tail -n 20 /var/log/nginx/error.log | grep "inherited sockets"
```

Expected result: The Nginx error logs.

### Error 2

```bash
2026/05/07 17:35:33 [notice] 55280#55280: using inherited sockets from "5;6;"
and so on...
```

### Cause 2

This is a normal Nginx notice after reload/restart behavior.

### Lesson 2

Not every entry in error.log is a failure. Some entries are informational notices.
