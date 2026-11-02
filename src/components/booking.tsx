import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { z } from "zod";
import { CheckCircle2, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { programs, type ProgramId } from "@/data/site";

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
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function submit(e: React.FormEvent<HTMLFormElement>) {
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
    setStatus("sent");
    e.currentTarget.reset();
  }

  if (status === "sent")
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-secondary/70 p-8 text-center shadow-xs"
      >
        <CheckCircle2 className="size-10 text-primary" aria-hidden />
        <h3 className="font-serif text-2xl text-primary">Thank you for reaching out</h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
          Your enquiry has been received. Our teachers will get back to you promptly with batch
          details.
        </p>
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
            <option value="">Choose a practice</option>
            {programs.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
            <option value="general">General / beginner inquiry</option>
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
        className="justify-self-start group pr-4 pl-7 shadow-soft mt-1"
      >
        <span>Send Enquiry</span>
        <span className="grid size-7 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-transform duration-200 group-hover:translate-x-0.5">
          <ArrowRight className="size-3.5" />
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
