"use client";
import React, { useState } from "react";
import type { Prompt } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Copy } from "lucide-react";
import { CommentList } from "@/components/comments/CommentList";
import { Textarea } from "@/components/ui/Textarea";

export function PromptDetailsPage({ prompt }: { prompt: Prompt }) {
  const [copied, setCopied] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(prompt.comments ?? []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }
  async function submitComment() {
    if (!comment.trim()) return;
    try {
      const res = await fetch(`/api/prompts/${prompt.id}/comments`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content: comment }) });
      const json = await res.json();
      setComments([{ id: json.id, content: comment, author: prompt.author, createdAt: new Date().toISOString() }, ...comments]);
      setComment("");
    } catch {}
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium">{prompt.title}</h1>
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg text-text-muted">Description</h2>
          <Button variant="secondary" size="sm" onClick={copy} aria-label="Copy prompt">
            <Copy className="w-4 h-4 mr-2" /> {copied ? "Copied" : "Copy"}
          </Button>
        </div>
        <p className="mt-2 text-sm">{prompt.description}</p>
        <pre className="mt-4 bg-background/40 rounded-md p-3 text-sm whitespace-pre-wrap border border-border">{prompt.content}</pre>
      </Card>
      <Card className="p-4">
        <h3 className="text-lg font-medium">Comments</h3>
        <div className="mt-3 grid gap-2">
          <Textarea rows={4} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write a comment..." />
          <div>
            <Button size="sm" onClick={submitComment}>Post Comment</Button>
          </div>
        </div>
        <div className="mt-4">
          <CommentList comments={comments} />
        </div>
      </Card>
    </div>
  );
}


