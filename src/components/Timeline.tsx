import { timeline } from "@/data/hanuman";

export default function Timeline() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="timeline">
      <h2 className="font-display text-3xl tracking-tight text-secondary">Story Timeline</h2>
      <p className="mt-2 text-foreground/70">Milestones from the Ramayana.</p>
      <div className="mt-8 relative">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-secondary/20" />
        <ul className="space-y-6">
          {timeline.map((t, i) => (
            <li key={i} className="pl-12">
              <div className="relative">
                <div className="absolute -left-8 top-2 h-5 w-5 rounded-full bg-secondary" />
                <h3 className="text-lg font-medium text-secondary">{t.title}</h3>
                <p className="mt-1 text-foreground/70">{t.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
