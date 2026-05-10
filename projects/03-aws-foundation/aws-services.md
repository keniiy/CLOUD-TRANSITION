# AWS Services Inventory

## Goal

Document all AWS services and resources currently involved in the CLOUD TRANSITION deployment.

This file answers:

```text
What AWS resources exist?
What are they used for?
Why do they matter?
What risks or costs do they introduce?
```

## Current AWS Region

`eu-west-2` (London)

Reason: this region is close to the UK and matches my current location.
NOTE: ideally, as a Cloud Engineer, you would choose the region closest to your users.
For example, if your users are in the US, you would choose the US region.
If your users are in Europe, you would choose the Europe region.
If your users are in Asia, you would choose the Asia region.

Task is to document the following AWS services and look through AWS Console for their values.

Focus on these sections:

EC2

- Security Group
- Key Pair
- Public IPv4
- IAM role
- Region
- DuckDNS
- Certbot / HTTPS

### Collect current AWS values

In AWS Console, go to:

```text
EC2 → Instances → cloud-transition-linux-server
```

Values to document:

- Instance ID: i-0ecce121dda99ea81
- Instance type: t3.micro
- Region: eu-west-2
- AMI name: ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-20260313
- AMI ID: ami-09dbc7ce74870d573
- Public IPv4: 3.11.8.243
- Private IPv4: 172.31.10.135
- Availability Zone: eu-west-2b
- VPC ID: vpc-03c8ed0abc982f3f8
- Subnet ID: subnet-09e3ead6aaaa59786
- Security group name: launch-wizard-1
- Security group ID: sg-0b4aefd0d7a76fdc4
- Key pair name: cloud-transition-key
- IAM role: None currently attached