import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

/** Consistent editorial section header: eyebrow label, display title, optional lead. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-title mt-4",
            tone === "light" ? "text-ivory" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              tone === "light" ? "text-ivory/70" : "text-ink-soft",
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
