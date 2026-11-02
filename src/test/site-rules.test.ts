import { describe, expect, it } from "vitest";
import { filterSchedule, schedule, whatsappLink } from "@/data/site";
import { enquirySchema } from "@/components/booking";

describe("site rules", () => {
  it("WhatsApp link is disabled without a real number", () => {
    expect(whatsappLink("")).toBeNull();
  });
  it("WhatsApp link builds once a number is set", () => {
    expect(whatsappLink("+91 98000 00000")).toMatch(/^https:\/\/wa\.me\/919800000000\?text=/);
  });
  it("filters schedule by program", () => {
    const r = filterSchedule(schedule, "hatha");
    expect(r.length).toBeGreaterThan(0);
    expect(r.every((e) => e.program === "hatha")).toBe(true);
  });
  it("filters schedule by mode", () => {
    expect(filterSchedule(schedule, "Online").every((e) => e.mode === "Online")).toBe(true);
  });
  it("enquiry requires a valid email", () => {
    expect(enquirySchema.safeParse({ name: "Asha", email: "nope", program: "hatha" }).success).toBe(
      false,
    );
    expect(
      enquirySchema.safeParse({ name: "Asha", email: "a@b.co", program: "hatha" }).success,
    ).toBe(true);
  });
});
