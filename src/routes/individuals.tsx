import { createFileRoute } from "@tanstack/react-router";
import {
  User,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  HeartHandshake,
  ShieldCheck,
  Compass,
  Feather,
  Calendar,
  Smile,
  Activity,
  Layers,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading } from "@/components/layout";
import { useBooking } from "@/components/booking";
import { packages, testimonials } from "@/data/site";
import personalHero from "@/assets/personal.jpg";

export const Route = createFileRoute("/individuals")({
  head: () => ({
    meta: [
      {
        title: "Personalized Yoga for Individuals & Private Guidance — IRA's yoga house",
      },
      {
        name: "description",
        content:
          "Dedicated 1-on-1 yoga instruction, beginner-friendly foundations, and restorative practice shaped around your body, lifestyle, and goals in Pune & online.",
      },
      {
        name: "keywords",
        content:
          "personal yoga trainer pune, 1-on-1 yoga guidance, private yoga classes, beginner yoga pune, restorative yoga for back pain, customized yoga sessions",
      },
      {
        property: "og:title",
        content: "Personalized Yoga for Individuals — IRA's yoga house",
      },
      {
        property: "og:description",
        content:
          "Unhurried breath and mindful movement for real everyday strength. Dedicated 1-on-1 guidance and beginner small batches with zero judgment.",
      },
      { property: "og:url", content: "https://irasyogahouse.vercel.app/individuals" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://irasyogahouse.vercel.app/assets/personal.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://irasyogahouse.vercel.app/individuals" }],
  }),
  component: IndividualsPage,
});

const individualPrograms = [
  {
    id: "personal-one-on-one",
    title: "Personalized 1-on-1 Guidance",
    badge: "Most Tailored",
    timing: "By Appointment • 60 MIN",
    description:
      "Dedicated one-to-one coaching designed entirely around your body's anatomy, posture habits, and personal wellness goals. Ideal for targeted posture refinement, physical rehabilitation, or practitioners wanting focused attention without distractions.",
    deliverables: [
      "In-depth posture, spinal curvature & joint mobility assessment",
      "Custom practice sequences safe for your specific biomechanics",
      "Attentive 1-on-1 adjustments and safe modification cues",
      "Personalized daily home practice & breathing routine",
    ],
  },
  {
    id: "beginner-foundations",
    title: "Beginner Foundations Series",
    badge: "First-Timers",
    timing: "Small Batches • 60 MIN",
    description:
      "A warm, pressure-free environment designed specifically for newcomers and those resuming practice after a hiatus. We deconstruct fundamental postures, breath mechanics, and safe alignment so you build confidence at your natural pace.",
    deliverables: [
      "Zero intimidation — small batches where questions are welcomed",
      "Essential foundation postures broken down step-by-step",
      "Prop-assisted support using bolsters, cork blocks, and belts",
      "Building joint flexibility and core stability safely",
    ],
  },
  {
    id: "restorative-breath",
    title: "Restorative Breath & Deep Sleep",
    badge: "Stress & Sleep",
    timing: "Weekly Batches • 45 MIN",
    description:
      "A calming sanctuary to gently down-regulate an overstimulated nervous system. Combining conscious diaphragmatic breathing with 20 minutes of guided Yoga Nidra, providing physiological recovery equivalent to 2 hours of deep sleep.",
    deliverables: [
      "Scientifically proven to reduce cortisol and quiet racing thoughts",
      "Vagus nerve activation through rhythmic Anulom Vilom and Bhramari",
      "Relieves chronic insomnia, evening restlessness, and mental fatigue",
      "Comfortable lying-down practice with bolsters and eye pillows provided",
    ],
  },
  {
    id: "mindful-asana",
    title: "Classical Mindful Asana (Hatha & Ashtanga)",
    badge: "Strength & Balance",
    timing: "Morning & Evening • 60–75 MIN",
    description:
      "Classical postures held with patient breath awareness and intentional alignment. We prioritize joint safety and functional mobility over performative contortions, cultivating grounded physical strength that carries into everyday life.",
    deliverables: [
      "Unhurried postures that build functional stamina and balance",
      "Breath-to-movement synchronization that quiets mental chatter",
      "Spinal decompression and relief for tight hips and lower back",
      "Progressive sequencing respecting your body's daily energy levels",
    ],
  },
];

const pillarsOfPractice = [
  {
    icon: Smile,
    title: "Zero Comparison, No Mirrors",
    desc: "A warm sanctuary where your practice is internal. No competitive energy, no judging gaze — just comfortable, honest connection with your breath.",
  },
  {
    icon: Compass,
    title: "Anatomy-First Adjustments",
    desc: "Every human body is structurally distinct. Our experienced teachers offer mindful, respectful variations tailored to your spine and joints.",
  },
  {
    icon: Feather,
    title: "Premium Sanitized Props",
    desc: "Natural cork bolsters, organic cotton straps, yoga blocks, and sanitized studio mats are provided for every session — no gear to carry.",
  },
  {
    icon: Activity,
    title: "Flexible Practice Modality",
    desc: "Choose between intimate in-studio sessions in Pune or high-clarity live interactive online classes from the comfort of your home.",
  },
];

export function IndividualsPage() {
  const { openBooking } = useBooking();

  return (
    <>
      <PageHero
        eyebrow="For Individuals & Private Guidance"
        title="Personalized Yoga for Real Bodies & Lasting Calm"
        intro="Dedicated 1-on-1 private attention and beginner-friendly small batches shaped around your body, health objectives, and daily routine. No performance pressure, no mirrors — just patient, breath-anchored guidance."
        image={personalHero}
        imageAlt="Attentive yoga instructor providing gentle personalized alignment adjustments to a student in a tranquil studio"
        quote="Unhurried breath and mindful movement for real everyday strength."
        quoteAuthor="Personalized Practice Pathway"
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="pill"
            size="xl"
            onClick={() => openBooking("personal")}
            className="bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B]"
          >
            <User className="size-4" />
            <span>Book Personal Session</span>
            <ArrowRight className="size-4 ml-1" />
          </Button>

          <Button asChild variant="pillOutline" size="xl">
            <a href="#programs">
              <span>View Individual Programs</span>
              <ArrowRight className="size-4 ml-1" />
            </a>
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-[#142F1C]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-[#285732]" />
            100% Customized Routine
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-[#285732]" />
            All Props &amp; Mats Provided
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-[#285732]" />
            Flexible Timings (Studio &amp; Online)
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-[#285732]" />
            Zero Intimidation Guarantee
          </span>
        </div>
      </PageHero>

      {/* Sanctuary Pillars */}
      <section className="border-b border-[#B69A58]/30 bg-[#F5EBDD]/40 py-12 sm:py-16">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillarsOfPractice.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-[#B69A58]/30 bg-[#FFFDF9] p-6 shadow-xs"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-[#183820] text-[#FFF8EC] shadow-xs">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-['Cormorant_Garamond',Georgia,serif] text-xl font-semibold text-[#142F1C]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#4E5C48]">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Individual Programs Section */}
      <section id="programs" className="container-x py-14 sm:py-20 md:py-24">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Curated Pathways"
            title="Individual programs built around your body and schedule"
            description="Whether you are completely new to yoga, recovering from chronic postural strain, or looking for dedicated 1-on-1 biomechanical coaching."
          />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {individualPrograms.map((prog) => (
            <div
              key={prog.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-[#B69A58]/40 bg-[#FFFDF9] p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#183820] hover:shadow-soft"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#183820]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#183820]">
                    {prog.badge}
                  </span>
                  <span className="text-xs font-medium text-[#777B50] flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {prog.timing}
                  </span>
                </div>

                <h3 className="mt-4 font-['Cormorant_Garamond',Georgia,serif] text-2xl sm:text-3xl font-semibold text-[#142F1C]">
                  {prog.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4E5C48]">{prog.description}</p>

                <div className="mt-6 border-t border-[#B69A58]/20 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#183820]">
                    What You Experience &amp; Receive:
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {prog.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[#2D3A29] leading-relaxed"
                      >
                        <CheckCircle2 className="size-4 shrink-0 text-[#285732] mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-[#B69A58]/20 pt-6">
                <Button
                  variant="pill"
                  size="default"
                  onClick={() => openBooking("personal")}
                  className="w-full justify-center bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B]"
                >
                  <User className="size-4 mr-1.5" />
                  <span>Inquire for {prog.title.split(" ")[0]} Guidance</span>
                  <ArrowRight className="size-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formats & Membership Packages */}
      <section className="bg-[#FAF6EF] py-14 sm:py-20 border-y border-[#B69A58]/30">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#777B50]">
              Flexible Studio Access
            </span>
            <h2 className="mt-1 font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-4xl font-semibold text-[#142F1C]">
              Membership &amp; Session Passes
            </h2>
            <p className="mt-2 text-sm text-[#4E5C48]">
              Transparent, commitment-free options that respect your rhythm. Mats, bolsters, and herbal tea always provided.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 ${
                  pkg.featured
                    ? "border-2 border-[#183820] bg-[#FFFDF9] shadow-soft"
                    : "border border-[#B69A58]/40 bg-[#FFFDF9]/80 shadow-xs"
                }`}
              >
                <div>
                  {pkg.featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-[#183820] px-3 py-0.5 text-[11px] font-semibold text-[#FFF8EC]">
                      Most Popular Pass
                    </span>
                  )}
                  <span className="text-xs font-medium uppercase tracking-wider text-[#777B50]">
                    {pkg.note}
                  </span>
                  <h3 className="mt-1 font-['Cormorant_Garamond',Georgia,serif] text-2xl font-semibold text-[#142F1C]">
                    {pkg.name}
                  </h3>

                  <ul className="mt-6 space-y-2.5">
                    {pkg.perks.map((perk, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#2D3A29]">
                        <CheckCircle2 className="size-3.5 text-[#285732]" />
                        <span>{perk}</span>
                      </li>
                    ))}
                    <li className="flex items-center gap-2 text-xs text-[#2D3A29]">
                      <CheckCircle2 className="size-3.5 text-[#285732]" />
                      <span>Complimentary herbal infusion &amp; calm seating</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 border-t border-[#B69A58]/20 pt-6">
                  <Button
                    variant={pkg.featured ? "pill" : "pillOutline"}
                    size="sm"
                    onClick={() => openBooking("personal")}
                    className="w-full justify-center"
                  >
                    <span>Reserve Your Pass</span>
                    <ArrowRight className="size-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practitioner Story / Testimonial Spotlight */}
      <section className="container-x py-14 sm:py-20">
        <div className="rounded-3xl border border-[#B69A58]/30 bg-[#FFFDF9] p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#777B50]">
              Practitioner Experience
            </span>
            <p className="mt-4 font-['Cormorant_Garamond',Georgia,serif] text-2xl sm:text-3xl italic leading-relaxed text-[#142F1C]">
              &ldquo;The private sessions gave me the individual guidance I needed after a knee strain.
              The teacher tailored each session to strengthen supporting muscles safely with zero judgment.&rdquo;
            </p>
            <div className="mt-6">
              <span className="font-semibold text-sm text-[#183820]">Kavita M.</span>
              <span className="block text-xs text-[#4E5C48] mt-0.5">
                Personalized 1-on-1 Guidance Graduate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#183820] py-16 text-[#FFF8EC]">
        <div className="container-x text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Begin Where You Are
          </span>
          <h2 className="mt-2 font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-4xl font-semibold leading-tight text-[#FFF8EC]">
            Ready to Begin Your Personal Practice?
          </h2>
          <p className="mt-3 text-sm text-[#FFF8EC]/85 leading-relaxed">
            Whether you want to ease chronic desk stiffness, recover deep sleep, or build disciplined strength,
            our teachers are here to hold attentive space for you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              variant="pill"
              size="xl"
              onClick={() => openBooking("personal")}
              className="bg-[#FFF8EC] text-[#183820] hover:bg-[#FFFDF9]"
            >
              <User className="size-4" />
              <span>Book Your 1-on-1 Consultation</span>
              <ArrowRight className="size-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
