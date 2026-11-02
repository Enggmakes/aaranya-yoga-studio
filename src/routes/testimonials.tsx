import { createFileRoute } from "@tanstack/react-router";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { useBooking } from "@/components/booking";
import { testimonials } from "@/data/site";

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Student Testimonials and Reviews",
  description: "Practitioner reviews and experiences at IRA's yoga house.",
  itemListElement: testimonials.map((t, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.quote,
      itemReviewed: {
        "@type": "YogaStudio",
        name: "IRA's yoga house",
        url: "https://irasyogahouse.vercel.app",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  })),
};

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Student Reviews & Reflections — IRA's yoga house" },
      {
        name: "description",
        content:
          "Read honest reflections from practitioners at IRA's yoga house. Learn how unhurried Hatha, breathwork, and meditation restored their physical ease and calm.",
      },
      {
        name: "keywords",
        content:
          "yoga reviews, student testimonials, yoga house experiences, yoga for stress relief, beginner yoga reviews",
      },
      { property: "og:title", content: "Student Reviews & Reflections — IRA's yoga house" },
      {
        property: "og:description",
        content:
          "Read genuine reflections from practitioners experiencing unhurried yoga, nervous system regulation, and sustainable posture recovery.",
      },
      { property: "og:url", content: "https://irasyogahouse.vercel.app/testimonials" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://irasyogahouse.vercel.app/assets/hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Student Reviews & Reflections — IRA's yoga house" },
      {
        name: "twitter:description",
        content:
          "Read genuine reflections from practitioners experiencing unhurried yoga, nervous system regulation, and sustainable posture recovery.",
      },
      { name: "twitter:image", content: "https://irasyogahouse.vercel.app/assets/hero.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://irasyogahouse.vercel.app/testimonials" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(reviewsSchema),
      },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  const { openBooking } = useBooking();

  return (
    <>
      <PageHero
        eyebrow="Student Reflections"
        title="Real experiences from the mat"
        intro="An authentic glimpse into how an unhurried, breath-led practice restores daily energy, physical ease, and mental stillness."
      />

      <section className="container-x pb-16">
        <TestimonialCarousel />
      </section>

      <section className="container-x pb-28">
        <ul className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <li key={i} className="mb-6 break-inside-avoid">
              <div className="rounded-[2.25rem] p-1.5 bg-black/[0.02] ring-1 ring-black/[0.05]">
                <div className="rounded-[calc(2.25rem-0.375rem)] bg-secondary/60 p-8 shadow-xs transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-soft">
                  <Quote className="size-6 text-olive/80" aria-hidden />
                  <p className="mt-4 font-editorial text-base sm:text-lg italic leading-relaxed text-foreground/85">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 border-t border-border/60 pt-3">
                    <p className="text-sm font-medium text-foreground">
                      {t.name}
                      <span className="ml-2 text-xs font-normal text-muted-foreground">
                        · {t.role}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <Button
            variant="pill"
            size="xl"
            onClick={() => openBooking()}
            className="group pr-4 pl-7 shadow-soft"
          >
            <span>Begin Your Own Practice</span>
            <span className="grid size-7 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight className="size-3.5" />
            </span>
          </Button>
        </div>
      </section>
    </>
  );
}
