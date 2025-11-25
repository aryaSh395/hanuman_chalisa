"use client";
import { useState } from "react";
import { chalisa } from "@/data/hanuman";

export default function Chalisa() {
  const [showMeaning, setShowMeaning] = useState(true);
  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="chalisa">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl tracking-tight text-secondary">Hanuman Chalisa</h2>
          <p className="mt-2 text-foreground/70">Verses of devotion to Shri Hanuman.</p>
        </div>
        <button
          onClick={() => setShowMeaning(v => !v)}
          className="rounded-full border border-foreground/10 px-4 py-2 text-sm hover:bg-foreground/5"
        >
          {showMeaning ? "Hide Meaning" : "Show Meaning"}
        </button>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {chalisa.map((c, i) => (
          <div key={i} className="rounded-xl bg-gradient-to-br from-background to-foreground/5 p-5">
            <div className="text-secondary font-medium">{c.verse}</div>
            {showMeaning && <div className="mt-2 text-sm text-foreground/70">{c.meaning}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
