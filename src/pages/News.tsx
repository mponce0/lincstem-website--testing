import { newsItems } from "@/data/news";
import { motion } from "framer-motion";
import { ExternalLink, Newspaper } from "lucide-react";

export default function News() {
  return (
    <>
      <section className="page-header py-5">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-xl md:text-3xl font-bold mb-2"
          >
           In the Media
          </motion.h1>
          <p className="opacity-100 max-w-5xl mx-auto">
            Program updates, symposium highlights, and announcements from LinC STEM.
          </p>
        </div>
      </section>

      <section className="flex-1 section-pale py-20">
        <div className="container max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {newsItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm hover:shadow-md hover:border-secondary/40 transition-all"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                      loading="lazy"
                    />
                  </div>
                </a>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {item.year}
                    </span>
                    {item.source && (
                      <span className="text-xs text-muted-foreground">{item.source}</span>
                    )}
                  </div>

                  <h2 className="font-display text-lg font-bold leading-snug mb-2">{item.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.summary}</p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary group-hover:gap-2 transition-all"
                  >
                    Read the full article
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

	  {/*
          <p className="mt-12 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Newspaper className="h-4 w-4 opacity-60" aria-hidden="true" />
            More updates coming soon — check back for the latest from LinC STEM.
          </p>
	 */}
        </div>
      </section>
    </>
  );
}
