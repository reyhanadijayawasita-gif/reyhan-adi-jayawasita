import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { person } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Reyhan Adi Jayawasita — Business Administration student, academic mentor, and 70+ time national and international academic competitor in accounting, economics, finance and business.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A competitive record built one olympiad at a time."
        lead="Who Reyhan Adi Jayawasita is, where his academic and competitive journey began, and where it is headed."
      />

      <section className="container-page grid gap-14 py-16 sm:py-20 lg:grid-cols-[0.7fr,1.3fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow mb-3">In short</p>
          <p className="body-text">{person.tagline}</p>
          <div className="mt-8 space-y-3 text-sm">
            <Link href="/education" className="link-underline block">
              View education timeline &rarr;
            </Link>
            <Link href="/achievements" className="link-underline block">
              View full achievements &rarr;
            </Link>
            <Link href="/experience" className="link-underline block">
              View professional experience &rarr;
            </Link>
          </div>
        </aside>

        <div className="max-w-prose space-y-8">
          <div>
            <h2 className="h-card mb-3">Who I am</h2>
            <p className="body-text">
              I am Reyhan Adi Jayawasita, an achievement-driven and
              analytically oriented individual with a strong competitive
              background in Accounting, Economics, Business, and Mathematics.
              My academic and competitive life has been built around a single
              habit: taking on rigorous, case-based challenges and working
              through them methodically until the answer holds up under
              scrutiny.
            </p>
          </div>

          <div>
            <h2 className="h-card mb-3">Academic journey</h2>
            <p className="body-text">
              I completed my secondary education at SMA Little Sun Surabaya
              (2023–2026) under a mixed national and IGCSE curriculum,
              graduating with strong academic performance across Economics,
              Accounting, Mathematics, and English. In 2026, I began my
              undergraduate studies at{" "}
              <strong className="font-medium text-ink-950">
                S.P. Jain School of Global Management
              </strong>
              , pursuing a Bachelor of Business Administration. I was admitted
              with a merit-based scholarship covering up to 95% of tuition
              annually, in recognition of my academic and competitive
              achievements — at a school ranked #29 globally in International
              Trade by QS Rankings, with campuses across Dubai, Mumbai,
              Singapore, and Sydney. See the full{" "}
              <Link href="/education" className="link-underline">
                education timeline
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="h-card mb-3">What I&rsquo;m interested in</h2>
            <p className="body-text">
              My interests sit at the intersection of accounting, economics,
              finance and business — the recurring subject areas across the
              70+ national and international competitions I have taken part
              in since 2023. That competitive process has sharpened specific
              habits of mind: reading a case quickly, structuring an
              ambiguous problem, applying accounting and economic frameworks
              correctly under time pressure, and communicating a conclusion
              clearly to a panel of judges. I go deeper into how these
              interests translate into analytical work on the{" "}
              <Link href="/research" className="link-underline">
                Research &amp; Analytics
              </Link>{" "}
              page.
            </p>
          </div>

          <div>
            <h2 className="h-card mb-3">What I&rsquo;ve achieved</h2>
            <p className="body-text">
              Across 2023–2026, that record includes first-place finishes at
              national accounting and economics olympiads such as the
              Accounting Competition of Asia, Olimpiade Ekonomi at
              Universitas Airlangga, the Actuarial Science Olympiad at
              Universitas Gadjah Mada, and a Gold Medal (Absolute Winner) at
              Olimpiade Sains Generasi Emas, among many others. The complete,
              year-by-year record — including every placement — is on the{" "}
              <Link href="/achievements" className="link-underline">
                Achievements
              </Link>{" "}
              page, and the same competitions organized by subject area are
              on the{" "}
              <Link href="/competitions" className="link-underline">
                Competitions
              </Link>{" "}
              page.
            </p>
          </div>

          <div>
            <h2 className="h-card mb-3">What I&rsquo;m currently pursuing</h2>
            <p className="body-text">
              Alongside my BBA studies, I currently serve as an{" "}
              <strong className="font-medium text-ink-950">
                External Competition Tutor
              </strong>{" "}
              at St. Louis Catholic Highschool, coaching students in
              microeconomics, macroeconomics, finance and accounting for
              national olympiads, and continue as an{" "}
              <strong className="font-medium text-ink-950">
                Academic Mentor &amp; Subject Tutor
              </strong>{" "}
              to junior and senior high school students. I also serve as a{" "}
              <strong className="font-medium text-ink-950">
                Strategic Advisor
              </strong>{" "}
              at Cuanvestor Community, advising on financial education and
              investment literacy initiatives. More on each role is on the{" "}
              <Link href="/experience" className="link-underline">
                Experience
              </Link>{" "}
              and{" "}
              <Link href="/mentorship" className="link-underline">
                Mentorship
              </Link>{" "}
              pages.
            </p>
          </div>

          <div>
            <h2 className="h-card mb-3">What I want to develop</h2>
            <p className="body-text">
              I am eager to contribute structured thinking and data-driven
              insights to a dynamic organization through an internship,
              taking the analytical discipline built through competition and
              applying it to real business, accounting and finance problems.
            </p>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            href: "/education",
            label: "Education",
            description: "The academic path behind the record.",
          },
          {
            href: "/achievements",
            label: "Achievements",
            description: "Every competition, organized by year.",
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
