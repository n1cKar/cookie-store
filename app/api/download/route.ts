import { NextResponse } from "next/server";
import { getLastCookiesDump } from "../save-cookies/route";

export async function GET() {
  const data = getLastCookiesDump();

  if (!data) {
    return NextResponse.json({ error: "No cookies saved yet" }, { status: 404 });
  }

  return new NextResponse(data, {
    headers: {
      "Content-Disposition": "attachment; filename=cookies.txt",
      "Content-Type": "text/plain",
    },
  });
}
