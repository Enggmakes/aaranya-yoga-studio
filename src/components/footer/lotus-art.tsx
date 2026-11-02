import { type SVGProps } from "react";

/**
 * Flaticon Lotus Blossom Icon (Exact Yoga Lotus Vector from Flaticon)
 */
export function FlaticonLotus({
  className = "w-12 h-10",
  color = "#B69A58",
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      className={className}
      {...props}
    >
      <path d="M 24 184 L 24 198 L 27 217 L 37 251 L 41 261 L 57 292 L 78 322 L 90 336 L 107 353 L 137 377 L 158 390 L 180 401 L 207 411 L 173 412 L 147 408 L 135 405 L 109 396 L 78 380 L 50 359 L 35 344 L 21 326 L 19 322 L 21 320 L 36 317 L 42 313 L 43 308 L 42 305 L 39 302 L 35 301 L 25 303 L 6 309 L 0 313 L 0 321 L 9 336 L 24 355 L 39 370 L 51 380 L 80 399 L 103 410 L 129 419 L 150 424 L 173 427 L 208 427 L 234 423 L 247 419 L 264 419 L 282 424 L 303 427 L 338 427 L 361 424 L 382 419 L 415 407 L 438 395 L 460 380 L 472 370 L 487 355 L 502 336 L 511 321 L 511 313 L 505 309 L 486 303 L 472 302 L 469 305 L 468 308 L 469 313 L 472 316 L 490 320 L 492 323 L 476 344 L 461 359 L 433 380 L 402 396 L 392 399 L 389 401 L 364 408 L 338 412 L 304 411 L 331 401 L 353 390 L 374 377 L 404 353 L 421 336 L 433 322 L 454 292 L 470 261 L 474 251 L 484 217 L 487 198 L 487 184 L 483 180 L 473 180 L 452 183 L 420 192 L 397 202 L 395 200 L 395 173 L 392 147 L 388 130 L 386 126 L 382 124 L 378 124 L 373 126 L 342 143 L 323 157 L 308 171 L 299 146 L 290 127 L 273 100 L 259 84 L 252 84 L 245 91 L 231 110 L 218 133 L 203 171 L 188 157 L 169 143 L 156 135 L 133 124 L 129 124 L 124 127 L 119 147 L 116 172 L 116 200 L 114 202 L 91 192 L 64 184 L 38 180 L 28 180 Z" />
      <path d="M 472 197 L 465 230 L 458 250 L 446 275 L 425 307 L 409 326 L 394 341 L 364 365 L 343 378 L 325 387 L 291 399 L 271 403 L 264 402 L 265 392 L 271 367 L 281 341 L 290 323 L 306 298 L 317 284 L 345 255 L 358 244 L 381 228 L 411 212 L 435 203 L 454 198 L 466 196 Z" />
      <path d="M 39 197 L 45 196 L 57 198 L 76 203 L 100 212 L 130 228 L 145 238 L 166 255 L 194 284 L 205 298 L 221 323 L 230 341 L 240 367 L 247 399 L 246 403 L 234 402 L 213 397 L 186 387 L 153 369 L 136 357 L 117 341 L 102 326 L 86 307 L 66 277 L 51 245 L 44 223 Z" />
      <path d="M 136 143 L 138 143 L 151 150 L 173 165 L 184 174 L 198 191 L 193 222 L 191 258 L 176 243 L 164 233 L 132 211 L 131 173 L 133 155 Z" />
      <path d="M 256 104 L 264 114 L 274 130 L 288 160 L 298 193 L 302 215 L 303 232 L 304 235 L 307 238 L 311 239 L 315 238 L 318 234 L 317 213 L 312 189 L 327 174 L 338 165 L 367 146 L 373 143 L 376 144 L 380 173 L 380 199 L 379 211 L 359 224 L 335 243 L 311 267 L 301 279 L 278 313 L 263 344 L 258 360 L 254 364 L 254 361 L 248 344 L 233 313 L 219 291 L 208 277 L 207 269 L 207 235 L 209 215 L 213 193 L 223 160 L 237 130 L 247 114 L 253 106 Z" />
    </svg>
  );
}

/**
 * Stylized Lotus Emblem - Gold stroke / outline lotus blossom
 */
