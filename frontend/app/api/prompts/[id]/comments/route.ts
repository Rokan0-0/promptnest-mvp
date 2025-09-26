import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ comments: [] });
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();
  return NextResponse.json({ id: String(Date.now()), ...data }, { status: 201 });
}


