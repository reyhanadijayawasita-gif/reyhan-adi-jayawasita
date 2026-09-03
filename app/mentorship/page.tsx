import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentorship",
  description:
    "Reyhan Adi Jayawasita's mentoring and teaching experience in economics, accounting, finance and competition preparation.",
  alternates: { canonical: "/mentorship" },
};

const mentoringRoles = experience.filter(
  (e) => e.role === "Academic Mentor & Subject Tutor" || e.role === "External Competition Tutor"
);

export default function MentorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Mentorship"
        title="Turning 70+ competitions into a coaching practice."
        lead="Since 2024, I've translated my own competitive experience into structured tutoring and olympiad coaching for high school students."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {mentoringRoles.map((role) => (
            <div key={role.role} className="card">
              <p className="tag-gold mb-4">{role.period}</p>
              <h2 className="h-card mb-1">{role.role}</h2>
              <p className="mb-4 text-sm font-medium text-ink-500">{role.org}</p>
              <ul className="space-y-3">
                {role.points.map((p, i) => (
                  <li key={i} className="body-text flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-prose">
          <h2 className="h-card mb-3">Why this matters</h2>
          <p className="body-text">
            Mentoring students in economics, accounting, finance and
            competition preparation draws on the same subject-matter
            knowledge behind my own competitive record, while demanding a
            different skill: translating complex concepts into frameworks
            someone else can apply under exam pressure. It is a direct,
            practical test of communication and leadership, alongside the
            technical grounding in accounting and economics itself.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            href: "/experience",
            label: "Experience",
            description: "The full professional experience timeline.",
          },
          {
            href: "/competitions",
            label: "Competitions",
            description: "The competitive record this coaching draws on.",
          },
          {
            href: "/skills",
            label: "Skills",
            description: "Communication and leadership capabilities.",
          },
        ]}
      />
    </>
  );
}
