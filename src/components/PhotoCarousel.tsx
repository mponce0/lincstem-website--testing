import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Photo } from "@/data/content";

interface PhotoCarouselProps {
  photos: Photo[];
}

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
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
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, photos.length]);

  if (photos.length === 0) return null;

  const photo = photos[current];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-5 md:gap-8">
        {photos.length > 1 && (
          <button
            onClick={prev}
            className="shrink-0 h-11 w-11 rounded-full border bg-card shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div className="flex-1 min-w-0 overflow-hidden rounded-xl border bg-card shadow-sm">
          <AnimatePresence mode="wait">
            <motion.figure
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="aspect-[16/9]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {photo.caption && (
                <figcaption className="px-5 py-4 text-sm text-muted-foreground text-center border-t bg-muted/30">
                  {photo.caption}
                </figcaption>
              )}
            </motion.figure>
          </AnimatePresence>
        </div>

        {photos.length > 1 && (
          <button
            onClick={next}
            className="shrink-0 h-11 w-11 rounded-full border bg-card shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {photos.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {photos.map((_, i) => (
            <button
              key={i}
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
