import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useBooking } from "@/components/booking";
import {
  FlaticonLotus,
  MeditationFigureIcon,
  CalendarScheduleIcon,
  LeafBotanicalIcon,
  HomeSanctuaryIcon,
  EnvelopeMailIcon,
} from "./lotus-art";
import { type FooterNavItem } from "./types";

const NAV_ITEMS: FooterNavItem[] = [
  {
    id: "home",
    label: "Home",
    to: "/",
    iconName: "home",
    angle: -90, // Straight Up (12 o'clock)
    description: "Sanctuary overview & booking",
  },
  {
    id: "programs",
    label: "Programs",
    to: "/programs",
    iconName: "programs",
    angle: -18, // Top-Right (72° clockwise from Home)
    description: "7 authentic yoga pathways",
  },
  {
    id: "contact",
    label: "Contact",
    to: "/contact",
    iconName: "contact",
    angle: 54, // Bottom-Right (72° clockwise from Programs)
    description: "Inquiries and batch reservations",
  },
  {
    id: "retreats",
    label: "Retreats",
    to: "/programs#campus",
    iconName: "retreats",
    angle: 126, // Bottom-Left (72° clockwise from Contact)
    description: "School, college & retreat workshops",
    isAction: true,
  },
  {
    id: "about",
    label: "About",
    to: "/about",
    iconName: "about",
    angle: 198, // Top-Left (72° clockwise from Retreats)
    description: "Ethos, teachers and philosophy",
  },
];

function PetalIcon({ name, isHovered }: { name: string; isHovered: boolean }) {
  const color = isHovered ? "#102A1B" : "#243D28";
  switch (name) {
    case "classes":
    case "retreats":
      return (
        <MeditationFigureIcon
          className="size-5 sm:size-5.5 transition-transform duration-300"
          color={color}
        />
      );
    case "programs":
      return (
        <CalendarScheduleIcon
          className="size-5 sm:size-5.5 transition-transform duration-300"
          color={color}
        />
      );
    case "about":
      return (
        <LeafBotanicalIcon
          className="size-5 sm:size-5.5 transition-transform duration-300"
          color={color}
        />
      );
    case "home":
      return (
        <HomeSanctuaryIcon
          className="size-5 sm:size-5.5 transition-transform duration-300"
          color={color}
        />
      );
    case "contact":
      return (
        <EnvelopeMailIcon
          className="size-5 sm:size-5.5 transition-transform duration-300"
          color={color}
        />
      );
    default:
      return null;
  }
}

export function LotusNavigation() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { openBooking } = useBooking();

  // Center coordinate in a 420x420 virtual coordinate space
  const cx = 210;
  const cy = 210;
  const radius = 102; // distance from center to each petal center

  return (
    <nav
      aria-label="Lotus Flower Navigation"
      className="relative flex items-center justify-center select-none"
    >
      {/* Outer ambient golden aura glow (matches glowing back-to-top button) */}
      <div
        className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(235,212,154,0.55)_0%,rgba(247,238,222,0.22)_45%,transparent_75%)] blur-2xl"
        aria-hidden="true"
      />

      {/* SVG Petal Canvas & Interactive Anchor Container */}
      <div className="relative size-[360px] sm:size-[420px]">
        {/* SVG Defs for Petal Lighting and Warm Golden Glow Shadows */}
        <svg className="absolute inset-0 size-full pointer-events-none" viewBox="0 0 420 420">
          <defs>
            {/* Luminous Translucent Ivory Glass Petal Fill */}
            <linearGradient id="lotusPetalGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.94" />
              <stop offset="50%" stopColor="#FAF4E8" stopOpacity="0.84" />
              <stop offset="100%" stopColor="#F2E4CF" stopOpacity="0.68" />
            </linearGradient>

            {/* Hovered Bright Ivory Sheen */}
            <linearGradient id="lotusPetalHoverGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
              <stop offset="50%" stopColor="#FFFDF6" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#F9F1E2" stopOpacity="0.82" />
            </linearGradient>

            {/* Center Disk Gradient */}
            <radialGradient id="centerDiskGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1C3822" />
              <stop offset="70%" stopColor="#142B1A" />
              <stop offset="100%" stopColor="#0E1F12" />
            </radialGradient>

            {/* WARM GOLDEN GLOW SHADOW (Replaced dark shadow with glowing golden halo like the upper arrow) */}
            <filter id="petalGoldenGlow" x="-35%" y="-35%" width="170%" height="170%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="6"
                floodColor="#B69A58"
                floodOpacity="0.32"
              />
            </filter>

            {/* Hover Warm Golden Highlight Glow */}
            <filter id="petalGoldenHoverGlow" x="-45%" y="-45%" width="190%" height="190%">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="12"
                floodColor="#D4AF37"
                floodOpacity="0.60"
              />
            </filter>
          </defs>
        </svg>

        {/* 5 Broad Radiating Organic Petals */}
        {NAV_ITEMS.map((item, index) => {
          const isHovered = hoveredId === item.id;
          const rad = (item.angle * Math.PI) / 180;

          // Outward translation when hovered
          const hoverDistance = isHovered ? 6 : 0;
          const px = cx + (radius + hoverDistance) * Math.cos(rad);
          const py = cy + (radius + hoverDistance) * Math.sin(rad);

          // Petal orientation rotation in degrees: 0° is straight up, incrementing by 72°
          const petalRotation = index * 72;

          const isAction = item.isAction;

          return (
            <div
              key={item.id}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{
                left: `${(px / 420) * 100}%`,
                top: `${(py / 420) * 100}%`,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {isAction ? (
                <button
                  type="button"
                  onClick={() => openBooking()}
                  aria-label={`${item.label} — ${item.description}`}
                  className="group relative flex h-[126px] w-[112px] sm:h-[148px] sm:w-[130px] cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58] focus-visible:ring-offset-2 rounded-full"
                >
                  <PetalContent item={item} isHovered={isHovered} petalRotation={petalRotation} />
                </button>
              ) : (
                <Link
                  to={item.to}
                  aria-label={`${item.label} — ${item.description}`}
                  className="group relative flex h-[126px] w-[112px] sm:h-[148px] sm:w-[130px] cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58] focus-visible:ring-offset-2 rounded-full"
                >
                  <PetalContent item={item} isHovered={isHovered} petalRotation={petalRotation} />
                </Link>
              )}
            </div>
          );
        })}

        {/* Central Core Disk with Flaticon Lotus Emblem & Golden Halo Glow */}
        <div
          className="absolute left-1/2 top-1/2 z-20 flex size-[70px] sm:size-[82px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C5A869] bg-[#142F1C] shadow-[0_0_24px_6px_rgba(182,154,88,0.5),inset_0_0_10px_rgba(226,199,124,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105"
          style={{ background: "url(#centerDiskGrad), #142F1C" }}
          aria-hidden="true"
        >
          {/* Internal subtle gold halo ring */}
          <div className="absolute inset-1.5 rounded-full border border-[#B69A58]/40" />

          {/* Central Flaticon Lotus Icon */}
          <FlaticonLotus
            className="size-8 sm:size-9 transition-transform duration-500 hover:rotate-6"
            color="#F5DC98"
          />
        </div>
      </div>
    </nav>
  );
}

