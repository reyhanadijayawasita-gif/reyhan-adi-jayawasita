import Link from "next/link";
import { navItems } from "@/lib/nav";
import { person } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink-200">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-lg text-ink-950">{person.fullName}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-500">
            {person.tagline}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-3">Site</p>
          <ul className="space-y-2 text-sm text-ink-600">
            {navItems.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink-950">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">More</p>
          <ul className="space-y-2 text-sm text-ink-600">
            {navItems.slice(5).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink-950">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">Connect</p>
          <ul className="space-y-2 text-sm text-ink-600">
            <li>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer me"
                className="hover:text-ink-950"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${person.email}`} className="hover:text-ink-950">
                {person.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="rule">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {person.fullName}. All rights reserved.
          </p>
          <p>Built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
