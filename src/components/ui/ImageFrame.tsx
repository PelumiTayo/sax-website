import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * A photograph frame. When `src` points at a real image it renders an optimised,
 * lazy next/image. While `src` is empty it renders a tasteful, clearly-labeled
 * placeholder describing exactly which photo belongs here, so nothing is ever
 * faked with stock imagery.
 */

type ImageFrameProps = {
  src?: string;
  alt: string;
  /** Guidance shown inside the placeholder while `src` is empty. */
  note: string;
  className?: string;
  /** Aspect ratio as a Tailwind class, e.g. "aspect-[3/4]". */
  aspect?: string;
  priority?: boolean;
  /** `sizes` hint for responsive images. */
  sizes?: string;
  /** Subtle zoom on hover when inside a `group`. */
  hoverZoom?: boolean;
  rounded?: boolean;
};

export function ImageFrame({
  src,
  alt,
  note,
  className,
  aspect = "aspect-[3/4]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  hoverZoom = false,
  rounded = true,
}: ImageFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-ivory-deep",
        rounded && "rounded-2xl",
        aspect,
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover",
            hoverZoom &&
              "transition-transform duration-[900ms] ease-[var(--ease-warm)] group-hover:scale-[1.04]",
          )}
        />
      ) : (
        <Placeholder note={note} />
      )}
    </div>
  );
}

function Placeholder({ note }: { note: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center"
      style={{
        backgroundImage:
          "radial-gradient(120% 120% at 30% 20%, color-mix(in srgb, var(--color-brass) 14%, transparent) 0%, transparent 55%), linear-gradient(160deg, var(--color-ivory-deep), color-mix(in srgb, var(--color-terracotta) 8%, var(--color-ivory-deep)))",
      }}
      aria-hidden={false}
      role="img"
      aria-label={`Placeholder, ${note}`}
    >
      <div className="pointer-events-none absolute inset-3 rounded-xl border border-dashed border-brass/40" />
      <span className="eyebrow">Photo</span>
      <p className="max-w-xs text-xs leading-relaxed text-ink-soft sm:text-sm">
        {note}
      </p>
    </div>
  );
}
