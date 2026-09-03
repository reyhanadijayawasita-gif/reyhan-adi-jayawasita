export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="border-b border-ink-200 bg-grid-faint bg-[size:32px_32px]">
      <div className="container-page py-16 sm:py-20">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="h-display max-w-3xl">{title}</h1>
        <p className="body-lead mt-6 max-w-2xl">{lead}</p>
      </div>
    </section>
  );
}
