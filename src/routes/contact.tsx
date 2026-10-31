import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/layout";
import { EnquiryForm } from "@/components/booking";
import { studio, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aaranya Yoga Studio" },
      { name: "description", content: "Send an enquiry to Aaranya Yoga Studio about classes, private sessions or packages." },
      { property: "og:title", content: "Contact Aaranya Yoga Studio" },
      { property: "og:description", content: "Questions about classes? We'd love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const wa = whatsappLink(studio.whatsappNumber);
  const details = [
    { icon: MapPin, label: "Address", value: studio.address },
    { icon: Phone, label: "Phone", value: studio.phone },
    { icon: Mail, label: "Email", value: studio.email },
    { icon: Clock, label: "Hours", value: studio.hours },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk" intro="Questions about a class, a private session or where to begin? Send us a note." />
      <section className="container-x grid gap-12 pb-24 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-[2rem] border bg-card p-6 md:p-10">
          <h2 className="text-3xl text-primary">Send an enquiry</h2>
          <div className="mt-6"><EnquiryForm /></div>
        </div>
        <aside className="grid content-start gap-6">
          <ul className="grid gap-4 rounded-[2rem] bg-secondary/70 p-8">
            {details.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-card text-primary"><Icon className="size-4" aria-hidden /></span>
                <div><p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p><p className="mt-0.5">{value}</p></div>
              </li>
            ))}
          </ul>
          {wa ? (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              <MessageCircle className="size-4" aria-hidden /> Chat on WhatsApp
            </a>
          ) : (
            <p className="flex items-center gap-2 rounded-full border border-dashed px-6 py-4 text-sm text-muted-foreground">
              <MessageCircle className="size-4" aria-hidden /> WhatsApp chat will appear once a number is added.
            </p>
          )}
          {studio.mapEmbedUrl ? (
            <iframe title="Studio location map" src={studio.mapEmbedUrl} className="aspect-[4/3] w-full rounded-[2rem] border-0" loading="lazy" />
          ) : (
            <div className="grid aspect-[4/3] place-items-center rounded-[2rem] border border-dashed bg-muted text-center text-sm text-muted-foreground">
              <div><MapPin className="mx-auto size-8 text-olive" aria-hidden /><p className="mt-2">Map will appear once the studio address is added.</p></div>
            </div>
          )}
        </aside>
      </section>
    </>
  );
}
