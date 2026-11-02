import { Link } from "@tanstack/react-router";
import { LotusEmblem, DecorativeWaveFlourish } from "./lotus-art";

export function FooterBrand() {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      {/* Golden Lotus Emblem */}
      <Link
        to="/"
        className="group inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
        aria-label="IRA's Yoga House Home"
      >
        <LotusEmblem
          className="size-11 sm:size-12 transition-transform duration-300 group-hover:rotate-1"
          color="#B69A58"
        />
      </Link>

      {/* Brand Title: IRA'sYoga House in Cormorant Garamond */}
      <Link
        to="/"
        className="mt-3.5 inline-block text-primary transition-opacity hover:opacity-95"
        aria-label="IRA's Yoga House"
      >
        <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-3xl font-semibold tracking-[-0.01em] text-[#142F1C] sm:text-4xl lg:text-[42px] leading-tight">
          IRA&apos;sYoga House
        </h2>
      </Link>

      {/* Small Uppercase Tagline */}
      <p className="mt-1.5 text-[11px] font-medium tracking-[0.24em] uppercase text-[#6B7552]">
        YOGA &middot; WELLNESS &middot; HEALING
      </p>

      {/* Philosophical Italic Quote */}
      <div className="mt-4 max-w-xs sm:max-w-sm">
        <blockquote className="font-['Cormorant_Garamond',Georgia,serif] text-lg italic text-[#263E2B] sm:text-xl leading-snug">
          &ldquo;Balance Body, Calm Mind,
          <br />
          Awaken Within&rdquo;
        </blockquote>

        {/* Delicate curved wave line flourish */}
        <div className="mt-3 flex justify-center lg:justify-start">
          <DecorativeWaveFlourish className="h-2.5 w-24 text-[#C5A869]" color="#B69A58" />
        </div>
      </div>
    </div>
  );
}
