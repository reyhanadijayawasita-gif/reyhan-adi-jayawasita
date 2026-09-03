import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CompetitionExplorer from "@/components/CompetitionExplorer";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Competitions",
  description:
    "Reyhan Adi Jayawasita's competition experience across accounting, economics, finance and business — organizer, university, year and placement for each.",
  alternates: { canonical: "/competitions" },
};

export default function CompetitionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Competitions"
        title="70+ competitions, one recurring skill set."
        lead="Case analysis, financial and economic reasoning, and communication under time pressure — tested across accounting, economics, finance and business competitions hosted by universities nationwide."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="body-text">
            Most of these competitions follow a similar format: written or
            digital rounds testing technical accuracy in accounting,
            economics or finance, followed by case-based or quiz-style final
            rounds that reward speed, precision and the ability to explain
            reasoning clearly. Filter the table below by domain to see how
            the record breaks down.
          </p>
        </div>
        <CompetitionExplorer />
      </section>

      <RelatedLinks
        links={[
          {
            href: "/achievements",
            label: "Achievements",
            description: "The same record, organized chronologically by year.",
          },
          {
            href: "/research",
            label: "Research & Analytics",
            description: "The analytical domains behind this competition record.",
          },
          {
            href: "/mentorship",
            label: "Mentorship",
            description: "Now coaching the next generation of competitors.",
          },
        ]}
      />
    </>
  );
}
