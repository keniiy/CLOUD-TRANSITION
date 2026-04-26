import express from 'express';
import dotenv from 'dotenv';
import os from 'os';


dotenv.config();

const app = express();

const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (_req, res) => {
    res.json({
        service: "cloud-transition-node-api",
        message: "CLOUD TRANSITION node api is running",
    });
});


app.get("/health", (_req, res) => {
    res.json({
        status: "ok",
        uptime: process.uptime(),
        timestamp: new Date(),
    });
});

app.get("/info", (_req, res) => {
    res.json({
        hostname: os.hostname(),
        platform: os.platform(),
        arch: os.arch(),
        cpus: os.cpus().length,
        memory: {
            total: os.totalmem(),
            free: os.freemem(),
        },
        nodeVersion: process.version,
    });
});

app.listen(port, () => {
    console.log(`Cloud Transition Node API is running on port ${port}`);
});