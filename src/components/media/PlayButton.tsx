import { cn } from "@/lib/cn";

/** A refined circular play affordance. Grows softly when its `group` is hovered. */
export function PlayButton({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-20 w-20 sm:h-24 sm:w-24",
  }[size];

  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-full bg-ivory/92 text-espresso backdrop-blur-sm transition-all duration-500 ease-[var(--ease-warm)] group-hover:scale-105 group-hover:bg-ivory",
        dims,
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="ml-0.5 h-1/3 w-1/3"
        aria-hidden
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}
