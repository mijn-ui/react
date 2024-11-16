import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const filename = url.searchParams.get("filename");

    if (!filename || typeof filename !== "string") {
      return NextResponse.json({ error: "Invalid filename" }, { status: 400 });
    }

    const filePath = path.join(
      process.cwd(),
      "examples/html",
      `${filename}.html`,
    );
    const html = fs.readFileSync(filePath, "utf8");

    return NextResponse.json({ html });
  } catch (error) {
    console.error("Error reading file:", error);
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
