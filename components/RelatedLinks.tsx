import Link from "next/link";

export default function RelatedLinks({
  title = "Continue exploring",
  links,
}: {
  title?: string;
  links: { href: string; label: string; description: string }[];
}) {
  return (
    <section className="rule">
      <div className="container-page py-14">
        <p className="eyebrow mb-6">{title}</p>
        <div className="grid gap-6 sm:grid-cols-3">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            const className =
              "group block border border-ink-200 p-5 transition-colors hover:border-ink-950";
            const inner = (
              <>
                <span className="flex items-center justify-between font-serif text-lg text-ink-950">
                  {link.label}
                  <span
                    aria-hidden
                    className="translate-x-0 text-gold-600 transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
                <span className="mt-2 block text-sm text-ink-500">
                  {link.description}
                </span>
              </>
            );
            return external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer me"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
