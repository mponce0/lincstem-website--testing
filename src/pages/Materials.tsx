import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import CategoryCardGrid from "@/components/CategoryCardGrid";

export default function Materials() {
  const { grades, materialsSectionBackgroundImage } = siteContent;

  return (
    <>
      <section className="page-header py-5">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-xl md:text-3xl font-bold mb-2"
          >
            Our Materials
          </motion.h1>
          <p className="opacity-100 max-w-4xl mx-auto">
All teaching modules, laboratory guides, and educational resources provided on this page are open access and freely available for non-commercial educational use. If you adapt, share, or use these materials in your classroom or institution, please credit LinC STEM.
          </p>
        </div>
      </section>

      <CategoryCardGrid
        cards={grades.map((g) => ({
          key: String(g.grade),
          title: g.title,
          description: g.description,
          path: `/grade/${g.grade}`,
        }))}
        backgroundImage={materialsSectionBackgroundImage}
        icon={BookOpen}
        linkLabel="View Materials"
      />
    </>
  );
}
