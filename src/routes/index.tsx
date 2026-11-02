import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartPulse, Leaf, Scale, Sun, Wind, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/layout";
import { useBooking } from "@/components/booking";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { programs } from "@/data/site";
import hero from "@/assets/hero.jpg";
import forest from "@/assets/forest.jpg";

export const faqs = [
  {
    q: "Do I need to be flexible before joining a class?",
    a: "Not at all. Flexibility is a gradual outcome of practice, never a requirement. Our teachers provide gentle modifications and props so every posture meets your body right where it is today.",
  },
  {
    q: "What should I wear and bring to my first session?",
    a: "Wear comfortable, stretchy clothing that allows you to breathe and move freely. High-grade non-toxic mats, meditation cushions, straps, and blocks are all provided in the studio. Just bring a water bottle.",
  },
  {
    q: "Can I practice if I have neck, lower back, or joint stiffness?",
    a: "Yes. Many of our practitioners come specifically to ease physical tension. Please let your teacher know before class so we can tailor gentle posture variations that keep your joints completely safe.",
  },
  {
    q: "What is the difference between studio and online classes?",
    a: "Studio classes take place in our serene, distraction-free sanctuary. Online classes are streamed live in small batches with interactive cues, allowing you to practice in the comfort of your home.",
  },
  {
    q: "Do you offer sessions or workshops for schools and colleges?",
    a: "Yes. We partner directly with schools, universities, and student groups to conduct on-campus yoga, pre-exam breathwork, and healthy posture sessions for students as well as faculty wellness workshops.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IRA's yoga house — Authentic Yoga & Breathwork Sanctuary" },
      {
        name: "description",
        content:
          "Step away from the rush at IRA's yoga house. Unhurried, breath-led Hatha, Ashtanga, Pranayama breathwork, and beginner sessions in a peaceful sanctuary.",
      },
      {
        name: "keywords",
        content:
          "yoga classes, hatha yoga, ashtanga yoga, pranayama breathwork, beginner yoga, meditation sanctuary, yoga for schools and colleges, back pain yoga",
      },
      { property: "og:title", content: "IRA's yoga house — Authentic Yoga & Breathwork Sanctuary" },
      {
        property: "og:description",
        content:
          "Unhurried, breath-led yoga and mindfulness sessions. Small batches, patient guidance, and space to truly unwind.",
      },
      { property: "og:url", content: "https://irasyogahouse.vercel.app/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://irasyogahouse.vercel.app/assets/hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "IRA's yoga house — Authentic Yoga & Breathwork Sanctuary",
      },
      {
        name: "twitter:description",
        content:
          "Unhurried, breath-led yoga and mindfulness sessions. Small batches, patient guidance, and space to truly unwind.",
      },
      { name: "twitter:image", content: "https://irasyogahouse.vercel.app/assets/hero.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://irasyogahouse.vercel.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
    ],
  }),
  component: Home,
});

const transformations = [
  {
    icon: HeartPulse,
    title: "Release Physical Tightness",
    text: "Gentle spinal decompression and conscious joint opening that melt stiffness accumulated from long hours at desks and daily fatigue.",
  },
  {
    icon: Wind,
    title: "Calm an Overworked Mind",
    text: "Classical Pranayama breathing techniques that gently reset your sympathetic nervous system, reduce cortisol, and invite deeper sleep.",
  },
  {
    icon: Scale,
    title: "Build Grounded Strength",
    text: "Unhurried posture holds that develop deep core stability, joint resilience, and functional balance without forcing or straining.",
  },
  {
    icon: Sun,
    title: "Carry Peace Into Daily Life",
    text: "Simple, practical breath awareness and mindfulness techniques you can return to whenever work or life becomes demanding.",
  },
];

