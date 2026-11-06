import { useState } from "react";
import { cn } from "@/lib/utils";
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
import cyclicMeditation from "@/assets/cyclic-meditation.jpg";
import yogaNidra from "@/assets/yoga-nidra.jpg";
import chairYoga from "@/assets/chair-yoga.jpg";
import suryaNamaskar from "@/assets/surya-namaskar.jpg";
import pranayama from "@/assets/pranayama.jpg";

function getServicePoster(iconName: ServiceSolution["iconName"]) {
  switch (iconName) {
    case "cyclic":
      return cyclicMeditation;
    case "yoganidra":
      return yogaNidra;
    case "tratak":
      return tratakHero;
    case "chairyoga":
      return chairYoga;
    case "pranayama":
      return pranayama;
    case "suryanamaskar":
      return suryaNamaskar;
    default:
      return yogaNidra;
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
  const [activeTab, setActiveTab] = useState<"video" | "details">("video");
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
            No confusing jargon — just clear, practical practices designed specifically so both a
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
                    <span>{service.matRequirement}</span>
                  </div>

                  <Button
                    variant="pillOutline"
                    size="sm"
                    onClick={() => {
                      setIsPlaying(false);
                      setActiveTab("video");
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
          <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto no-scrollbar border-[#B69A58]/40 bg-[#FFFDF9] p-5 sm:p-7 shadow-2xl rounded-3xl overscroll-contain">
            <DialogHeader className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#777B50]">
                <span>{selectedService.duration} Workshop</span>
                <span>•</span>
                <span className={selectedService.matRequirement.includes("No Mat") ? "text-[#285732]" : "text-[#B69A58] font-bold"}>
                  {selectedService.matRequirement}
                </span>
              </div>
              <DialogTitle className="font-['Cormorant_Garamond',Georgia,serif] text-2xl sm:text-3xl font-medium text-[#142F1C]">
                {selectedService.name}
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm font-medium text-[#777B50]">
                {selectedService.bestFor}
              </DialogDescription>
            </DialogHeader>

            {/* Dynamic Themed Interactive Navigation (Replaces Clunky OS Scrollbars) */}
            <div className="mt-3 grid grid-cols-2 gap-1.5 rounded-2xl border border-[#B69A58]/35 bg-[#F5EBDD]/60 p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab("video")}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-xl py-2 px-3 transition-all duration-200 cursor-pointer",
                  activeTab === "video"
                    ? "bg-[#183820] text-[#FFF8EC] shadow-sm font-medium"
                    : "text-[#4E5C48] hover:text-[#142F1C] hover:bg-[#B69A58]/15"
                )}
              >
                <Play className="size-3.5 fill-current" />
                <span>Practice Video</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActiveTab("details");
                }}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-xl py-2 px-3 transition-all duration-200 cursor-pointer",
                  activeTab === "details"
                    ? "bg-[#183820] text-[#FFF8EC] shadow-sm font-medium"
                    : "text-[#4E5C48] hover:text-[#142F1C] hover:bg-[#B69A58]/15"
                )}
              >
                <Sparkles className="size-3.5 text-[#B69A58]" />
                <span>Benefits &amp; Setup</span>
              </button>
            </div>

            {/* Tab 1: Video Walkthrough & Core What It Is */}
            {activeTab === "video" && (
              <div className="mt-4 space-y-4 fade-up">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#102A1B]/90 via-[#102A1B]/40 to-black/30" />

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
                          30-Second Practice Walkthrough
                        </p>
                        <p className="mt-1 text-xs text-[#E2D4BF] max-w-sm drop-shadow-sm">
                          Click to watch the real {selectedService.name} session walkthrough.
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* What It Is */}
                <div className="rounded-2xl border border-[#B69A58]/20 bg-[#F5EBDD]/35 p-4">
                  <h4 className="font-serif text-base font-semibold text-[#142F1C]">What It Is:</h4>
                  <p className="mt-1 leading-relaxed text-[#4E5C48] text-xs sm:text-sm">
                    {selectedService.whatItIs}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Benefits, Target Audience & Setup Requirements */}
            {activeTab === "details" && (
              <div className="mt-4 space-y-4 fade-up text-sm">
                {/* Target Problem & Outcome */}
                <div className="rounded-2xl border border-[#B69A58]/25 bg-[#F5EBDD]/40 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#777B50]">
                      Target Problem Solved
                    </p>
                    <span className="text-[11px] font-semibold text-[#183820] bg-white/70 px-2 py-0.5 rounded-full border border-[#B69A58]/20">
                      {selectedService.targetAudience}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[#142F1C]">
                    {selectedService.oneLine}
                  </p>
                  <p className="mt-2 text-xs text-[#4E5C48] leading-relaxed">
                    <strong className="text-[#142F1C]">Direct Outcome:</strong> {selectedService.outcome}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="rounded-2xl border border-[#B69A58]/20 bg-[#FFFDF9] p-4">
                  <h4 className="font-serif text-base font-semibold text-[#142F1C]">Key Benefits &amp; Outcomes:</h4>
                  <ul className="mt-2.5 grid gap-2">
                    {selectedService.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 shrink-0 text-[#285732] mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#4E5C48]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who Can Join & Setup Required */}
                <div className="grid gap-3 sm:grid-cols-2 rounded-2xl border border-[#B69A58]/30 bg-[#F5EBDD]/30 p-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#777B50]">
                      Who Can Join
                    </p>
                    <p className="mt-1 text-xs font-medium text-[#142F1C] leading-snug">
                      {selectedService.whoCanJoin}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#777B50]">
                      Setup Required &amp; Equipment
                    </p>
                    <p className="mt-1 text-xs font-medium text-[#142F1C] leading-snug">
                      {selectedService.setupNeeded}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Dynamic Themed Footer */}
            <div className="mt-4 pt-3 border-t border-[#B69A58]/20 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActiveTab(activeTab === "video" ? "details" : "video");
                }}
                className="text-xs font-semibold text-[#777B50] hover:text-[#183820] underline underline-offset-4 cursor-pointer transition-colors"
              >
                {activeTab === "video"
                  ? "View benefits & setup requirements →"
                  : "← Watch practice video walkthrough"}
              </button>

              <div className="flex items-center gap-2">
                <Button variant="pillOutline" size="sm" onClick={() => setSelectedService(null)}>
                  Close
                </Button>
                <Button
                  variant="pill"
                  size="sm"
                  onClick={() => {
                    const prog = selectedService.id;
                    setSelectedService(null);
                    openBooking(prog);
                  }}
                  className="bg-[#183820] text-[#FFF8EC] hover:bg-[#102A1B]"
                >
                  <span>Book Demo Session</span>
                  <ArrowRight className="size-3.5 ml-1" />
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

