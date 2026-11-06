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
import { BotanicalBranch, FlaticonLotus } from "@/components/footer/lotus-art";
import schoolsHero from "@/assets/schools-hero.jpg";
import corporateHero from "@/assets/corporate-hero.jpg";
import tratakHero from "@/assets/tratak-hero.jpg";
import meditation from "@/assets/meditation.jpg";
import pranayama from "@/assets/pranayama.jpg";
import hatha from "@/assets/hatha.jpg";

function getServicePoster(iconName: ServiceSolution["iconName"]) {
  switch (iconName) {
    case "cyclic":
      return schoolsHero;
    case "yoganidra":
      return meditation;
    case "tratak":
      return tratakHero;
    case "chairyoga":
      return corporateHero;
    case "pranayama":
      return pranayama;
    case "suryanamaskar":
      return hatha;
    default:
      return meditation;
  }
}

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
  const [isPlaying, setIsPlaying] = useState(false);
  const { openBooking } = useBooking();

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#FAF8F5] overflow-hidden isolate border-y border-[#B69A58]/20">
      {/* 1. Warm organic background glows */}
      <div
        className="pointer-events-none absolute -top-40 right-0 -z-10 size-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(182,154,88,0.14)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 -z-10 size-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(40,65,45,0.06)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      {/* 2. Soft Lotus Watermark in the background */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-[0.035]"
        aria-hidden="true"
      >
        <FlaticonLotus className="size-[32rem] sm:size-[40rem]" color="#B69A58" />
      </div>

      {/* 3. Subtle botanical branches entering from the side */}
      <div
        className="pointer-events-none absolute top-4 -right-4 -z-10 opacity-30 transition-opacity"
        aria-hidden="true"
      >
        <BotanicalBranch side="right" className="h-28 w-36 sm:h-36 sm:w-48" />
      </div>
      <div
        className="pointer-events-none absolute bottom-4 -left-4 -z-10 opacity-30 transition-opacity"
        aria-hidden="true"
      >
        <BotanicalBranch side="left" className="h-28 w-36 sm:h-36 sm:w-48" />
      </div>

      <div className="container-x relative">
        {/* Section Heading & Positioning */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Seamless Typographic Eyebrow (No Clunky White Box) */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777B50]">
            <Sparkles className="size-3.5 text-[#B69A58] shrink-0" aria-hidden="true" />
            <span>Problem → Solution Architecture</span>
          </div>

          <h2 className="mt-4 font-['Cormorant_Garamond',Georgia,serif] text-3xl font-medium tracking-tight text-[#142F1C] sm:text-4xl lg:text-5xl">
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
                    onClick={() => {
                      setIsPlaying(false);
                      setSelectedService(service);
                    }}
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

      {/* Detailed Modal on "Know More" with Live Playable Video */}
      <Dialog
        open={!!selectedService}
        onOpenChange={(open) => {
          if (!open) {
            setIsPlaying(false);
            setSelectedService(null);
          }
        }}
      >
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
              {/* Live Playable Practice Video / Photorealistic Cover Player */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#B69A58]/50 shadow-[0_12px_32px_rgba(24,56,32,0.18)] group isolate bg-[#102A1B]">
                {isPlaying && selectedService.videoSource ? (
                  <div className="relative h-full w-full bg-black">
                    {selectedService.videoType === "html5" ? (
                      <video
                        src={selectedService.videoSource}
                        controls
                        autoPlay
                        loop
                        playsInline
                        className="h-full w-full object-cover rounded-2xl"
                      />
                    ) : (
                      <iframe
                        src={`${selectedService.videoSource}?autoplay=1&mute=0&controls=1&rel=0`}
                        title={selectedService.videoTitle || selectedService.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="h-full w-full rounded-2xl border-0"
                      />
                    )}

                    {/* Return to Overview Button */}
                    <button
                      type="button"
                      onClick={() => setIsPlaying(false)}
                      className="absolute top-3 right-3 z-20 rounded-full bg-black/75 px-3 py-1 text-xs font-medium text-white backdrop-blur-md transition-all hover:bg-black hover:scale-105 cursor-pointer shadow-md border border-white/20"
                    >
                      ✕ Close Video
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Photorealistic Video Backdrop from Real Practice Photography */}
                    <img
                      src={getServicePoster(selectedService.iconName)}
                      alt={`${selectedService.name} practice walkthrough video preview`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A1B]/95 via-[#102A1B]/45 to-black/35" />

                    {/* Top Video Streaming Header: Live Status + 0:30 HD Tag */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-[#FFF8EC] z-10">
                      <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 border border-white/20 flex items-center gap-1.5 shadow-sm">
                        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="tracking-wider uppercase text-[10px]">Real Practice Video</span>
                      </span>
                      <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 border border-white/20 tracking-wider">
                        0:30 HD
                      </span>
                    </div>

                    {/* Center Cinematic Play Button with Liquid Ripple Glow */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-[#FFF8EC] z-10">
                      <button
                        type="button"
                        onClick={() => setIsPlaying(true)}
                        className="group/btn relative grid size-16 place-items-center rounded-full bg-[#B69A58] text-[#102A1B] shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#B69A58]/50"
                        aria-label={`Play real practice video walkthrough for ${selectedService.name}`}
                      >
                        <span className="absolute -inset-2 rounded-full bg-[#B69A58]/40 animate-ping opacity-75" />
                        <Play className="size-7 ml-1 fill-current" />
                      </button>
                      <p className="mt-3 font-['Cormorant_Garamond',Georgia,serif] text-xl font-medium text-[#FFF8EC] drop-shadow-md">
                        Watch Real Practice Video
                      </p>
                      <p className="mt-1 text-xs text-[#E2D4BF] max-w-sm drop-shadow-sm">
                        Click to watch the real {selectedService.name} session walkthrough.
                      </p>
                    </div>

                    {/* Bottom Video Progress Scrub Bar */}
                    <div
                      onClick={() => setIsPlaying(true)}
                      className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-6 z-10 cursor-pointer"
                    >
                      <div className="h-1.5 w-full bg-white/25 rounded-full overflow-hidden backdrop-blur-sm">
                        <div className="h-full w-2/5 bg-[#B69A58] rounded-full transition-all duration-300" />
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-[10px] text-white/80">
                        <span>Click to stream real video</span>
                        <span>0:30 HD</span>
                      </div>
                    </div>
                  </>
                )}
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

