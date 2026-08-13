import { siteContent, type TimelinePhoto } from "@/data/content";
import { motion } from "framer-motion";
import { Calendar, History } from "lucide-react";
import { cn } from "@/lib/utils";

function TimelinePhotoGrid({ photos }: { photos: TimelinePhoto[] }) {
  return (
    <div
      className={cn(
        "grid gap-3",
        photos.length === 1 && "grid-cols-1",
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

export default function OurHistory() {
  const { historyIntro, historyTimeline } = siteContent;

  return (
    <>
      <section className="page-hero py-16">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold mb-3"
          >
            Our History
          </motion.h1>
          <p className="opacity-80 max-w-2xl mx-auto">
            From a single-school pilot to a multi-grade outreach initiative across Scarborough.
          </p>
        </div>
      </section>

      <section className="py-20 section-surface">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <History className="mx-auto h-8 w-8 text-primary mb-4" />
            <h2 className="font-display text-2xl font-bold mb-4">How LinC STEM Began</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-center">{historyIntro}</p>
        </div>
      </section>

      <section className="py-20 section-pale">
        <div className="container">
          <div className="text-center mb-12">
            <Calendar className="mx-auto h-8 w-8 text-primary mb-4" />
            <h2 className="font-display text-3xl font-bold">LinC STEM Timeline</h2>
          </div>

          <div className="relative ml-2 md:ml-4 pl-8 md:pl-12">
            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-primary/25" />

            <div className="space-y-14">
              {historyTimeline.map((entry, i) => (
                <motion.article
                  key={entry.period}
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
                        "grid gap-8",
                        entry.photos?.length ? "lg:grid-cols-2 xl:grid-cols-[1fr_1.15fr]" : "",
                      )}
                    >
                      <div>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          {entry.details.map((detail) => (
                            <li key={detail} className="flex gap-2">
                              <span className="text-primary shrink-0">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        {entry.collaborators && (
                          <p className="text-xs text-muted-foreground border-t border-border/60 pt-4 mt-4">
                            <span className="font-medium text-foreground">Collaborators: </span>
                            {entry.collaborators}
                          </p>
                        )}
                        {entry.funding && (
                          <p className="text-xs text-muted-foreground mt-1">
                            <span className="font-medium text-foreground">Funding: </span>
                            {entry.funding}
                          </p>
                        )}
                      </div>

                      {entry.photos && entry.photos.length > 0 && (
                        <TimelinePhotoGrid photos={entry.photos} />
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