const steps = [
  {
    step: "01",
    title: "Choose Your Starting Point",
    description:
      "Explore gentle Beginner Foundations, steady Hatha, calming Breathwork, or focused private guidance tailored to you.",
  },
  {
    step: "02",
    title: "Arrive Exactly As You Are",
    description:
      "No gear needed. Clean eco-friendly mats, supportive bolsters, blocks, and warm herbal tea are prepared and waiting for you.",
  },
  {
    step: "03",
    title: "Move at Your Body's Pace",
    description:
      "Our instructors provide supportive posture modifications for every shape. You finish feeling grounded, steady, and lighter.",
  },
];

function Home() {
  const { openBooking } = useBooking();
  const popular = programs.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="container-x grid items-center gap-5 pt-3 pb-12 sm:gap-8 sm:pt-6 sm:pb-16 lg:grid-cols-[1.1fr_1.15fr] lg:gap-16 lg:pt-12 lg:pb-24">
        <div className="fade-up order-2 lg:order-1">
          <p className="eyebrow flex items-center gap-2">
            <Leaf className="size-3.5" aria-hidden /> Warm, Grounded Yoga Sanctuary
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] text-primary sm:mt-5 sm:text-6xl xl:text-7xl font-serif">
            Step Away From The Rush. <br />
            Find Your <em className="italic text-olive font-serif">Steady</em> Breath.
          </h1>
          <p className="mt-3.5 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            Unhurried, breath-led yoga and meditation sessions tailored to your body. No mirrors, no
            performance — just patient guidance and space to return to yourself.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
            <Button
              variant="pill"
              size="xl"
              onClick={() => openBooking()}
              className="group pr-3.5 pl-6 sm:pl-7 shadow-soft"
            >
              <span>Book Your First Class</span>
              <span className="grid size-7 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowRight className="size-3.5" />
              </span>
            </Button>

            <Button asChild variant="pillOutline" size="xl">
              <Link to="/programs">
                Explore All Programs <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border/80 pt-5 sm:mt-12 sm:grid-cols-4 sm:gap-4 sm:pt-6">
            <div className="flex items-center gap-2 text-xs font-medium text-foreground/80">
              <CheckCircle2 className="size-4 text-olive shrink-0" />
              <span>Small batches</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-foreground/80">
              <CheckCircle2 className="size-4 text-olive shrink-0" />
              <span>Zero intimidation</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-foreground/80">
              <CheckCircle2 className="size-4 text-olive shrink-0" />
              <span>Studio & Online</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-foreground/80">
              <CheckCircle2 className="size-4 text-olive shrink-0" />
              <span>Mats provided</span>
            </div>
          </div>
        </div>

        {/* Hero Media Container — Clean Edge-to-Edge Floating Media */}
        <div className="fade-up order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] shadow-[0_16px_36px_-8px_rgba(35,48,38,0.14)] sm:shadow-[0_24px_50px_-12px_rgba(35,48,38,0.18)] ring-1 ring-black/[0.06]">
            <img
              src={hero}
              alt="A practitioner meditating peacefully cross-legged on a mat in a sunlit studio"
              width={1600}
              height={1104}
              className="aspect-[4/3] w-full object-cover object-[center_30%] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-102"
            />

            {/* Integrated Quote Card — Hidden on mobile to remove clutter and wasted space; visible on sm+ */}
            <div className="liquid-glass-pill absolute bottom-3.5 left-3.5 right-3.5 sm:right-auto sm:max-w-[17.5rem] rounded-2xl p-4 hidden sm:block">
              <p className="font-editorial italic text-base leading-snug text-primary">
                “Breathe in calm, breathe out tension.”
              </p>
              <p className="mt-1 text-[10px] text-olive font-medium tracking-wider uppercase">
                — IRA&apos;s Yoga House
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations / Outcomes Section */}
      <section className="bg-secondary/60 py-12 sm:py-16 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Practice With Us"
            title="How an unhurried practice restores your daily life"
            center
            intro="You don't need to fit into yoga. We shape the practice around what your body and mind need today."
          />

          <ul className="mt-8 sm:mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {transformations.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <div className="rounded-[2rem] border border-border/60 bg-card p-6 sm:p-8 h-full shadow-xs transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-soft">
                  <span className="grid size-12 sm:size-14 place-items-center rounded-full bg-accent text-primary transition-colors duration-200">
                    <Icon className="size-5 sm:size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 sm:mt-6 font-serif text-2xl text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works / Easy Beginning */}
      <section className="container-x py-12 sm:py-16 md:py-24">
        <SectionHeading
          eyebrow="A Simple Beginning"
          title="Starting is welcoming and unhurried"
          center
          intro="We remove the friction so you can focus entirely on breathing and settling in."
        />

        <div className="mt-8 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-[2rem] border border-border/70 bg-card p-6 sm:p-8 h-full shadow-xs"
            >
              <span className="font-serif text-3xl sm:text-4xl text-olive/50 font-semibold">
                {s.step}
              </span>
              <h3 className="mt-3 sm:mt-4 font-serif text-2xl text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-secondary/40 py-12 sm:py-16 md:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our Classes"
              title="Find the right practice for your current state"
              intro="From restorative calm to mindful heat, explore our core paths."
            />
            <Button asChild variant="pillOutline" size="xl">
              <Link to="/programs">
                View All Programs <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <ul className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((p) => (
              <li key={p.id}>
                <Link to="/programs" hash={p.id} className="group block h-full">
                  <div className="liquid-glass-card rounded-[2rem] p-4 sm:p-5 h-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_50px_-12px_rgba(35,48,38,0.14)]">
                    {/* Natural 1:1 Square Aspect Ratio — Preserves Full Posture Without Cropping */}
                    <div className="overflow-hidden rounded-2xl bg-secondary/30 ring-1 ring-white/60 shadow-xs">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className="aspect-square w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-104"
                      />
                    </div>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-olive">
                      {p.level}
                    </p>
                    <h3 className="mt-1 flex items-center justify-between font-serif text-2xl text-primary">
                      <span>{p.name}</span>
                      <ArrowRight
                        className="size-5 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1"
                        aria-hidden
                      />
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-12 sm:py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Student Reflections"
            title="Experiences from practitioners on the mat"
          />
          <Button asChild variant="pillOutline" size="sm">
            <Link to="/testimonials">Read more stories</Link>
          </Button>
        </div>
        <div className="mt-8 sm:mt-12">
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ / Objection Handling */}
      <section className="bg-secondary/60 py-12 sm:py-16 md:py-24">
        <div className="container-x max-w-4xl">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Common questions about beginning"
            center
            intro="Everything you need to know before walking through our doors."
          />

          <div className="mt-8 sm:mt-12 rounded-[2rem] border border-border/80 bg-card p-6 sm:p-10 shadow-bezel">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/60 py-1">
                  <AccordionTrigger className="text-left font-serif text-xl sm:text-2xl text-primary hover:no-underline hover:text-olive">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-1 pb-4">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final Warm CTA */}
      <section className="relative isolate overflow-hidden">
        <img
          src={forest}
          alt=""
          loading="lazy"
          width={1600}
          height={800}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary/78 backdrop-blur-[2px]" />
        <div className="container-x py-14 sm:py-20 text-center text-primary-foreground md:py-32">
          <h2 className="mx-auto max-w-3xl text-5xl font-semibold leading-tight md:text-6xl font-serif">
            Ready to Give Yourself Room to Breathe?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/90 text-lg leading-relaxed">
            Your first session is a gentle, pressure-free step. Share what you are looking for, and
            we will prepare a welcoming place for you.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button
              variant="pillLight"
              size="xl"
              onClick={() => openBooking()}
              className="group pr-4 pl-7 shadow-lg"
            >
              <span>Book Your First Class</span>
              <span className="grid size-7 place-items-center rounded-full bg-primary/10 text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="size-3.5" />
              </span>
            </Button>
            <Button asChild variant="pillGlassDark" size="xl">
              <Link to="/programs">
                View All Programs <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
