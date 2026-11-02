import hatha from "@/assets/hatha.jpg";
import ashtanga from "@/assets/ashtanga.jpg";
import meditation from "@/assets/meditation.jpg";
import pranayama from "@/assets/pranayama.jpg";
import beginner from "@/assets/beginner.jpg";
import personal from "@/assets/personal.jpg";
import campus from "@/assets/campus.jpg";

/**
 * EDITABLE STUDIO DETAILS — replace placeholders with real information.
 * Leave whatsappNumber empty until a real number (international format, digits only) is available.
 */
export const siteUrl = "https://irasyogahouse.vercel.app";

export const studio = {
  name: "IRA's yoga house",
  phone: "[Add phone number]",
  email: "[Add email address]",
  address: "[Add studio address]",
  hours: "Mon – Sat: 6:30 AM – 8:30 PM | Sun: 8:00 AM – 1:00 PM",
  whatsappNumber: "", // e.g. "919800000000"
  mapEmbedUrl: "", // paste a Google Maps embed URL once the address is final
};

export function whatsappLink(
  number: string,
  message = "Hello IRA's yoga house, I'd like to know more about your classes.",
) {
  const digits = number.replace(/\D/g, "");
  if (digits.length < 8) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export type ProgramId =
  "hatha" | "ashtanga" | "meditation" | "pranayama" | "beginner" | "personal" | "campus";

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
    short: "Classical postures held with patient breath and steady alignment.",
    description:
      "An unhurried practice focusing on structural stability, mindful breathing, and joint ease. We pause between postures, giving your body the space to adapt, release tension, and cultivate grounded strength.",
    benefits: [
      "Restores spine and hip mobility",
      "Cultivates mindful, injury-safe alignment",
      "Develops steadiness for all practice levels",
    ],
    level: "All levels",
    image: hatha,
  },
  {
    id: "ashtanga",
    name: "Ashtanga Yoga",
    short: "A dynamic, focused sequence synchronizing breath with movement.",
    description:
      "A structured, warming practice that builds core strength, stamina, and sharp concentration. Movement and breath link into an uninterrupted rhythm that warms the body and quiets daily mental chatter.",
    benefits: [
      "Builds functional stamina and muscular tone",
      "Enhances circulation and joint resilience",
      "Develops deep focus through progressive sequences",
    ],
    level: "Intermediate",
    image: ashtanga,
  },
  {
    id: "meditation",
    name: "Meditation & Stillness",
    short: "Quiet, guided sessions to calm an overstimulated mind.",
    description:
      "A peaceful sanctuary to observe thoughts without feeling overwhelmed by them. Supported by comfortable bolsters and gentle guidance, you discover sustainable inner quiet you can take into everyday life.",
    benefits: [
      "Soothes racing thoughts and cognitive fatigue",
      "Promotes nervous system recovery and deeper sleep",
      "Zero experience required — comfortable seated support provided",
    ],
    level: "All levels",
    image: meditation,
  },
  {
    id: "pranayama",
    name: "Pranayama (Breathwork)",
    short: "Traditional conscious breathing to balance your nervous system.",
    description:
      "Simple yet profound breath control techniques taught step by step. Learn how deliberate breathing directly resets your stress response, expands lung capacity, and grounds volatile energy throughout the day.",
    benefits: [
      "Directly down-regulates acute stress and tension",
      "Improves respiratory stamina and mental clarity",
      "Practical daily breathing tools for home or work",
    ],
    level: "All levels",
    image: pranayama,
  },
  {
    id: "beginner",
    name: "Beginner Foundations",
    short: "A warm, pressure-free environment to start your yoga practice.",
    description:
      "Designed specifically for first-timers and those returning after a hiatus. We break down fundamental postures, breathing cues, and safe alignment in small batches where questions are always welcomed.",
    benefits: [
      "Learn essential postures with zero intimidation",
      "Small class sizes with personalized teacher adjustments",
      "Build confidence and flexibility at your natural pace",
    ],
    level: "Beginner",
    image: beginner,
  },
  {
    id: "personal",
    name: "Personalized 1-on-1 Guidance",
    short: "Customized private sessions shaped around your body and lifestyle.",
    description:
      "Dedicated one-to-one attention tailored to your exact physical needs, schedule, and goals. Ideal for targeted posture refinement, physical rehabilitation, or students with specific wellness objectives.",
    benefits: [
      "Completely tailored to your unique anatomy and goals",
      "Dedicated pace with attentive instructor focus",
      "Flexible morning, afternoon, or evening timing",
    ],
    level: "Any level",
    image: personal,
  },
  {
    id: "campus",
    name: "School & College Campus Sessions",
    short: "On-campus yoga, breathwork, and posture workshops for students & faculty.",
    description:
      "Bringing grounded mindfulness and physical ease directly to educational institutions. We conduct tailored campus sessions focusing on pre-exam stress relief, healthy spinal alignment for study desks, and restorative wellness workshops for educators.",
    benefits: [
      "Breath-led stress relief and nervous system calm before exams",
      "Spinal health and desk posture correction for growing youth",
      "Available as 1-day workshops, annual wellness days, or recurring batches",
    ],
    level: "Schools & Universities",
    image: campus,
  },
];

