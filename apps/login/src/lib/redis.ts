import Redis from "ioredis";

let redis: Redis | null = null;

export function getRedis() {
  if (!redis) {
    redis = new Redis({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT) || 6379,
      // password: process.env.REDIS_PASSWORD,
    });
  }
  return redis;
}
