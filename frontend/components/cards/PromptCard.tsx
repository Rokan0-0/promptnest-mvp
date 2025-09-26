"use client";
import { Heart, MessageSquare, MoreHorizontal, Share2, Copy } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import type { Prompt } from "@/lib/types";
import { useState } from "react";
import { TagChip } from "@/components/chips/TagChip";

export function PromptCard({ prompt }: { prompt: Prompt }) {
  const [liked, setLiked] = useState(Boolean(prompt.liked));
  const [likes, setLikes] = useState(prompt.likesCount ?? 0);
  return (
    <Card className="p-4 hover:shadow-md">
      <div className="flex items-start gap-3">
        <Avatar src={prompt.author.avatarUrl} fallback={prompt.author.name?.[0] ?? "?"} size="sm" />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium">{prompt.title}</h3>
              <p className="text-sm text-text-muted">by {prompt.author.name}</p>
            </div>
            <Button variant="ghost" size="sm" aria-label="More actions">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
          <p className="mt-3 text-sm">{prompt.description}</p>
          {prompt.tags?.length ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {prompt.tags.map((t) => (
                <TagChip key={t} tag={t} />
              ))}
            </div>
          ) : null}
          <pre className="mt-3 bg-background/40 rounded-md p-3 text-xs whitespace-pre-wrap border border-border">{prompt.content}</pre>
          <div className="mt-4 flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={async () => {
                setLiked(v => !v);
                setLikes(v => (liked ? v - 1 : v + 1));
                try {
                  await fetch(`/api/prompts/${prompt.id}/like`, { method: "POST" });
                } catch {}
              }}
              aria-label="Like"
            >
              <Heart className={`w-4 h-4 ${liked ? "text-red-500" : ""}`} />
              <span className="ml-1 text-xs">{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" aria-label="Comment">
              <MessageSquare className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              aria-label="Share"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(`${location.origin}/prompt/${prompt.id}`);
                } catch {}
              }}
            >
              <Share2 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              aria-label="Copy prompt content"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(prompt.content);
                } catch {}
              }}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}


