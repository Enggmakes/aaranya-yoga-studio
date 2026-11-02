import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";

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
      // Integration point for newsletter API / CRM
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setMessage("Thank you for joining our circle. May your practice flourish.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      {/* Editorial Heading: Stay in the Flow */}
      <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-3xl font-medium italic text-[#142F1C] sm:text-4xl">
        Stay in the Flow
      </h3>

      {/* Description */}
      <p className="mt-2 max-w-xs text-sm text-[#4E5C48] sm:max-w-sm sm:text-[15px] leading-relaxed">
        Get yoga tips, event updates, and wellness inspiration.
      </p>

      {/* Pill-Shaped Newsletter Input */}
      <form onSubmit={handleSubmit} className="mt-5 w-full max-w-sm sm:max-w-md">
        <div className="group relative flex items-center rounded-full border border-[#B69A58]/80 bg-[#FFFDF9]/85 p-1.5 shadow-[0_2px_12px_rgba(42,56,40,0.06)] backdrop-blur-sm transition-all duration-300 focus-within:border-[#8E7438] focus-within:ring-2 focus-within:ring-[#B69A58]/30 hover:border-[#8E7438] hover:bg-[#FFFDF9]">
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
    </div>
  );
}
