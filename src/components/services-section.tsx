import { useState } from "react";
import {
  RotateCcw,
  Moon,
  Eye,
  Armchair,
  Wind,
  Sun,
  CheckCircle2,
  Clock,
  Users,
  Building,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Play,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { serviceSolutions, type ServiceSolution } from "@/data/site";

function getServiceIcon(iconName: ServiceSolution["iconName"]) {
  switch (iconName) {
    case "cyclic":
      return <RotateCcw className="size-6 text-[#183820]" />;
    case "yoganidra":
      return <Moon className="size-6 text-[#183820]" />;
    case "tratak":
      return <Eye className="size-6 text-[#183820]" />;
    case "chairyoga":
      return <Armchair className="size-6 text-[#183820]" />;
    case "pranayama":
      return <Wind className="size-6 text-[#183820]" />;
    case "suryanamaskar":
      return <Sun className="size-6 text-[#183820]" />;
    default:
      return <Sparkles className="size-6 text-[#183820]" />;
  }
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceSolution | null>(null);
  const { openBooking } = useBooking();

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#FAF8F5] overflow-hidden">
      {/* Subtle organic background glows */}
      <div
        className="pointer-events-none absolute -top-40 right-0 size-96 rounded-full bg-[#B69A58]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 size-96 rounded-full bg-[#2A3828]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* Section Heading & Positioning */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B69A58]/40 bg-[#FFFDF9] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#777B50] shadow-xs">
            <Sparkles className="size-3.5 text-[#B69A58]" />
            <span>Problem → Solution Architecture</span>
          </div>

          <h2 className="mt-5 font-['Cormorant_Garamond',Georgia,serif] text-3xl font-medium tracking-tight text-[#142F1C] sm:text-4xl lg:text-5xl">
            Science-Based Wellness That Delivers Measurable Results
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4E5C48]">
            No mats, no confusing jargon. Clear, practical practices designed specifically so both a
            <strong className="text-[#142F1C] font-semibold"> School Principal </strong>
            and an
            <strong className="text-[#142F1C] font-semibold"> HR Manager </strong>
            can evaluate the outcome in 10 seconds.
          </p>
        </div>

        {/* 6 Cards in 2 Rows Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceSolutions.map((service) => {
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#B69A58]/35 bg-[#FFFDF9]/90 p-7 sm:p-8 shadow-[0_4px_20px_rgba(24,56,32,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B69A58] hover:shadow-[0_12px_32px_rgba(24,56,32,0.08)]"
              >
                <div>
                  {/* Top Bar: Icon + Duration Badge */}
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-[#F5EBDD] ring-1 ring-[#B69A58]/30 transition-transform duration-300 group-hover:scale-110">
                      {getServiceIcon(service.iconName)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B69A58]/50 bg-[#FAF8F5] px-3 py-1 text-xs font-semibold tracking-wider text-[#183820]">
                      <Clock className="size-3 text-[#B69A58]" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-['Cormorant_Garamond',Georgia,serif] text-2xl font-semibold text-[#142F1C] transition-colors group-hover:text-[#183820]">
                    {service.name}
                  </h3>

                  {/* One-line Hook: Best For */}
                  <div className="mt-2.5 rounded-xl border border-[#A5AA83]/30 bg-[#F5EBDD]/50 px-3.5 py-2">
                    <p className="text-xs font-semibold text-[#142F1C]">
                      <span className="text-[#777B50] uppercase tracking-wider text-[10px] block font-bold">
                        Target Problem
                      </span>
                      {service.oneLine}
                    </p>
                  </div>

                  {/* Short Explainer */}
                  <p className="mt-4 text-sm leading-relaxed text-[#4E5C48] line-clamp-3">
                    {service.whatItIs}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-7 pt-5 border-t border-[#B69A58]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#777B50]">
                    <CheckCircle2 className="size-3.5 text-[#285732]" />
                    <span>No mat required</span>
                  </div>

                  <Button
                    variant="pillOutline"
                    size="sm"
                    onClick={() => setSelectedService(service)}
                    className="group-hover:border-[#183820] group-hover:bg-[#183820] group-hover:text-[#FFF8EC]"
                  >
                    <span>Know More</span>
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Audience Segue */}
        <div className="mt-16 rounded-3xl border border-[#B69A58]/40 bg-gradient-to-r from-[#F5EBDD]/90 via-[#FFFDF9] to-[#F5EBDD]/90 p-8 sm:p-10 text-center shadow-soft">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-2xl sm:text-3xl font-medium text-[#142F1C]">
              Need a Custom Workshop for Your Institution?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#4E5C48]">
              We tailor 30-to-60 minute modules for school exam prep, annual days, corporate off-sites, and executive retreats.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Button
                variant="pill"
                onClick={() => openBooking("school-demo")}
                className="bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B]"
              >
                <GraduationCap className="size-4" />
                <span>Book Demo for School</span>
              </Button>
              <Button
                variant="pillOutline"
                onClick={() => openBooking("corporate-demo")}
                className="border-[#183820] text-[#183820] hover:bg-[#183820] hover:text-[#FFF8EC]"
              >
                <Building className="size-4" />
                <span>Book Demo for Company</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Modal on "Know More" */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        {selectedService && (
          <DialogContent className="max-w-2xl border-[#B69A58]/40 bg-[#FFFDF9] p-6 sm:p-9 shadow-2xl rounded-3xl">
            <DialogHeader>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#777B50]">
                <span>{selectedService.duration} Workshop</span>
                <span>•</span>
                <span className="text-[#285732]">Zero Mats Needed</span>
              </div>
              <DialogTitle className="font-['Cormorant_Garamond',Georgia,serif] text-2xl sm:text-3xl font-medium text-[#142F1C]">
                {selectedService.name}
              </DialogTitle>
              <DialogDescription className="text-sm font-medium text-[#777B50]">
                {selectedService.bestFor}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 space-y-5 text-sm text-[#4E5C48]">
              {/* 30-sec Video / Audio Preview Placeholder Card */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#B69A58]/40 bg-gradient-to-br from-[#183820] to-[#102A1B] p-6 text-center text-[#FFF8EC] flex flex-col items-center justify-center shadow-inner">
                <span className="grid size-14 place-items-center rounded-full bg-[#B69A58] text-[#102A1B] shadow-md transition-transform hover:scale-110 cursor-pointer">
                  <Play className="size-6 ml-1 fill-current" />
                </span>
                <p className="mt-3 font-serif text-lg font-medium text-[#FFF8EC]">
                  30-Second Practice Walkthrough
                </p>
                <p className="text-xs text-[#E2C783] max-w-sm">
                  Experience how {selectedService.name} is taught in classrooms and conference rooms.
                </p>
              </div>

              {/* What It Is */}
              <div>
                <h4 className="font-serif text-base font-semibold text-[#142F1C]">What It Is:</h4>
                <p className="mt-1 leading-relaxed text-[#4E5C48]">{selectedService.whatItIs}</p>
              </div>

              {/* Core Benefits */}
              <div>
                <h4 className="font-serif text-base font-semibold text-[#142F1C]">Key Benefits & Outcomes:</h4>
                <ul className="mt-2 grid gap-2">
                  {selectedService.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 shrink-0 text-[#285732] mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Can Join & Setup */}
              <div className="grid gap-3 sm:grid-cols-2 rounded-2xl border border-[#B69A58]/30 bg-[#F5EBDD]/40 p-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#777B50]">
                    Who Can Join
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#142F1C]">
                    {selectedService.whoCanJoin}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#777B50]">
                    Setup Required
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#142F1C]">
                    {selectedService.setupNeeded}
                  </p>
                </div>
              </div>

              {/* CTA Inside Modal */}
              <div className="pt-3 flex flex-wrap items-center justify-end gap-3">
                <Button variant="pillOutline" onClick={() => setSelectedService(null)}>
                  Close
                </Button>
                <Button
                  variant="pill"
                  onClick={() => {
                    const prog = selectedService.id;
                    setSelectedService(null);
                    openBooking(prog);
                  }}
                  className="bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B]"
                >
                  <span>Book Demo for This Practice</span>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
