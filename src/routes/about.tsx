import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Feather, Sprout, UserRound, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking";
import { instructors, stats } from "@/data/site";
import pranayama from "@/assets/pranayama.jpg";
import personal from "@/assets/personal.jpg";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About IRA's yoga house",
  description:
    "The founding ethos, mindful teaching principles, and teacher philosophy behind IRA's yoga house.",
  url: "https://irasyogahouse.vercel.app/about",
  mainEntity: {
    "@type": "YogaStudio",
    name: "IRA's yoga house",
    url: "https://irasyogahouse.vercel.app",
    foundingLocation: "India",
  },
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Our Philosophy & Sanctuary — IRA's yoga house" },
      {
        name: "description",
        content:
          "Learn the ethos behind IRA's yoga house. We provide an unhurried, breath-anchored sanctuary with patient guidance and no mirrors or performance pressure.",
      },
      {
        name: "keywords",
        content:
          "about yoga sanctuary, mindful yoga ethos, yoga philosophy, slow living, restorative yoga studio, experienced yoga teachers",
      },
      { property: "og:title", content: "About Our Philosophy & Sanctuary — IRA's yoga house" },
      {
        property: "og:description",
        content:
          "We founded IRA's yoga house as an antidote to frantic, high-stress living. Discover our patient, breath-led approach.",
      },
      { property: "og:url", content: "https://irasyogahouse.vercel.app/about" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://irasyogahouse.vercel.app/assets/pranayama.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Our Philosophy & Sanctuary — IRA's yoga house" },
      {
        name: "twitter:description",
        content:
          "We founded IRA's yoga house as an antidote to frantic, high-stress living. Discover our patient, breath-led approach.",
      },
      { name: "twitter:image", content: "https://irasyogahouse.vercel.app/assets/pranayama.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://irasyogahouse.vercel.app/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(aboutSchema),
      },
    ],
  }),
  component: About,
});

const approach = [
  {
    icon: Feather,
    title: "Patience Before Depth",
    text: "We never force the body into rigid aesthetic shapes. We adapt postures around your unique skeletal structure, honoring comfort and joint ease over aggressive stretching.",
  },
  {
    icon: Compass,
    title: "Breath as the Living Anchor",
    text: "If breath becomes shallow or strained, the pose has gone too far. Every movement is synchronized with steady, rhythmic breathing that regulates your nervous system.",
  },
  {
    icon: Sprout,
    title: "No Performance, No Competition",
    text: "No mirrors to induce comparison, no performance pressure, and no rush to 'level up.' Simply a quiet, non-judgmental space to listen to your body and grow steadily.",
  },
];

function About() {
  const { openBooking } = useBooking();

  return (
    <>
      <PageHero
        eyebrow="Our Story & Vision"
        title="An unhurried sanctuary in a restless world"
        intro="IRA's yoga house was created as an intentional counterweight to modern hurry. A place where you can pause, drop your shoulders, and breathe without expectation."
      />

      {/* Story Narrative */}
      <section className="container-x grid items-center gap-8 pb-16 sm:gap-12 sm:pb-24 lg:grid-cols-2">
        {/* Clean Edge-to-Edge Story Image (Zero Border Band) */}
        <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_45px_-12px_rgba(35,48,38,0.16)] max-w-lg ring-1 ring-black/[0.06]">
          <img
            src={pranayama}
            alt="Practitioner seated in peaceful meditation at IRA's yoga house"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-square w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-102"
          />
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <SectionHeading
            eyebrow="Why We Exist"
            title="Created for real bodies, real stress, and lasting calm"
          />
          <p>
            In a world that continually demands more speed, more output, and more endurance, our
            bodies bear the cost: tight shoulders, restless minds, shallow breathing, and chronic
            exhaustion.
          </p>
          <p>
            We opened <strong className="font-medium text-foreground">IRA&apos;s yoga house</strong>{" "}
            to offer something fundamentally different: a warm sanctuary where movement is
            unhurried, breath is honored, and you are welcomed exactly as you are.
          </p>
          <p>
            Whether you are stepping onto a mat for the very first time or returning after years
            away, our classes provide grounded, anatomically conscious guidance with small batch
            sizes, so you are never lost in a crowd.
          </p>

          <div className="pt-2">
            <Button
              variant="pill"
              size="xl"
              onClick={() => openBooking()}
              className="group pr-4 pl-6"
            >
              <span>Begin Your Practice With Us</span>
              <span className="grid size-6 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="size-3" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="bg-secondary/60 py-12 sm:py-16 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Teaching Philosophy"
            title="How we guide every session"
            center
            intro="Yoga is not about touching your toes. It is about what you discover on the way down."
          />
          <ul className="mt-16 grid gap-6 md:grid-cols-3">
            {approach.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <div className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-xs h-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-soft">
                  <div className="grid size-12 place-items-center rounded-2xl bg-accent text-olive">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Studio Space & Standards */}
      <section className="container-x py-12 sm:py-16 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="The Practice Environment"
              title="A sensory sanctuary designed to soothe"
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every detail in IRA&apos;s yoga house has been intentionally chosen to help your body
              down-regulate from the moment you begin your practice:
            </p>
            <ul className="mt-6 grid gap-3.5 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-olive shrink-0 mt-0.5" />
                <span>
                  Calming natural ambiance and gentle daylight filtered through linen curtains
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-olive shrink-0 mt-0.5" />
                <span>Zero digital clutter, notification chimes, or blaring background music</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-olive shrink-0 mt-0.5" />
                <span>Organic cotton bolsters, natural cork blocks, and sanitized practice mats</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-olive shrink-0 mt-0.5" />
                <span>Fresh warm herbal infusion served before and after morning practices</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-xs text-center flex flex-col justify-center"
              >
                <dd className="font-serif text-3xl sm:text-4xl text-primary">{s.value}</dd>
                <dt className="mt-2 text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  {s.label}
                </dt>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="container-x pb-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Our Guides"
            title="Experienced teachers who hold thoughtful space"
          />
          <Button asChild variant="pillOutline" size="sm">
            <Link to="/contact">
              Connect with an instructor <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {instructors.map((i, idx) => (
            <li key={idx}>
              <div className="liquid-glass-card rounded-[2rem] p-5 sm:p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                {idx === 0 ? (
                  <div className="overflow-hidden rounded-2xl bg-secondary/30 ring-1 ring-white/60 shadow-xs">
                    <img
                      src={personal}
                      alt={i.name}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="aspect-square w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-103"
                    />
                  </div>
                ) : (
                  <div className="grid aspect-square place-items-center rounded-2xl bg-secondary/80 text-muted-foreground">
                    <UserRound className="size-12 opacity-50" aria-hidden />
                  </div>
                )}
                <h3 className="mt-5 font-serif text-2xl text-primary">{i.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-olive font-medium">
                  {i.focus}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
