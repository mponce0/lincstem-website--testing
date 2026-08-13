import { siteContent } from "@/data/content";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FileText } from "lucide-react";

export default function Materials() {
  const { grades } = siteContent;

  return (
    <>
      <section className="page-hero py-16">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold mb-3"
          >
            Our Materials
          </motion.h1>
          <p className="opacity-80 max-w-xl mx-auto">
            Curriculum-aligned lab materials, slides, and resources for Grade 9 and 10 STEM classes.
          </p>
        </div>
      </section>

      <section className="py-20 section-pale">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {grades.map((g, i) => (
              <motion.div
                key={g.grade}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/grade/${g.grade}`}
                  className="block rounded-lg border bg-card p-6 shadow-sm hover:shadow-md hover:border-secondary transition-all group"
                >
                  <BookOpen className="h-8 w-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                  <h2 className="font-display font-semibold text-xl mb-1">{g.title}</h2>
                  <p className="text-sm text-muted-foreground mb-3">{g.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-secondary">
                    View Materials <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
