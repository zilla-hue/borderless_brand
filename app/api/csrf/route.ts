import { NextRequest, NextResponse } from "next/server";
import { generateToken } from "@/lib/csrf";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const res = NextResponse.json({ message: "CSRF token generated" });
  const token = await generateToken(res);
  return res;
}
