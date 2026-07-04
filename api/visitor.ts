import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET() {
  try {
    const count = await redis.incr("visitor_count");
    return Response.json({ count });
  } catch {
    return Response.json({ count: 0 }, { status: 200 });
  }
}
