import { NextResponse } from "next/server";
import type { Prompt, User } from "@/lib/types";
import { validateCreatePrompt } from "@/lib/schemas";

// In-memory mock for demonstration; replace with DB access in production
const mockUser: User = { id: "u1", name: "Jane Doe", username: "jane" };
let mockPrompts: Prompt[] = [
  {
    id: "p1",
    title: "Cold email outreach",
    description: "A concise outreach prompt",
    content: "Write a concise cold email to ...",
    tags: ["marketing"],
    author: mockUser,
    likesCount: 2,
    liked: false,
    comments: [],
    createdAt: new Date().toISOString(),
  },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const category = url.searchParams.get("category");
  const sort = url.searchParams.get("sort");

  let data = [...mockPrompts];
  if (category && category.toLowerCase() !== "all") {
    data = data.filter((p) => p.tags.map((t) => t.toLowerCase()).includes(category.toLowerCase()));
  }
  if (sort === "Newest") {
    data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } else if (sort === "Most Liked") {
    data.sort((a, b) => (b.likesCount ?? 0) - (a.likesCount ?? 0));
  }
  return NextResponse.json({ prompts: data });
}

export async function POST(req: Request) {
  const data = await req.json();
  const check = validateCreatePrompt(data);
  if (!check.ok) {
    return NextResponse.json({ error: check.error }, { status: 400 });
  }
  const created: Prompt = {
    id: String(Date.now()),
    title: data.title,
    description: data.description,
    content: data.content,
    tags: Array.isArray(data.tags) ? data.tags : [],
    author: mockUser,
    createdAt: new Date().toISOString(),
    likesCount: 0,
    liked: false,
    comments: [],
  };
  mockPrompts.unshift(created);
  return NextResponse.json(created, { status: 201 });
}


