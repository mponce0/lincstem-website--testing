import { useParams, Link } from "react-router-dom";
import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import { ArrowLeft, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OutreachPage() {
  const { outreachId } = useParams();
  const category = siteContent.outreachCategories.find((c) => c.id === outreachId);

  if (!category) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Outreach Category Not Found</h1>
        <Button asChild variant="outline">
          <Link to="/community-outreach">Back to Community Outreach</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <section className="page-hero py-16">
        <div className="container">
          <Link
            to="/community-outreach"
            className="inline-flex items-center text-sm opacity-70 hover:opacity-100 mb-4 transition-opacity"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Community Outreach
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold mb-3"
          >
            {category.title}
          </motion.h1>
        </div>
      </section>

      <section className="flex-1 section-pale py-20">
        <div className="container max-w-2xl text-center">
          <HandHeart className="mx-auto h-12 w-12 text-primary mb-6 opacity-60" />
          <p className="text-muted-foreground leading-relaxed">{category.description}</p>
        </div>
      </section>
    </>
  );
}
