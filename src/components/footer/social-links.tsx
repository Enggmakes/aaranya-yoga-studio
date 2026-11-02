import { type SVGProps } from "react";
import { type SocialLinkItem } from "./types";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon
        points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XTwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4l6.75 7.5L4 20h2.5l5.25-5.83L16 20h4l-7.25-8.06L19.5 4H17l-4.75 5.28L8 4H4z" />
    </svg>
  );
}

const SOCIAL_ITEMS: SocialLinkItem[] = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    iconName: "instagram",
    ariaLabel: "Follow IRA's Yoga House on Instagram",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    iconName: "youtube",
    ariaLabel: "Subscribe to IRA's Yoga House on YouTube",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    iconName: "linkedin",
    ariaLabel: "Connect with IRA's Yoga House on LinkedIn",
  },
  {
    name: "X",
    href: "https://x.com",
    iconName: "x",
    ariaLabel: "Follow IRA's Yoga House on X",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-3 lg:justify-start">
      {SOCIAL_ITEMS.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.ariaLabel}
          className="group flex size-10 items-center justify-center rounded-full border border-[#B69A58]/70 bg-[#FFFDF9]/60 text-[#2C4431] shadow-[0_2px_8px_rgba(42,56,40,0.04)] backdrop-blur-xs transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-[#8E7438] hover:bg-[#183820] hover:text-[#FFF8EC] hover:scale-108 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58] focus-visible:ring-offset-2"
        >
          {item.iconName === "instagram" && (
            <InstagramIcon className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
          )}
          {item.iconName === "youtube" && (
            <YoutubeIcon className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
          )}
          {item.iconName === "linkedin" && (
            <LinkedinIcon className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
          )}
          {item.iconName === "x" && (
            <XTwitterIcon className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
          )}
        </a>
      ))}
    </div>
  );
}
