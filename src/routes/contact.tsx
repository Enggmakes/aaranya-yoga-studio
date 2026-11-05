import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, ArrowRight, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/layout";
import { EnquiryForm } from "@/components/booking";
import { studio, whatsappLink } from "@/data/site";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact IRA's yoga house",
  url: "https://irasyogahouse.vercel.app/contact",
  mainEntity: {
    "@type": "YogaStudio",
    name: "IRA's yoga house",
    url: "https://irasyogahouse.vercel.app",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  },
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Class Inquiries — IRA's yoga house" },
      {
        name: "description",
        content:
          "Connect with IRA's yoga house. Inquire about beginner batches, 1-on-1 private guidance, or school & college workshops. We warmly welcome your message.",
      },
      {
        name: "keywords",
        content:
          "contact yoga studio, book yoga class, yoga house inquiry, school yoga workshop inquiry, private yoga session",
      },
      { property: "og:title", content: "Contact & Class Inquiries — IRA's yoga house" },
      {
        property: "og:description",
        content:
          "Connect with IRA's yoga house. Inquire about class batches, private guidance, or school & college campus sessions.",
      },
      { property: "og:url", content: "https://irasyogahouse.vercel.app/contact" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://irasyogahouse.vercel.app/assets/hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact & Class Inquiries — IRA's yoga house" },
      {
        name: "twitter:description",
        content:
          "Connect with IRA's yoga house. Inquire about class batches, private guidance, or school & college campus sessions.",
      },
      { name: "twitter:image", content: "https://irasyogahouse.vercel.app/assets/hero.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://irasyogahouse.vercel.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(contactSchema),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const wa = whatsappLink(studio.whatsappNumber);
  const details = [
    { icon: MapPin, label: "Location", value: studio.address, href: undefined },
    { icon: Phone, label: "Phone", value: studio.phone, href: `tel:${studio.phone.replace(/\s+/g, "")}` },
    { icon: Mail, label: "Email", value: studio.email, href: `mailto:${studio.email}` },
    { icon: Clock, label: "Practice Hours", value: studio.hours, href: undefined },
    {
      icon: GraduationCap,
      label: "Campus Sessions",
      value: "On-campus workshops for schools, colleges & universities",
      href: undefined,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="We'd love to connect with you"
        intro="Have questions about which practice suits your current mobility, private one-on-one sessions, or batch reservations? Send us a note and we will reply promptly."
      />

      <section className="container-x grid gap-8 pb-16 sm:gap-12 sm:pb-28 lg:grid-cols-[1.3fr_1fr]">
        {/* Double-Bezel Form Container */}
        <div className="rounded-[2.75rem] p-1.5 bg-black/[0.02] ring-1 ring-black/[0.05]">
          <div className="rounded-[calc(2.75rem-0.375rem)] bg-card p-6 shadow-bezel sm:p-10">
            <h2 className="font-serif font-semibold text-3xl text-primary">
              Send a Direct Enquiry
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Tell us a little about yourself, your preferred practice times, or any physical
              conditions we should know about.
            </p>
            <div className="mt-8">
              <EnquiryForm />
            </div>
          </div>
        </div>

        {/* Aside Details Card */}
        <aside className="grid content-start gap-6">
          <div className="rounded-[2.5rem] p-1.5 bg-black/[0.02] ring-1 ring-black/[0.05]">
            <ul className="grid gap-4 rounded-[calc(2.5rem-0.375rem)] bg-secondary/70 p-8 shadow-xs">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-card text-primary shadow-xs">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block text-sm font-medium text-foreground hover:text-primary hover:underline transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-primary/95 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <span className="flex items-center gap-2.5">
                <MessageCircle className="size-4" aria-hidden />
                <span>Chat Directly on WhatsApp</span>
              </span>
              <span className="grid size-6 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="size-3" />
              </span>
            </a>
          ) : (
            <div className="flex items-center gap-2.5 rounded-full border border-dashed border-border bg-card/60 px-6 py-4 text-sm text-muted-foreground">
              <MessageCircle className="size-4 text-olive" aria-hidden />
              <span>WhatsApp chat will be available once contact number is added.</span>
            </div>
          )}

          {studio.mapEmbedUrl ? (
            <div className="overflow-hidden rounded-[2.25rem] border border-border/80 bg-card shadow-soft ring-1 ring-black/[0.04]">
              <iframe
                title="Location map — Pune, Maharashtra"
                src={studio.mapEmbedUrl}
                className="aspect-[4/3] w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between gap-3 border-t border-border/60 bg-secondary/40 px-5 py-3.5 text-xs text-muted-foreground">
                <span className="flex items-center gap-2 font-medium text-foreground">
                  <MapPin className="size-3.5 text-olive shrink-0" aria-hidden />
                  <span>Pune, Maharashtra</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Pune,+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  Open in Maps ↗
                </a>
              </div>
            </div>
          ) : (
            <div className="grid aspect-[4/3] place-items-center rounded-[2.5rem] border border-dashed border-border bg-muted/60 p-6 text-center text-sm text-muted-foreground">
              <div>
                <MapPin className="mx-auto size-8 text-olive" aria-hidden />
                <p className="mt-2 font-medium">Pune, Maharashtra</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Serving practitioners across Pune with on-site sessions and live interactive online batches.
                </p>
              </div>
            </div>
          )}
        </aside>
      </section>
    </>
  );
}
