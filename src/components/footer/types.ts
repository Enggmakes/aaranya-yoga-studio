export interface FooterNavItem {
  id: string;
  label: string;
  to: string;
  iconName: "home" | "classes" | "programs" | "about" | "retreats" | "contact";
  angle: number; // angle in degrees for radial petal placement (0 = right, 90 = bottom, -90 = top)
  description?: string;
  isAction?: boolean;
}

export interface SocialLinkItem {
  name: string;
  href: string;
  iconName: "instagram" | "youtube" | "linkedin" | "x";
  ariaLabel: string;
}
