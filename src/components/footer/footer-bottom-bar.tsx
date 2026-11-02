import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { LotusEmblem } from "./lotus-art";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function FooterBottomBar() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative z-20 w-full bg-[#102A1B] text-[#FFF8EC]">
        {/* Organic Curved Wave Transition from rolling hills into the dark bottom bar */}
        <div className="absolute -top-7 left-0 right-0 h-8 w-full overflow-hidden pointer-events-none sm:-top-9 sm:h-10">
          <svg
            viewBox="0 0 1440 50"
            preserveAspectRatio="none"
            className="size-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 32 C260 8 520 42 780 20 C1040 0 1280 34 1440 22 L1440 50 L0 50 Z"
              fill="#102A1B"
            />
          </svg>
        </div>

        {/* Content Container */}
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 text-xs sm:flex-row sm:gap-6 sm:px-8 sm:py-5 lg:px-12">
          {/* Left: Copyright */}
          <div className="text-center font-['Cormorant_Garamond',Georgia,serif] text-sm text-[#E2D5BE]/85 sm:text-left sm:text-base">
            &copy; 2026 IRA&apos;sYoga House. All rights reserved.
          </div>

          {/* Center: Gold Lotus Emblem with Fading Flanking Hairline Rules */}
          <div className="flex items-center gap-3">
            <span
              className="h-px w-10 sm:w-20 md:w-28 bg-gradient-to-r from-transparent via-[#C5A869]/70 to-[#C5A869]"
              aria-hidden="true"
            />
            <div className="relative flex items-center justify-center">
              <LotusEmblem
                className="size-6 sm:size-7 transition-transform duration-300 hover:scale-110"
                color="#E5C77C"
              />
            </div>
            <span
              className="h-px w-10 sm:w-20 md:w-28 bg-gradient-to-l from-transparent via-[#C5A869]/70 to-[#C5A869]"
              aria-hidden="true"
            />
          </div>

          {/* Right: Legal Links & Circular Glowing Back-To-Top Button */}
          <div className="flex items-center gap-5 sm:gap-6">
            <nav
              aria-label="Legal navigation"
              className="flex items-center gap-3 text-xs text-[#D8CAB1]/80"
            >
              <button
                type="button"
                onClick={() => setActiveModal("privacy")}
                className="cursor-pointer transition-colors duration-200 hover:text-[#FFF8EC] hover:underline"
              >
                Privacy
              </button>
              <span className="text-[#B69A58]/50" aria-hidden="true">
                |
              </span>
              <button
                type="button"
                onClick={() => setActiveModal("terms")}
                className="cursor-pointer transition-colors duration-200 hover:text-[#FFF8EC] hover:underline"
              >
                Terms
              </button>
            </nav>

            {/* Circular Glowing Back-to-Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="group relative flex size-10 items-center justify-center rounded-full border border-[#B69A58] bg-[#142F1C] text-[#E8CCA0] shadow-[0_0_16px_rgba(182,154,88,0.45)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:border-[#F2D794] hover:bg-[#1C3E26] hover:text-[#FFFFFF] hover:shadow-[0_0_24px_rgba(226,199,124,0.65)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58] focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A1B]"
            >
              <ArrowUp className="size-4.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Privacy Policy Modal */}
      <Dialog open={activeModal === "privacy"} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="max-w-lg bg-[#FAF8F5] text-[#18181b]">
          <DialogHeader>
            <DialogTitle className="font-['Cormorant_Garamond',Georgia,serif] text-2xl text-[#142F1C]">
              Privacy Policy
            </DialogTitle>
            <DialogDescription className="text-sm text-[#4E5C48]">
              Your privacy is respected at IRA&apos;s Yoga House.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-2 text-sm text-[#384635] leading-relaxed">
            <p>
              We only collect information voluntarily provided when you book a session or subscribe
              to our wellness letters (e.g. your name, email, and phone number).
            </p>
            <p>
              We never sell, rent, or trade your personal information to third parties. All
              inquiries are handled directly by our teachers with complete confidentiality.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Accessible Terms of Practice Modal */}
      <Dialog open={activeModal === "terms"} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="max-w-lg bg-[#FAF8F5] text-[#18181b]">
          <DialogHeader>
            <DialogTitle className="font-['Cormorant_Garamond',Georgia,serif] text-2xl text-[#142F1C]">
              Terms of Practice
            </DialogTitle>
            <DialogDescription className="text-sm text-[#4E5C48]">
              Guidance for our shared sanctuary.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-2 text-sm text-[#384635] leading-relaxed">
            <p>
              Yoga and breathwork are mindful somatic practices. We encourage all practitioners to
              listen attentively to their bodies, practice with gentleness, and consult a physician
              prior to beginning if managing acute injuries or medical conditions.
            </p>
            <p>Our sanctuary is dedicated to patience, mutual kindness, and unhurried stillness.</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
