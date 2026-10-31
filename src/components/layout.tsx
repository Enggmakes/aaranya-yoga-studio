import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking";
import { studio } from "@/data/site";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/schedule", label: "Schedule" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-primary" aria-label="Aaranya Yoga Studio home">
      <Leaf className="size-6" aria-hidden />
      <span className="font-serif text-2xl leading-none">Aaranya</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openBooking } = useBooking();
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`sticky top-0 z-40 transition-colors ${scrolled ? "border-b bg-background/95 backdrop-blur" : "bg-background"}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">Skip to content</a>
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} activeOptions={{ exact: true }} className="relative py-1 text-foreground/75 transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:after:absolute data-[status=active]:after:inset-x-0 data-[status=active]:after:-bottom-1 data-[status=active]:after:h-px data-[status=active]:after:bg-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="pill" size="xl" className="hidden sm:inline-flex" onClick={() => openBooking()}>Book a Class</Button>
          <button className="rounded-full p-2 text-primary lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="fade-up fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-background px-6 py-8 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} activeOptions={{ exact: true }} onClick={() => setOpen(false)} className="block border-b py-4 font-serif text-3xl text-foreground data-[status=active]:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="pill" size="xl" className="mt-8 w-full" onClick={() => { setOpen(false); openBooking(); }}>Book a Class</Button>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2"><Leaf className="size-6" aria-hidden /><span className="font-serif text-3xl">Aaranya</span></div>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/75">A quiet place to slow down, breathe and return to yourself — in the studio or from home.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="eyebrow !text-primary-foreground/60">Explore</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {navItems.map((n) => <li key={n.to}><Link to={n.to} className="text-primary-foreground/85 hover:text-primary-foreground hover:underline">{n.label}</Link></li>)}
          </ul>
        </nav>
        <div>
          <h2 className="eyebrow !text-primary-foreground/60">Visit</h2>
          <ul className="mt-4 grid gap-3 text-sm text-primary-foreground/85">
            <li className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />{studio.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 size-4 shrink-0" aria-hidden />{studio.phone}</li>
            <li className="flex gap-2"><Mail className="mt-0.5 size-4 shrink-0" aria-hidden />{studio.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <p className="container-x py-6 text-xs text-primary-foreground/60">© {new Date().getFullYear()} Aaranya Yoga Studio. Practice gently and consult a doctor if you have health concerns.</p>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="container-x pt-14 pb-12 md:pt-20 md:pb-16">
      <p className="eyebrow fade-up">{eyebrow}</p>
      <h1 className="fade-up mt-4 max-w-3xl text-5xl leading-[1.05] text-primary md:text-7xl">{title}</h1>
      <p className="fade-up mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl leading-tight text-primary md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function DemoBadge({ children = "Demo content" }: { children?: string }) {
  return <span className="inline-flex items-center rounded-full border border-olive/40 bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground">{children}</span>;
}
