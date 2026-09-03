import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { person } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Reyhan Adi Jayawasita for internship, mentorship or collaboration opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        lead="I'm eager to contribute structured thinking and data-driven insights to a dynamic organization through an internship — reach out via email, LinkedIn, or Instagram."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${person.email}`}
            className="card group flex flex-col justify-between"
          >
            <div>
              <p className="eyebrow mb-3">Email</p>
              <p className="h-card">{person.email}</p>
            </div>
            <p className="mt-6 text-sm text-gold-600 transition-transform group-hover:translate-x-1">
              Send a message &rarr;
            </p>
          </a>

          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer me"
            className="card group flex flex-col justify-between"
          >
            <div>
              <p className="eyebrow mb-3">LinkedIn</p>
              <p className="h-card">Reyhan Adi Jayawasita</p>
            </div>
            <p className="mt-6 text-sm text-gold-600 transition-transform group-hover:translate-x-1">
              View profile &rarr;
            </p>
          </a>

          <a
            href={person.instagram}
            target="_blank"
            rel="noopener noreferrer me"
            className="card group flex flex-col justify-between"
          >
            <div>
              <p className="eyebrow mb-3">Instagram</p>
              <p className="h-card">@reyhansch</p>
            </div>
            <p className="mt-6 text-sm text-gold-600 transition-transform group-hover:translate-x-1">
              View profile &rarr;
            </p>
          </a>
        </div>
      </section>
    </>
  );
}
