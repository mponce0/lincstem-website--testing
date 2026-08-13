import { siteContent } from "@/data/content";
import { motion } from "framer-motion";

const stageAccents = [
  "border-l-primary/35",
  "border-l-primary/50",
  "border-l-primary/65",
  "border-l-primary/80",
];

export default function OurWork() {
  const { coDesignTitle, coDesignImage, whatSetsUsApart } = siteContent;

  return (
    <>
      <section className="page-hero py-16">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold mb-3"
          >
            Our Work
          </motion.h1>
          <p className="opacity-80 max-w-2xl mx-auto">{coDesignTitle}</p>
        </div>
      </section>

      <section className="py-20 section-surface">
        <div className="container max-w-6xl">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold">What Sets Us Apart</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(220px,340px)_1fr] lg:gap-10 xl:gap-16 items-start">
            {coDesignImage && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mx-auto lg:mx-0 lg:sticky lg:top-24 w-full max-w-[340px]"
              >
                <img
                  src={coDesignImage}
                  alt="Co-design phase diagram showing four connected stages"
                  className="w-full h-auto"
                />
              </motion.div>
            )}

            <div className="space-y-8">
              {whatSetsUsApart.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`border-l-4 ${stageAccents[i]} pl-5 py-1`}
                >
                  <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">
                    {item.diagramLabel}
                  </p>
                  <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
