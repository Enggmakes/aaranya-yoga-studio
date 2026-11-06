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
  phone: "+91 78755 99173",
  email: "yogsagar66@gmail.com",
  address: "Pune, Maharashtra",
  hours: "Mon – Sat: 6:30 AM – 8:30 PM | Sun: 8:00 AM – 1:00 PM",
  whatsappNumber: "917875599173",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Pune%2C%20Maharashtra&t=&z=12&ie=UTF8&iwloc=&output=embed",
  web3FormsAccessKey:
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY) ||
    (typeof process !== "undefined" && process.env?.VITE_WEB3FORMS_ACCESS_KEY) ||
    "",
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
  | "school-demo"
  | "corporate-demo"
  | "cyclic"
  | "yoganidra"
  | "tratak"
  | "chairyoga"
  | "pranayama"
  | "suryanamaskar"
  | "hatha"
  | "ashtanga"
  | "meditation"
  | "beginner"
  | "personal"
  | "campus";

export type ServiceSolution = {
  id: ProgramId;
  name: string;
  bestFor: string;
  oneLine: string;
  duration: string;
  whatItIs: string;
  targetAudience: string;
  outcome: string;
  benefits: string[];
  whoCanJoin: string;
  setupNeeded: string;
  iconName: "cyclic" | "yoganidra" | "tratak" | "chairyoga" | "pranayama" | "suryanamaskar";
  videoType?: "youtube" | "html5";
  videoSource?: string;
  videoTitle?: string;
};

