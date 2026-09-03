export type TimelineEntry = {
  title: string;
  subtitle: string;
  period: string;
  current?: boolean;
  points: string[];
};

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative border-l border-ink-200 pl-8">
      {entries.map((entry, i) => (
        <li key={`${entry.title}-${i}`} className="mb-14 last:mb-0">
          <span
            className={`absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 ${
              entry.current
                ? "border-gold-500 bg-gold-100"
                : "border-ink-300 bg-paper"
            }`}
            aria-hidden
          />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="h-card">{entry.title}</h3>
            <span className="tag">{entry.period}</span>
          </div>
          <p className="mt-1 text-sm font-medium text-gold-700">
            {entry.subtitle}
          </p>
          <ul className="mt-4 space-y-2">
            {entry.points.map((point, j) => (
              <li key={j} className="body-text flex gap-3">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
