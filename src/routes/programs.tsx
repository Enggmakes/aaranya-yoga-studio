import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PageHero } from "@/components/layout";
import { useBooking } from "@/components/booking";
import { ServicesSection } from "@/components/services-section";
import { programs, type Program } from "@/data/site";
import heroImg from "@/assets/hero.jpg";

const programsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Yoga & Wellness Programs",
  description: "Authentic yoga, breathwork, and mindfulness programs offered at IRA's yoga house.",
  itemListElement: programs.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Course",
      name: p.name,
      description: p.description,
      provider: {
        "@type": "YogaStudio",
        name: "IRA's yoga house",
        url: "https://irasyogahouse.vercel.app",
      },
      educationalLevel: p.level,
    },
  })),
};

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Yoga Classes & Breathwork Programs — IRA's yoga house" },
      {
        name: "description",
        content:
          "Discover 7 authentic yoga pathways at IRA's yoga house: Hatha, Ashtanga, Pranayama breathwork, Meditation, and campus sessions for schools & colleges.",
      },
      {
        name: "keywords",
        content:
          "yoga classes, hatha yoga, ashtanga sequences, pranayama breathwork, meditation classes, beginner yoga, yoga for schools and colleges",
      },
      { property: "og:title", content: "Yoga Classes & Breathwork Programs — IRA's yoga house" },
      {
        property: "og:description",
        content:
          "Seven unhurried ways to practise — from beginner-friendly foundations and restorative breathwork to dynamic flow and school campus sessions.",
      },
      { property: "og:url", content: "https://irasyogahouse.vercel.app/programs" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://irasyogahouse.vercel.app/assets/hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Yoga Classes & Breathwork Programs — IRA's yoga house" },
      {
        name: "twitter:description",
        content:
          "Seven unhurried ways to practise — from beginner-friendly foundations and restorative breathwork to dynamic flow and school campus sessions.",
      },
      { name: "twitter:image", content: "https://irasyogahouse.vercel.app/assets/hero.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://irasyogahouse.vercel.app/programs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(programsSchema),
      },
    ],
  }),
  component: Programs,
});

function Programs() {
  const [active, setActive] = useState<Program | null>(null);
  const { openBooking } = useBooking();

  return (
    <>
      <PageHero
        eyebrow="Our Practice Pathways"
        title="Pathways to Restore Body & Mind"
        intro="Whether you are seeking high-impact wellness sessions for your school or corporate team, or deepening a steady personal practice, our science-based methods deliver measurable calm."
        image={heroImg}
        imageAlt="Practitioner in a serene sunlit yoga sanctuary"
        quote="Unhurried breath and mindful movement for real everyday strength."
        quoteAuthor="IRA's Yoga House"
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="pill"
            size="xl"
            onClick={() => openBooking()}
            className="bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B]"
          >
            <span>Book a Session</span>
            <ArrowRight className="size-4 ml-1" />
          </Button>

          <Button asChild variant="pillOutline" size="xl">
            <a href="#services">
              <span>View Solution Cards</span>
              <ArrowRight className="size-4 ml-1" />
            </a>
          </Button>
        </div>
      </PageHero>

      {/* 6 Problem -> Solution Services Matrix */}
      <ServicesSection />

      <section className="container-x grid gap-10 pb-16 sm:gap-14 sm:pb-28">
        {programs.map((p, i) => (
          <article
            id={p.id}
            key={p.id}
            className="grid scroll-mt-28 items-center gap-6 md:grid-cols-2 md:gap-14"
          >
            {/* Clean Edge-to-Edge Program Image (Zero Border Band) */}
            <div
              className={`overflow-hidden rounded-[2rem] shadow-[0_20px_45px_-12px_rgba(35,48,38,0.16)] max-w-lg ring-1 ring-black/[0.06] ${
                i % 2 ? "md:order-2" : ""
              }`}
            >
              <img
                src={p.image}
                alt={`${p.name} at IRA's yoga house`}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-103"
              />
            </div>

            <div>
              <p className="eyebrow">{p.level}</p>
              <h2 className="mt-3 font-serif font-semibold text-4xl text-primary md:text-5xl">
                {p.name}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>
              <ul className="mt-6 grid gap-2.5 text-sm">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <Check className="size-4 text-olive shrink-0" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="pill" size="xl" onClick={() => setActive(p)}>
                  Class Details
                </Button>
                <Button variant="pillOutline" size="xl" onClick={() => openBooking(p.id)}>
                  Inquire / Book This Class
                </Button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Educational & Campus Callout */}
      <section className="container-x pb-20 sm:pb-28">
        <div className="rounded-[2.5rem] border border-border/80 bg-secondary/50 p-8 sm:p-12 md:p-16 text-center">
          <p className="eyebrow mx-auto">Campus & Institutional Partnerships</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl sm:text-4xl font-serif font-semibold text-primary">
            Bring grounded mindfulness directly to your school or college
          </h2>
          <p className="mx-auto mt-4 max-w-[65ch] text-muted-foreground leading-relaxed">
            We partner with school leadership, university departments, and student wellness clubs to
            deliver tailored on-campus breathwork, desk-posture relief, and pre-exam calm workshops.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="pill"
              size="xl"
              onClick={() => openBooking("campus")}
              className="group pr-4 pl-7"
            >
              <span>Request Campus Session</span>
              <span className="grid size-7 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="size-3.5" />
              </span>
            </Button>
            <Button asChild variant="pillOutline" size="xl">
              <Link to="/contact">
                Contact For Details <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Details Modal with Full Posture Preservation */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-background sm:max-w-lg rounded-[2rem] border border-border/80 shadow-2xl p-6 sm:p-8">
          {active && (
            <>
              <div className="overflow-hidden rounded-2xl shadow-xs ring-1 ring-black/[0.06]">
                <img
                  src={active.image}
                  alt={active.name}
                  className="aspect-square max-h-80 w-full object-cover object-center"
                />
              </div>
              <DialogHeader className="pt-2">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{active.level}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-olive font-medium">
                    <Sparkles className="size-3.5" /> On-site & Online
                  </span>
                </div>
                <DialogTitle className="font-serif text-3xl font-medium text-primary mt-1">
                  {active.name}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground leading-relaxed pt-2">
                  {active.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 rounded-2xl border border-border/60 bg-secondary/50 p-5 text-sm">
                <h3 className="font-serif text-lg text-primary">Class Highlights & Takeaways</h3>
                <ul className="grid gap-2 text-muted-foreground">
                  {active.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <Check className="size-4 text-olive shrink-0 mt-0.5" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2.5">
                    <Check className="size-4 text-olive shrink-0 mt-0.5" aria-hidden />
                    <span>Mats, cushions, bolsters, and straps are provided for on-site sessions.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <Button
                  variant="pill"
                  size="xl"
                  onClick={() => {
                    const id = active.id;
                    setActive(null);
                    openBooking(id);
                  }}
                  className="group pr-4 pl-6"
                >
                  <span>Book This Class</span>
                  <span className="grid size-6 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="size-3" />
                  </span>
                </Button>
                <Button asChild variant="pillOutline" size="xl" onClick={() => setActive(null)}>
                  <Link to="/contact">
                    Ask a Question <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