export const serviceSolutions: ServiceSolution[] = [
  {
    id: "cyclic",
    name: "Cyclic Meditation (CM)",
    bestFor: "High stress, anger, restless mind",
    oneLine: "Best for high stress, anger & employee burnout week",
    duration: "30–40 MIN",
    whatItIs:
      "A guided moving meditation combining gentle yoga postures with deep bodily awareness. It systematically brings you from restless activity to profound physiological calm in recurring cycles.",
    targetAudience: "Students before exams, corporate teams during burnout week",
    outcome: "Instant calm, balanced heart rate, and improved emotional self-regulation.",
    benefits: [
      "Rapidly breaks stress escalation loops",
      "Combines slow mindful movement with sensory stillness",
      "Can be practiced on chair or floor without strenuous physical exertion",
    ],
    whoCanJoin: "Students Std 8th+, corporate executives, educators, anyone battling restless anxiety.",
    setupNeeded: "No mats required. Can be done in conference rooms, auditoriums, or classrooms.",
    iconName: "cyclic",
    videoType: "youtube",
    videoSource: "https://www.youtube-nocookie.com/embed/pbkCSkUC77k",
    videoTitle: "Cyclic Meditation & Nervous System Reset Walkthrough",
  },
  {
    id: "yoganidra",
    name: "Yoga Nidra — Yogic Sleep",
    bestFor: "Sleep issues, exam anxiety, mental fatigue",
    oneLine: "Best for exam anxiety, insomnia & cognitive exhaustion",
    duration: "20–30 MIN",
    whatItIs:
      "A structured, lying-down or seated guided relaxation. Scientifically researched: 20 minutes of Yoga Nidra provides your autonomic nervous system the physiological recovery equivalent to 2 hours of deep sleep.",
    targetAudience: "Hostel students, night-shift employees, teachers, high-stress teams",
    outcome: "Restorative deep sleep, decreased exam anxiety, and significantly improved memory recall.",
    benefits: [
      "20 minutes yields deep nervous system rejuvenation equal to 2 hours sleep",
      "Reduces cortisol and activates parasympathetic recovery",
      "Proven to enhance information consolidation and memory retention before tests",
    ],
    whoCanJoin: "All age groups (Std 8th to senior executives). Zero flexibility needed.",
    setupNeeded: "Quiet room, chairs or reclining floor mats.",
    iconName: "yoganidra",
    videoType: "youtube",
    videoSource: "https://www.youtube-nocookie.com/embed/jb24UmmjqFk",
    videoTitle: "Guided Yoga Nidra (NSDR) for Restorative Deep Sleep",
  },
  {
    id: "tratak",
    name: "Tratak — Jyoti & Bindu Tratak",
    bestFor: "Lack of focus, mobile addiction, eye strain",
    oneLine: "Best for mobile distraction, screen fatigue & exam concentration",
    duration: "15–20 MIN",
    whatItIs:
      "Traditional concentrated gazing meditation. Jyoti Tratak uses a steady ghee candle flame; Bindu Tratak uses a calibrated focal dot to train wandering attention into unwavering, one-pointed focus.",
    targetAudience: "Students Std 7th+, software engineers, IT professionals, design teams",
    outcome: "Sharper concentration, dramatically less digital distraction, and strengthened eye muscles.",
    benefits: [
      "Direct antidote to short-form reel distraction and scattered attention",
      "Relieves ciliary muscle spasm from 8+ hours on monitors",
      "Calms racing thoughts and improves sleep onset",
    ],
    whoCanJoin: "Students 12+ and working professionals. Highly recommended for exam batches & developers.",
    setupNeeded: "Dimly lit room; candle stand or focal point cards provided.",
    iconName: "tratak",
    videoType: "html5",
    videoSource: "https://upload.wikimedia.org/wikipedia/commons/c/cb/White_candle_video.webm",
    videoTitle: "Jyoti Tratak — Steady Candle Flame Gazing Practice Video",
  },
  {
    id: "chairyoga",
    name: "Chair Yoga — Desk & Classroom Release",
    bestFor: "Office staff, teachers, students in classroom",
    oneLine: "Best for desk workers, teachers & students in uniform",
    duration: "20–30 MIN",
    whatItIs:
      "Therapeutic yoga stretches conducted entirely while seated on a standard chair. Specifically releases neck stiffness, rounded shoulders, lower back compression, and wrist repetitive strain.",
    targetAudience: "Corporates, staff rooms, coaching institutes, long study hours",
    outcome: "Relieves back pain, corrects spinal posture, can be practiced directly in school uniform or office attire.",
    benefits: [
      "Zero mats or athletic clothing required — practice in uniform or formal attire",
      "Immediate relief for cervical neck and lower lumbar compression",
      "Boosts oxygen circulation and alertness without mid-afternoon energy crashes",
    ],
    whoCanJoin: "Anyone sitting for more than 4 hours a day.",
    setupNeeded: "Standard chairs in conference room, classroom, or auditorium.",
    iconName: "chairyoga",
    videoType: "youtube",
    videoSource: "https://www.youtube-nocookie.com/embed/tAUf7aajBWE",
    videoTitle: "Chair Yoga & Desk Stress Relief Walkthrough",
  },
  {
    id: "pranayama",
    name: "Breathwork & Pranayama",
    bestFor: "Anxiety, panic before exam/presentation, low energy",
    oneLine: "Best for panic before exams/presentations & nervous resets",
    duration: "15–25 MIN",
    whatItIs:
      "Science-backed breathing techniques including Anulom Vilom (alternate nostril), Bhramari (humming frequency), Box Breathing, 4-7-8 calming breath, and mild energizing Bhastrika.",
    targetAudience: "Students entering exam halls, professionals facing critical meetings, general teams",
    outcome: "Calms racing pulse and anxiety within 2 minutes; improves blood oxygenation and brain clarity.",
    benefits: [
      "Immediate 2-minute physiological calm button",
      "Expands respiratory capacity and oxygen delivery to the prefrontal cortex",
      "100% practical tools students and employees can use privately anywhere",
    ],
    whoCanJoin: "Everyone.",
    setupNeeded: "Any seated environment.",
    iconName: "pranayama",
    videoType: "youtube",
    videoSource: "https://www.youtube-nocookie.com/embed/v7SN-d4q6ac",
    videoTitle: "Nadi Shodhana & Calming Pranayama Breathwork",
  },
  {
    id: "suryanamaskar",
    name: "Surya Namaskar — Mindful Flow",
    bestFor: "Overall fitness, morning energy, weight management",
    oneLine: "Best for morning assembly, corporate wellness & full-body vitality",
    duration: "30 MIN",
    whatItIs:
      "The classical 12-step sequence taught with deliberate breath awareness and structural alignment, avoiding rushed or jerky cardio movements.",
    targetAudience: "School morning assemblies, corporate morning wellness, fitness groups",
    outcome: "Full-body muscular stretch, enhanced stamina, disciplined breath rhythm, and mental vigor.",
    benefits: [
      "Mobilizes all major joints, hamstrings, spine, and chest",
      "Naturally elevates metabolism and cardiovascular vitality",
      "Instills self-discipline and grounded morning routine",
    ],
    whoCanJoin: "Beginners to advanced practitioners.",
    setupNeeded: "Open floor or assembly hall.",
    iconName: "suryanamaskar",
    videoType: "youtube",
    videoSource: "https://www.youtube-nocookie.com/embed/_ENYL8qxKx0",
    videoTitle: "Traditional 12-Step Surya Namaskara Mindful Flow",
  },
];

