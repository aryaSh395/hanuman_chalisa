"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
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
        <ul className="hidden md:flex gap-6">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm transition-colors ${pathname === l.href ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

