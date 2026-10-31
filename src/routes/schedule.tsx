import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Clock, MapPin, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading, DemoBadge } from "@/components/layout";
import { useBooking } from "@/components/booking";
import { days, filterSchedule, packages, programName, programs, schedule, type ScheduleFilter } from "@/data/site";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Class Schedule — Aaranya Yoga Studio" },
      { name: "description", content: "Weekly yoga, meditation and pranayama timetable with times, durations, studio or online options and prices." },
      { property: "og:title", content: "Weekly Class Schedule — Aaranya" },
      { property: "og:description", content: "Find a class time that fits your week." },
    ],
  }),
  component: SchedulePage,
});

const filters: { value: ScheduleFilter; label: string }[] = [
  { value: "all", label: "All classes" },
  ...programs.map((p) => ({ value: p.id as ScheduleFilter, label: p.name })),
  { value: "Studio", label: "In studio" },
  { value: "Online", label: "Online" },
];

function SchedulePage() {
  const [filter, setFilter] = useState<ScheduleFilter>("all");
  const { openBooking } = useBooking();
  const rows = filterSchedule(schedule, filter);

  return (
    <>
      <PageHero eyebrow="Schedule" title="Your week, gently held" intro="Choose a class that fits your rhythm. Times and prices below are sample data and will be updated by the studio." />
      <section className="container-x pb-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div role="group" aria-label="Filter classes" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button key={f.value} aria-pressed={filter === f.value} onClick={() => setFilter(f.value)}
                className="rounded-full border px-4 py-2 text-sm transition-colors hover:border-primary aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground">
                {f.label}
              </button>
            ))}
          </div>
          <DemoBadge>Demo timetable</DemoBadge>
        </div>

        <p className="sr-only" aria-live="polite">{rows.length} classes shown</p>

        <div className="mt-8 hidden overflow-hidden rounded-3xl border bg-card md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/70 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>{["Day", "Class", "Time", "Duration", "Mode", "Price", ""].map((h, i) => <th key={i} scope="col" className="px-5 py-4 font-medium">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y">
              {rows.map((r, i) => (
                <tr key={i} className="transition-colors hover:bg-muted/60">
                  <td className="px-5 py-4 font-medium">{r.day}</td>
                  <td className="px-5 py-4 font-serif text-lg text-primary">{programName(r.program)}</td>
                  <td className="px-5 py-4">{r.time}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.duration}</td>
                  <td className="px-5 py-4"><ModeTag mode={r.mode} /></td>
                  <td className="px-5 py-4">{r.price}</td>
                  <td className="px-5 py-4 text-right"><Button variant="pillOutline" size="sm" className="px-4" onClick={() => openBooking(r.program)}>Book</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-8 md:hidden">
          {days.map((d) => {
            const list = rows.filter((r) => r.day === d);
            if (!list.length) return null;
            return (
              <div key={d}>
                <h2 className="text-2xl text-primary">{d}</h2>
                <ul className="mt-3 grid gap-3">
                  {list.map((r, i) => (
                    <li key={i} className="rounded-2xl border bg-card p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-serif text-xl text-primary">{programName(r.program)}</p>
                          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="size-3.5" aria-hidden />{r.time} · {r.duration}</p>
                        </div>
                        <span className="text-sm font-medium">{r.price}</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between"><ModeTag mode={r.mode} /><Button variant="pillOutline" size="sm" className="px-4" onClick={() => openBooking(r.program)}>Book</Button></div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {rows.length === 0 && <p className="mt-8 text-muted-foreground">No classes match this filter yet.</p>}
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Packages" title="Simple ways to practise regularly" center intro="Sample pricing — the studio will confirm current rates." />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <li key={p.name} className={`flex flex-col rounded-3xl p-8 ${p.featured ? "bg-primary text-primary-foreground" : "bg-card"}`}>
                <h3 className="text-2xl">{p.name}</h3>
                <p className="mt-4 font-serif text-5xl">{p.price}</p>
                <p className={`text-sm ${p.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{p.note}</p>
                <ul className="mt-6 grid flex-1 gap-2 text-sm">{p.perks.map((x) => <li key={x} className="flex gap-2"><Check className="size-4" aria-hidden />{x}</li>)}</ul>
                <Button variant={p.featured ? "pillLight" : "pill"} size="xl" className="mt-8" onClick={() => openBooking()}>Enquire</Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function ModeTag({ mode }: { mode: "Studio" | "Online" }) {
  const Icon = mode === "Studio" ? MapPin : Monitor;
  return <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/60 px-3 py-1 text-xs text-accent-foreground"><Icon className="size-3" aria-hidden />{mode}</span>;
}
