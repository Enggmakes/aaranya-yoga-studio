import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
  FileCheck2,
  Award,
  Video,
  FileSpreadsheet,
  HeartPulse,
  Brain,
  Moon,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout";
import { useBooking } from "@/components/booking";
import { schoolPrograms, schoolDeliverables } from "@/data/site";
import campus from "@/assets/campus.jpg";

const occasions = [
  {
    title: "Pre-Exam Week & Prelims",
    desc: "Immediate relief for Std 8th–12th to prevent blank-outs and calm test panic.",
  },
  {
    title: "International Yoga Day (June 21)",
    desc: "Energizing mass assembly sessions with structured photography for press releases.",
  },
  {
    title: "Annual Functions & Sports Meets",
    desc: "Showcase yogic posture discipline, synchronized flow, and breath awareness.",
  },
  {
    title: "Weekly Wellness Period",
    desc: "Ongoing curriculum batches instilling lifelong posture and digital screen discipline.",
  },
];

export const Route = createFileRoute("/schools")({
  head: () => ({
    meta: [
      {
        title: "Yoga for Exam Stress & Student Well-being — IRA's yoga house",
      },
      {
        name: "description",
        content:
          "Helping schools reduce exam anxiety, mobile distraction, and sleep issues through simple science-based yoga, breathwork, and Tratak. Std 8th to 12th & teachers.",
      },
      {
        name: "keywords",
        content:
          "yoga for schools, exam stress relief students, student meditation pune, chair yoga for teachers, school wellness workshop, board exam anxiety",
      },
      {
        property: "og:title",
        content: "Yoga for Exam Stress & Student Well-being — IRA's yoga house",
      },
      {
        property: "og:description",
        content:
          "Simple, science-based yoga for schools. Exam Calm, Daily Focus Batches, and Teacher Recharge with zero mats required.",
      },
      { property: "og:url", content: "https://irasyogahouse.vercel.app/schools" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://irasyogahouse.vercel.app/assets/campus.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://irasyogahouse.vercel.app/schools" }],
  }),
  component: SchoolsPage,
});

function SchoolsPage() {
  const { openBooking } = useBooking();

  return (
    <>
      <PageHero
        eyebrow="For Schools & Colleges"
        title="Yoga for Exam Stress & Student Well-being"
        intro="Simple, science-based yoga, breathwork, and Tratak designed for Std 8th to 12th students and faculty. Zero mats, zero confusing jargon — just practical calm that improves academic performance."
      />

      {/* The Problem We Solve */}
      <section className="container-x py-14 sm:py-20">
        <div className="rounded-3xl border border-[#B69A58]/40 bg-[#FFFDF9] p-8 sm:p-12 shadow-soft">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#777B50]">
              <Brain className="size-4 text-[#B69A58]" />
              <span>The Student Challenge</span>
            </span>
            <h2 className="mt-3 font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-4xl font-semibold text-[#142F1C]">
              The Crisis in Modern Classrooms: Screen Fatigue &amp; Exam Anxiety
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4E5C48]">
              Today students face unprecedented academic pressure, constant smartphone stimulation,
              and disrupted sleep cycles. The result is chronic pre-exam anxiety, memory blank-outs,
              poor classroom attention, and rounded desk posture.
            </p>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#4E5C48]">
              We bring proven, practical tools that students can use directly at their desks or
              before entering the exam hall — restoring calm within 2 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Our 3 School Programs */}
      <section className="bg-[#F5EBDD]/60 py-16 sm:py-24 border-y border-[#B69A58]/30">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#777B50]">
              Tailored Curriculum
            </span>
            <h2 className="mt-2 font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-4xl font-medium text-[#142F1C]">
              Three Purpose-Built School Modules
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4E5C48]">
              Conducted in classrooms, auditoriums, or staff rooms. No athletic clothing required.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {schoolPrograms.map((p) => (
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
                    <span className="text-xs font-semibold text-[#777B50]">{p.target}</span>
                  </div>

                  <h3 className="mt-5 font-['Cormorant_Garamond',Georgia,serif] text-2xl font-bold text-[#142F1C]">
                    {p.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4E5C48]">{p.description}</p>

                  <div className="mt-4 rounded-xl border border-[#A5AA83]/30 bg-[#F5EBDD]/50 p-3 text-xs text-[#142F1C]">
                    <strong>Problem Addressed: </strong> {p.problemSolved}
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#777B50]">
                      Included Features:
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {p.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#4E5C48]">
                          <CheckCircle2 className="size-3.5 shrink-0 text-[#285732] mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#B69A58]/20">
                  <p className="text-xs font-medium text-[#285732]">
                    <strong>Outcome:</strong> {p.outcome}
                  </p>
                  <Button
                    variant="pill"
                    onClick={() => openBooking("school-demo")}
                    className="mt-4 w-full bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B]"
                  >
                    <span>Request Proposal for This</span>
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Your School Gets (Deliverables) */}
      <section className="container-x py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#777B50]">
            Complete Accountability
          </span>
          <h2 className="mt-2 font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-4xl font-medium text-[#142F1C]">
            What Your School Receives
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4E5C48]">
            We handle end-to-end documentation so school management and trustees have tangible proof of impact.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {schoolDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#B69A58]/35 bg-[#FFFDF9] p-6 shadow-xs text-center flex flex-col items-center"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-[#F5EBDD] text-[#183820] ring-1 ring-[#B69A58]/30 mb-4">
                {idx === 0 && <FileCheck2 className="size-6" />}
                {idx === 1 && <FileSpreadsheet className="size-6" />}
                {idx === 2 && <Video className="size-6" />}
                {idx === 3 && <Award className="size-6" />}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#142F1C]">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4E5C48]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ideal Occasions to Book */}
      <section className="bg-[#FAF8F5] py-16 border-t border-[#B69A58]/30">
        <div className="container-x">
          <div className="rounded-3xl border border-[#B69A58]/40 bg-gradient-to-br from-[#FFFDF9] to-[#F5EBDD] p-8 sm:p-12 shadow-soft">
            <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-2xl sm:text-3xl font-bold text-[#142F1C] text-center">
              Ideal Occasions to Schedule a Session
            </h3>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {occasions.map((o, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[#B69A58]/30 bg-[#FFFDF9]/80 p-5 shadow-xs"
                >
                  <p className="font-serif text-base font-bold text-[#142F1C]">{o.title}</p>
                  <p className="mt-1 text-xs text-[#4E5C48] leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button
                variant="pill"
                size="xl"
                onClick={() => openBooking("school-demo")}
                className="bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B] px-8"
              >
                <span>Get Proposal for Your School</span>
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
