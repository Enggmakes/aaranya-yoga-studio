import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PageHero } from "@/components/layout";
import { useBooking } from "@/components/booking";
import { programs, schedule, type Program } from "@/data/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Aaranya Yoga Studio" },
      { name: "description", content: "Hatha, Ashtanga, Meditation, Pranayama, Beginner Classes and Personalized Sessions at Aaranya Yoga Studio." },
      { property: "og:title", content: "Yoga Programs at Aaranya" },
      { property: "og:description", content: "Six ways to practise — from gentle beginnings to one-to-one guidance." },
    ],
  }),
  component: Programs,
});

function Programs() {
  const [active, setActive] = useState<Program | null>(null);
  const { openBooking } = useBooking();
  const sessions = active ? schedule.filter((s) => s.program === active.id) : [];

  return (
    <>
      <PageHero eyebrow="Programs" title="Six ways to practise" intro="Whether you're arriving on the mat for the first time or deepening a long practice, there's a class here for you." />
      <section className="container-x grid gap-16 pb-24">
        {programs.map((p, i) => (
          <article id={p.id} key={p.id} className="grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-14">
            <img src={p.image} alt={`${p.name} class`} loading="lazy" width={1024} height={1024} className={`aspect-[5/4] w-full rounded-[2rem] object-cover ${i % 2 ? "md:order-2" : ""}`} />
            <div>
              <p className="eyebrow">{p.level}</p>
              <h2 className="mt-3 text-4xl text-primary md:text-5xl">{p.name}</h2>
              <p className="mt-4 text-muted-foreground">{p.description}</p>
              <ul className="mt-6 grid gap-2 text-sm">
                {p.benefits.map((b) => <li key={b} className="flex items-center gap-3"><Check className="size-4 text-olive" aria-hidden />{b}</li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="pill" size="xl" onClick={() => setActive(p)}>Learn more</Button>
                <Button variant="pillOutline" size="xl" onClick={() => openBooking(p.id)}>Book this class</Button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-background sm:max-w-lg">
          {active && (
            <>
              <img src={active.image} alt="" className="aspect-[16/9] w-full rounded-2xl object-cover" />
              <DialogHeader>
                <DialogTitle className="font-serif text-3xl font-medium">{active.name}</DialogTitle>
                <DialogDescription>{active.description}</DialogDescription>
              </DialogHeader>
              <div>
                <h3 className="eyebrow">This week</h3>
                <ul className="mt-3 divide-y rounded-2xl border text-sm">
                  {sessions.map((s, i) => (
                    <li key={i} className="flex justify-between gap-2 px-4 py-3"><span>{s.day} · {s.time}</span><span className="text-muted-foreground">{s.duration} · {s.mode} · {s.price}</span></li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="pill" size="xl" onClick={() => { const id = active.id; setActive(null); openBooking(id); }}>Book this class</Button>
                <Button asChild variant="pillOutline" size="xl"><Link to="/schedule" onClick={() => setActive(null)}>Full schedule <ArrowRight /></Link></Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
