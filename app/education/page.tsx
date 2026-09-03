import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import RelatedLinks from "@/components/RelatedLinks";
import { education } from "@/lib/data";

export const metadata: Metadata = {
  title: "Education",
  description:
    "The academic path of Reyhan Adi Jayawasita — S.P. Jain School of Global Management (Bachelor of Business Administration) and SMA Little Sun Surabaya.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title="Academic foundations."
        lead="From a dual-curriculum secondary education to a merit-scholarship undergraduate seat at a globally ranked business school."
      />

      <section className="container-page py-16 sm:py-20">
        <Timeline
          entries={education.map((e) => ({
            title: e.institution,
            subtitle: e.program,
            period: e.period,
            current: e.status === "current",
            points: e.points,
          }))}
        />
      </section>

      <RelatedLinks
        links={[
          {
            href: "/achievements",
            label: "Achievements",
            description: "The competitive record built alongside this education.",
          },
          {
            href: "/about",
            label: "About",
            description: "The full professional story.",
          },
          {
            href: "/experience",
            label: "Experience",
            description: "Professional and advisory roles.",
          },
        ]}
      />
    </>
  );
}
