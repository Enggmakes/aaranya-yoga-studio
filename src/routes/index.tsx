import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  GraduationCap,
  Building,
  Eye,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  FileCheck2,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/layout";
import { useBooking } from "@/components/booking";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { ServicesSection } from "@/components/services-section";
import { BotanicalBackground } from "@/components/botanical-background";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import hero from "@/assets/hero.jpg";
import campus from "@/assets/campus.jpg";
import forest from "@/assets/forest.jpg";

export const faqs = [
  {
    q: "Do students or employees need yoga mats or special clothing?",
    a: "No! All our institutional programs — including Chair Yoga, Tratak, Exam Calm, and De-Stress at Desk — are designed to be performed directly on standard chairs or auditorium seats in school uniforms or professional corporate attire. Zero mats or athletic wear needed.",
  },
  {
    q: "How does Tratak and breathwork reduce exam anxiety?",
    a: "Tratak calms the optic nerve and exercises the ciliary eye muscles, breaking the cognitive loop of panic. Combined with vagus-nerve activating Pranayama (Box Breathing & Bhramari), heart rate normalizes within 2 minutes and memory recall centers in the brain are restored.",
  },
  {
    q: "What documentation does the school or company receive?",
    a: "Every institutional workshop includes a verified attendance roster, pre- and post-session wellness impact feedback forms, high-resolution photo/video media for annual reports, and certificates of completion for participating students.",
  },
  {
    q: "What languages are the sessions conducted in?",
    a: "Sessions can be seamlessly delivered in English, Hindi, Marathi, or a bilingual mix depending on your student or employee preference.",
  },
  {
    q: "Can we book a single trial demo session first?",
    a: "Yes! We encourage schools and companies to book an initial 30-to-60 minute demo session to experience the immediate impact on student focus or team morale before committing to multi-week programs.",
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
      { title: "Yoga for Focused Students & Stress-Free Teams — IRA's yoga house" },
      {
        name: "description",
        content:
          "Helping schools reduce exam anxiety and companies reduce burnout through simple, science-based yoga, breathwork and tratak. No mats, no jargon — just practical calm.",
      },
      {
        name: "keywords",
        content:
          "yoga for schools, exam stress yoga, corporate yoga pune, chair yoga workplace, tratak meditation focus, yoga nidra for sleep, breathwork for anxiety",
      },
      {
        property: "og:title",
        content: "Yoga for Focused Students & Stress-Free Teams — IRA's yoga house",
      },
      {
        property: "og:description",
        content:
          "Simple, science-based yoga, breathwork and tratak that improves exam results and team productivity. No mats, no jargon.",
      },
      { property: "og:url", content: "https://irasyogahouse.vercel.app/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://irasyogahouse.vercel.app/assets/hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Yoga for Focused Students & Stress-Free Teams — IRA's yoga house",
      },
      {
        name: "twitter:description",
        content:
          "Simple, science-based yoga, breathwork and tratak that improves exam results and team productivity. No mats, no jargon.",
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

function Home() {
  const { openBooking } = useBooking();

  return (
    <>
      {/* Hero Section — Exact Client Brief with Signature Sanctuary Background */}
      <BotanicalBackground className="pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-28">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1.1fr_1.1fr] lg:gap-14">
          {/* Text & Primary Actions: Always First on All Screens */}
          <div className="fade-up order-1">
            {/* Seamless Typographic Eyebrow (No Clunky White Box) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777B50]">
              <Sparkles className="size-3.5 text-[#B69A58] shrink-0" aria-hidden="true" />
              <span>Science-Based Institutional Wellness</span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 font-['Cormorant_Garamond',Georgia,serif] text-4xl font-semibold leading-[1.08] text-[#142F1C] sm:text-6xl xl:text-7xl">
              Yoga for Focused Students &amp; <br />
              <em className="italic text-[#777B50] font-normal">Stress-Free</em> Teams
            </h1>

            {/* Subtext */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4E5C48] sm:mt-6 sm:text-lg">
              I help schools reduce exam anxiety and companies reduce burnout through simple,
              science-based yoga, breathwork and tratak. No mats, no jargon — just practical calm
              that improves results.
            </p>

            {/* Dual CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:mt-10 sm:gap-4">
              <Button
                variant="pill"
                size="xl"
                onClick={() => openBooking("school-demo")}
                className="bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B] pr-4 pl-6 shadow-soft"
              >
                <GraduationCap className="size-5" />
                <span>Book Demo for Your School</span>
                <ArrowRight className="size-4 ml-1" />
              </Button>

              <Button
                variant="pillOutline"
                size="xl"
                onClick={() => openBooking("corporate-demo")}
                className="border-[#183820] text-[#183820] hover:bg-[#183820] hover:text-[#FFF8EC] pr-4 pl-6"
              >
                <Building className="size-5" />
                <span>Book Demo for Your Company</span>
                <ArrowRight className="size-4 ml-1" />
              </Button>
            </div>

            {/* Institutional Trust Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-3.5 border-t border-[#B69A58]/30 pt-6 sm:mt-12 sm:grid-cols-4 sm:gap-4">
              <div className="flex items-center gap-2 text-xs font-medium text-[#142F1C]">
                <CheckCircle2 className="size-4 text-[#285732] shrink-0" />
                <span>No mats required</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#142F1C]">
                <FileCheck2 className="size-4 text-[#285732] shrink-0" />
                <span>Pre/post reports</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#142F1C]">
                <ShieldCheck className="size-4 text-[#285732] shrink-0" />
                <span>Zero yoga jargon</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#142F1C]">
                <Languages className="size-4 text-[#285732] shrink-0" />
                <span>Eng / Hin / Mar</span>
              </div>
            </div>
          </div>

          {/* Hero Media Container: Follows text on mobile, right column on desktop */}
          <div className="fade-up order-2">
            <div className="relative overflow-hidden rounded-3xl border border-[#B69A58]/40 bg-[#FFFDF9] shadow-[0_20px_45px_-12px_rgba(24,56,32,0.18)]">
              <img
                src={campus}
                alt="Students practicing calm focus and breathwork in a classroom setting"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-103"
              />

              {/* Floating Focus Badge */}
              <div className="liquid-glass-pill absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-2xl p-4 border border-[#B69A58]/60 bg-[#FFFDF9]/90 backdrop-blur-md shadow-lg">
                <p className="font-['Cormorant_Garamond',Georgia,serif] italic text-base leading-snug text-[#142F1C]">
                  “Measured calm before exams and high-stakes meetings.”
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-[#777B50] font-bold">
                  — IRA&apos;s Yoga House
                </p>
              </div>
            </div>
          </div>
        </div>
      </BotanicalBackground>

      {/* 3 Dedicated Audience Pillars Gateway */}
      <section className="bg-[#F5EBDD]/70 py-12 sm:py-16 border-y border-[#B69A58]/30">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-2xl sm:text-3xl font-medium text-[#142F1C]">
              Tailored Programs for Educational &amp; Professional Spaces
            </h2>
            <p className="mt-1 text-sm text-[#4E5C48]">
              Select your organization type to explore specialized formats, curriculum, and deliverables.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* School Card */}
            <Link
              to="/schools"
              className="group relative flex flex-col justify-between rounded-3xl border border-[#B69A58]/40 bg-[#FFFDF9] p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#183820] hover:shadow-soft"
            >
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-[#183820] text-[#FFF8EC] shadow-xs">
                  <GraduationCap className="size-6" />
                </span>
                <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-[#777B50]">
                  For Educational Institutions
                </span>
                <h3 className="mt-1 font-['Cormorant_Garamond',Georgia,serif] text-2xl font-semibold text-[#142F1C]">
                  Yoga for Schools &amp; Colleges
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4E5C48]">
                  Overcome exam stress, sleep issues, and phone addiction for Std 8th to 12th.
                  Includes teacher recharge chair yoga.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#183820]">
                <span>Explore School Programs</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Corporate Card */}
            <Link
              to="/corporate"
              className="group relative flex flex-col justify-between rounded-3xl border border-[#B69A58]/40 bg-[#FFFDF9] p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#183820] hover:shadow-soft"
            >
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-[#183820] text-[#FFF8EC] shadow-xs">
                  <Building className="size-6" />
                </span>
                <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-[#777B50]">
                  For Corporate &amp; IT Teams
                </span>
                <h3 className="mt-1 font-['Cormorant_Garamond',Georgia,serif] text-2xl font-semibold text-[#142F1C]">
                  Yoga at Workplace
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4E5C48]">
                  Zero mat desk yoga, burnout recovery, and sleep breathwork. Delivered in English,
                  Hindi &amp; Marathi.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#183820]">
                <span>Explore Corporate Packages</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Tratak Card */}
            <Link
              to="/tratak"
              className="group relative flex flex-col justify-between rounded-3xl border border-[#B69A58]/40 bg-[#FFFDF9] p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#183820] hover:shadow-soft"
            >
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-[#183820] text-[#FFF8EC] shadow-xs">
                  <Eye className="size-6" />
                </span>
                <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-[#777B50]">
                  Mind Power &amp; Focus
                </span>
                <h3 className="mt-1 font-['Cormorant_Garamond',Georgia,serif] text-2xl font-semibold text-[#142F1C]">
                  Tratak Gazing Meditation
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4E5C48]">
                  Scientific candle flame and focal point gazing that cures screen fatigue, trains
                  memory, and stops racing thoughts.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#183820]">
                <span>Discover Tratak Method</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section — 6 Cards in 2 Rows (Problem -> Solution) */}
      <ServicesSection />

      {/* Testimonials */}
      <section className="container-x py-14 sm:py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Real Feedback"
            title="What educators, team leads & practitioners say"
          />
          <Button asChild variant="pillOutline" size="sm">
            <Link to="/testimonials">Read more stories</Link>
          </Button>
        </div>
        <div className="mt-8 sm:mt-12">
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F5EBDD]/60 py-14 sm:py-20 md:py-28 border-t border-[#B69A58]/30">
        <div className="container-x max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Everything Principals & HR Managers ask before booking"
            center
            intro="We make implementation frictionless, transparent, and completely customized to your schedule."
          />

          <div className="mt-8 sm:mt-12 rounded-[2rem] border border-[#B69A58]/40 bg-[#FFFDF9] p-6 sm:p-10 shadow-bezel">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-[#B69A58]/30 py-1">
                  <AccordionTrigger className="text-left font-serif text-xl sm:text-2xl text-[#142F1C] hover:no-underline hover:text-[#777B50]">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4E5C48] text-base leading-relaxed pt-1 pb-4">
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
        <div className="absolute inset-0 -z-10 bg-[#142F1C]/85 backdrop-blur-[2px]" />
        <div className="container-x py-16 sm:py-24 text-center text-[#FFF8EC] md:py-32">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl font-serif">
            Ready to Bring Measurable Calm to Your Campus or Office?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[#F5EBDD] text-base sm:text-lg leading-relaxed">
            Book an initial 30-to-60 minute demo session. We bring all materials, require no mats,
            and deliver an unforgettable experience.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button
              variant="pillLight"
              size="xl"
              onClick={() => openBooking("school-demo")}
              className="group pr-4 pl-7 shadow-lg"
            >
              <span>Get School Proposal</span>
              <span className="grid size-7 place-items-center rounded-full bg-[#183820]/15 text-[#183820] transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="size-3.5" />
              </span>
            </Button>
            <Button
              variant="pillGlassDark"
              size="xl"
              onClick={() => openBooking("corporate-demo")}
              className="text-[#FFF8EC] border-[#B69A58]/60"
            >
              <span>Get Corporate Proposal</span>
              <ArrowRight className="size-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
