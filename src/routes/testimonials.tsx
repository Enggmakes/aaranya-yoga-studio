import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, DemoBadge } from "@/components/layout";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { useBooking } from "@/components/booking";
import { testimonials } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Aaranya Yoga Studio" },
      { name: "description", content: "Stories from the Aaranya Yoga Studio community." },
      { property: "og:title", content: "Student Stories — Aaranya" },
      { property: "og:description", content: "What practising at Aaranya feels like." },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  const { openBooking } = useBooking();
  return (
    <>
      <PageHero eyebrow="Testimonials" title="Stories from the mat" intro="A glimpse of how practice can feel here." />
      <div className="container-x -mt-6 pb-10">
        <DemoBadge>These are sample testimonials for layout only — not verified reviews.</DemoBadge>
      </div>
      <section className="container-x pb-16"><TestimonialCarousel /></section>
      <section className="container-x pb-24">
        <ul className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <li key={i} className="mb-6 break-inside-avoid rounded-3xl bg-secondary/70 p-8">
              <Quote className="size-6 text-olive" aria-hidden />
              <p className="mt-3 text-muted-foreground">{t.quote}</p>
              <p className="mt-4 text-sm font-medium">{t.name} <span className="font-normal text-muted-foreground">· {t.role}</span></p>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Button variant="pill" size="xl" onClick={() => openBooking()}>Begin your own story</Button>
        </div>
      </section>
    </>
  );
}
