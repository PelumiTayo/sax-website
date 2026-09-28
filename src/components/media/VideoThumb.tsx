import type { Video } from "@/content/videos";
import { isEmbeddable } from "@/lib/video";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { PlayButton } from "./PlayButton";
import { cn } from "@/lib/cn";

/** A video thumbnail. Embeddable videos call `onOpen`; link-only videos (IG/TikTok)
 *  open in a new tab. Presentational, state lives in the parent section. */
export function VideoThumb({
  video,
  onOpen,
  aspect = "aspect-video",
  playSize = "md",
  priority = false,
}: {
  video: Video;
  onOpen: (v: Video) => void;
  aspect?: string;
  playSize?: "sm" | "md" | "lg";
  priority?: boolean;
}) {
  const embeddable = isEmbeddable(video);

  const inner = (
    <>
      <ImageFrame
        src={video.poster}
        alt={video.title}
        note={video.posterNote}
        aspect={aspect}
        hoverZoom
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
      />
      <div className="pointer-events-none absolute inset-0 overlay-dusk opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <PlayButton size={playSize} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-left sm:p-6">
        {video.context && (
          <span className="eyebrow text-brass-soft">{video.context}</span>
        )}
        <p className="mt-1 font-display text-xl text-ivory sm:text-2xl">
          {video.title}
        </p>
      </div>
      {!embeddable && (
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[11px] font-medium text-espresso">
          Watch ↗
        </span>
      )}
    </>
  );

  const classes =
    "group relative block w-full overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta";

  if (embeddable) {
    return (
      <button
        type="button"
        onClick={() => onOpen(video)}
        className={classes}
        aria-label={`Play ${video.title}`}
      >
        {inner}
      </button>
    );
  }

  return (
    <a
      href={video.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(classes, !video.url && "pointer-events-none opacity-70")}
      aria-label={`Watch ${video.title} (opens in new tab)`}
    >
      {inner}
    </a>
  );
}
