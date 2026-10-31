import hatha from "@/assets/hatha.jpg";
import ashtanga from "@/assets/ashtanga.jpg";
import meditation from "@/assets/meditation.jpg";
import pranayama from "@/assets/pranayama.jpg";
import beginner from "@/assets/beginner.jpg";
import personal from "@/assets/personal.jpg";

/**
 * EDITABLE STUDIO DETAILS — replace placeholders with real information.
 * Leave whatsappNumber empty until a real number (international format, digits only) is available.
 */
export const studio = {
  name: "Aaranya Yoga Studio",
  phone: "[Add phone number]",
  email: "[Add email address]",
  address: "[Add studio address]",
  hours: "[Add opening hours]",
  whatsappNumber: "", // e.g. "919800000000"
  mapEmbedUrl: "", // paste a Google Maps embed URL once the address is final
};

export function whatsappLink(number: string, message = "Hello Aaranya, I'd like to know more about your classes.") {
  const digits = number.replace(/\D/g, "");
  if (digits.length < 8) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export type ProgramId = "hatha" | "ashtanga" | "meditation" | "pranayama" | "beginner" | "personal";

export type Program = {
  id: ProgramId;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  level: string;
  image: string;
};

export const programs: Program[] = [
  {
    id: "hatha",
    name: "Hatha Yoga",
    short: "Steady postures, held with breath and patience.",
    description:
      "A grounded, unhurried practice of classical postures. We move slowly, hold with awareness and give the body time to settle into each shape.",
    benefits: ["Builds steadiness and flexibility", "Encourages mindful alignment", "Suits most levels"],
    level: "All levels",
    image: hatha,
  },
  {
    id: "ashtanga",
    name: "Ashtanga Yoga",
    short: "A flowing, structured sequence linked by breath.",
    description:
      "A dynamic practice following a set series. Breath and movement are linked to create a steady rhythm that builds focus and warmth.",
    benefits: ["Develops strength and stamina", "Cultivates concentration", "Consistent, progressive structure"],
    level: "Intermediate",
    image: ashtanga,
  },
  {
    id: "meditation",
    name: "Meditation",
    short: "Quiet, guided time to rest the mind.",
    description:
      "Gentle guided sittings that help you notice thoughts without being carried by them. Cushions and blankets provided.",
    benefits: ["Space to slow down", "Supports a calmer outlook", "No experience needed"],
    level: "All levels",
    image: meditation,
  },
  {
    id: "pranayama",
    name: "Pranayama",
    short: "Breathwork to steady and refresh.",
    description:
      "Simple, traditional breathing techniques taught step by step, so you can return to them whenever you need a pause.",
    benefits: ["Greater breath awareness", "Tools for everyday calm", "Pairs well with any practice"],
    level: "All levels",
    image: pranayama,
  },
  {
    id: "beginner",
    name: "Beginner Classes",
    short: "A warm, unhurried place to start.",
    description:
      "Foundations of posture, breath and relaxation in a small, welcoming group. Every pose comes with options — no prior experience needed.",
    benefits: ["Learn the fundamentals safely", "Small, supportive groups", "Build confidence at your pace"],
    level: "Beginner",
    image: beginner,
  },
  {
    id: "personal",
    name: "Personalized Sessions",
    short: "One-to-one guidance shaped around you.",
    description:
      "Private sessions tailored to your goals, body and schedule — at the studio or online. Ideal for focused learning or specific needs.",
    benefits: ["Practice designed for you", "Individual attention", "Flexible timing"],
    level: "Any level",
    image: personal,
  },
];

export type Mode = "Studio" | "Online";
export type ScheduleEntry = {
  day: string;
  program: ProgramId;
  time: string;
  duration: string;
  mode: Mode;
  price: string;
};

/** DEMO TIMETABLE — edit to match the real schedule and prices. */
export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const schedule: ScheduleEntry[] = [
  { day: "Monday", program: "hatha", time: "07:00", duration: "60 min", mode: "Studio", price: "₹500" },
  { day: "Monday", program: "meditation", time: "19:00", duration: "45 min", mode: "Online", price: "₹300" },
  { day: "Tuesday", program: "ashtanga", time: "06:30", duration: "75 min", mode: "Studio", price: "₹600" },
  { day: "Tuesday", program: "beginner", time: "18:00", duration: "60 min", mode: "Studio", price: "₹450" },
  { day: "Wednesday", program: "pranayama", time: "07:00", duration: "45 min", mode: "Online", price: "₹300" },
  { day: "Wednesday", program: "hatha", time: "18:30", duration: "60 min", mode: "Studio", price: "₹500" },
  { day: "Thursday", program: "ashtanga", time: "06:30", duration: "75 min", mode: "Studio", price: "₹600" },
  { day: "Thursday", program: "meditation", time: "19:30", duration: "45 min", mode: "Studio", price: "₹300" },
  { day: "Friday", program: "beginner", time: "08:00", duration: "60 min", mode: "Online", price: "₹450" },
  { day: "Friday", program: "pranayama", time: "18:00", duration: "45 min", mode: "Studio", price: "₹300" },
  { day: "Saturday", program: "hatha", time: "08:30", duration: "75 min", mode: "Studio", price: "₹550" },
  { day: "Saturday", program: "personal", time: "By appointment", duration: "60 min", mode: "Studio", price: "₹1,500" },
  { day: "Sunday", program: "meditation", time: "09:00", duration: "60 min", mode: "Studio", price: "₹350" },
  { day: "Sunday", program: "personal", time: "By appointment", duration: "60 min", mode: "Online", price: "₹1,200" },
];

export type ScheduleFilter = "all" | ProgramId | Mode;
export function filterSchedule(entries: ScheduleEntry[], filter: ScheduleFilter) {
  if (filter === "all") return entries;
  if (filter === "Studio" || filter === "Online") return entries.filter((e) => e.mode === filter);
  return entries.filter((e) => e.program === filter);
}

/** DEMO PACKAGES — edit prices and inclusions. */
export const packages = [
  { name: "Drop-in", price: "₹500", note: "Single class", perks: ["Any group class", "Mats provided"] },
  { name: "8-Class Pack", price: "₹3,600", note: "Valid 6 weeks", perks: ["Mix any group classes", "Studio or online"], featured: true },
  { name: "Monthly Unlimited", price: "₹5,500", note: "30 days", perks: ["All group classes", "One guided check-in"] },
];

/** SAMPLE TESTIMONIALS — demo content only, replace with real, consented reviews. */
export const testimonials = [
  { name: "Sample Student A", role: "Hatha · Demo", quote: "The pace here gave me room to actually notice my breath. I leave each class feeling lighter and more settled." },
  { name: "Sample Student B", role: "Beginner · Demo", quote: "I was nervous about starting, but every pose came with an option. It never felt like a competition." },
  { name: "Sample Student C", role: "Meditation · Demo", quote: "The Sunday sitting has become a quiet anchor in my week. Simple, warm and unhurried." },
  { name: "Sample Student D", role: "Ashtanga · Demo", quote: "Clear, patient teaching. I appreciate how the sequence builds gradually over the weeks." },
  { name: "Sample Student E", role: "Private Sessions · Demo", quote: "The one-to-one sessions were shaped around my schedule and what my body needed that day." },
];

/** INSTRUCTOR PLACEHOLDERS — replace with real names, photos and verified training. */
export const instructors = [
  { name: "[Instructor name]", focus: "Hatha & Beginner Classes", bio: "[Add a short bio and verified training details.]" },
  { name: "[Instructor name]", focus: "Ashtanga & Pranayama", bio: "[Add a short bio and verified training details.]" },
  { name: "[Instructor name]", focus: "Meditation & Private Sessions", bio: "[Add a short bio and verified training details.]" },
];

/** ILLUSTRATIVE STATS — replace with real figures. */
export const stats = [
  { value: "[00]+", label: "Weekly classes" },
  { value: "[00]", label: "Years teaching" },
  { value: "[000]+", label: "Students welcomed" },
  { value: "6", label: "Programs" },
];

export const programName = (id: ProgramId) => programs.find((p) => p.id === id)?.name ?? id;
