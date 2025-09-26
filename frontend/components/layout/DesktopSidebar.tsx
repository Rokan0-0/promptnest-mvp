"use client";
import { Home, Compass, Bookmark, User as UserIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/my-prompts", label: "My Prompts", icon: UserIcon },
  { href: "/saved", label: "Saved", icon: Bookmark },
  { href: "/create", label: "Create", icon: Plus },
];

export function DesktopSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className={`hidden md:flex flex-col border-r border-border bg-surface shadow-sidebar transition-all duration-200 ${collapsed ? "w-sidebar-collapsed" : "w-sidebar"}`}>
      <button className="self-end p-2" onClick={() => setCollapsed(v => !v)} aria-label="Toggle sidebar">
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
      <nav className="flex-1 px-2 py-2">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-background/40">
            <Icon className="w-5 h-5" />
            {!collapsed && <span className="text-sm">{label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}


