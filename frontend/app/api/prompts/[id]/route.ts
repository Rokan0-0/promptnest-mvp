import { NextResponse } from "next/server";
import type { Prompt } from "@/lib/types";

// Minimal in-memory example. In production use your DB to fetch by id
const notFound = NextResponse.json({ error: "Not found" }, { status: 404 });

export async function GET(_: Request, { params }: { params: { id: string } }) {
  // This endpoint mirrors the list mock in /api/prompts. For isolation, we just construct a prompt.
  const prompt: Prompt = {
    id: params.id,
    title: "Sample Prompt",
    description: "Details for a single prompt.",
    content: "You are a helpful assistant...",
    tags: ["sample"],
    author: { id: "u1", name: "Jane Doe", username: "jane" },
    likesCount: 3,
    liked: false,
    comments: [],
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(prompt);
}


