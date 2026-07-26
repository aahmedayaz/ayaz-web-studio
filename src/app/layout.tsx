import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Sora } from "next/font/google";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayazwebstudio.vercel.app"),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  keywords: [
    "Ayaz Web Studio",
    "Karachi web design",
    "business website Pakistan",
    "WhatsApp ordering website",
    "Next.js agency Karachi",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "/brand/logo-full.webp",
        width: 512,
        height: 512,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/brand/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  icons: {
    icon: [{ url: "/brand/logo-mark.svg", type: "image/svg+xml" }],
    apple: "/brand/logo-mark.svg",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "PK-SD",
    "geo.placename": "Karachi",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e140d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className="font-body text-ivory antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
