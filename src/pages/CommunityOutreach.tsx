import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";
import CategoryCardGrid from "@/components/CategoryCardGrid";

export default function CommunityOutreach() {
  const { outreachCategories, researchEngagementIntro, outreachSectionBackgroundImage } = siteContent;

  return (
    <>
      <section className="page-header py-5">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-xl md:text-3xl font-bold mb-2"
          >
            Research and Engagement
          </motion.h1>
          <p className="opacity-100 max-w-4xl mx-auto">{researchEngagementIntro}</p>
        </div>
      </section>

      <CategoryCardGrid
        cards={outreachCategories.map((category) => ({
          key: category.id,
          title: category.title,
          description: category.summary,
          path: `/community-outreach/${category.id}`,
        }))}
        backgroundImage={outreachSectionBackgroundImage}
        icon={HandHeart}
        linkLabel="View Content"
      />
    </>
  );
}
