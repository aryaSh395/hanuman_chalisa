"use client";
import { useState } from "react";
import { chalisa } from "@/data/hanuman";

export default function Chalisa() {
  const [showMeaning, setShowMeaning] = useState(true);
  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="chalisa">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="font-display text-3xl tracking-tight text-secondary">Hanuman Chalisa</h2>
          <p className="mt-2 text-foreground/70">Verses of devotion to Shri Hanuman.</p>
        </div>
        <button
          onClick={() => setShowMeaning(v => !v)}
          className="rounded-full border border-foreground/10 px-4 py-2 text-sm hover:bg-foreground/5 transition-colors"
        >
          {showMeaning ? "Hide Meaning" : "Show Meaning"}
        </button>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {chalisa.map((c, i) => (
          <div 
            key={i} 
            className="group rounded-xl bg-gradient-to-br from-background to-foreground/5 p-5 border border-foreground/5 hover:border-primary/30 transition-all hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="text-secondary font-medium leading-relaxed">{c.verse}</div>
                {showMeaning && (
                  <div className="mt-3 text-sm text-foreground/70 leading-relaxed border-l-2 border-primary/40 pl-3">
                    {c.meaning}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