export type Mode = "Studio" | "Online";
export type ScheduleEntry = {
  day: string;
  program: ProgramId;
  time: string;
  duration: string;
  mode: Mode;
};

export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const schedule: ScheduleEntry[] = [
  { day: "Monday", program: "hatha", time: "07:00", duration: "60 min", mode: "Studio" },
  { day: "Monday", program: "meditation", time: "19:00", duration: "45 min", mode: "Online" },
  { day: "Tuesday", program: "ashtanga", time: "06:30", duration: "75 min", mode: "Studio" },
  { day: "Tuesday", program: "beginner", time: "18:00", duration: "60 min", mode: "Studio" },
  { day: "Wednesday", program: "pranayama", time: "07:00", duration: "45 min", mode: "Online" },
  { day: "Wednesday", program: "hatha", time: "18:30", duration: "60 min", mode: "Studio" },
  { day: "Thursday", program: "ashtanga", time: "06:30", duration: "75 min", mode: "Studio" },
  { day: "Thursday", program: "meditation", time: "19:30", duration: "45 min", mode: "Studio" },
  { day: "Friday", program: "beginner", time: "08:00", duration: "60 min", mode: "Online" },
  { day: "Friday", program: "pranayama", time: "18:00", duration: "45 min", mode: "Studio" },
  { day: "Saturday", program: "hatha", time: "08:30", duration: "75 min", mode: "Studio" },
  {
    day: "Saturday",
    program: "personal",
    time: "By appointment",
    duration: "60 min",
    mode: "Studio",
  },
  { day: "Sunday", program: "meditation", time: "09:00", duration: "60 min", mode: "Studio" },
  {
    day: "Sunday",
    program: "personal",
    time: "By appointment",
    duration: "60 min",
    mode: "Online",
  },
];

export type ScheduleFilter = "all" | ProgramId | Mode;
export function filterSchedule(entries: ScheduleEntry[], filter: ScheduleFilter) {
  if (filter === "all") return entries;
  if (filter === "Studio" || filter === "Online") return entries.filter((e) => e.mode === filter);
  return entries.filter((e) => e.program === filter);
}

export const packages = [
  {
    name: "Drop-in Session",
    note: "Single class",
    perks: ["Access to any group class", "Mats, props, and herbal tea provided"],
  },
  {
    name: "Flexible Class Pack",
    note: "Batch passes",
    perks: ["Mix and match between studio & online", "Valid across all group programs"],
    featured: true,
  },
  {
    name: "Monthly Practice Membership",
    note: "Ongoing devotion",
    perks: ["Unlimited group classes", "Teacher alignment consultations"],
  },
];

export const testimonials = [
  {
    name: "Meera K.",
    role: "Practicing Hatha for 8 months",
    quote:
      "Before IRA's yoga house, I used to feel intimidated by fitness studios. Here, there are no mirrors, no comparison, and no rush. My posture has improved dramatically and my lower back ache is finally gone.",
  },
  {
    name: "Arjun P.",
    role: "Beginner Series Graduate",
    quote:
      "I walked in unable to touch my toes. The instructors offered modifications for every single posture with patience. It is the only hour in my busy week where my phone is off and my mind is completely quiet.",
  },
  {
    name: "Ananya S.",
    role: "Pranayama & Meditation",
    quote:
      "The breathwork taught here changed my sleep within two weeks. Learning how to breathe diaphragmatically when work gets stressful has been the best wellness gift I've given myself.",
  },
  {
    name: "Rohit D.",
    role: "Ashtanga Practitioner",
    quote:
      "Clear, observant teaching with serious attention to anatomy and breath pacing. The studio atmosphere is warm, serene, and deeply authentic.",
  },
  {
    name: "Kavita M.",
    role: "Personalized Sessions",
    quote:
      "The private sessions gave me the individual guidance I needed after a knee strain. The teacher tailored each session to strengthen supporting muscles safely.",
  },
];

export const instructors = [
  {
    name: "Lead Practitioner",
    focus: "Hatha Yoga & Structural Alignment",
    bio: "Dedicated to classical postural discipline, biomechanical safety, and helping students cultivate ease in everyday movement.",
  },
  {
    name: "Senior Guide",
    focus: "Ashtanga Vinyasa & Breath Rhythm",
    bio: "Guiding dynamic, flow-based sequences synchronised with breath cadence to build physical stamina and unwavering concentration.",
  },
  {
    name: "Mindfulness Teacher",
    focus: "Pranayama & Meditation",
    bio: "Holding quiet, supportive space for nervous system regulation, restorative breathwork, and mindful observation.",
  },
];

export const stats = [
  { value: "6", label: "Specialized Programs" },
  { value: "Studio & Online", label: "Practice Formats" },
  { value: "Small", label: "Attentive Batch Sizes" },
  { value: "All Levels", label: "Warmly Welcomed" },
];

export const programName = (id: ProgramId) => programs.find((p) => p.id === id)?.name ?? id;
