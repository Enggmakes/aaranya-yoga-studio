import { BotanicalBranch, FlaticonLotus } from "@/components/footer/lotus-art";

/**
 * Botanical Background Component
 * Provides subtle warm sunbursts, organic cream gradients, leafy corner flourishes,
 * and an ethereal lotus watermark to give every page the signature IRA's Yoga House sanctuary atmosphere.
 */
export function BotanicalBackground({
  children,
  className = "",
  showLeaves = true,
  showLotusWatermark = true,
}: {
  children?: React.ReactNode;
  className?: string;
  showLeaves?: boolean;
  showLotusWatermark?: boolean;
}) {
  return (
    <div className={`relative isolate overflow-hidden bg-[#FAF8F5] ${className}`}>
      {/* 1. Warm organic radial sunbursts */}
      <div
        className="pointer-events-none absolute -top-24 right-0 -z-10 size-[32rem] sm:size-[44rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(182,154,88,0.18)_0%,rgba(245,235,221,0.4)_40%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-48 -left-20 -z-10 size-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(40,65,45,0.07)_0%,transparent_65%)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 -z-10 size-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(182,154,88,0.1)_0%,transparent_60%)] blur-3xl"
        aria-hidden="true"
      />

      {/* 2. Soft contoured elevation wash */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#FFFDF9_0%,#FAF8F5_35%,#F5EBDD_75%,#FAF8F5_100%)] opacity-85"
        aria-hidden="true"
      />

      {/* 3. Ethereal Sacred Lotus Watermark in the background */}
      {showLotusWatermark && (
        <div
          className="pointer-events-none absolute -right-16 top-1/2 -z-10 -translate-y-1/2 opacity-[0.045] sm:right-10 lg:right-24"
          aria-hidden="true"
        >
          <FlaticonLotus className="size-80 sm:size-96 lg:size-[30rem]" color="#B69A58" />
        </div>
      )}

      {/* 4. Subtle botanical foliage entering from the margins */}
      {showLeaves && (
        <>
          <div
            className="pointer-events-none absolute -top-4 -left-4 -z-10 opacity-35 sm:opacity-45 transition-opacity"
            aria-hidden="true"
          >
            <BotanicalBranch side="left" className="h-28 w-36 sm:h-36 sm:w-48 lg:h-44 lg:w-60" />
          </div>
          <div
            className="pointer-events-none absolute -top-4 -right-4 -z-10 opacity-35 sm:opacity-45 transition-opacity"
            aria-hidden="true"
          >
            <BotanicalBranch side="right" className="h-28 w-36 sm:h-36 sm:w-48 lg:h-44 lg:w-60" />
          </div>
        </>
      )}

      {children}
    </div>
  );
}
