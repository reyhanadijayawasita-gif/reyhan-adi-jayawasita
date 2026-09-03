import Image from "next/image";
import Link from "next/link";
import StatTile from "@/components/StatTile";
import RelatedLinks from "@/components/RelatedLinks";
import { person, stats, education, experience } from "@/lib/data";

const current = [
  ...education.filter((e) => e.status === "current").map((e) => ({
    label: e.program,
    org: e.institution,
  })),
  ...experience.filter((e) => e.current).map((e) => ({
    label: e.role,
    org: e.org,
  })),
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-ink-200 bg-grid-faint bg-[size:32px_32px]">
        <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr,0.8fr] lg:items-center lg:py-28">
          <div>
            <p className="eyebrow mb-5">
              Business &middot; Economics &middot; Accounting &middot; Finance
            </p>
            <h1 className="h-display">{person.fullName}</h1>
            <p className="mt-5 max-w-xl text-lg font-medium text-ink-700 sm:text-xl">
              {person.headline}
            </p>
            <p className="body-lead mt-6 max-w-xl">
              Business Administration student at S.P. Jain School of Global
              Management and a 70+ time national and international academic
              competitor across accounting, economics, finance and business —
              now channeling that experience into mentoring the next
              generation of competitors.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Explore My Journey
              </Link>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer me"
                className="btn-secondary"
              >
                View My LinkedIn
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs lg:max-w-sm">
            <div className="relative aspect-[3/3.4] w-full overflow-hidden border border-ink-200 bg-ink-950">
              <Image
                src={person.photo}
                alt={person.fullName}
                fill
                priority
                sizes="(min-width: 1024px) 384px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rule">
        <div className="container-page py-14">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <StatTile value="70+" label="Academic competitions entered" />
            <StatTile
              value={`${stats.firstPlaces}`}
              label="1st place finishes on record"
            />
            <StatTile
              value={`${stats.podiumFinishes}`}
              label="Total podium finishes"
            />
            <StatTile value={`${stats.yearsActive}`} label="Years of competitive record" />
          </div>
        </div>
      </section>

      <section className="rule">
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr]">
            <div>
              <p className="eyebrow mb-4">About</p>
              <h2 className="h-section">
                An analytical mind, forged in competition.
              </h2>
            </div>
            <p className="body-text text-lg">{person.summary}</p>
          </div>
        </div>
      </section>

      {current.length > 0 && (
        <section className="rule bg-ink-950 text-paper">
          <div className="container-page py-16 sm:py-20">
            <p className="eyebrow mb-6 !text-gold-400">Currently</p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {current.map((c, i) => (
                <div key={i} className="border-l border-ink-700 pl-5">
                  <p className="font-serif text-lg leading-snug text-paper">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm text-ink-400">{c.org}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedLinks
        title="Explore the full record"
        links={[
          {
            href: "/education",
            label: "Education",
            description: "S.P. Jain School of Global Management and academic foundations.",
          },
          {
            href: "/achievements",
            label: "Achievements",
            description: "70+ competitions, grouped by year, 2023–2026.",
          },
          {
            href: "/competitions",
            label: "Competitions",
            description: "Browse by domain — accounting, economics, finance, business.",
          },
          {
            href: "/research",
            label: "Research & Analytics",
            description: "Analytical interests across economics, accounting and investing.",
          },
          {
            href: "/experience",
            label: "Experience",
            description: "Professional and advisory roles, 2023–present.",
          },
          {
            href: "/contact",
            label: "Contact",
            description: "Get in touch or connect on LinkedIn.",
          },
        ]}
      />
    </>
  );
}
