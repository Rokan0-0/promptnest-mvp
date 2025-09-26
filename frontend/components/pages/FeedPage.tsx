"use client";
import React, { useEffect, useState } from "react";
import type { Prompt } from "@/lib/types";
import { PromptCard } from "@/components/cards/PromptCard";
import { Filters } from "@/components/filters/Filters";

export function FeedPage(_: { prompts: Prompt[]; isLoading?: boolean }) {
  const [items, setItems] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<{ category: string; sort: string }>({ category: "All", sort: "Trending" });

  async function load() {
    setLoading(true);
    const params = new URLSearchParams();
    if (filters.category) params.set("category", filters.category);
    if (filters.sort) params.set("sort", filters.sort);
    const res = await fetch(`/api/prompts?${params.toString()}`);
    const json = await res.json();
    setItems(json.prompts ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.category, filters.sort]);

  return (
    <div className="grid gap-4">
      <Filters onChange={setFilters} />
      {loading && <div className="text-sm text-text-muted">Loading…</div>}
      {items.length === 0 && !loading && (
        <div className="text-sm text-text-muted">No prompts yet.</div>
      )}
      {items.map((p) => (
        <PromptCard key={p.id} prompt={p} />
      ))}
    </div>
  );
}


