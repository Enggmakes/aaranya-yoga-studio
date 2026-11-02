import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout";
import { useBooking } from "@/components/booking";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Class Schedule & Timings — IRA's yoga house" },
      {
        name: "description",
        content:
          "View the upcoming class schedule and batch timings at IRA's yoga house. Reserve your preferred morning or evening batch or inquire about private sessions.",
      },
      {
        name: "keywords",
        content:
          "yoga class schedule, yoga batch timings, morning yoga classes, evening yoga sessions, studio timetable",
      },
      { property: "og:title", content: "Class Schedule & Timings — IRA's yoga house" },
      {
        property: "og:description",
        content:
          "Batch timings and timetable updates for IRA's yoga house. Reserve your spot in an upcoming morning or evening batch.",
      },
      { property: "og:url", content: "https://irasyogahouse.vercel.app/schedule" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://irasyogahouse.vercel.app/assets/hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Class Schedule & Timings — IRA's yoga house" },
      {
        name: "twitter:description",
        content:
          "Batch timings and timetable updates for IRA's yoga house. Reserve your spot in an upcoming morning or evening batch.",
      },
      { name: "twitter:image", content: "https://irasyogahouse.vercel.app/assets/hero.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://irasyogahouse.vercel.app/schedule" }],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  const { openBooking } = useBooking();

  return (
    <>
      <PageHero
        eyebrow="Studio Timetable"
        title="Schedule Coming Soon"
        intro="We are currently curating and finalizing the seasonal class timetable and batch timings for IRA's yoga house."
      />

      <section className="container-x max-w-4xl pb-32">
        <div className="rounded-[2.75rem] p-2 bg-black/[0.02] ring-1 ring-black/[0.06] shadow-bezel">
          <div className="rounded-[calc(2.75rem-0.5rem)] bg-card p-8 sm:p-14 text-center shadow-soft">
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-accent/60 text-primary ring-1 ring-olive/20 shadow-xs">
              <Calendar className="size-8" aria-hidden />
            </div>

            <h2 className="mt-6 font-serif font-semibold text-3xl sm:text-4xl text-primary">
              Batch Timings Are Being Finalized
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Our schedule is being shaped thoughtfully around our practitioners. If you would like
              to reserve a spot in an upcoming batch, request private one-to-one sessions, or
              register your preferred timing, please reach out directly.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                variant="pill"
                size="xl"
                onClick={() => openBooking()}
                className="group pr-4 pl-7"
              >
                <span>Inquire About Classes</span>
                <span className="grid size-7 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="size-3.5" />
                </span>
              </Button>
              <Button asChild variant="pillOutline" size="xl">
                <Link to="/programs">
                  Explore Programs <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="pillOutline" size="xl">
                <Link to="/contact">
                  <MessageSquare className="size-4" /> Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