export function LotusEmblem({
  className = "w-12 h-9",
  color = "#B69A58",
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) {
  return <FlaticonLotus className={className} color={color} {...props} />;
}

/**
 * Seated Meditation Yogi Icon (Padmasana) for Classes and Retreats petals
 */
export function MeditationFigureIcon({
  className = "size-5",
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Head */}
      <circle cx="12" cy="5" r="2.2" />
      {/* Neck & Torso */}
      <path d="M12 7.5 V14" />
      {/* Arms resting on knees in mudra */}
      <path d="M12 9.5 L8 12 L5 16 L7 17 L10 14" />
      <path d="M12 9.5 L16 12 L19 16 L17 17 L14 14" />
      {/* Folded Crossed Legs */}
      <path d="M6 18 C7 16 10 15 12 16 C14 15 17 16 18 18 C16 19.5 8 19.5 6 18 Z" />
    </svg>
  );
}

/**
 * Calendar Icon for Programs petal
 */
export function CalendarScheduleIcon({
  className = "size-5",
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="3" y="4" width="18" height="17" rx="3" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="2" x2="8" y2="5" />
      <line x1="16" y1="2" x2="16" y2="5" />
      {/* Inner event dots */}
      <circle cx="8" cy="13" r="1" fill={color} />
      <circle cx="12" cy="13" r="1" fill={color} />
      <circle cx="16" cy="13" r="1" fill={color} />
      <circle cx="8" cy="17" r="1" fill={color} />
      <circle cx="12" cy="17" r="1" fill={color} />
      <circle cx="16" cy="17" r="1" fill={color} />
    </svg>
  );
}

/**
 * Leaf Icon for About petal
 */
export function LeafBotanicalIcon({
  className = "size-5",
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M19 4 C11 4 5 10 5 18 C13 18 19 12 19 4 Z" />
      <path d="M5 18 C9 14 13 10 19 4" />
      <path d="M11 12 C13 11 15 11 17 9" />
      <path d="M8 15 C10 14 12 14 14 12" />
    </svg>
  );
}

/**
 * Home Icon for Home petal
 */
export function HomeSanctuaryIcon({
  className = "size-5",
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M3 10.5 L12 3 L21 10.5" />
      <path d="M5 9.5 V19 C5 19.5 5.5 20 6 20 H18 C18.5 20 19 19.5 19 19 V9.5" />
      <path d="M9 20 V13 H15 V20" />
    </svg>
  );
}

/**
 * Envelope Icon for Contact petal
 */
export function EnvelopeMailIcon({
  className = "size-5",
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 7 L12 13 L21 7" />
    </svg>
  );
}

/**
 * Delicate curved wave flourish below the brand quote
 */
