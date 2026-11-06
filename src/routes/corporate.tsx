import { createFileRoute } from "@tanstack/react-router";
import {
  Building,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Languages,
  Coffee,
  HeartPulse,
  Brain,
  Camera,
  FileSpreadsheet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout";
import { useBooking } from "@/components/booking";
import { corporatePrograms, corporatePackages } from "@/data/site";
import corporateHero from "@/assets/corporate-hero.jpg";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      {
        title: "Yoga at Workplace — Corporate Wellness — IRA's yoga house",
      },
      {
        name: "description",
        content:
          "Desk de-stress, burnout reduction, and sleep breathwork for corporate & IT teams. Zero mats needed. Conducted in English, Hindi & Marathi in Pune & online.",
      },
      {
        name: "keywords",
        content:
          "corporate yoga pune, desk yoga for employees, workplace stress relief, employee burnout workshop, chair yoga corporate, corporate wellness trainer pune",
      },
      {
        property: "og:title",
        content: "Yoga at Workplace — Corporate Wellness — IRA's yoga house",
      },
      {
        property: "og:description",
        content:
          "Help your team overcome screen fatigue, chronic neck pain, and burnout. Zero mats, fast measurable results.",
      },
      { property: "og:url", content: "https://irasyogahouse.vercel.app/corporate" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://irasyogahouse.vercel.app/assets/personal.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://irasyogahouse.vercel.app/corporate" }],
  }),
  component: CorporatePage,
});

