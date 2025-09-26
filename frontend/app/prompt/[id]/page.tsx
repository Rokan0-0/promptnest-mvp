import { Navbar } from "@/components/layout/Navbar";
import { DesktopSidebar } from "@/components/layout/DesktopSidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { PromptDetailsPage } from "@/components/pages/PromptDetailsPage";
import type { Prompt } from "@/lib/types";

export default function PromptDetails() {
  const prompt: Prompt = {
    id: "1",
    title: "Sample Prompt",
    description: "This is a sample prompt description.",
    content: "You are a helpful assistant...",
    tags: ["sample"],
    author: { id: "u1", name: "Jane Doe", username: "jane" },
    createdAt: new Date().toISOString(),
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <DesktopSidebar />
        <main className="flex-1 p-6">
          <PromptDetailsPage prompt={prompt} />
        </main>
      </div>
      <MobileBottomNav />
    </div>
  );
}


