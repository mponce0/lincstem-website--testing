import { siteContent } from "@/data/content";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhotoCarousel from "@/components/PhotoCarousel";

export default function Index() {
  const {
    tagline,
    whoWeAreDescription,
    missionStatement,
    approachDescription,
    growthIntro,
    growthMilestones,
    heroPhotos,
    whoWeArePhotos,
    missionPhotos,
    approachPhotos,
    collaborationMessage,
  } = siteContent;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-background min-h-[max(300px,42vh)] md:min-h-[max(380px,48vh)] lg:min-h-[max(460px,52vh)]">
        <div className="absolute inset-0 grid grid-cols-2">
          {heroPhotos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover object-center opacity-45"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-background/35" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="container absolute inset-x-0 bottom-[34%] z-10 flex justify-center md:bottom-[36%] lg:bottom-[38%]"
        >
          <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center text-foreground">
            {tagline}
          </h1>
        </motion.div>
      </section>

      <section className="py-20 section-pale">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{whoWeAreDescription}</p>
              <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary">
                <Link to="/about/our-team">
                  Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <PhotoCarousel
              photos={whoWeArePhotos}
              controls="overlay"
              aspect="aspect-[4/3]"
              className="max-w-none"
            />
          </div>
        </div>
      </section>

      <section className="py-20 section-surface">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
            <PhotoCarousel
              photos={missionPhotos}
              controls="overlay"
              aspect="aspect-[4/3]"
              className="max-w-none order-2 lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{missionStatement}</p>
              <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary">
                <Link to="/about/our-history">
                  Our History <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="font-display text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{approachDescription}</p>
              <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary">
                <Link to="/about/our-work">
                  Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <PhotoCarousel
              photos={approachPhotos}
              controls="overlay"
              aspect="aspect-[4/3]"
              className="max-w-none"
            />
          </div>
        </div>
      </section>

      <section className="py-20 section-surface">
        <div className="container max-w-6xl">
          <div className="mb-10">
            <TrendingUp className="h-8 w-8 text-primary mb-4" />
            <h2 className="font-display text-3xl font-bold mb-3">Our Growth & Impact</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-10 max-w-4xl">{growthIntro}</p>

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
              <Link to="/about/our-history#timeline">
                LinC STEM timeline <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 section-pale border-t border-border/60">
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
