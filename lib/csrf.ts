import { createHash, randomBytes } from "crypto";

// CSRF Token Generation and Validation
const CSRF_TOKENS = new Map<string, number>();

export function generateToken(): string {
  const token = randomBytes(32).toString("hex");
  const hash = createHash("sha256").update(token).digest("hex");
  CSRF_TOKENS.set(hash, Date.now() + 3600000); // 1 hour expiration
  return token;
}

export function validateToken(token: string): boolean {
  const hash = createHash("sha256").update(token).digest("hex");
  const expiration = CSRF_TOKENS.get(hash);
  if (!expiration || Date.now() > expiration) return false;
  CSRF_TOKENS.delete(hash);
  return true;
}

// Rate Limiter Configuration
const RATE_LIMITS = new Map<string, number[]>();
const MAX_REQUESTS = 5;
const TIME_WINDOW = 60 * 1000; // 1 minute

export const rateLimiter = {
  isLimited(identifier: string): boolean {
    const now = Date.now();
    const timestamps = RATE_LIMITS.get(identifier) || [];
    const recentRequests = timestamps.filter((ts) => now - ts < TIME_WINDOW);

    if (recentRequests.length >= MAX_REQUESTS) return true;

    RATE_LIMITS.set(identifier, [...recentRequests, now]);
    return false;
  },
  reset(identifier: string) {
    RATE_LIMITS.delete(identifier);
  },
};
