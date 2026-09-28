import type { Video } from "@/content/videos";

/** Build an embeddable, autoplay player URL for a video, or null if it can't
 *  be embedded inline (e.g. Instagram/TikTok links). */
export function embedUrl(video: Video): string | null {
  switch (video.provider) {
    case "youtube":
      return video.id
        ? `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`
        : null;
    case "vimeo":
      return video.id
        ? `https://player.vimeo.com/video/${video.id}?autoplay=1&title=0&byline=0&portrait=0`
        : null;
    case "link":
      return null;
    default:
      return null;
  }
}

/** Whether the video opens in an inline lightbox (true) or links out (false). */
export function isEmbeddable(video: Video): boolean {
  return embedUrl(video) !== null;
}
