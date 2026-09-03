"use client";

import { useMemo, useState } from "react";
import { achievements, classify, domains, type Domain } from "@/lib/data";
import RankBadge from "./RankBadge";

export default function CompetitionExplorer() {
  const [active, setActive] = useState<Domain | "All">("All");

  const tagged = useMemo(
    () => achievements.map((a) => ({ a, tags: classify(a) })),
    []
  );

  const filtered = useMemo(
    () =>
      active === "All"
        ? tagged
        : tagged.filter(({ tags }) => tags.includes(active)),
    [active, tagged]
  );

  const counts = useMemo(() => {
    const c = new Map<Domain, number>();
    for (const d of domains) c.set(d, 0);
    for (const { tags } of tagged) for (const t of tags) c.set(t, (c.get(t) ?? 0) + 1);
    return c;
  }, [tagged]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter competitions by domain"
      >
        <button
          type="button"
          onClick={() => setActive("All")}
          className={`tag transition-colors ${
            active === "All" ? "!border-ink-950 !text-ink-950 font-semibold" : ""
          }`}
          aria-pressed={active === "All"}
        >
          All ({achievements.length})
        </button>
        {domains.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setActive(d)}
            className={`tag transition-colors ${
              active === d ? "!border-ink-950 !text-ink-950 font-semibold" : ""
            }`}
            aria-pressed={active === d}
          >
            {d} ({counts.get(d) ?? 0})
          </button>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-ink-200 text-xs uppercase tracking-wide text-ink-400">
              <th scope="col" className="py-3 pr-4 font-medium">
                Year
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Competition
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Organizer
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Level
              </th>
              <th scope="col" className="py-3 pr-0 text-right font-medium">
                Result
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {filtered.map(({ a }, i) => (
              <tr key={`${a.competition}-${a.year}-${i}`}>
                <td className="py-3 pr-4 text-sm text-ink-500">{a.year}</td>
                <td className="py-3 pr-4 text-sm font-medium text-ink-950">
                  {a.competition}
                  {a.code ? (
                    <span className="ml-1.5 text-ink-400">({a.code})</span>
                  ) : null}
                </td>
                <td className="py-3 pr-4 text-sm text-ink-500">{a.organizer}</td>
                <td className="py-3 pr-4 text-sm text-ink-500">{a.level}</td>
                <td className="py-3 pr-0 text-right">
                  <RankBadge achievement={a} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-ink-500">
            No competitions in this category.
          </p>
        )}
      </div>
    </div>
  );
}
