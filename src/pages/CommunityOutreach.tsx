import { siteContent } from "@/data/content";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, HandHeart } from "lucide-react";

export default function CommunityOutreach() {
  const { outreachCategories } = siteContent;

  return (
    <>
      <section className="page-hero py-16">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold mb-3"
          >
            Community Outreach
          </motion.h1>
          <p className="opacity-80 max-w-xl mx-auto">
            Connecting Scarborough communities with hands-on STEM learning experiences.
          </p>
        </div>
      </section>

      <section className="flex-1 section-pale py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {outreachCategories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/community-outreach/${category.id}`}
                  className="block rounded-lg border bg-card p-6 shadow-sm hover:shadow-md hover:border-secondary transition-all group"
                >
                  <HandHeart className="h-8 w-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                  <h2 className="font-display font-semibold text-xl mb-1">{category.title}</h2>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-secondary">
                    View Content <ArrowRight className="ml-1 h-4 w-4" />
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
