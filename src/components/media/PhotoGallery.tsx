"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { ImageFrame } from "@/components/ui/ImageFrame";
import type { Photo } from "@/content/gallery";

const aspectFor: Record<Photo["orientation"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

/** Editorial masonry gallery. Real photos open in a lightbox; placeholders are
 *  inert but describe the shot to collect. */
export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<Photo | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => {
          const clickable = Boolean(photo.src);
          const content = (
            <ImageFrame
              src={photo.src}
              alt={photo.alt}
              note={photo.note}
              aspect={aspectFor[photo.orientation]}
              hoverZoom={clickable}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          );
          return (
            <Reveal
              key={photo.id}
              delay={reduce ? 0 : (i % 3) * 0.08}
              className="mb-5 break-inside-avoid"
            >
              {clickable ? (
                <button
                  type="button"
                  onClick={() => setActive(photo)}
                  className="group block w-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
                  aria-label={`View: ${photo.alt}`}
                >
                  {content}
                </button>
              ) : (
                <div className="group">{content}</div>
              )}
            </Reveal>
          );
        })}
      </div>

      <AnimatePresence>
        {active?.src && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-espresso/92 p-4 backdrop-blur-sm sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-ivory/80 transition-colors hover:bg-ivory/10 hover:text-ivory"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <motion.div
              className="relative overflow-hidden rounded-xl"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={active.orientation === "portrait" ? 900 : 1200}
                height={active.orientation === "portrait" ? 1200 : 900}
                sizes="90vw"
                className="h-auto max-h-[85vh] w-auto max-w-[90vw] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
