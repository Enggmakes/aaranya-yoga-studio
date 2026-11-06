import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, Sparkles, ShieldCheck } from "lucide-react";
import { studio } from "@/data/site";
import { FlaticonLotus } from "./lotus-art";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    // Strict email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      if (studio.web3FormsAccessKey) {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: studio.web3FormsAccessKey,
            email: cleanEmail,
            subject: `[Newsletter Signup] New subscriber: ${cleanEmail}`,
            from_name: "IRA's Yoga House Newsletter",
            message: `A new practitioner has subscribed to the IRA's Yoga House newsletter:\n\nEmail: ${cleanEmail}\nSubscribed at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
            botcheck: "",
          }),
        });
      } else {
        await fetch(`https://formsubmit.co/ajax/${studio.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Email: cleanEmail,
            _subject: `[Newsletter Signup] New subscriber: ${cleanEmail}`,
            Message: `A new practitioner has subscribed to the IRA's Yoga House newsletter: ${cleanEmail}`,
          }),
        });
      }
      setStatus("success");
      setMessage("Thank you for joining our circle. May your practice flourish.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#B69A58]/45 bg-[#FFFDF9]/85 p-6 sm:p-7 shadow-[0_8px_28px_rgba(24,56,32,0.06)] backdrop-blur-md">
      {/* Subtle Lotus Background Watermark in card corner */}
      <div
        className="pointer-events-none absolute -right-6 -bottom-6 opacity-[0.06]"
        aria-hidden="true"
      >
        <FlaticonLotus className="size-44" color="#B69A58" />
      </div>

      {/* Eyebrow */}
      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#777B50]">
        <Sparkles className="size-3 text-[#B69A58]" aria-hidden="true" />
        <span>Stay in the Flow</span>
      </div>

      {/* Editorial Heading */}
      <h3 className="mt-2 font-['Cormorant_Garamond',Georgia,serif] text-2xl sm:text-3xl font-medium italic text-[#142F1C]">
        Yoga &amp; Mindfulness in Your Inbox
      </h3>

      {/* Description */}
      <p className="mt-1.5 text-xs sm:text-sm text-[#4E5C48] leading-relaxed">
        Receive weekly science-backed breathwork techniques, Tratak focus guides, and calming updates.
      </p>

      {/* Pill-Shaped Newsletter Input */}
      <form onSubmit={handleSubmit} className="mt-4 w-full">
        <div className="group relative flex items-center rounded-full border border-[#B69A58]/80 bg-[#FFFDF9] p-1.5 shadow-[0_2px_12px_rgba(42,56,40,0.06)] transition-all duration-300 focus-within:border-[#8E7438] focus-within:ring-2 focus-within:ring-[#B69A58]/30 hover:border-[#8E7438]">
          {/* Left Envelope Icon */}
          <div className="flex size-9 shrink-0 items-center justify-center pl-3 text-[#5A6D53]">
            <Mail className="size-4" aria-hidden="true" />
          </div>

          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Enter your email"
            aria-label="Email address for newsletter"
            className="w-full bg-transparent px-3 py-2 text-sm text-[#142F1C] placeholder:text-[#889481] focus:outline-none"
            disabled={status === "loading" || status === "success"}
          />

          {/* Circular Dark Green Submit Button with Arrow */}
          <button
            type="submit"
            disabled={status === "loading"}
            aria-label="Subscribe to newsletter"
            className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#183820] text-[#FFF8EC] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#102A1B] hover:scale-105 active:scale-95 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58] focus-visible:ring-offset-2"
          >
            {status === "loading" ? (
              <Loader2 className="size-4 animate-spin text-[#E2C783]" />
            ) : (
              <ArrowRight className="size-4 text-[#F7EBD3] transition-transform duration-200 group-hover:translate-x-0.5" />
            )}
          </button>
        </div>

        {/* Validation / Feedback Message */}
        {message && (
          <div
            className={`mt-2.5 flex items-center gap-1.5 text-xs font-medium ${
              status === "success" ? "text-[#285732]" : "text-[#9E2A2B]"
            }`}
          >
            {status === "success" && <CheckCircle2 className="size-3.5 shrink-0" />}
            <span>{message}</span>
          </div>
        )}
      </form>

      {/* Trust Micro-Bullets */}
      <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-[#B69A58]/25 pt-3 text-[11px] text-[#4E5C48]">
        <div className="flex items-center gap-1">
          <ShieldCheck className="size-3 text-[#285732]" />
          <span>Zero spam</span>
        </div>
        <span>•</span>
        <div>Fortnightly digests</div>
        <span>•</span>
        <div>Instant unsubscribe</div>
      </div>
    </div>
  );
}
