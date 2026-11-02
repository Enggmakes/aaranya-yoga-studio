import { BotanicalBranch, ZenBowlAndStones } from "./lotus-art";
import yogaPractitioner from "@/assets/yoga-practitioner.png";

export function FooterLandscape() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* 1. Hanging Botanical Leaves Framing Top-Left & Top-Right Corners */}
      <div className="absolute -left-2 -top-3 z-10 opacity-90 sm:opacity-100">
        <BotanicalBranch side="left" className="h-28 w-36 sm:h-36 sm:w-48 lg:h-44 lg:w-60" />
      </div>
      <div className="absolute -right-2 -top-3 z-10 opacity-90 sm:opacity-100">
        <BotanicalBranch side="right" className="h-28 w-36 sm:h-36 sm:w-48 lg:h-44 lg:w-60" />
      </div>

      {/* 2. Soft Golden Sunrise Glow behind the central area */}
      <div
        className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          width: "min(650px, 90vw)",
          height: "380px",
          background:
            "radial-gradient(ellipse at center, rgba(254, 235, 185, 0.65) 0%, rgba(247, 235, 218, 0.35) 45%, rgba(245, 235, 221, 0) 75%)",
        }}
      />

      {/* 3. Layered Misty Mountain Silhouettes (SVG Background) */}
      <svg
        className="absolute bottom-16 left-0 right-0 h-44 w-full sm:bottom-20 sm:h-56 lg:bottom-24 lg:h-64"
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Distant Mountain Mist Gradient */}
          <linearGradient id="distMtnGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#E2D4BF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#F5EBDD" stopOpacity="0.85" />
          </linearGradient>

          {/* Midground Ridge Gradient */}
          <linearGradient id="midRidgeGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#A8B496" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#879574" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#697758" stopOpacity="0.90" />
          </linearGradient>

          {/* Foreground Rolling Slopes Gradient */}
          <linearGradient id="foreHillGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#4A6242" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#30472A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1B351E" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Far Distant Mountain Peaks */}
        <path
          d="M0 160 C180 120 320 150 480 110 C620 75 740 100 880 70 C1020 40 1200 90 1440 60 L1440 280 L0 280 Z"
          fill="url(#distMtnGrad)"
        />

        {/* Mid-Distance Soft Sage Ridges */}
        <path
          d="M0 180 C200 155 380 190 560 160 C740 130 920 170 1120 140 C1280 120 1380 150 1440 135 L1440 280 L0 280 Z"
          fill="url(#midRidgeGrad)"
        />

        {/* Foreground Organic Green Slopes */}
        <path
          d="M0 215 C140 195 280 205 420 230 C580 255 780 245 960 220 C1140 195 1300 215 1440 205 L1440 280 L0 280 Z"
          fill="url(#foreHillGrad)"
        />
      </svg>

      {/* 4. Left Hillside Feature: Graceful Yoga Practitioner in Cobra Pose */}
      <div className="absolute bottom-[66px] left-[2%] z-10 hidden sm:block lg:bottom-[72px] lg:left-[4%] xl:left-[6%]">
        <img
          src={yogaPractitioner}
          alt="Yoga practitioner in cobra posture"
          className="h-28 w-auto object-contain drop-shadow-[0_4px_14px_rgba(20,47,28,0.22)] sm:h-32 lg:h-36"
        />
      </div>

      {/* 5. Right Hillside Feature: Brass Singing Bowl, Smoke, Cairn Stones & Jasmine Flower */}
      <div className="absolute bottom-[62px] right-[2%] z-10 hidden sm:block lg:bottom-[70px] lg:right-[4%] xl:right-[7%]">
        <ZenBowlAndStones className="h-32 w-52 opacity-95 transition-opacity duration-300 hover:opacity-100 lg:h-40 lg:w-64" />
      </div>
    </div>
  );
}
