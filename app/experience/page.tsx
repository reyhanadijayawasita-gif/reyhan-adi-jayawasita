import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import RelatedLinks from "@/components/RelatedLinks";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional and advisory experience of Reyhan Adi Jayawasita — Strategic Advisor at Cuanvestor Community, academic mentoring, and a tax & accounting internship.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Professional experience."
        lead="From a tax & accounting internship to advisory work in financial education and investment literacy."
      />

      <section className="container-page py-16 sm:py-20">
        <Timeline
          entries={experience.map((e) => ({
            title: e.role,
            subtitle: e.org,
            period: e.period,
            current: e.current,
            points: e.points,
          }))}
        />
      </section>

      <RelatedLinks
        links={[
          {
            href: "/mentorship",
            label: "Mentorship",
            description: "A closer look at the tutoring and coaching roles.",
          },
          {
            href: "/skills",
            label: "Skills",
            description: "Capabilities developed across these roles.",
          },
          {
            href: "/contact",
            label: "Contact",
            description: "Get in touch about opportunities.",
          },
        ]}
      />
    </>
  );
}
