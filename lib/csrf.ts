import { SignJWT, jwtVerify } from "jose";
import { serialize, parse } from "cookie";
import { NextRequest, NextResponse } from "next/server";

const CSRF_SECRET = new TextEncoder().encode(process.env.CSRF_SECRET || "super-secret-jwt-key-that-should-be-at-least-32-bytes-long");
console.log("CSRF_SECRET (first 3 chars):", process.env.CSRF_SECRET ? process.env.CSRF_SECRET.substring(0, 3) : "");
const TOKEN_NAME = "__Host-csrf";
const MAX_AGE = 60 * 60 * 24 * 7; // 1 week

export async function generateToken(res: NextResponse): Promise<string> {
  const token = Math.random().toString(36).substring(2);
  const signedToken = await new SignJWT({ token })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1 week")
    .sign(CSRF_SECRET);

  res.headers.set(
    "Set-Cookie",
    serialize(TOKEN_NAME, signedToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    })
  );
  return token;
}

export async function validateToken(req: NextRequest): Promise<boolean> {
  try {
    const cookies = parse(req.headers.get("cookie") || "");
    const signedToken = cookies[TOKEN_NAME];
    const headerToken = req.headers.get("X-CSRF-Token");

    if (!signedToken || !headerToken) {
      return false;
    }

    const { payload } = await jwtVerify(signedToken, CSRF_SECRET);

    return payload.token === headerToken;
  } catch (error) {
    console.error("CSRF token validation error:", error);
    return false;
  }
}
