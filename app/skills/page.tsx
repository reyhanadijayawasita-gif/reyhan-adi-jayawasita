import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Skills of Reyhan Adi Jayawasita across accounting, economics, business, finance, communication and leadership.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title="Capabilities, built through 70+ competitions and counting."
        lead="Technical grounding in accounting, economics and business, paired with the communication and leadership skills that come from competing — and now coaching."
      />

      <section className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-3">
        <div className="card">
          <h2 className="h-card mb-5">Business, Economics, Accounting &amp; Finance</h2>
          <ul className="space-y-3">
            {skills.technical.map((s) => (
              <li key={s} className="body-text flex gap-3">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2 className="h-card mb-5">Communication &amp; Leadership</h2>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="h-card mb-5">Languages</h2>
          <ul className="space-y-3">
            {skills.languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between">
                <span className="body-text">{l.name}</span>
                <span className="tag">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            href: "/experience",
            label: "Experience",
            description: "Where these skills have been applied professionally.",
          },
          {
            href: "/competitions",
            label: "Competitions",
            description: "Where the technical skills were tested and proven.",
          },
          {
            href: "/mentorship",
            label: "Mentorship",
            description: "Communication and leadership, put into practice.",
          },
        ]}
      />
    </>
  );
}
