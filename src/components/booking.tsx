import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { programs, type ProgramId } from "@/data/site";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).regex(/^[+\d\s()-]*$/, "Use digits, spaces or +").optional().or(z.literal("")),
  program: z.string().min(1, "Choose a program"),
  message: z.string().trim().max(1000, "Please keep it under 1000 characters").optional().or(z.literal("")),
});
export type Enquiry = z.infer<typeof enquirySchema>;

type Ctx = { openBooking: (program?: ProgramId) => void };
const BookingCtx = createContext<Ctx>({ openBooking: () => {} });
export const useBooking = () => useContext(BookingCtx);

export const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";

export function EnquiryForm({ defaultProgram = "", onDone, compact }: { defaultProgram?: string; onDone?: () => void; compact?: boolean }) {
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
      <div role="status" className="flex flex-col items-center gap-3 rounded-2xl bg-secondary p-8 text-center">
        <CheckCircle2 className="size-10 text-primary" aria-hidden />
        <h3 className="text-2xl">Thank you for reaching out</h3>
        <p className="text-sm text-muted-foreground">Your enquiry has been received. We'll reply as soon as we can.</p>
        <div className="flex gap-2 pt-2">
          <Button variant="pillOutline" onClick={() => setStatus("idle")}>Send another</Button>
          {onDone && <Button variant="pill" onClick={onDone}>Close</Button>}
        </div>
      </div>
    );

  const err = (k: string) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1 text-xs text-destructive">{errors[k]}</p> : null;

  return (
    <form noValidate onSubmit={submit} className="grid gap-4">
      {status === "error" && (
        <p role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
          Please check the highlighted fields and try again.
        </p>
      )}
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
          <input id="name" name="name" autoComplete="name" className={fieldClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Phone <span className="text-muted-foreground">(optional)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} aria-invalid={!!errors.phone} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="program" className="mb-1.5 block text-sm font-medium">Interested in</label>
          <select id="program" name="program" defaultValue={defaultProgram} className={fieldClass} aria-invalid={!!errors.program}>
            <option value="">Choose a program</option>
            {programs.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
            <option value="general">General question</option>
          </select>
          {err("program")}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message <span className="text-muted-foreground">(optional)</span></label>
        <textarea id="message" name="message" rows={compact ? 3 : 5} maxLength={1000} className={fieldClass} placeholder="Preferred days, experience, anything we should know…" />
        {err("message")}
      </div>
      <Button type="submit" variant="pill" size="xl" className="justify-self-start">Send enquiry</Button>
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
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-background sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-3xl font-medium">Book a class</DialogTitle>
            <DialogDescription>Tell us a little about you and we'll confirm a time that suits.</DialogDescription>
          </DialogHeader>
          <EnquiryForm key={program + String(open)} defaultProgram={program} compact onDone={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </BookingCtx.Provider>
  );
}
