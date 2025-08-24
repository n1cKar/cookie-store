import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const file = req.nextUrl.searchParams.get("file");
  if (!file) return NextResponse.json({ error: "File not found" }, { status: 404 });

  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File missing" }, { status: 404 });
  }

  const data = fs.readFileSync(filePath);

  return new NextResponse(data, {
    headers: {
      "Content-Disposition": `attachment; filename=${file}`,
      "Content-Type": "text/plain",
    },
  });
}
