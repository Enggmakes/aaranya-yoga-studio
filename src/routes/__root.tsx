import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { BookingProvider } from "@/components/booking";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-primary">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">This path leads nowhere</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border px-5 py-2 text-sm hover:bg-muted">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      {
        name: "google-site-verification",
        content: "0kTPQr-W8_RfiJnKA2evK3f87uQO0oCH7Fmb-2Aj2WI",
      },
      { name: "theme-color", content: "#FAF8F5" },
      { title: "IRA's yoga house — Authentic Yoga & Breathwork Sanctuary" },
      {
        name: "description",
        content:
          "IRA's yoga house is an unhurried sanctuary for Hatha yoga, Ashtanga, restorative breathwork, and meditation. Calm your nervous system and cultivate lasting physical ease.",
      },
      { property: "og:title", content: "IRA's yoga house — Authentic Yoga & Breathwork Sanctuary" },
      {
        property: "og:description",
        content:
          "Unhurried, breath-led yoga and mindfulness sessions. Small batches, patient guidance, and space to truly unwind.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Geist:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://irasyogahouse.vercel.app/" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "alternate icon", href: "/favicon.ico" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const studioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "YogaStudio",
      "@id": "https://irasyogahouse.vercel.app/#studio",
      name: "IRA's yoga house",
      alternateName: ["IRA's Yoga Sanctuary", "IRA Yoga House"],
      description:
        "Authentic, unhurried yoga sanctuary offering small-batch Hatha yoga, Ashtanga sequences, restorative Pranayama breathwork, meditation, and school & college campus wellness workshops.",
      url: "https://irasyogahouse.vercel.app",
      logo: "https://irasyogahouse.vercel.app/favicon.png",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "06:30",
          closes: "20:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "08:00",
          closes: "13:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Yoga & Mindfulness Practices",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hatha Yoga",
              description:
                "Classical postures held with patient breath and steady structural alignment.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ashtanga Yoga",
              description:
                "Dynamic, focused practice synchronizing breath with movement to build stamina and core tone.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Meditation & Stillness",
              description:
                "Guided stillness sessions to quiet mental noise, regulate cognitive stress, and restore nervous system calm.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pranayama (Breathwork)",
              description:
                "Traditional conscious breathing techniques to reset acute stress response and expand lung capacity.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Beginner Foundations",
              description:
                "Gentle, non-intimidating classes for beginners with zero pressure and personalized posture cues.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Personalized 1-on-1 Guidance",
              description:
                "Private customized sessions for individualized posture refinement, physical rehab, and schedule flexibility.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "School & College Campus Sessions",
              description:
                "On-campus workshops for educational institutions focusing on exam stress reduction, desk posture, and youth mindfulness.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://irasyogahouse.vercel.app/#website",
      url: "https://irasyogahouse.vercel.app",
      name: "IRA's yoga house",
      description: "Authentic Yoga & Breathwork Sanctuary",
      publisher: {
        "@id": "https://irasyogahouse.vercel.app/#studio",
      },
    },
  ],
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="0kTPQr-W8_RfiJnKA2evK3f87uQO0oCH7Fmb-2Aj2WI"
        />
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(studioSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <BookingProvider>
        <SiteHeader />
        <main id="main">
          <Outlet />
        </main>
        <SiteFooter />
        <Toaster />
      </BookingProvider>
    </QueryClientProvider>
  );
}
