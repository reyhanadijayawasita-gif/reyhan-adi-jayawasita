import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Research & Analytics",
  description:
    "The analytical domains behind Reyhan Adi Jayawasita's competition record — financial and accounting analysis, economic reasoning, and investment literacy.",
  alternates: { canonical: "/research" },
};

const domains = [
  {
    title: "Financial & Accounting Analysis",
    description:
      "The largest share of my competitive record — including the Accounting Competition of Asia (2025 & 2026), Digital Accounting Tournament, and Gadjah Mada Accounting Days — has required applying financial statement analysis, bookkeeping and accounting standards accurately under exam conditions.",
  },
  {
    title: "Micro & Macroeconomic Reasoning",
    description:
      "Repeated first-place finishes at Olimpiade Ekonomi (Universitas Airlangga, Universitas Atma Jaya Yogyakarta) and a national finalist placement at Olimpiade Sains Nasional Ekonomi reflect sustained work applying micro- and macroeconomic frameworks to structured problems.",
  },
  {
    title: "Investment & Financial Literacy",
    description:
      "As Strategic Advisor at Cuanvestor Community, I advise on initiatives related to financial education and investment literacy — work grounded in the same economics, accounting and finance expertise built through competition, including a 2nd place finish at the All In Investment Competition.",
  },
  {
    title: "Business Case Analysis",
    description:
      "Case-format business competitions such as Brain x Biz, Business Logistic Competition, and VENTURISTIC have required structuring open-ended business problems and defending a recommendation to a panel of judges within a fixed timeframe.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Analytics"
        title="Analytical discipline, tested in competition rather than published."
        lead="I don't yet hold formal research publications — my analytical training instead comes from 70+ competitive case rounds, exams and simulations across four connected domains."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          {domains.map((d) => (
            <div key={d.title} className="card">
              <h2 className="h-card mb-3">{d.title}</h2>
              <p className="body-text">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            href: "/competitions",
            label: "Competitions",
            description: "Browse the full evidence base by domain.",
          },
          {
            href: "/experience",
            label: "Experience",
            description: "How this analytical work applies professionally.",
          },
          {
            href: "https://www.linkedin.com/in/reyhan-adi-jayawasita-7172383b7",
            label: "LinkedIn",
            description: "Follow ongoing analytical work and updates.",
          },
        ]}
      />
    </>
  );
}
