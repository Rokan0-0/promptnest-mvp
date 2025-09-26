"use client";
import Link from "next/link";
import { Home, Compass, Bookmark, User } from "lucide-react";

const items = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/explore", icon: Compass, label: "Explore" },
  { href: "/saved", icon: Bookmark, label: "Saved" },
  { href: "/my-prompts", icon: User, label: "Me" },
];

export function MobileBottomNav() {
  return (
    <nav className="md:hidden h-bottom-nav bg-surface border-t border-border sticky bottom-0 w-full grid grid-cols-4">
      {items.map(({ href, icon: Icon, label }) => (
        <Link key={href} href={href} className="flex flex-col items-center justify-center py-2 text-xs">
          <Icon className="w-5 h-5" />
          <span className="mt-1">{label}</span>
        </Link>
      ))}
    </nav>
  );
}


