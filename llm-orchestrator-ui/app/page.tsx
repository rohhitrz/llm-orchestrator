"use client";
import { useState } from "react";
export default function Home() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-xl">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-700 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-lg bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
        >
          Ask
        </button>
      </form>
      {loading && (
        <p className="mt-6 text-zinc-500">Asking OpenAI, Claude, and Gemini…</p>
      )}

      {result && !loading && (
        <div className="mt-6 w-full max-w-xl rounded-lg border border-zinc-300 p-4 dark:border-zinc-700">
          <pre className="whitespace-pre-wrap text-sm">{result.answer}</pre>
        </div>
      )}
    </div>
  );
}
