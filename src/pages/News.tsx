import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

export default function News() {
  return (
    <>
      <section className="page-hero py-16">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold mb-3"
          >
            News
          </motion.h1>
          <p className="opacity-80 max-w-xl mx-auto">
            Program updates, symposium highlights, and announcements from LinC STEM.
          </p>
        </div>
      </section>

      <section className="flex-1 section-pale py-20">
        <div className="container max-w-2xl text-center">
          <Newspaper className="mx-auto h-12 w-12 text-secondary mb-6 opacity-60" />
          <p className="text-muted-foreground">News and updates coming soon. Check back for the latest from LinC STEM.</p>
        </div>
      </section>
    </>
  );
}
