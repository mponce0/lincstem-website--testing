import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Photo } from "@/data/content";

interface PhotoCarouselProps {
  photos: Photo[];
  /** "outside" places the arrows beside the frame, "overlay" floats them on the image. */
  controls?: "outside" | "overlay";
  /** Tailwind aspect-ratio class for the image frame. */
  aspect?: string;
  className?: string;
  /** Autoplay delay in ms. */
  interval?: number;
}

export default function PhotoCarousel({
  photos,
  controls = "outside",
  aspect = "aspect-[16/9]",
  className,
  interval = 5000,
}: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % photos.length),
    [photos.length],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + photos.length) % photos.length),
    [photos.length],
  );

  useEffect(() => {
    if (photos.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, photos.length, interval]);

  if (photos.length === 0) return null;

  const photo = photos[current];
  const isOverlay = controls === "overlay";
  const arrowClass = isOverlay
    ? "absolute top-1/2 z-10 -translate-y-1/2 h-10 w-10 rounded-full border bg-card/85 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-card transition-colors"
    : "shrink-0 h-11 w-11 rounded-full border bg-card shadow-md flex items-center justify-center hover:bg-muted transition-colors";

  return (
    <div className={cn("w-full mx-auto max-w-4xl", className)}>
      <div
        className={cn(
          "flex items-center",
          isOverlay ? "relative w-full" : "gap-5 md:gap-8",
        )}
      >
        {photos.length > 1 && (
          <button
            onClick={prev}
            className={cn(arrowClass, isOverlay && "left-3")}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <figure
          className={cn(
            "overflow-hidden rounded-xl border bg-card shadow-sm",
            isOverlay ? "w-full" : "min-w-0 flex-1",
          )}
        >
          <div className="relative w-full">
            {/* In-flow spacer establishes frame size (same as a static w-full aspect-* img). */}
            <img
              src={photos[0].src}
              alt=""
              aria-hidden
              className={cn("block w-full object-cover invisible", aspect)}
            />
            {photos.map((p, i) => (
              <motion.img
                key={p.src}
                src={p.src}
                alt={p.alt}
                className="absolute inset-0 h-full w-full object-cover"
                initial={false}
                animate={{ opacity: i === current ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                aria-hidden={i !== current}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ))}
          </div>
          {photo.caption && (
            <figcaption className="px-5 py-4 text-sm text-muted-foreground text-center border-t bg-muted/30">
              {photo.caption}
            </figcaption>
          )}
        </figure>

        {photos.length > 1 && (
          <button
            onClick={next}
            className={cn(arrowClass, isOverlay && "right-3")}
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {photos.length > 1 && (
        <div className={cn("flex justify-center gap-2", isOverlay ? "mt-4" : "mt-8")}>
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-secondary" : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