export const schoolPrograms = [
  {
    id: "exam-calm",
    name: "Exam Calm",
    duration: "60 MIN",
    target: "Designed for Std 8th to 12th before Prelims & Final Exams",
    description:
      "A high-impact workshop combining anti-anxiety breathing, eye and brain coordination exercises for focus, and guided Yoga Nidra for deep restorative sleep.",
    problemSolved: "Pre-exam anxiety, memory blank-outs, sleep deprivation, and nervous restlessness.",
    outcome: "Students feel noticeably calmer, sleep deeply before exam days, and recall learned concepts with ease.",
    features: [
      "Anti-anxiety emergency breathwork (Box Breathing & Bhramari)",
      "Neuro-visual coordination drills for sustained study focus",
      "Guided Yoga Nidra sleep reset (20 mins = 2 hrs deep rest)",
      "Posture alignment to eliminate study desk neck & back stiffness",
    ],
  },
  {
    id: "daily-focus",
    name: "Daily Focus Batch",
    duration: "30 MIN",
    target: "Morning assembly or first-period routine for all classes",
    description:
      "A structured morning sequence building physical posture, reducing smartphone distraction, and sharpening classroom attention span.",
    problemSolved: "Slouching desks, morning lethargy, scattered attention, and digital screen hangover.",
    outcome: "Upright spinal posture, active mental engagement, and reduced classroom fidgeting.",
    features: [
      "Spinal lengthening & chest opening for alert breathing",
      "Tratak gazing & visual focus exercises",
      "Rhythmic Surya Namaskar synchronization",
      "Quick 3-minute mindfulness centering before first lecture",
    ],
  },
  {
    id: "teacher-recharge",
    name: "Teacher Recharge",
    duration: "20 MIN",
    target: "Conducted in Staff Rooms & Common Halls for Faculty",
    description:
      "Chair-based restorative relief for teachers dealing with prolonged standing, blackboard neck strain, voice fatigue, and administrative burnout.",
    problemSolved: "Varicose vein pressure, lower back pain, vocal exhaustion, and educator fatigue.",
    outcome: "Relieved physical pain, rejuvenated energy, and a calm, supportive classroom demeanor.",
    features: [
      "Staff room chair stretches — zero uniform change required",
      "Shoulder, neck, and wrist release from grading and typing",
      "Cooling, vocal-restoring Pranayama (Sheetali & Bhramari)",
      "10-minute micro-relaxation to reset between heavy class periods",
    ],
  },
];

export const schoolDeliverables = [
  {
    title: "Pre & Post Feedback Form",
    desc: "Measured scientific feedback documenting reductions in student anxiety and focus improvements.",
  },
  {
    title: "Official Attendance Report",
    desc: "Audited session rosters delivered directly to the Principal & Management.",
  },
  {
    title: "Media Kit for Annual Reports",
    desc: "High-resolution photos and video clips for your school's annual report, prospectus, and social media.",
  },
  {
    title: "Certificates of Participation",
    desc: "Branded physical/digital certificates celebrating students' dedication to wellness.",
  },
];

