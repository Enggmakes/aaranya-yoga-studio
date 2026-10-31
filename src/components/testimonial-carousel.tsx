import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { testimonials } from "@/data/site";

export function TestimonialCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="mx-auto" aria-label="Sample testimonials">
      <CarouselContent>
        {testimonials.map((t, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <figure className="flex h-full flex-col rounded-3xl border bg-card p-8">
              <Quote className="size-7 text-olive" aria-hidden />
              <blockquote className="mt-4 flex-1 font-serif text-2xl leading-snug text-foreground">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t pt-4 text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="block text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-8 flex justify-center gap-3">
        <CarouselPrevious className="static size-11 translate-y-0 rounded-full border-primary/30 text-primary" />
        <CarouselNext className="static size-11 translate-y-0 rounded-full border-primary/30 text-primary" />
      </div>
    </Carousel>
  );
}
