import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, HeartPulse, Leaf, Play, Scale, Sun, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SectionHeading, DemoBadge } from "@/components/layout";
import { useBooking } from "@/components/booking";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { programs } from "@/data/site";
import hero from "@/assets/hero.jpg";
import forest from "@/assets/forest.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aaranya Yoga Studio — Find Your Inner Peace" },
      { name: "description", content: "Slow down and reconnect at Aaranya Yoga Studio. Hatha, Ashtanga, meditation, pranayama and beginner classes in the studio and online." },
      { property: "og:title", content: "Aaranya Yoga Studio — Find Your Inner Peace" },
      { property: "og:description", content: "Calm, grounded yoga, meditation and breathwork classes for every body." },
    ],
  }),
  component: Home,
});

const benefits = [
  { icon: HeartPulse, title: "Better Health", text: "Gentle, regular movement that supports mobility, posture and strength." },
  { icon: Wind, title: "Stress Relief", text: "Breath-led practice that gives the nervous system space to unwind." },
  { icon: Scale, title: "Inner Balance", text: "Time to notice, steady the mind and come back to yourself." },
  { icon: Sun, title: "More Energy", text: "Many students find they feel lighter and more awake after class." },
];

function Home() {
  const { openBooking } = useBooking();
  const [video, setVideo] = useState(false);
  const popular = programs.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="container-x grid items-center gap-10 pt-6 pb-20 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:pt-12">
        <div className="fade-up order-2 lg:order-1">
          <p className="eyebrow flex items-center gap-2"><Leaf className="size-4" aria-hidden /> Yoga · Meditation · Breath</p>
          <h1 className="mt-5 text-6xl leading-[0.95] text-primary sm:text-7xl xl:text-8xl">
            Find Your <em className="font-serif italic text-olive">Inner</em> Peace
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Step away from the rush. Our classes offer an unhurried space to slow down, breathe deeply and reconnect with your body and mind.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild variant="pill" size="xl">
              <Link to="/programs">Explore Our Classes <ArrowRight /></Link>
            </Button>
            <button onClick={() => setVideo(true)} className="group inline-flex items-center gap-3 rounded-full py-2 pr-3 text-sm font-medium text-primary">
              <span className="grid size-12 place-items-center rounded-full border border-primary/30 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Play className="size-4 fill-current" aria-hidden />
              </span>
              Watch Video
            </button>
          </div>
          <dl className="mt-12 flex gap-10 border-t pt-6">
            <div><dt className="text-xs text-muted-foreground">Programs</dt><dd className="font-serif text-3xl text-primary">6</dd></div>
            <div><dt className="text-xs text-muted-foreground">Class formats</dt><dd className="font-serif text-3xl text-primary">Studio & Online</dd></div>
          </dl>
        </div>
        <div className="fade-up relative order-1 lg:order-2">
          <div className="overflow-hidden rounded-[2.5rem] rounded-tr-[8rem]">
            <img src={hero} alt="A woman meditating cross-legged on a mat in a sunlit studio" width={1600} height={1104} className="aspect-[4/3] w-full object-cover lg:aspect-[5/6]" />
          </div>
          <div className="absolute -bottom-6 left-4 hidden max-w-[15rem] rounded-2xl bg-card p-5 shadow-soft sm:block lg:-left-10">
            <p className="font-serif text-xl leading-snug text-primary">“Breathe in calm, breathe out tension.”</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose Aaranya" title="A practice that meets you where you are" center />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="group rounded-3xl bg-card p-8 transition-transform hover:-translate-y-1">
                <span className="grid size-14 place-items-center rounded-full bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-6" aria-hidden /></span>
                <h3 className="mt-6 text-2xl text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Programs */}
      <section className="container-x py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Popular Programs" title="Find the class for you" />
          <Button asChild variant="pillOutline" size="xl"><Link to="/programs">View all programs <ArrowRight /></Link></Button>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((p) => (
            <li key={p.id}>
              <Link to="/programs" hash={p.id} className="group block">
                <div className="overflow-hidden rounded-3xl">
                  <img src={p.image} alt="" loading="lazy" width={1024} height={1024} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-4 text-xs text-olive">{p.level}</p>
                <h3 className="mt-1 flex items-center justify-between text-2xl text-primary">{p.name}<ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden /></h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.short}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden">
        <img src={forest} alt="" loading="lazy" width={1600} height={800} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-primary/70" />
        <div className="container-x py-24 text-center text-primary-foreground md:py-32">
          <h2 className="mx-auto max-w-3xl text-5xl leading-tight md:text-6xl">Ready to Begin Your Journey?</h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/85">Your first class is a simple step. Tell us what you're looking for and we'll help you find a gentle place to start.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button variant="pillLight" size="xl" onClick={() => openBooking()}>Book a Class</Button>
            <Button asChild variant="pillOutline" size="xl" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"><Link to="/schedule">See the schedule</Link></Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Kind Words" title="From our community" />
          <DemoBadge>Sample testimonials — not verified reviews</DemoBadge>
        </div>
        <div className="mt-12"><TestimonialCarousel /></div>
        <p className="mt-6 text-center"><Link to="/testimonials" className="text-sm text-primary underline-offset-4 hover:underline">Read more stories</Link></p>
      </section>

      <Dialog open={video} onOpenChange={setVideo}>
        <DialogContent className="bg-background sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-3xl font-medium">A moment to breathe</DialogTitle>
            <DialogDescription>Our studio film is coming soon. Until then, follow the circle: breathe in as it grows, out as it softens.</DialogDescription>
          </DialogHeader>
          <div className="grid place-items-center py-8">
            <div className="grid size-56 place-items-center rounded-full bg-accent/50">
              <div className="breathe size-48 rounded-full bg-primary/80" aria-hidden />
            </div>
          </div>
          <Button variant="pill" size="xl" onClick={() => { setVideo(false); openBooking(); }}>Book your first class</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
