import { NextRequest, NextResponse } from "next/server";

// temporary in-memory store (resets on cold start)
let lastCookiesDump = "";

export async function GET(req: NextRequest) {
  const cookies = req.cookies.getAll();

  lastCookiesDump =
    cookies.map((c) => `${c.name}=${c.value}`).join("\n") || "No cookies found";

  return NextResponse.json({ success: true });
}

// helper for other routes to fetch latest dump
export function getLastCookiesDump() {
  return lastCookiesDump;
}
