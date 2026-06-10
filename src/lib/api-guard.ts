// Shared guards for public API routes.
//
// Rate limiting uses Upstash Redis (via REST, edge-compatible, no SDK) when
// UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN are set — giving a real
// distributed limit across all serverless instances. Otherwise it falls back
// to a best-effort in-memory limiter (per instance / edge isolate).

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();
const MAX_BUCKETS = 5000;

function memoryRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  if (buckets.size > MAX_BUCKETS) {
    for (const [k, b] of buckets) {
      if (now > b.resetAt) buckets.delete(k);
    }
  }
  const bucket = buckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}

async function upstashRateLimit(
  key: string,
  limit: number,
  windowMs: number,
  url: string,
  token: string
): Promise<boolean> {
  // Fixed-window counter: INCR the key, set expiry on first hit.
  const windowSecs = Math.ceil(windowMs / 1000);
  const res = await fetch(`${url}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify([
      ["INCR", `rl:${key}`],
      ["EXPIRE", `rl:${key}`, windowSecs, "NX"],
    ]),
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  const data = (await res.json()) as { result: number }[];
  return data[0].result <= limit;
}

/** Returns true if the request is allowed, false if rate-limited. */
export async function rateLimit(key: string, limit: number, windowMs: number): Promise<boolean> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    try {
      return await upstashRateLimit(key, limit, windowMs, url, token);
    } catch {
      // Redis hiccup shouldn't take the endpoint down — degrade to memory.
    }
  }
  return memoryRateLimit(key, limit, windowMs);
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

const ALLOWED_ORIGINS = new Set([
  "https://unconventionalgroup.ca",
  "https://www.unconventionalgroup.ca",
  "http://localhost:3000",
]);

/**
 * Browsers send an Origin header on cross-origin (and modern same-origin)
 * POST fetches. Reject anything claiming to come from another site.
 * Vercel preview deployments (*.vercel.app) are allowed.
 */
export function originAllowed(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true; // non-browser clients are handled by rate limiting
  if (ALLOWED_ORIGINS.has(origin)) return true;
  try {
    return new URL(origin).hostname.endsWith(".vercel.app");
  } catch {
    return false;
  }
}
