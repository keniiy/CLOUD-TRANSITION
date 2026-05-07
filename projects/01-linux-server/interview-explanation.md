# Interview Explanation

## Process Management With PM2

After confirming the API could run manually on the EC2 server, I used PM2 to manage it as a long-running process.

Running an app manually with `npm run dev` is not suitable because the process stops when the SSH session closes.

PM2 keeps the Node.js process running independently, provides process status, exposes logs, and allows restarts.

This helped me understand the difference between simply running an application and operating it as a service.

## Debugging External Access

After running the API on EC2, it worked locally on the server but failed from my Mac using the public IP.

I diagnosed this by separating the problem into two layers:

1. Application layer: confirmed the API worked on `localhost:3000` inside EC2.

2. Network layer: checked whether AWS allowed inbound traffic to port `3000`.

The root cause was that the security group allowed SSH on port `22` but did not allow the application port `3000`.

I fixed it by adding a custom TCP inbound rule for port `3000` from my IP.

This helped me understand that running an app successfully on a server is different from exposing it safely over the network.

## Final Stage 1 Interview Explanation

I deployed a TypeScript/Node.js API on an Ubuntu EC2 instance to learn the fundamentals of cloud server deployment.

The project covered the full manual deployment path: creating an EC2 instance, connecting with SSH, installing Node.js, cloning code from GitHub, running the API, exposing the correct port through a security group, debugging external access, and managing the process with PM2.

One useful issue I debugged was that the API worked on `localhost` inside EC2 but failed from my Mac. I traced the problem to the security group: SSH was allowed on port `22`, but application traffic on port `3000` was not allowed. Adding a custom TCP inbound rule for port `3000` from my IP fixed the issue.

This stage gave me the foundation for later work with Nginx, Docker, CI/CD, Terraform, ECS, Kubernetes, and observability.
