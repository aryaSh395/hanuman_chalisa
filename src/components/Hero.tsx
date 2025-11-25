"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [src, setSrc] = useState("/gada.png");
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-accent" />
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-secondary/40 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
        <div className="mx-auto mb-6 flex justify-center drop-shadow-md">
          <Image src={src} alt="Gada" width={96} height={96} priority onError={() => setSrc("/gada.svg")} />
        </div>
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight text-white">Jai Bajrangbali</h1>
        <p className="mt-4 text-white/90 max-w-2xl mx-auto">
          Celebrate courage, devotion, and service through the story of Lord Hanuman.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="#chalisa" className="rounded-full bg-white text-secondary px-5 py-2 text-sm font-medium">Read Chalisa</Link>
          <Link href="#timeline" className="rounded-full bg-secondary text-white px-5 py-2 text-sm font-medium">Explore Story</Link>
        </div>
      </div>
    </section>
  );
}
