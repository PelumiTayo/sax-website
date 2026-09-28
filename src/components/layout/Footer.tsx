import Link from "next/link";
import { nav, site, socials } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  const activeSocials = socials.filter((s) => s.href);

  return (
    <footer className="mt-px bg-espresso text-ivory">
      <Container width="wide" className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + invitation */}
          <div>
            <p className="font-display text-3xl tracking-tight">
              {site.artistName}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/65">
              {site.tagline}
            </p>
            <Link
              href="/bookings"
              className="mt-8 inline-flex items-center gap-2 border-b border-brass/50 pb-1 text-sm text-brass-soft transition-colors hover:border-brass hover:text-ivory"
            >
              Start an inquiry
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <p className="eyebrow mb-5 text-brass-soft">Explore</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-ivory/75 transition-colors hover:text-ivory">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <p className="eyebrow mb-5 text-brass-soft">Connect</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ivory/75 transition-colors hover:text-ivory"
                >
                  {site.email}
                </a>
              </li>
              {activeSocials.length > 0 ? (
                activeSocials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ivory/75 transition-colors hover:text-ivory"
                    >
                      {s.label}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-xs italic text-ivory/40">
                  Social links coming soon
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.artistName}. All rights reserved.
          </p>
          <p>{site.location}</p>
        </div>
      </Container>
    </footer>
  );
}
