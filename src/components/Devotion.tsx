import Image from "next/image";

const items = [
  {
    title: "Bhakti",
    desc: "Unwavering devotion to Shri Ram inspires selfless action.",
  },
  {
    title: "Shakti",
    desc: "Strength guided by wisdom conquers every obstacle.",
  },
  {
    title: "Seva",
    desc: "Service with humility uplifts the world around us.",
  },
];

export default function Devotion() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="devotion">
      <h2 className="font-display text-3xl tracking-tight text-secondary">Devotion</h2>
      <p className="mt-2 text-foreground/70">Principles that define Hanuman’s path.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {items.map(i => (
          <div key={i.title} className="group rounded-2xl border border-foreground/10 bg-background p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <Image src="/gada.svg" alt="Icon" width={28} height={28} />
              <h3 className="font-medium text-secondary">{i.title}</h3>
            </div>
            <p className="mt-3 text-sm text-foreground/70">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
