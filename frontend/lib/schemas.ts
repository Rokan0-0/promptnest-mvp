// Minimal runtime validation helpers (lightweight alternative to zod for this MVP)
export function validateCreatePrompt(input: any) {
  if (!input || typeof input !== 'object') return { ok: false, error: 'Invalid payload' } as const;
  const { title, description, content, tags } = input as Record<string, unknown>;
  if (typeof title !== 'string' || title.trim().length === 0) return { ok: false, error: 'title is required' } as const;
  if (typeof description !== 'string') return { ok: false, error: 'description must be string' } as const;
  if (typeof content !== 'string' || content.trim().length === 0) return { ok: false, error: 'content is required' } as const;
  if (tags !== undefined && !Array.isArray(tags)) return { ok: false, error: 'tags must be array' } as const;
  return { ok: true } as const;
}


