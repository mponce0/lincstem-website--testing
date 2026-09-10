import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="w-full rounded-xl border border-border/60 bg-card p-5 shadow-sm sm:p-6">
      <div className="flex gap-3 sm:gap-4">
        <Quote className="mt-0.5 h-5 w-5 shrink-0 text-primary/35 sm:h-6 sm:w-6" aria-hidden="true" />
        <p className="text-sm leading-snug text-muted-foreground italic sm:text-base">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
      <footer className="mt-4 border-t border-border/60 pt-3">
        {testimonial.name && (
          <p className="font-display text-sm font-semibold text-foreground">{testimonial.name}</p>
        )}
        <p className={cn("text-xs text-muted-foreground sm:text-sm", testimonial.name && "mt-0.5")}>
          {testimonial.role}
        </p>
      </footer>
    </blockquote>
  );
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
  interval?: number;
}

export default function TestimonialsCarousel({
  testimonials,
  className,
  interval = 5000,
}: TestimonialsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, interval);

    return () => clearInterval(timer);
  }, [api, interval, testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <div className={cn("relative mx-auto max-w-6xl", className)}>
      <Carousel
        opts={{ align: "start", loop: testimonials.length > 1 }}
        setApi={setApi}
        className="w-full"
      >
        <div className="flex items-center gap-4 md:gap-6">
          {testimonials.length > 1 && (
            <CarouselPrevious className="static left-auto top-auto shrink-0 -translate-x-0 -translate-y-0 h-10 w-10 border-border/60 bg-card shadow-sm hover:bg-muted" />
          )}

          <div className="min-w-0 flex-1">
	  {/* <CarouselContent className="-ml-4 items-start"> */}
            <CarouselContent className="-ml-4 items-center">
              {testimonials.map((testimonial, i) => (
                <CarouselItem
                  key={`${testimonial.role}-${testimonial.quote.slice(0, 32)}-${i}`}
                  className="pl-4 basis-full md:basis-1/2"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          {testimonials.length > 1 && (
            <CarouselNext className="static right-auto top-auto shrink-0 -translate-x-0 -translate-y-0 h-10 w-10 border-border/60 bg-card shadow-sm hover:bg-muted" />
          )}
        </div>
      </Carousel>
    </div>
  );
}
