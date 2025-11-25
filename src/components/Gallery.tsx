const quotes = [
  "Jai Shri Ram",
  "Bolo Pawanputra Hanuman ki Jai",
  "Sankat Mochan Naam Tiharo",
  "Ram Kaj Karibe Ko Atur",
];

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="gallery">
      <h2 className="font-display text-3xl tracking-tight text-secondary">Gallery</h2>
      <p className="mt-2 text-foreground/70">Words that echo devotion.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {quotes.map(q => (
          <div key={q} className="rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-accent/20 border border-foreground/10 text-center">
            <div className="font-display text-secondary">{q}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

