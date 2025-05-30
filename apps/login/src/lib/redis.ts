import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST, // e.g., "10.0.0.2"
  port: Number(process.env.REDIS_PORT) || 6379,
  // password: process.env.REDIS_PASSWORD, // if set
});

export default redis;
