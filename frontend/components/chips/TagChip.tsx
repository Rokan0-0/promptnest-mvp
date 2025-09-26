import React from "react";

export function TagChip({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-background/40 border border-border text-xs">#{tag}</span>
  );
}


