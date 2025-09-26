import React from "react";
import type { Comment } from "@/lib/types";
import { Avatar } from "@/components/ui/Avatar";

export function CommentList({ comments = [] }: { comments?: Comment[] }) {
  if (comments.length === 0) {
    return <div className="text-sm text-text-muted">No comments yet.</div>;
  }
  return (
    <ul className="space-y-3">
      {comments.map((c) => (
        <li key={c.id} className="flex items-start gap-3">
          <Avatar src={c.author.avatarUrl} fallback={c.author.name?.[0] ?? "?"} size="sm" />
          <div>
            <div className="text-sm font-medium">{c.author.name}</div>
            <div className="text-sm text-text-muted">{new Date(c.createdAt).toLocaleString()}</div>
            <p className="mt-1 text-sm">{c.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}


