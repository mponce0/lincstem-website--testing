import { siteContent } from "@/data/content";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  const {
    schoolName,
    fullTitle,
    whoWeAreDescription,
    missionStatement,
    approachTitle,
    approachDescription,
    growthIntro,
    impactOverview,
    growthMilestones,
    homepagePhotos,
    collaborationMessage,
  } = siteContent;

  const [whoWeArePhoto, missionPhoto, approachPhoto, impactPhoto] = homepagePhotos;

  return (
    <>
      <section className="relative overflow-hidden page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(0_40%_48%/0.18),transparent_58%)]" />
        <div className="container relative z-10 py-24 md:py-36 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-3"
          >
            {fullTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-8"
          >
            {schoolName}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-primary-foreground/5"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 section-pale">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{whoWeAreDescription}</p>
              <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary">
                <Link to="/news">
                  Latest News <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {whoWeArePhoto && (
              <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm">
                <img
                  src={whoWeArePhoto.src}
                  alt={whoWeArePhoto.alt}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 section-surface">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
            {missionPhoto && (
              <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm order-2 lg:order-1">
                <img
                  src={missionPhoto.src}
                  alt={missionPhoto.alt}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            )}
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{missionStatement}</p>
              <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary">
                <Link to="/about/our-work">
                  Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 section-pale">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">Our Approach</p>
              <h2 className="font-display text-3xl font-bold mb-4">{approachTitle}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{approachDescription}</p>
              <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary">
                <Link to="/materials">
                  Our Materials <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {approachPhoto && (
              <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm">
                <img
                  src={approachPhoto.src}
                  alt={approachPhoto.alt}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 section-surface">
        <div className="container max-w-6xl">
          <div className="mb-10">
            <TrendingUp className="h-8 w-8 text-primary mb-4" />
            <h2 className="font-display text-3xl font-bold mb-3">Our Growth & Impact</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,280px)] lg:gap-10 items-start mb-10">
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">{growthIntro}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Impact Overview (Winter 2024 – Spring 2026):</span>{" "}
                {impactOverview}
              </p>
            </div>
            {impactPhoto && (
              <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm w-full max-w-[280px] mx-auto lg:mx-0 lg:ml-auto">
                <img
                  src={impactPhoto.src}
                  alt={impactPhoto.alt}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            )}
          </div>

          <div className="overflow-x-auto rounded-lg border border-border/60 bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-display font-semibold">Milestone</th>
                  <th className="text-left p-4 font-display font-semibold">
                    Where We Started
                    <span className="block text-xs font-normal text-muted-foreground mt-0.5">
                      Winter 2024
                    </span>
                  </th>
                  <th className="text-left p-4 font-display font-semibold">
                    Where We Are
                    <span className="block text-xs font-normal text-muted-foreground mt-0.5">
                      Spring 2026
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {growthMilestones.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-4 font-medium">{row.metric}</td>
                    <td className="p-4 text-muted-foreground">{row.start}</td>
                    <td className="p-4 text-primary font-medium">{row.current}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary">
              <Link to="/about/our-history">
                Our History <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 section-pale border-t border-border/60">
        <div className="container max-w-2xl text-center">
          <Mail className="mx-auto h-8 w-8 text-primary mb-4" />
          <h2 className="font-display text-2xl font-bold mb-3 text-foreground">Ready to Collaborate?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">{collaborationMessage}</p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
