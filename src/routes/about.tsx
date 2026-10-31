import { createFileRoute } from "@tanstack/react-router";
import { Compass, Feather, Sprout, UserRound } from "lucide-react";
import { PageHero, SectionHeading, DemoBadge } from "@/components/layout";
import { instructors, stats } from "@/data/site";
import pranayama from "@/assets/pranayama.jpg";
import personal from "@/assets/personal.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aaranya Yoga Studio" },
      { name: "description", content: "The story, philosophy and teaching approach behind Aaranya Yoga Studio." },
      { property: "og:title", content: "About Aaranya Yoga Studio" },
      { property: "og:description", content: "Our story, philosophy and the way we teach." },
    ],
  }),
  component: About,
});

const approach = [
  { icon: Feather, title: "Gentle first", text: "Every posture has options. We'd rather you feel at ease than push past what feels right." },
  { icon: Compass, title: "Rooted in tradition", text: "Classical practices of posture, breath and stillness, taught in plain, practical language." },
  { icon: Sprout, title: "Steady progress", text: "Small, consistent steps over time. Each class builds quietly on the last." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="Our Story" title="A forest of calm in a busy world" intro="Aaranya means “forest” — a place of shelter, stillness and slow growth. That is the feeling we hope our studio offers." />

      <section className="container-x grid items-center gap-12 pb-20 lg:grid-cols-2">
        <img src={pranayama} alt="A student practising seated breathwork" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-[2.5rem] object-cover" />
        <div className="space-y-5 text-muted-foreground">
          <SectionHeading eyebrow="Where it began" title="Built around one simple idea" />
          <p>We started Aaranya to make room — room to pause, to breathe and to move without hurry. No mirrors to perform in front of, no pressure to be anywhere other than where you are.</p>
          <p>[Edit this paragraph with the studio's real founding story: when and why it opened, and who it's for.]</p>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Philosophy & approach" title="How we teach" center intro="Yoga is not about getting a pose right. It's about learning to listen to yourself." />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {approach.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-3xl bg-card p-8">
                <Icon className="size-7 text-olive" aria-hidden />
                <h3 className="mt-5 text-2xl text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionHeading eyebrow="Our studio in numbers" title="Quietly growing" />
          <DemoBadge>Illustrative figures — edit with real numbers</DemoBadge>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-t pt-6">
              <dd className="font-serif text-5xl text-primary">{s.value}</dd>
              <dt className="mt-1 text-sm text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-x pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionHeading eyebrow="Instructors" title="The people who guide you" />
          <DemoBadge>Placeholder profiles — replace with real instructors</DemoBadge>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {instructors.map((i, idx) => (
            <li key={idx} className="rounded-3xl border bg-card p-6">
              {idx === 0 ? (
                <img src={personal} alt="" loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full rounded-2xl object-cover opacity-90" />
              ) : (
                <div className="grid aspect-[4/3] place-items-center rounded-2xl bg-secondary text-muted-foreground"><UserRound className="size-12" aria-hidden /><span className="sr-only">Photo placeholder</span></div>
              )}
              <h3 className="mt-5 text-2xl text-primary">{i.name}</h3>
              <p className="text-sm text-olive">{i.focus}</p>
              <p className="mt-2 text-sm text-muted-foreground">{i.bio}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