function CorporatePage() {
  const { openBooking } = useBooking();

  return (
    <>
      <PageHero
        eyebrow="For Corporate & IT Teams"
        title="Yoga at Workplace: De-Stress Without Leaving Your Desk"
        intro="Long desk sitting, monitor glare, and deadline stress quietly drain team morale and productivity. We deliver science-based chair yoga, breathwork, and Tratak that re-energizes employees in 30 minutes with zero equipment."
        image={corporateHero}
        imageAlt="Professionals practicing seated desk yoga and neck release in a modern sunlit office"
        quote="Relieve tech-neck and workplace burnout in 30 minutes without changing clothes."
        quoteAuthor="Corporate Wellness Pillar"
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="pill"
            size="xl"
            onClick={() => openBooking("corporate-demo")}
            className="bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B]"
          >
            <Building className="size-4" />
            <span>Book Corporate Demo</span>
            <ArrowRight className="size-4 ml-1" />
          </Button>

          <Button asChild variant="pillOutline" size="xl">
            <a href="#packages">
              <span>View Packages</span>
              <ArrowRight className="size-4 ml-1" />
            </a>
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-[#142F1C]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-[#285732]" />
            No Mats Required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-[#285732]" />
            HR Impact Reports
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-[#285732]" />
            English, Hindi &amp; Marathi
          </span>
        </div>
      </PageHero>

      {/* The Problem We Solve */}
      <section className="container-x py-14 sm:py-20">
        <div className="rounded-3xl border border-[#B69A58]/40 bg-[#FFFDF9] p-8 sm:p-12 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#777B50]">
                <Coffee className="size-4 text-[#B69A58]" />
                <span>Workplace Reality</span>
              </span>
              <h2 className="mt-3 font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-4xl font-semibold text-[#142F1C]">
                Sitting 8+ Hours Is Costing Your Team Their Health &amp; Productivity
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4E5C48]">
                Tech-neck headaches, lumbar stiffness, screen fatigue, and chronic insomnia are the leading
                causes of corporate burnout and avoidable sick leaves. 
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#4E5C48]">
                Coffee only masks fatigue. Our targeted 30-minute chair yoga and neuro-respiratory breathwork
                rebalances oxygen flow, relieves physical stiffness, and restores calm mental sharpness.
              </p>
            </div>

            {/* Quick Proof Pills */}
            <div className="grid gap-3.5 rounded-2xl border border-[#B69A58]/30 bg-[#F5EBDD]/50 p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-[#285732] shrink-0" />
                <span className="text-sm font-semibold text-[#142F1C]">No yoga mats or athletic clothes needed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-[#285732] shrink-0" />
                <span className="text-sm font-semibold text-[#142F1C]">Minimal setup: Conducted in conference rooms</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-[#285732] shrink-0" />
                <span className="text-sm font-semibold text-[#142F1C]">Multilingual: English, Hindi &amp; Marathi</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-[#285732] shrink-0" />
                <span className="text-sm font-semibold text-[#142F1C]">Detailed HR employee feedback report included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Programs */}
      <section className="bg-[#F5EBDD]/60 py-16 sm:py-24 border-y border-[#B69A58]/30">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#777B50]">
              Specialized Modules
            </span>
            <h2 className="mt-2 font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-4xl font-medium text-[#142F1C]">
              Three High-Impact Corporate Programs
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4E5C48]">
              Targeted solutions built around real corporate schedules and desk constraints.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {corporatePrograms.map((p) => (
              <div
                key={p.id}
                className="flex flex-col justify-between rounded-3xl border border-[#B69A58]/40 bg-[#FFFDF9] p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B69A58]/50 bg-[#FAF8F5] px-3 py-1 text-xs font-bold text-[#183820]">
                      <Clock className="size-3 text-[#B69A58]" />
                      {p.duration}
                    </span>
                    <span className="text-xs font-medium text-[#777B50]">{p.setup}</span>
                  </div>

                  <h3 className="mt-5 font-['Cormorant_Garamond',Georgia,serif] text-2xl font-bold text-[#142F1C]">
                    {p.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4E5C48]">{p.description}</p>

                  <div className="mt-4 rounded-xl border border-[#A5AA83]/30 bg-[#F5EBDD]/50 p-3 text-xs text-[#142F1C]">
                    <strong>Problem Addressed: </strong> {p.problemSolved}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#B69A58]/20">
                  <p className="text-xs font-medium text-[#285732]">
                    <strong>Measurable Outcome:</strong> {p.outcome}
                  </p>
                  <Button
                    variant="pill"
                    onClick={() => openBooking("corporate-demo")}
                    className="mt-4 w-full bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B]"
                  >
                    <span>Request Corporate Proposal</span>
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Packages */}
      <section className="container-x py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#777B50]">
            Flexible Engagement Models
          </span>
          <h2 className="mt-2 font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-4xl font-medium text-[#142F1C]">
            Select the Right Format for Your Company
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4E5C48]">
            Whether you want a high-energy townhall workshop or long-term habit transformation.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {corporatePackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 ${
                idx === 0
                  ? "border-[#B69A58] bg-[#FFFDF9] shadow-soft ring-1 ring-[#B69A58]/30"
                  : "border-[#B69A58]/40 bg-[#FFFDF9]/80 shadow-xs"
              }`}
            >
              <div>
                <span className="inline-block rounded-full bg-[#F5EBDD] px-3 py-1 text-[11px] font-bold text-[#183820] tracking-wider uppercase">
                  {pkg.badge}
                </span>

                <h3 className="mt-4 font-['Cormorant_Garamond',Georgia,serif] text-2xl font-bold text-[#142F1C]">
                  {pkg.name}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#4E5C48]">{pkg.desc}</p>

                <ul className="mt-6 space-y-2.5">
                  {pkg.perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#4E5C48]">
                      <CheckCircle2 className="size-3.5 shrink-0 text-[#285732] mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#B69A58]/20">
                <Button
                  variant="pill"
                  onClick={() => openBooking("corporate-demo")}
                  className="w-full bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B]"
                >
                  <span>Book Demo Session</span>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables Banner */}
      <section className="bg-[#FAF8F5] py-16 border-t border-[#B69A58]/30">
        <div className="container-x">
          <div className="rounded-3xl border border-[#B69A58]/40 bg-gradient-to-br from-[#FFFDF9] to-[#F5EBDD] p-8 sm:p-12 text-center shadow-soft">
            <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-2xl sm:text-3xl font-bold text-[#142F1C]">
              What Your HR Team Receives with Every Session
            </h3>
            <p className="mt-2 text-sm max-w-xl mx-auto text-[#4E5C48]">
              Audited employee feedback summary, high-res engagement photos for LinkedIn/Internal comms,
              and concrete metrics demonstrating wellness ROI.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                variant="pill"
                size="xl"
                onClick={() => openBooking("corporate-demo")}
                className="bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B] px-8"
              >
                <span>Get Proposal for Your Company</span>
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

