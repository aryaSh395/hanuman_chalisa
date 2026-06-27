"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/#chalisa", label: "Chalisa" },
    { href: "/#timeline", label: "Timeline" },
    { href: "/#gallery", label: "Gallery" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-background/60 border-b border-foreground/10">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold text-lg tracking-wide text-primary">
          Jai Hanuman
        </Link>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-6 items-center">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm transition-colors ${pathname === l.href ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-secondary"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-foreground/10 bg-background">
          <ul className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm transition-colors block ${pathname === l.href ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

