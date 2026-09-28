"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change and lock scroll while open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // On the homepage the bar is transparent over the dark hero until you scroll
  // (or open the mobile menu), so its contents must render light there.
  const onDark = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-[var(--ease-warm)]",
        scrolled || open
          ? "border-b border-ink/8 bg-ivory/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:h-20 sm:px-8 lg:px-10">
        <Link
          href="/"
          className={cn(
            "font-display text-lg tracking-tight transition-colors sm:text-xl",
            onDark
              ? "text-ivory hover:text-brass-soft"
              : "text-ink hover:text-terracotta",
          )}
          aria-label={`${site.artistName}, home`}
        >
          Lumi<span className="italic">Tunes</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative py-1 text-sm transition-colors",
                onDark
                  ? "text-ivory/80 hover:text-ivory"
                  : "text-ink/80 hover:text-ink",
                isActive(item.href) && (onDark ? "text-ivory" : "text-ink"),
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-0 h-px bg-terracotta transition-all duration-300 ease-[var(--ease-warm)]",
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full",
                )}
              />
            </Link>
          ))}
          <Link
            href="/bookings"
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-[var(--ease-warm)] hover:-translate-y-0.5",
              onDark
                ? "bg-ivory text-espresso hover:bg-ivory/90"
                : "bg-espresso text-ivory hover:bg-espresso-soft",
            )}
          >
            Book me
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <div className="flex flex-col gap-[5px]">
            <span
              className={cn(
                "block h-px w-6 transition-all duration-300 ease-[var(--ease-warm)]",
                onDark ? "bg-ivory" : "bg-ink",
                open && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 transition-all duration-300 ease-[var(--ease-warm)]",
                onDark ? "bg-ivory" : "bg-ink",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 transition-all duration-300 ease-[var(--ease-warm)]",
                onDark ? "bg-ivory" : "bg-ink",
                open && "-translate-y-[6px] -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-0 z-40 flex flex-col bg-ivory md:hidden"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              className="mt-24 flex flex-1 flex-col gap-2 px-8"
              aria-label="Mobile"
            >
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: reduce ? 0 : 0.08 + i * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block border-b border-ink/10 py-4 font-display text-3xl tracking-tight",
                      isActive(item.href) ? "text-terracotta" : "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-8 pb-12">
              <Link
                href="/bookings"
                className="flex w-full items-center justify-center rounded-full bg-espresso px-6 py-4 text-base font-medium text-ivory"
              >
                Book me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
