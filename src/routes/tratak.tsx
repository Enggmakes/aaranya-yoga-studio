import { createFileRoute } from "@tanstack/react-router";
import {
  Eye,
  Flame,
  Brain,
  Moon,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Smartphone,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout";
import { useBooking } from "@/components/booking";
import tratakHero from "@/assets/tratak-hero.jpg";

export const Route = createFileRoute("/tratak")({
  head: () => ({
    meta: [
      {
        title: "Tratak — Mind Power & Concentration Meditation — IRA's yoga house",
      },
      {
        name: "description",
        content:
          "Master Tratak gazing meditation: Jyoti (candle flame) and Bindu (focal dot). Reverse mobile distraction, strengthen eye muscles, and build razor-sharp focus.",
      },
      {
        name: "keywords",
        content:
          "tratak meditation pune, jyoti tratak candle gazing, bindu tratak, eye exercises for screen fatigue, increase concentration students, overcome phone addiction",
      },
      {
        property: "og:title",
        content: "Tratak — Mind Power & Concentration — IRA's yoga house",
      },
      {
        property: "og:description",
        content:
          "Scientific gazing meditation that stops racing thoughts, cures screen fatigue, and trains laser focus for students and professionals.",
      },
      { property: "og:url", content: "https://irasyogahouse.vercel.app/tratak" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://irasyogahouse.vercel.app/assets/meditation.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://irasyogahouse.vercel.app/tratak" }],
  }),
  component: TratakPage,
});

function TratakPage() {
  const { openBooking } = useBooking();

  return (
    <>
      <PageHero
        eyebrow="Signature Focus Technique"
        title="Tratak: Ancient Science for Razor-Sharp Concentration"
        intro="A simple, scientific gazing meditation that trains the brain to hold single-pointed attention. The definitive antidote to short-form reel distraction, monitor glare, and scattered exam thinking."
        image={tratakHero}
        imageAlt="Individual practicing serene Tratak candle flame gazing meditation"
        quote="When the visual gaze stills, the racing mind follows."
        quoteAuthor="Traditional Tratak Principle"
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="pill"
            size="xl"
            onClick={() => openBooking("tratak")}
            className="bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B]"
          >
            <Eye className="size-4" />
            <span>Book Tratak Workshop</span>
            <ArrowRight className="size-4 ml-1" />
          </Button>

          <Button asChild variant="pillOutline" size="xl">
            <a href="#types">
              <span>View Techniques</span>
              <ArrowRight className="size-4 ml-1" />
            </a>
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-[#142F1C]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-[#285732]" />
            15–20 Min Practice
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-[#285732]" />
            Relieves Eye Fatigue
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-[#285732]" />
            Students 12+ &amp; IT Teams
          </span>
        </div>
      </PageHero>

      {/* What is Tratak Section */}
      <section className="container-x py-14 sm:py-20">
        <div className="rounded-3xl border border-[#B69A58]/40 bg-[#FFFDF9] p-8 sm:p-14 shadow-soft">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#777B50]">
                <Flame className="size-4 text-[#B69A58]" />
                <span>The Science of Gazing</span>
              </span>

              <h2 className="mt-3 font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-4xl font-semibold text-[#142F1C]">
                What is Tratak?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#4E5C48]">
                Tratak is an ancient yogic kriya (cleansing and concentration practice) where you gaze steadily at a single point without blinking, followed by internalized visualization with eyes closed.
              </p>

              <p className="mt-3 text-base leading-relaxed text-[#4E5C48]">
                Neuroscience reveals that steadying your visual gaze directly steadies your cortical brainwaves. When your eyes cease flitting between stimuli, your internal mental dialogue quiets almost immediately.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B69A58]/60 bg-[#F5EBDD] px-4 py-1.5 text-xs font-bold text-[#183820]">
                  <Clock className="size-3.5 text-[#B69A58]" />
                  Duration: 15–20 Minutes
                </span>
                <span className="text-xs font-semibold text-[#777B50]">
                  Students 12+ &amp; Working Professionals
                </span>
              </div>
            </div>

            {/* The Two Types of Tratak */}
            <div className="space-y-5">
              <div className="rounded-2xl border border-[#B69A58]/40 bg-[#F5EBDD]/60 p-6">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-full bg-[#183820] text-[#FFF8EC]">
                    <Flame className="size-4 text-[#E2C783]" />
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#142F1C]">
                    1. Jyoti Tratak (Candle Flame Gazing)
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#4E5C48]">
                  Gazing steadily at the golden tip of a clean, pure ghee or beeswax candle flame in a dimly lit room. Naturally activates the third-eye chakra (Ajna), induces deep alpha brainwaves, and cures chronic insomnia.
                </p>
              </div>

              <div className="rounded-2xl border border-[#B69A58]/40 bg-[#F5EBDD]/60 p-6">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-full bg-[#183820] text-[#FFF8EC]">
                    <Eye className="size-4 text-[#E2C783]" />
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#142F1C]">
                    2. Bindu Tratak (Focal Dot Practice)
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#4E5C48]">
                  Focusing on a precision black focal dot. Perfect for bright classrooms and office conference rooms where flame isn&apos;t permissible. Builds unwavering memory recall and cognitive discipline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars of Benefits */}
      <section className="bg-[#F5EBDD]/60 py-16 sm:py-24 border-y border-[#B69A58]/30">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#777B50]">
              Direct Outcomes
            </span>
            <h2 className="mt-2 font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-4xl font-medium text-[#142F1C]">
              Why Tratak Works Like Magic in Modern Life
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4E5C48]">
              Proven benefits experienced from the very first 15-minute guided session.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Benefit 1 */}
            <div className="rounded-3xl border border-[#B69A58]/35 bg-[#FFFDF9] p-7 shadow-xs">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#F5EBDD] text-[#183820] ring-1 ring-[#B69A58]/30 mb-4">
                <Smartphone className="size-6" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#142F1C]">Reduces Mobile Addiction</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4E5C48]">
                Breaks dopamine-driven craving loops caused by reels and TikTok algorithms by retraining long-form visual attention.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-3xl border border-[#B69A58]/35 bg-[#FFFDF9] p-7 shadow-xs">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#F5EBDD] text-[#183820] ring-1 ring-[#B69A58]/30 mb-4">
                <Brain className="size-6" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#142F1C]">Improves Study &amp; Coding Focus</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4E5C48]">
                Develops Dharana (single-pointed concentration) so students retain textbooks faster and developers stay in deep flow.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-3xl border border-[#B69A58]/35 bg-[#FFFDF9] p-7 shadow-xs">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#F5EBDD] text-[#183820] ring-1 ring-[#B69A58]/30 mb-4">
                <Zap className="size-6" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#142F1C]">Strengthens Eye Muscles</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4E5C48]">
                Exercises and releases ciliary muscle spasms caused by staring at illuminated laptop screens for 8+ hours a day.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="rounded-3xl border border-[#B69A58]/35 bg-[#FFFDF9] p-7 shadow-xs">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#F5EBDD] text-[#183820] ring-1 ring-[#B69A58]/30 mb-4">
                <Moon className="size-6" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#142F1C]">Promotes Deep Natural Sleep</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4E5C48]">
                Internal visualization empties cognitive hyperactivity, enabling quick sleep onset without tossing and turning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Options & CTA */}
      <section className="container-x py-16 sm:py-24">
        <div className="rounded-3xl border border-[#B69A58]/40 bg-gradient-to-br from-[#FFFDF9] via-[#F5EBDD] to-[#FFFDF9] p-8 sm:p-14 text-center shadow-soft max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#777B50]">
            Flexible Deployment
          </span>
          <h3 className="mt-2 font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-4xl font-bold text-[#142F1C]">
            Add Tratak to Your School or Corporate Session
          </h3>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4E5C48]">
            Tratak takes only 15 to 20 minutes and can be conducted as a standalone focus masterclass or added seamlessly to your existing school and corporate packages.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="pill"
              size="xl"
              onClick={() => openBooking("tratak")}
              className="bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B] px-8"
            >
              <span>Book Tratak Workshop</span>
              <ArrowRight className="size-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