export function DecorativeWaveFlourish({
  className = "w-28 h-3",
  color = "#C5A869",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M4 6 C24 1 36 11 60 6 C84 1 96 11 116 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Yoga Practitioner Silhouette in Upward-Facing Dog / Cobra Pose (Bhujangasana)
 * Positioned on the left hillside.
 */
export function YogaSilhouette({ className = "w-48 h-36" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Yoga practitioner in cobra posture"
    >
      {/* Studio Yoga Mat resting on slope */}
      <path
        d="M2 110 L165 110 C167 110 168 112 166 113 L0 113 C-2 113 -1 110 2 110 Z"
        fill="#1C3822"
        opacity="0.35"
      />

      {/* Practitioner Silhouette */}
      <g fill="#182E1E">
        {/* Head lifted gently back */}
        <circle cx="86" cy="32" r="7.5" />
        {/* Hair bun */}
        <ellipse cx="80" cy="28" rx="4" ry="4.5" />

        {/* Neck, arching torso & chest */}
        <path d="M84 39 C83 45 80 50 78 57 C75 66 69 76 60 84 C52 90 42 93 25 96 C16 97 6 98 0 99 L0 106 C15 106 30 103 45 98 C58 93 68 86 73 75 C77 67 80 57 85 46 C87 43 86 40 84 39 Z" />

        {/* Strong planted arms */}
        {/* Near arm (supporting under shoulder) */}
        <path d="M78 58 C78 68 79 80 81 92 L82 108 L88 108 L86 88 C85 78 84 66 84 57 Z" />
        {/* Hand planted on mat */}
        <path d="M80 108 C80 108 85 106 91 107 C92 108 90 110 84 110 L79 110 Z" />

        {/* Legs extending straight back along mat */}
        <path d="M42 94 C35 95 24 97 12 99 C5 100 0 101 -4 102 L-4 108 C4 107 16 105 28 103 C38 101 46 99 50 96 Z" />
        {/* Feet pointed */}
        <ellipse cx="-2" cy="104" rx="4" ry="2.5" />
      </g>

      {/* Delicate sprout leaf beside the practitioner */}
      <g stroke="#395932" fill="#476A3E" strokeWidth="0.8">
        <path d="M110 110 C110 103 114 96 122 93 C120 101 116 107 110 110 Z" />
        <path d="M110 108 C108 102 104 98 97 97 C99 104 104 107 110 108 Z" />
        <line x1="110" y1="110" x2="110" y2="102" />
      </g>
    </svg>
  );
}

/**
 * Zen Elements: Brass Singing Bowl, Incense Smoke, 3 Cairn Stones, and Frangipani Jasmine Flower
 * Positioned on the right hillside.
 */
export function ZenBowlAndStones({ className = "w-64 h-40" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Singing bowl with smoke, balancing stones, and jasmine blossom"
    >
      <defs>
        {/* Golden Brass Gradient for Singing Bowl */}
        <linearGradient id="brassBowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFBF75" />
          <stop offset="35%" stopColor="#C4A35A" />
          <stop offset="70%" stopColor="#8A6C2C" />
          <stop offset="100%" stopColor="#5E481B" />
        </linearGradient>

        {/* Zen Stones Gradients */}
        <linearGradient id="stoneDarkGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#58635B" />
          <stop offset="50%" stopColor="#3C453E" />
          <stop offset="100%" stopColor="#222A24" />
        </linearGradient>

        <linearGradient id="stoneMidGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#6C776E" />
          <stop offset="50%" stopColor="#4A544C" />
          <stop offset="100%" stopColor="#2B352E" />
        </linearGradient>

        <linearGradient id="stoneTopGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#7E8A80" />
          <stop offset="50%" stopColor="#556057" />
          <stop offset="100%" stopColor="#343E36" />
        </linearGradient>

        {/* Soft Smoke Glow Filter */}
        <filter id="smokeBlur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>

      {/* Gentle Incense Smoke curling up from singing bowl */}
      <g filter="url(#smokeBlur)" opacity="0.65">
        <path
          d="M68 95 C68 80 62 72 68 58 C74 44 65 32 72 16"
          stroke="url(#smokeGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M71 94 C76 82 72 74 78 62 C83 50 78 38 82 22"
          stroke="rgba(255, 252, 242, 0.7)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      <linearGradient id="smokeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="rgba(240, 235, 220, 0.85)" />
        <stop offset="60%" stopColor="rgba(255, 250, 238, 0.45)" />
        <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
      </linearGradient>

      {/* --- BRASS SINGING BOWL --- */}
      {/* Bowl Shadow */}
      <ellipse cx="68" cy="116" rx="34" ry="7" fill="#14281A" opacity="0.4" />

      {/* Bowl Body */}
      <path d="M38 96 C38 114 51 122 68 122 C85 122 98 114 98 96 Z" fill="url(#brassBowlGrad)" />
      {/* Bowl Lip Inner Rim */}
      <ellipse cx="68" cy="96" rx="30" ry="6.5" fill="#523F16" stroke="#C4A35A" strokeWidth="1.2" />
      {/* Interior Water / Resonance reflection */}
      <ellipse cx="68" cy="97" rx="26" ry="4.5" fill="#8C712F" opacity="0.8" />
      {/* Golden Highlight on Exterior Wall */}
      <path
        d="M48 102 C50 114 60 119 68 119 C64 118 56 113 54 104 Z"
        fill="#FFE9A8"
        opacity="0.35"
      />

      {/* --- STACKED BALANCING RIVER STONES (CAIRN) --- */}
      {/* Base Stone Shadow */}
      <ellipse cx="172" cy="122" rx="42" ry="8" fill="#14281A" opacity="0.45" />

      {/* Bottom Stone (Wide, flat) */}
      <ellipse cx="172" cy="116" rx="38" ry="14" fill="url(#stoneDarkGrad)" />
      <ellipse cx="170" cy="112" rx="33" ry="8" fill="white" opacity="0.08" />

      {/* Middle Stone */}
      <ellipse cx="173" cy="96" rx="28" ry="11" fill="url(#stoneMidGrad)" />
      <ellipse cx="171" cy="93" rx="23" ry="6" fill="white" opacity="0.1" />

      {/* Top Stone */}
      <ellipse cx="174" cy="79" rx="19" ry="8.5" fill="url(#stoneTopGrad)" />
      <ellipse cx="173" cy="76" rx="15" ry="4.5" fill="white" opacity="0.14" />

      {/* --- WHITE FRANGIPANI / JASMINE FLOWER beside stones --- */}
      <g transform="translate(195, 114)">
        {/* Flower Shadow */}
        <ellipse cx="8" cy="8" rx="10" ry="3.5" fill="#14281A" opacity="0.3" />
        {/* 5 Petals */}
        <path
          d="M8 0 C11 -4 15 -2 15 2 C15 6 11 6 8 4 Z"
          fill="#FFFDF8"
          stroke="#E8DFD0"
          strokeWidth="0.5"
        />
        <path
          d="M12 4 C16 4 18 8 16 11 C13 14 10 11 9 7 Z"
          fill="#FFFDF8"
          stroke="#E8DFD0"
          strokeWidth="0.5"
        />
        <path
          d="M8 8 C9 12 7 16 3 15 C-1 14 1 10 5 7 Z"
          fill="#FFFDF8"
          stroke="#E8DFD0"
          strokeWidth="0.5"
        />
        <path
          d="M4 6 C0 7 -3 4 -2 0 C-1 -3 3 -1 5 3 Z"
          fill="#FFFDF8"
          stroke="#E8DFD0"
          strokeWidth="0.5"
        />
        <path
          d="M5 2 C4 -2 7 -5 10 -4 C13 -2 11 2 8 3 Z"
          fill="#FFFDF8"
          stroke="#E8DFD0"
          strokeWidth="0.5"
        />
        {/* Golden Center */}
        <circle cx="7" cy="4" r="2.5" fill="#E8B838" />
        <circle cx="7" cy="4" r="1.2" fill="#D4901B" />
      </g>
    </svg>
  );
}

/**
 * Botanical Leaf Branch for Top-Left and Top-Right Corners
 */
export function BotanicalBranch({
  side = "left",
  className = "w-44 h-32",
}: {
  side?: "left" | "right";
  className?: string;
}) {
  const isRight = side === "right";
  return (
    <svg
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={isRight ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A653C" />
          <stop offset="60%" stopColor="#314B27" />
          <stop offset="100%" stopColor="#22371B" />
        </linearGradient>
        <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5D7C4D" />
          <stop offset="60%" stopColor="#3F5A31" />
          <stop offset="100%" stopColor="#263A1D" />
        </linearGradient>
      </defs>

      {/* Main Arching Twig */}
      <path
        d="M-10 -10 C30 20 80 40 160 30 C175 28 190 22 205 15"
        stroke="#483B2B"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M60 32 C75 55 105 75 140 85"
        stroke="#483B2B"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M100 68 C110 95 130 115 155 125"
        stroke="#483B2B"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Lush Leaves along the twig */}
      {/* Leaf 1 */}
      <g transform="translate(35, 12) rotate(25)">
        <path d="M0 0 C12 -12 28 -8 34 8 C22 16 8 12 0 0 Z" fill="url(#leafGrad1)" />
        <path d="M0 0 C14 2 24 5 34 8" stroke="#718B5F" strokeWidth="0.8" />
      </g>

      {/* Leaf 2 */}
      <g transform="translate(65, 26) rotate(-20)">
        <path d="M0 0 C15 -16 32 -10 38 6 C25 15 10 10 0 0 Z" fill="url(#leafGrad2)" />
        <path d="M0 0 C16 -1 27 2 38 6" stroke="#87A175" strokeWidth="0.8" />
      </g>

      {/* Leaf 3 */}
      <g transform="translate(95, 33) rotate(35)">
        <path d="M0 0 C16 -14 34 -6 40 10 C26 18 10 14 0 0 Z" fill="url(#leafGrad1)" />
        <path d="M0 0 C16 4 28 7 40 10" stroke="#718B5F" strokeWidth="0.8" />
      </g>

      {/* Leaf 4 */}
      <g transform="translate(130, 31) rotate(-15)">
        <path d="M0 0 C14 -14 30 -8 36 6 C24 14 9 10 0 0 Z" fill="url(#leafGrad2)" />
        <path d="M0 0 C15 0 25 3 36 6" stroke="#87A175" strokeWidth="0.8" />
      </g>

      {/* Leaf 5 */}
      <g transform="translate(165, 26) rotate(20)">
        <path d="M0 0 C12 -10 25 -4 30 8 C20 14 8 10 0 0 Z" fill="url(#leafGrad1)" />
      </g>

      {/* Sub-branch Leaves */}
      <g transform="translate(85, 52) rotate(45)">
        <path d="M0 0 C14 -12 28 -6 34 8 C22 14 8 10 0 0 Z" fill="url(#leafGrad2)" />
      </g>
      <g transform="translate(115, 75) rotate(30)">
        <path d="M0 0 C12 -10 24 -4 28 6 C18 12 7 8 0 0 Z" fill="url(#leafGrad1)" />
      </g>
      <g transform="translate(138, 102) rotate(40)">
        <path d="M0 0 C10 -8 20 -3 24 5 C15 10 6 7 0 0 Z" fill="url(#leafGrad2)" />
      </g>
    </svg>
  );
}
