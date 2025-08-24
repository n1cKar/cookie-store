import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  // Grab ALL cookies (HttpOnly included) from the request
  const cookies = req.cookies.getAll();

  // Format cookies into simple text
  const cookieText = cookies
    .map((c) => `${c.name}=${c.value}`)
    .join("\n") || "No cookies found";

  const filePath = path.join(process.cwd(), "cookies.txt");
  fs.writeFileSync(filePath, cookieText, "utf-8");

  return NextResponse.json({ filePath: "cookies.txt" });
}