export const corporatePrograms = [
  {
    id: "desk-destress",
    name: "De-Stress at Desk",
    duration: "30 MIN",
    setup: "Conference room or direct desk seating — No mat required",
    description:
      "Targeted chair ergonomics and yogic stretches releasing cervical neck tension, tight shoulders, and lumbar compression, concluded with a 5-minute eye Tratak to eliminate monitor glare fatigue.",
    problemSolved: "8–10 hours of screen immobility, tech-neck stiffness, wrist RSI, and 3 PM energy slumps.",
    outcome: "Immediate postural comfort, reduced screen headaches, and boosted afternoon productivity.",
  },
  {
    id: "productivity-sleep",
    name: "Productivity & Better Sleep",
    duration: "60 MIN",
    setup: "Conference room, wellness hall, or hybrid online batch",
    description:
      "Science-backed autonomic breathwork to down-regulate workplace deadline panic, coupled with guided Yoga Nidra to reset chronic sleep debt.",
    problemSolved: "Burnout, insomnia, cognitive overload, and preventable sick leaves.",
    outcome: "Deeper sleep cycles, refreshed morning stamina, and higher emotional equilibrium at work.",
  },
  {
    id: "leadership-focus",
    name: "Leadership Focus & Clarity",
    duration: "45 MIN",
    setup: "Executive boardrooms, leadership retreats, or off-sites",
    description:
      "Advanced Tratak gazing meditation and cognitive mindfulness designed specifically for founders, partners, and managers navigating high-stakes strategic choices.",
    problemSolved: "Executive decision fatigue, mental clutter, reactive impulses, and chronic stress.",
    outcome: "Laser mental clarity, emotional poise under crisis, and grounded decision-making.",
  },
];

export const corporatePackages = [
  {
    name: "One-Day Wellness Day",
    badge: "Most Popular for Events",
    desc: "An intensive half-day or full-day wellness festival for your team during Annual Meets, Health Weeks, or Townhalls.",
    perks: [
      "Customized 30–60 min interactive modules",
      "Desk ergonomics, Tratak & breathwork masterclass",
      "Multilingual delivery: English, Hindi & Marathi",
      "High-energy engagement photos & video recap",
    ],
  },
  {
    name: "7-Day Reset Challenge",
    badge: "Team Habit Transformation",
    desc: "A consecutive 7-day micro-habit intervention (20–30 mins/day) instilling sustainable desk wellness across departments.",
    perks: [
      "Daily progressive focus & postural modules",
      "Individual desk-practice cheat sheets provided",
      "Pre & post team burnout audit summary for HR",
      "High team attendance & cross-functional bonding",
    ],
  },
  {
    name: "Monthly Wellness Retainer",
    badge: "Ongoing Corporate Partner",
    desc: "Sustained corporate wellness support with 2 scheduled weekly sessions to permanently curb employee burnout.",
    perks: [
      "2 sessions per week (morning or evening slots)",
      "Rotating focus: Desk Release, Sleep Nidra & Tratak",
      "Priority scheduling & hybrid on-site/remote access",
      "Quarterly HR wellness impact and attendance reports",
    ],
  },
];

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
    id: "school-demo",
    name: "School & College Workshop (Exam Calm)",
    short: "On-campus yoga, exam anxiety reduction & focus workshops for students.",
    description:
      "Designed for Std 8th to 12th. Simple, science-based yoga, breathwork, and Tratak to reduce exam panic and improve sleep and concentration.",
    benefits: [
      "Zero mats needed — practice in classrooms or assembly halls",
      "Pre/post student feedback & verified attendance reports",
      "Dedicated Teacher Recharge session for staff rooms",
    ],
    level: "Schools & Colleges",
    image: campus,
  },
  {
    id: "corporate-demo",
    name: "Corporate Wellness (De-Stress at Desk)",
    short: "Desk ergonomics, burnout reduction & productivity breathwork.",
    description:
      "No mat needed. Performed in conference rooms or at workstations in business attire. Relieves neck/back stiffness and monitor eye fatigue.",
    benefits: [
      "Minimal setup in conference rooms or desks",
      "Curbs employee burnout, stress leaves, and 3 PM slumps",
      "Conducted in English, Hindi & Marathi",
    ],
    level: "Corporate & Teams",
    image: personal,
  },
  {
    id: "tratak",
    name: "Tratak Focus Workshop",
    short: "Ancient scientific gazing meditation for laser concentration.",
    description:
      "Jyoti and Bindu Tratak practice that trains wandering minds, relaxes eye muscles, and counters mobile screen addiction.",
    benefits: [
      "Sharpens study & coding concentration span",
      "Directly relieves monitor eye strain & headaches",
      "Calms racing thoughts for restorative deep sleep",
    ],
    level: "Students 12+ & Professionals",
    image: meditation,
  },
  {
    id: "cyclic",
    name: "Cyclic Meditation (CM)",
    short: "Moving meditation for high stress, anger and burnout weeks.",
    description:
      "A guided moving meditation combining gentle postures with keen awareness. Cycles from physical movement to profound mental stillness.",
    benefits: [
      "Instant physiological calm and reduced emotional reactivity",
      "Ideal for high-stress exam periods and corporate crunch times",
      "Can be done seated or standing with zero mats",
    ],
    level: "All levels",
    image: hatha,
  },
  {
    id: "yoganidra",
    name: "Yoga Nidra — Yogic Sleep",
    short: "20 minutes of Yoga Nidra = 2 hours of restorative deep sleep.",
    description:
      "Lying down or seated guided conscious relaxation. Proven to reset chronic sleep debt, lower cortisol, and boost memory recall.",
    benefits: [
      "Reverses student & employee mental fatigue",
      "Substantially lowers pre-exam anxiety and insomnia",
      "Enhances memory consolidation for studies",
    ],
    level: "All levels",
    image: personal,
  },
  {
    id: "chairyoga",
    name: "Chair Yoga — Desk & Classroom",
    short: "Yoga done on a chair — zero mats or dress change needed.",
    description:
      "Targeted stretches releasing cervical neck tension, tight shoulders, and lumbar compression. Perfect for staff rooms and conference rooms.",
    benefits: [
      "Zero mat setup — practice in uniform or formal attire",
      "Relieves back pain and corrects spinal posture",
      "Quick 20–30 min refresher during busy workdays",
    ],
    level: "All levels",
    image: beginner,
  },
  {
    id: "suryanamaskar",
    name: "Surya Namaskar — Mindful Flow",
    short: "12-step mindful flow for morning energy, stamina, and fitness.",
    description:
      "Taught with deliberate breath synchronization and alignment. Ideal for morning school assembly or corporate wellness starts.",
    benefits: [
      "Full-body stretch and metabolic vitality",
      "Builds daily consistency and disciplined breath",
      "Strengthens core and improves posture",
    ],
    level: "All levels",
    image: ashtanga,
  },
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

