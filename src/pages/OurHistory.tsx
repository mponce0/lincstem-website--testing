import { siteContent } from "@/data/content";
import TimelineSection from "@/components/TimelineSection";
import { motion } from "framer-motion";
import { History } from "lucide-react";

export default function OurHistory() {
  const { historyIntro, historyTimeline } = siteContent;

  return (
    <>
      <section className="page-header py-5">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-xl md:text-3xl font-bold mb-2"
          >
            Our History
          </motion.h1>
          <p className="opacity-100 max-w-2xl mx-auto">
            From a single-school pilot to a multi-grade outreach initiative across Scarborough.
          </p>
        </div>
      </section>

      <section className="py-20 section-surface">
        <div className="container max-w-6xl">
          <div className="text-center mb-10">
            <History className="mx-auto h-8 w-8 text-primary mb-4" />
            <h2 className="font-display text-2xl font-bold mb-4">How LinC STEM Began</h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-center">
            {historyIntro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p className="font-display text-lg font-semibold text-foreground pt-2">
              {historyIntro.highlight}
            </p>
          </div>
        </div>
      </section>

      <TimelineSection
        id="timeline"
        title="LinC STEM Timeline"
        entries={historyTimeline}
        className="scroll-mt-6"
      />
    </>
  );
}
