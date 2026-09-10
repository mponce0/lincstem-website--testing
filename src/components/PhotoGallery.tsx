import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Photo } from "@/data/content";

interface PhotoGalleryProps {
  photos: Photo[];
  className?: string;
}

export default function PhotoGallery({ photos, className }: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const open = lightboxIndex !== null;
  const current = lightboxIndex ?? 0;

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((index) =>
      index === null ? null : (index - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);

  const next = useCallback(() => {
    setLightboxIndex((index) => (index === null ? null : (index + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close, prev, next]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const photoStyle = (photo: Photo) =>
    photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined;

  return (
    <>
      <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="overflow-hidden rounded-lg border bg-card text-left transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="aspect-video w-full object-cover"
              style={photoStyle(photo)}
            />
            {photo.caption && (
              <p className="p-3 text-sm text-muted-foreground">{photo.caption}</p>
            )}
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/80"
            onClick={close}
            aria-label="Close gallery"
          />

          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative z-10 flex w-full max-w-6xl items-center gap-2 md:gap-4">
            {photos.length > 1 && (
              <button
                type="button"
                onClick={prev}
                className="shrink-0 rounded-full border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            <figure className="min-w-0 flex-1">
              <img
                src={photos[current].src}
                alt={photos[current].alt}
                className="mx-auto max-h-[80vh] w-full rounded-lg object-contain"
              />
              {(photos[current].caption || photos.length > 1) && (
                <figcaption className="mt-3 space-y-1 text-center text-sm text-white/90">
                  {photos[current].caption && <p>{photos[current].caption}</p>}
                  {photos.length > 1 && (
                    <p className="text-white/60">
                      {current + 1} of {photos.length}
                    </p>
                  )}
                </figcaption>
              )}
            </figure>

            {photos.length > 1 && (
              <button
                type="button"
                onClick={next}
                className="shrink-0 rounded-full border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
