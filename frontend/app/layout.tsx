/**
 * Root layout for Next.js App Router.
 * Applies global styles and provides app-wide containers.
 */
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PromptNest",
  description: "Discover, create, and share AI prompts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}


