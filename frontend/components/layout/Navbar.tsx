"use client";
import { Bell, Menu, Search } from "lucide-react";
import { useState } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="h-navbar shadow-navbar sticky top-0 z-50 bg-background flex items-center px-4">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" aria-label="Open menu">
          <Menu className="w-5 h-5" />
        </Button>
        <span className="font-semibold text-lg">PromptNest</span>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="hidden md:flex items-center gap-2 bg-surface rounded-md px-3 py-2 w-full max-w-lg border border-border">
          <Search className="w-4 h-4 text-text-muted" />
          <input className="bg-transparent outline-none flex-1 text-sm" placeholder="Search prompts..." />
        </div>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <Button variant="ghost" size="sm" aria-label="Notifications" onClick={() => setOpen(v => !v)}>
          <Bell className="w-5 h-5" />
        </Button>
        <Avatar size="sm" fallback="PN" />
      </div>
      {open && (
        <div className="absolute right-4 top-14 w-72 rounded-md border border-border bg-surface p-3 shadow-md">
          <div className="text-sm text-text-muted">No new notifications</div>
        </div>
      )}
    </header>
  );
}


