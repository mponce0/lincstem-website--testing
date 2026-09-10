import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CategoryCard {
  key: string;
  title: string;
  description: string;
  path: string;
}

interface CategoryCardGridProps {
  cards: CategoryCard[];
  backgroundImage: string;
  icon: LucideIcon;
  linkLabel: string;
  className?: string;
}

export default function CategoryCardGrid({
  cards,
  backgroundImage,
  icon: Icon,
  linkLabel,
  className,
}: CategoryCardGridProps) {
  return (
    <section className={cn("relative py-20 overflow-hidden", className)}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-muted/85" aria-hidden />
      <div className="container relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={card.path}
                className="block rounded-lg border bg-card p-6 shadow-sm hover:shadow-md hover:border-secondary transition-all group"
              >
	      {/* <Icon className="h-8 w-8 text-secondary mb-3 group-hover:scale-110 transition-transform" /> */}
                <h2 className="font-display font-semibold text-xl mb-1">{card.title}</h2>
                <p className="text-sm text-muted-foreground mb-3">{card.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-secondary">
                  {linkLabel} <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
