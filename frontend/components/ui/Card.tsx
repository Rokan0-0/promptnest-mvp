import React from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className, hover }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={cn("rounded-lg bg-surface border border-border shadow-card", hover && "hover:shadow-lg", className)}>
      {children}
    </div>
  );
}


