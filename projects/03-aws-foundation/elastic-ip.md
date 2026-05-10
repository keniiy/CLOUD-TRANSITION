# Elastic IP

## Goal

Understand and configure a stable public IP for the EC2 instance.

## Current Problem

The EC2 instance currently uses an auto-assigned public IPv4 address:

```text
3.11.8.243
```

This works, but the IP may change if the instance is stopped and started.

That would break the DuckDNS domain until the DNS record is updated.

## Why Elastic IP Matters

An Elastic IP is a static public IPv4 address that can be associated with an EC2 instance.

It gives the server a stable public IP.

This is useful because:

- DuckDNS can point to a stable IP
- HTTPS setup is less likely to break from IP changes
- the public endpoint becomes more predictable
- the deployment behaves more like a real cloud service

## Important Cost Warning

Elastic IPs can create charges depending on how they are used.

A common risk is leaving an Elastic IP allocated but not attached to a running resource.

For this project, I need to:

- attach the Elastic IP to the EC2 instance
- avoid leaving unused Elastic IPs allocated
- release the Elastic IP if I no longer need it

## Planned Steps

1. Allocate Elastic IP in AWS
2. Associate Elastic IP with `cloud-transition-linux-server`
3. Confirm EC2 public IP changed to Elastic IP
4. Update DuckDNS to point to the Elastic IP
5. Test DNS resolution
6. Test HTTPS endpoint
7. Document final IP and behavior

## Commands And Checks

From Mac:

```bash
nslookup cloudtransition.duckdns.org
curl https://cloudtransition.duckdns.org/health
```

From EC2:

```bash
curl http://localhost:3000/health
curl http://localhost/health
```

## Completion Checklist

- [ ] Learned what Elastic IP is
- [ ] Allocated Elastic IP
- [ ] Associated Elastic IP with EC2
- [ ] Updated DuckDNS to Elastic IP
- [ ] Confirmed DNS resolves to Elastic IP
- [ ] Confirmed HTTPS still works
- [ ] Documented cost warning
