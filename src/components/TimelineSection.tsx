import { motion } from "framer-motion";
import { Calendar, ExternalLink, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FundingSource, TimelineEntry, TimelinePhoto } from "@/data/content";

function FundingLine({ sources }: { sources: FundingSource[] }) {
  return (
    <>
      {sources.map((source, i) => (
        <span key={source.label}>
          {i > 0 && " & "}
          {source.url ? (
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              {source.label}
            </a>
          ) : (
            source.label
          )}
        </span>
      ))}
    </>
  );
}

function TimelinePhotoPlaceholder({ compact }: { compact?: boolean }) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg border border-border/60 bg-card shadow-sm",
        compact && "w-48 shrink-0 sm:w-56 md:w-60",
      )}
    >
      <div
        className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-muted/50 px-6 text-center"
        aria-hidden="true"
      >
        <ImageIcon className="h-10 w-10 text-muted-foreground/40" />
        <span className="text-sm text-muted-foreground/60">Image coming soon</span>
      </div>
    </figure>
  );
}

function TimelinePhotoGrid({ photos }: { photos: TimelinePhoto[] }) {
  const isSingle = photos.length === 1;

  return (
    <div
      className={cn(
        "grid items-start gap-3",
        isSingle && "w-48 shrink-0 grid-cols-1 sm:w-56 md:w-60",
        photos.length === 2 && "grid-cols-2",
        photos.length >= 3 && "grid-cols-2 sm:grid-cols-2",
      )}
    >
      {photos.map((photo) => (
        <figure
          key={photo.src}
          className="group overflow-hidden rounded-lg border border-border/60 bg-card shadow-sm"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          {photo.caption && (
            <figcaption className="px-2.5 py-2 text-[11px] leading-snug text-muted-foreground sm:text-xs">
              {photo.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

interface TimelineSectionProps {
  title: string;
  entries: TimelineEntry[];
  showHeader?: boolean;
  className?: string;
  id?: string;
}

export default function TimelineSection({
  title,
  entries,
  showHeader = true,
  className,
  id,
}: TimelineSectionProps) {
  return (
    <section id={id} className={cn("py-20 section-pale scroll-mt-6", className)}>
      <div className="container">
        {showHeader && (
          <div className="text-center mb-12">
            <Calendar className="mx-auto h-8 w-8 text-primary mb-4" />
            <h2 className="font-display text-3xl font-bold">{title}</h2>
          </div>
        )}

        <div className="relative ml-2 md:ml-4 pl-8 md:pl-12">
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-primary/25" />

          <div className="space-y-14">
            {entries.map((entry, i) => (
              <motion.article
                key={`${entry.period}-${entry.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <div className="absolute -left-[2.125rem] md:-left-[3.125rem] top-7 h-3.5 w-3.5 rounded-full border-[3px] border-background bg-primary" />

                <header className="mb-4">
                  <span className="inline-block text-xs uppercase tracking-widest text-primary font-medium mb-1">
                    {entry.period}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold">{entry.title}</h3>
                  {entry.subtitle && (
                    <p className="text-sm text-muted-foreground italic mt-1 max-w-3xl">{entry.subtitle}</p>
                  )}
                </header>

                <div className="rounded-xl border border-border/60 bg-card p-5 sm:p-6 md:p-8 shadow-sm">
                  <div
                    className={cn(
                      "grid items-start gap-8",
                      entry.photos !== undefined &&
                        (entry.photos.length === 1
                          ? "lg:grid-cols-[1fr_auto]"
                          : "lg:grid-cols-2 xl:grid-cols-[1fr_1.15fr]"),
                    )}
                  >
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      {entry.details.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <span className="text-primary shrink-0">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {entry.photos !== undefined &&
                      (entry.photos.length > 0 ? (
                        <TimelinePhotoGrid photos={entry.photos} />
                      ) : (
                        <TimelinePhotoPlaceholder compact />
                      ))}
                  </div>

                  {(entry.presenter ||
                    entry.collaborators ||
                    (entry.funding && entry.funding.length > 0) ||
                    entry.funding_details ||
                    entry.url) && (
                    <div className="mt-6 space-y-1 border-t border-border/60 pt-4">
                      {entry.presenter && (
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">Presenter: </span>
                          {entry.presenter}
                        </p>
                      )}
                      {entry.collaborators && (
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">Collaborators: </span>
                          {entry.collaborators}
                        </p>
                      )}
                      {entry.funding && entry.funding.length > 0 && (
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">Funding: </span>
                          <FundingLine sources={entry.funding} />
                        </p>
                      )}
                      {entry.funding_details && (
                        <p className="text-xs text-muted-foreground">
                          <i>{entry.funding_details}</i>
                        </p>
                      )}
                      {entry.url && (
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:gap-2 transition-all"
                        >
                          View event details
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
