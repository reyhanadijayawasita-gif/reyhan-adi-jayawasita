import type { Achievement } from "@/lib/data";

const rankStyles: Record<number, string> = {
  1: "bg-gold-500 text-white border-gold-500",
  2: "bg-ink-100 text-ink-800 border-ink-300",
  3: "bg-ink-50 text-ink-600 border-ink-200",
  0: "bg-white text-ink-600 border-ink-200",
};

export default function RankBadge({ achievement }: { achievement: Achievement }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold ${
        rankStyles[achievement.rank]
      }`}
    >
      {achievement.result}
    </span>
  );
}
