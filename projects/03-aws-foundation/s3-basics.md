# S3 Basics

## Goal

Understand the basics of Amazon S3 object storage.

## What S3 Is

S3 is AWS object storage.

It stores data as objects inside buckets.

It is commonly used for:

- file uploads
- images
- logs
- backups
- static assets
- exported reports

## Key Concepts

### Bucket

A bucket is a container for objects.

### Object

An object is a file stored in S3.

### Key

A key is the object’s path/name inside the bucket.

### Region

Buckets are created in an AWS region.

### Permissions

S3 buckets should be private by default unless public access is intentionally needed.

## Stage 3 Scope

For this stage, I will only create a simple private S3 bucket and upload a test file.

This is not yet application integration.

App integration with S3 comes later.

## Planned Steps

1. Create a private S3 bucket
2. Upload a test file
3. Confirm the object exists
4. Review permissions
5. Keep the bucket private
6. Delete the test file if needed
7. Document what S3 is for

## Completion Checklist

- [ ] Learned what S3 is
- [ ] Created private bucket
- [ ] Uploaded test object
- [ ] Reviewed bucket permissions
- [ ] Confirmed bucket is not public
- [ ] Deleted test object if not needed
- [ ] Documented S3 basics
