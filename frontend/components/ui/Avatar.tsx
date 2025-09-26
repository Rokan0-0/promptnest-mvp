import React from "react";
import { cn } from "@/lib/utils";

export function Avatar({ src, alt, fallback = "?", size = "md", className }: { src?: string; alt?: string; fallback?: string; size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeCls = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-10 h-10";
  return (
    <div className={cn("rounded-full overflow-hidden bg-secondary text-foreground flex items-center justify-center", sizeCls, className)}>
      {src ? <img src={src} alt={alt} className="w-full h-full object-cover" /> : <span className="text-sm font-medium">{fallback}</span>}
    </div>
  );
}


