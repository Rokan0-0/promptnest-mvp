"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = ["All", "Marketing", "Coding", "Writing", "Design"];
const sortOptions = ["Trending", "Newest", "Most Liked"];

export function Filters({ onChange }: { onChange?: (state: { category: string; sort: string }) => void }) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(categories[0]);
  const [sort, setSort] = useState(sortOptions[0]);
  return (
    <div className="mb-section">
      <div className="flex items-center justify-between">
        <div className="text-sm text-text-muted">Filters</div>
        <button className="text-sm inline-flex items-center gap-1" onClick={() => setOpen(v => !v)}>
          Options <ChevronDown className="w-4 h-4" />
        </button>
      </div>
      {open && (
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 bg-surface rounded-md border border-border p-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-muted">Category:</span>
            <select
              value={category}
              onChange={(e) => {
                const val = e.target.value;
                setCategory(val);
                onChange?.({ category: val, sort });
              }}
              className="bg-input-background border border-border rounded-md px-2 py-1 text-sm"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-muted">Sort by:</span>
            <select
              value={sort}
              onChange={(e) => {
                const val = e.target.value;
                setSort(val);
                onChange?.({ category, sort: val });
              }}
              className="bg-input-background border border-border rounded-md px-2 py-1 text-sm"
            >
              {sortOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}


