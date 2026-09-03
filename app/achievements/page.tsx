import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StatTile from "@/components/StatTile";
import AchievementYearGroup from "@/components/AchievementYearGroup";
import RankBadge from "@/components/RankBadge";
import RelatedLinks from "@/components/RelatedLinks";
import PhotoGallery from "@/components/PhotoGallery";
import { achievements, achievementPhotos, stats, type Achievement } from "@/lib/data";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "The full, year-by-year competitive track record of Reyhan Adi Jayawasita across 70+ national and international academic competitions, 2023–2026.",
  alternates: { canonical: "/achievements" },
};

const years = Array.from(new Set(achievements.map((a) => a.year))).sort(
  (a, b) => b - a
);

function findHighlight(competition: string, year: number): Achievement {
  const found = achievements.find(
    (a) => a.competition === competition && a.year === year
  );
  if (!found) throw new Error(`Highlight not found: ${competition} ${year}`);
  return found;
}

const highlights = [
  findHighlight("Olimpiade Sains Generasi Emas", 2025),
  findHighlight("Widya Mandala Accounting Game", 2024),
  findHighlight("Actuarial Science Olympiad", 2025),
  findHighlight("Brain x Biz", 2026),
];

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Achievements"
        title="A professional track record, not a highlight reel."
        lead="Every competition result from the CV, presented in full and organized by year — first places, runner-ups, and everything between."
      />

      <section className="rule">
        <div className="container-page py-14">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <StatTile value="70+" label="Competitions entered" />
            <StatTile value={`${stats.firstPlaces}`} label="1st place finishes" />
            <StatTile value={`${stats.podiumFinishes}`} label="Podium finishes" />
            <StatTile value={`${stats.yearsActive}`} label="Consecutive years" />
          </div>
        </div>
      </section>

      <section className="rule">
        <div className="container-page py-16 sm:py-20">
          <p className="eyebrow mb-6">Selected highlights</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <div key={i} className="card flex flex-col justify-between">
                <div>
                  <RankBadge achievement={h} />
                  <p className="mt-4 font-serif text-lg leading-snug text-ink-950">
                    {h.competition}
                    {h.code ? (
                      <span className="text-ink-400"> ({h.code})</span>
                    ) : null}
                  </p>
                </div>
                <p className="mt-4 text-sm text-ink-500">
                  {h.organizer} &middot; {h.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rule">
        <div className="container-page py-16 sm:py-20">
          <p className="eyebrow mb-6">From the podium</p>
          <PhotoGallery photos={achievementPhotos} />
        </div>
      </section>

      <section className="container-page py-4 sm:py-6">
        <p className="eyebrow mb-2">Full record</p>
        <div className="divide-y divide-ink-100">
          {years.map((year) => (
            <AchievementYearGroup
              key={year}
              year={year}
              items={achievements.filter((a) => a.year === year)}
            />
          ))}
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            href: "/competitions",
            label: "Competitions",
            description: "The same record, organized by subject domain.",
          },
          {
            href: "/research",
            label: "Research & Analytics",
            description: "What this record demonstrates analytically.",
          },
          {
            href: "https://www.linkedin.com/in/reyhan-adi-jayawasita-7172383b7",
            label: "LinkedIn",
            description: "Connect and follow ongoing updates.",
          },
        ]}
      />
    </>
  );
}
