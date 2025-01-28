import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    msg: "Welcome to route page",
  });
}
