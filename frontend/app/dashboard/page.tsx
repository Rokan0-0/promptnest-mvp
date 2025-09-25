"use client";
import { useEffect, useState } from "react";

interface Prompt {
  id: string;
  title: string;
  content: string;
}

export default function Dashboard() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);

  useEffect(() => {
    fetch("/api/prompts")
      .then(res => res.json())
      .then(data => setPrompts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">All Prompts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prompts.map(prompt => (
          <div key={prompt.id} className="border p-4 rounded shadow bg-white hover:shadow-lg transition">
            <h2 className="font-semibold text-xl mb-2">{prompt.title}</h2>
            <p className="text-gray-700">{prompt.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