/**
 * Individual Wide Organic Petal Graphics & Centered Upright Typography
 * Generous width ensures text NEVER spills outside!
 */
function PetalContent({
  item,
  isHovered,
  petalRotation,
}: {
  item: FooterNavItem;
  isHovered: boolean;
  petalRotation: number;
}) {
  return (
    <>
      {/* Broad Organic Lotus Petal SVG (Rotated so tip points outward) */}
      <svg
        viewBox="0 0 140 160"
        className="absolute inset-0 size-full pointer-events-none transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          transform: `rotate(${petalRotation}deg)`,
          filter: isHovered ? "url(#petalGoldenHoverGlow)" : "url(#petalGoldenGlow)",
        }}
        aria-hidden="true"
      >
        {/* Broad Lotus Petal Curve with generous width in the middle */}
        <path
          d="M 70 4 C 96 26, 136 60, 134 102 C 132 136, 104 154, 70 154 C 36 154, 8 136, 6 102 C 4 60, 44 26, 70 4 Z"
          fill={isHovered ? "url(#lotusPetalHoverGrad)" : "url(#lotusPetalGrad)"}
          stroke={isHovered ? "#B69A58" : "#C9B582"}
          strokeWidth={isHovered ? "1.8" : "1.2"}
          strokeOpacity={isHovered ? "0.98" : "0.80"}
          className="transition-colors duration-300"
        />

        {/* Delicate inner highlight rim */}
        <path
          d="M 70 14 C 92 34, 124 64, 122 98 C 120 126, 96 142, 70 142 C 44 142, 20 126, 18 98 C 16 64, 48 34, 70 14 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.9"
          strokeOpacity={isHovered ? "0.65" : "0.40"}
        />
      </svg>

      {/* Upright Icon and Text Label: Positioned inside the widest belly with ample margin */}
      <div className="relative z-10 flex max-w-[96px] flex-col items-center justify-center text-center transition-all duration-300 group-hover:-translate-y-0.5">
        <div
          className={`flex size-6 sm:size-7 items-center justify-center transition-colors duration-300 ${
            isHovered ? "text-[#102A1B]" : "text-[#243D28]"
          }`}
        >
          <PetalIcon name={item.iconName} isHovered={isHovered} />
        </div>
        <span
          className={`mt-1 font-['Cormorant_Garamond',Georgia,serif] text-sm sm:text-base font-semibold tracking-normal transition-colors duration-300 ${
            isHovered ? "text-[#102A1B] font-bold" : "text-[#1E3824]"
          }`}
        >
          {item.label}
        </span>
      </div>
    </>
  );
}
