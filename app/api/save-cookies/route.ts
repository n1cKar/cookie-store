import { NextRequest, NextResponse } from "next/server";
import { setLastCookiesDump } from "@/lib/cookieStore";

export async function GET(req: NextRequest) {
  const cookies = req.cookies.getAll();

  const cookieText =
    cookies.map((c) => `${c.name}=${c.value}`).join("\n") || "No cookies found";

  setLastCookiesDump(cookieText);

  return NextResponse.json({ success: true });
}
