import { FooterBrand } from "./footer-brand";
import { LotusNavigation } from "./lotus-navigation";
import { NewsletterForm } from "./newsletter-form";
import { FooterLandscape } from "./footer-landscape";
import { FooterBottomBar } from "./footer-bottom-bar";

export function SiteFooter() {
  return (
    <footer
      className="relative w-full overflow-hidden bg-[#F5EBDD] pt-14 text-[#142F1C] sm:pt-20 lg:pt-24"
      style={{
        backgroundColor: "#F5EBDD",
      }}
    >
      {/* Nature-Inspired Layered Decorative Landscape (Behind Content) */}
      <FooterLandscape />

      {/* Main Content Grid: Brand | Lotus Navigation | Newsletter */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36">
        <div className="grid items-center justify-items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 xl:gap-14">
          {/* A. Brand Section — Left */}
          <div className="flex w-full justify-center lg:justify-start">
            <FooterBrand />
          </div>

          {/* B. Signature 6-Petal Lotus Navigation — Centre */}
          <div className="flex w-full justify-center">
            <LotusNavigation />
          </div>

          {/* C. Newsletter Section — Right (Sanctuary Card) */}
          <div className="flex w-full justify-center lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* E. Deep Forest Green Bottom Legal Bar */}
      <FooterBottomBar />
    </footer>
  );
}

export default SiteFooter;
