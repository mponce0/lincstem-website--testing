import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Highlight } from "@/data/content";

interface HighlightsCarouselProps {
  highlights: Highlight[];
}

export default function HighlightsCarousel({ highlights }: HighlightsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, highlights.length - visibleCount);

  const next = useCallback(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), [maxIndex]);
  const prev = useCallback(() => setCurrent((c) => (c <= 0 ? maxIndex : c - 1)), [maxIndex]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${current * (100 / visibleCount + 2)}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="min-w-[calc(33.333%-1rem)] shrink-0 rounded-xl border bg-card overflow-hidden group"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                {h.image ? (
                  <img src={h.image} alt={h.title} className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="h-12 w-12 text-muted-foreground/30" />
                )}
              </div>
              {/* Caption */}
              <div className="p-4">
                <h3 className="font-display font-semibold text-sm mb-1">{h.title}</h3>
                {h.description && (
                  <p className="text-xs text-muted-foreground">{h.description}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 h-10 w-10 rounded-full border bg-card shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
        aria-label="Previous highlights"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 h-10 w-10 rounded-full border bg-card shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
        aria-label="Next highlights"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-secondary" : "w-2 bg-border"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
