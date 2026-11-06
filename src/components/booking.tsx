import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { z } from "zod";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { programs, studio, whatsappLink, type ProgramId } from "@/data/site";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+\d\s()-]*$/, "Use digits, spaces or +")
    .optional()
    .or(z.literal("")),
  program: z.string().min(1, "Choose a program"),
  message: z
    .string()
    .trim()
    .max(1000, "Please keep it under 1000 characters")
    .optional()
    .or(z.literal("")),
});
export type Enquiry = z.infer<typeof enquirySchema>;

type Ctx = { openBooking: (program?: ProgramId) => void };
const BookingCtx = createContext<Ctx>({ openBooking: () => {} });
export const useBooking = () => useContext(BookingCtx);

export const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-[border-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/25";

export function EnquiryForm({
  defaultProgram = "",
  onDone,
  compact,
}: {
  defaultProgram?: string;
  onDone?: () => void;
  compact?: boolean;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [waFallbackUrl, setWaFallbackUrl] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = enquirySchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("sending");

    const programObj = programs.find((p) => p.id === parsed.data.program);
    const programTitle = programObj
      ? programObj.name
      : parsed.data.program === "general"
        ? "General / Beginner Inquiry"
        : parsed.data.program;

    // 1. Prepare WhatsApp message & trigger new tab immediately within user action
    const waMessage = [
      `*New Yoga Class Enquiry — ${studio.name}*`,
      `• *Name:* ${parsed.data.name}`,
      `• *Program:* ${programTitle}`,
      parsed.data.phone ? `• *Phone:* ${parsed.data.phone}` : null,
      `• *Email:* ${parsed.data.email}`,
      parsed.data.message ? `• *Note:* ${parsed.data.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = whatsappLink(studio.whatsappNumber, waMessage);
    if (waUrl) {
      setWaFallbackUrl(waUrl);
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    }

    // 2. Dispatch email notification in background via Web3Forms
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
            name: parsed.data.name,
            email: parsed.data.email,
            phone: parsed.data.phone || "Not provided",
            program: programTitle,
            message: parsed.data.message || "No additional message provided",
            subject: `New Yoga Class Inquiry from ${parsed.data.name} (${programTitle})`,
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
            Name: parsed.data.name,
            Email: parsed.data.email,
            Phone: parsed.data.phone || "Not provided",
            Program: programTitle,
            Message: parsed.data.message || "No additional note provided",
            _subject: `New Yoga Class Enquiry — ${parsed.data.name} (${programTitle})`,
          }),
        });
      }
    } catch (err) {
      console.warn("Email dispatch note:", err);
    }

    setStatus("sent");
  }

  if (status === "sent")
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-secondary/70 p-8 text-center shadow-xs"
      >
        <CheckCircle2 className="size-10 text-primary" aria-hidden />
        <h3 className="font-serif text-2xl text-primary">Thank you for contacting us</h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
          Your enquiry has been received and WhatsApp has been opened. Our teachers will get back to
          you promptly.
        </p>
        {waFallbackUrl && (
          <a
            href={waFallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary/80 underline underline-offset-4 hover:text-primary transition-colors"
          >
            Didn&apos;t open? Tap here to send on WhatsApp →
          </a>
        )}
        <div className="flex gap-2 pt-3">
          <Button variant="pillOutline" onClick={() => setStatus("idle")}>
            Send another
          </Button>
          {onDone && (
            <Button variant="pill" onClick={onDone}>
              Close
            </Button>
          )}
        </div>
      </div>
    );

  const err = (k: string) =>
    errors[k] ? (
      <p id={`${k}-err`} className="mt-1 text-xs text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form noValidate onSubmit={submit} className="grid gap-4">
      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          Please review the highlighted fields and try again.
        </p>
      )}
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="e.g. Maya Sharma"
            className={fieldClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-err" : undefined}
          />
          {err("name")}
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@domain.com"
            className={fieldClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-err" : undefined}
          />
          {err("email")}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Phone <span className="font-normal text-muted-foreground/70">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={fieldClass}
            aria-invalid={!!errors.phone}
          />
          {err("phone")}
        </div>
        <div>
          <label
            htmlFor="program"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Interested Program
          </label>
          <select
            id="program"
            name="program"
            defaultValue={defaultProgram}
            className={fieldClass}
            aria-invalid={!!errors.program}
          >
            <option value="">Choose a program or service</option>
            <optgroup label="Institutional & Corporate Demos">
              <option value="school-demo">School / College Workshop (Exam Calm)</option>
              <option value="corporate-demo">Corporate Wellness (De-Stress at Desk)</option>
              <option value="tratak">Tratak Concentration Workshop</option>
            </optgroup>
            <optgroup label="Science-Based Wellness Practices">
              <option value="cyclic">Cyclic Meditation (CM)</option>
              <option value="yoganidra">Yoga Nidra (Yogic Sleep)</option>
              <option value="chairyoga">Chair Yoga (Desk & Uniform)</option>
              <option value="pranayama">Breathwork & Pranayama</option>
              <option value="suryanamaskar">Surya Namaskar (Mindful Flow)</option>
            </optgroup>
            <optgroup label="Classical Practices">
              <option value="hatha">Hatha Yoga</option>
              <option value="ashtanga">Ashtanga Yoga</option>
              <option value="meditation">Meditation & Stillness</option>
              <option value="beginner">Beginner Foundations</option>
              <option value="personal">Personalized 1-on-1 Guidance</option>
            </optgroup>
            <option value="general">General / Custom Inquiry</option>
          </select>
          {err("program")}
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Message <span className="font-normal text-muted-foreground/70">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 5}
          maxLength={1000}
          className={fieldClass}
          placeholder="Preferred days, physical background, or questions for our guides…"
        />
        {err("message")}
      </div>
      <Button
        type="submit"
        variant="pill"
        size="xl"
        disabled={status === "sending"}
        className="justify-self-start group pr-4 pl-7 shadow-soft mt-1"
      >
        <span>{status === "sending" ? "Sending Details…" : "Send Enquiry"}</span>
        <span className="grid size-7 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-transform duration-200 group-hover:translate-x-0.5">
          {status === "sending" ? (
            <Loader2 className="size-3.5 animate-spin" />
          ) : (
            <ArrowRight className="size-3.5" />
          )}
        </span>
      </Button>
    </form>
  );
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [program, setProgram] = useState<string>("");
  const openBooking = useCallback((p?: ProgramId) => {
    setProgram(p ?? "");
    setOpen(true);
  }, []);
  return (
    <BookingCtx.Provider value={{ openBooking }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-background sm:max-w-lg rounded-[2.25rem] border border-border/80 p-6 sm:p-8 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-3xl font-medium text-primary">
              Reserve or Inquire About a Class
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
              Tell us what you are looking for and our instructors will reach out with upcoming
              batch options.
            </DialogDescription>
          </DialogHeader>
          <div className="pt-2">
            <EnquiryForm
              key={program + String(open)}
              defaultProgram={program}
              compact
              onDone={() => setOpen(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </BookingCtx.Provider>
  );
}