export type Mode = "On-site" | "Online";
export type ScheduleEntry = {
  day: string;
  program: ProgramId;
  time: string;
  duration: string;
  mode: Mode;
};

export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const schedule: ScheduleEntry[] = [
  { day: "Monday", program: "hatha", time: "07:00", duration: "60 min", mode: "On-site" },
  { day: "Monday", program: "meditation", time: "19:00", duration: "45 min", mode: "Online" },
  { day: "Tuesday", program: "ashtanga", time: "06:30", duration: "75 min", mode: "On-site" },
  { day: "Tuesday", program: "beginner", time: "18:00", duration: "60 min", mode: "On-site" },
  { day: "Wednesday", program: "pranayama", time: "07:00", duration: "45 min", mode: "Online" },
  { day: "Wednesday", program: "hatha", time: "18:30", duration: "60 min", mode: "On-site" },
  { day: "Thursday", program: "ashtanga", time: "06:30", duration: "75 min", mode: "On-site" },
  { day: "Thursday", program: "meditation", time: "19:30", duration: "45 min", mode: "On-site" },
  { day: "Friday", program: "beginner", time: "08:00", duration: "60 min", mode: "Online" },
  { day: "Friday", program: "pranayama", time: "18:00", duration: "45 min", mode: "On-site" },
  { day: "Saturday", program: "hatha", time: "08:30", duration: "75 min", mode: "On-site" },
  {
    day: "Saturday",
    program: "personal",
    time: "By appointment",
    duration: "60 min",
    mode: "On-site",
  },
  { day: "Sunday", program: "meditation", time: "09:00", duration: "60 min", mode: "On-site" },
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
  if (filter === "On-site" || filter === "Online") return entries.filter((e) => e.mode === filter);
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
    perks: ["Mix and match between on-site & online", "Valid across all group programs"],
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
  { value: "On-site & Online", label: "Practice Formats" },
  { value: "Small", label: "Attentive Batch Sizes" },
  { value: "All Levels", label: "Warmly Welcomed" },
];

export const programName = (id: ProgramId) => programs.find((p) => p.id === id)?.name ?? id;
