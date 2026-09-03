import type { Achievement } from "@/lib/data";
import RankBadge from "./RankBadge";

export default function AchievementYearGroup({
  year,
  items,
}: {
  year: number;
  items: Achievement[];
}) {
  const firsts = items.filter((a) => a.rank === 1).length;
  return (
    <div className="py-10">
      <div className="mb-6 flex items-baseline justify-between">
        <h3 className="font-serif text-2xl text-ink-950">{year}</h3>
        <p className="text-sm text-ink-500">
          {items.length} competitions{firsts ? ` · ${firsts} first place${firsts > 1 ? "s" : ""}` : ""}
        </p>
      </div>
      <ul className="divide-y divide-ink-100 border-y border-ink-100">
        {items.map((a, i) => (
          <li
            key={`${a.competition}-${i}`}
            className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div className="min-w-0">
              <p className="truncate font-medium text-ink-950">
                {a.competition}
                {a.code ? (
                  <span className="ml-1.5 text-ink-400">({a.code})</span>
                ) : null}
              </p>
              <p className="mt-0.5 truncate text-sm text-ink-500">
                {a.organizer} &middot; {a.level}
              </p>
            </div>
            <RankBadge achievement={a} />
          </li>
        ))}
      </ul>
    </div>
  );
}
