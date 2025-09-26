"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import type { CreatePromptData } from "@/lib/types";

export function CreatePromptForm({ onCreated }: { onCreated?: (id: string) => void }) {
  const [data, setData] = useState<CreatePromptData>({ title: "", description: "", content: "", tags: [] });
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/prompts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      onCreated?.(json.id);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} placeholder="e.g. Cold email outreach" />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input id="description" value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} placeholder="Short description" />
      </div>
      <div>
        <Label htmlFor="content">Prompt</Label>
        <Textarea id="content" rows={10} value={data.content} onChange={(e) => setData({ ...data, content: e.target.value })} placeholder="Write the prompt here..." />
      </div>
      <div>
        <Label htmlFor="tags">Tags (comma separated)</Label>
        <Input id="tags" value={data.tags.join(", ")} onChange={(e) => setData({ ...data, tags: e.target.value.split(/,\s*/) })} placeholder="marketing, email" />
      </div>
      <Button type="submit" disabled={loading}>{loading ? "Saving..." : "Create"}</Button>
    </form>
  );
}


