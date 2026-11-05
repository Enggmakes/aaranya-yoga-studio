import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking";
import { studio } from "@/data/site";
import yogaLogo from "@/assets/yoga-logo.png";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3 text-primary transition-opacity hover:opacity-95"
      aria-label="IRA's yoga house home"
    >
      {/* Concentric Double-Bezel Logo Insignia */}
      <span className="grid size-11 place-items-center rounded-full bg-accent/70 p-2 ring-1 ring-olive/25 shadow-xs transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105 group-hover:rotate-1">
        <img
          src={yogaLogo}
          alt="IRA's Yoga House silhouette"
          aria-hidden="true"
          className="size-6 object-contain"
        />
      </span>
      <span className="flex flex-col">
        <span className="font-serif text-2xl font-bold tracking-tight text-primary leading-none">
          IRA&apos;s
        </span>
        <span className="text-[10px] tracking-[0.24em] uppercase text-olive font-medium mt-0.5">
          Yoga House
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close on window resize across breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          open
            ? "border-b border-border/80 bg-background shadow-xs"
            : scrolled
              ? "border-b border-border/80 bg-background/90 backdrop-blur-md shadow-island"
              : "bg-background/95"
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>

        <div className="container-x flex h-20 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9 text-sm font-medium">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    activeOptions={{ exact: true }}
                    className="relative py-2 text-foreground/75 transition-colors duration-150 hover:text-primary data-[status=active]:text-primary data-[status=active]:font-semibold data-[status=active]:after:absolute data-[status=active]:after:inset-x-0 data-[status=active]:after:bottom-0 data-[status=active]:after:h-0.5 data-[status=active]:after:bg-primary data-[status=active]:after:rounded-full"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Right Action & Animated Hamburger Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="pill"
              size="xl"
              className="group hidden sm:inline-flex pr-3.5 pl-6"
              onClick={() => openBooking()}
            >
              <span>Book a Class</span>
              <span className="grid size-7 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5">
                <ArrowRight className="size-3.5" />
              </span>
            </Button>

            {/* Morphing Hamburger / X Toggle Button */}
            <button
              type="button"
              className="relative z-50 grid size-11 place-items-center rounded-full border border-border/80 bg-card text-primary transition-all duration-200 hover:bg-muted active:scale-[0.96] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer touch-manipulation"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((o) => !o)}
            >
              <div className="relative size-5 pointer-events-none">
                <span
                  className={`absolute top-2 left-0 h-0.5 w-5 bg-primary transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute top-2 left-0 h-0.5 w-5 bg-primary transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    open ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Shutter Drawer & Backdrop OUTSIDE <header> — Never covers or blurs the header */}
      <div className="lg:hidden" inert={!open ? true : undefined}>
        {/* Dimmed Backdrop starts at top-20 so the navbar is completely unblurred */}
        <div
          className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-black/40 backdrop-blur-[2px] ${
            open ? "shutter-backdrop-open" : "shutter-backdrop-closed"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Shutter Chamber: Anchored at top-20 with overflow-hidden so anything above top-20 is clipped behind the navbar */}
        <div className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-hidden pointer-events-none">
          <nav
            id="mobile-nav"
            aria-label="Mobile Navigation"
            className={`shutter-card ${
              open ? "shutter-open" : "shutter-closed"
            } max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-b border-border/80 bg-background px-6 pt-5 pb-8 shadow-2xl`}
          >
            <ul className="flex flex-col divide-y divide-border/60">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    activeOptions={{ exact: true }}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 font-serif text-2xl text-foreground transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:font-semibold"
                  >
                    <span>{n.label}</span>
                    <span className="text-sm font-sans text-muted-foreground">→</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-border/60">
              <Button
                variant="pill"
                size="xl"
                className="w-full justify-center group"
                onClick={() => {
                  setOpen(false);
                  openBooking();
                }}
              >
                <span>Book a Class</span>
                <span className="grid size-7 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="size-3.5" />
                </span>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export { SiteFooter } from "./footer";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="container-x pt-8 pb-8 md:pt-20 md:pb-16">
      <p className="eyebrow fade-up">{eyebrow}</p>
      <h1 className="fade-up mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] text-primary md:text-7xl font-serif">
        {title}
      </h1>
      <p className="fade-up mt-6 max-w-[65ch] text-lg text-muted-foreground leading-relaxed">
        {intro}
      </p>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-[65ch] text-center" : "max-w-[65ch]"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold leading-tight text-primary md:text-5xl font-serif">
        {title}
      </h2>
      {intro && <p className="mt-4 text-muted-foreground leading-relaxed">{intro}</p>}
    </div>
  );
}

export function DemoBadge({ children = "Practice note" }: { children?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-olive/30 bg-accent/50 px-3 py-1 text-xs font-medium text-accent-foreground">
      {children}
    </span>
  );
}
