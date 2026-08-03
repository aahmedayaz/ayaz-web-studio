export const SITE = {
  name: "Ayaz Web Studio",
  founder: "Ahmed Ayaz",
  tagline: "Elite Software · SaaS · Products · Web Apps",
  description:
    "Ayaz Web Studio is an elite software company building SaaS products, web apps, and end-to-end digital solutions — from AI automation and cloud architecture to fintech, booking platforms, and real-time systems.",
  phoneDisplay: "0313-2139616",
  phoneTel: "+923132139616",
  whatsapp:
    "https://wa.me/923132139616?text=Hi%20Ayaz%20Web%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20software%20%2F%20SaaS%20project",
  whatsappShort: "https://wa.me/923132139616",
  email: "ayaz.webstudio@gmail.com",
  address: "Pakistan Diamond City Society, Malir 15, Karachi",
  mapEmbed:
    "https://www.google.com/maps?q=Pakistan+Diamond+City+Society+Malir+15+Karachi&output=embed",
  year: 2026,
  social: {
    linkedin: "https://www.linkedin.com/in/aahmedayaz/",
    github: "https://github.com/aahmedayaz",
    facebook: "https://www.facebook.com/Ahmed.Ayaz.Rajput/",
  },
} as const;

export const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#founder", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const ROTATE_WORDS = [
  "Products",
  "SaaS",
  "Web Apps",
  "Platforms",
] as const;

export const SERVICES = [
  {
    title: "Web Development & Design",
    description:
      "Pixel-precise interfaces and production-grade frontends that feel fast, brand-true, and built to scale.",
    icon: "layout" as const,
  },
  {
    title: "3D & Interactive Experiences",
    description:
      "Immersive product visuals, motion systems, and interactive scenes that make your brand unforgettable.",
    icon: "box" as const,
  },
  {
    title: "AI & Automation Solutions",
    description:
      "Intelligent workflows, assistants, and automations that cut manual work and unlock new product capabilities.",
    icon: "spark" as const,
  },
  {
    title: "Cloud & Serverless Architecture",
    description:
      "Scalable backends on modern cloud infrastructure — resilient, cost-aware, and ready for growth.",
    icon: "cloud" as const,
  },
  {
    title: "Analytics & Dashboards",
    description:
      "Real-time visibility into the metrics that matter — clean charts, sharp insights, decisions on demand.",
    icon: "chart" as const,
  },
  {
    title: "Payment & Fintech Solutions",
    description:
      "Checkout flows, wallets, and payment systems built for trust, compliance, and conversion.",
    icon: "wallet" as const,
  },
] as const;

export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
  accent: string;
  image: string;
};

/** Shown by default on the homepage “Products that prove the craft”. */
export const FEATURED_PROJECTS: PortfolioProject[] = [
  {
    id: "road2crypto",
    title: "Road2Crypto",
    category: "Fintech · SaaS",
    url: "https://road2crypto.com/",
    description:
      "Crypto portfolio tracker that consolidates wallets, exchanges, and DeFi into one live dashboard.",
    accent: "#00D4AA",
    image: "/portfolio/road2crypto.webp",
  },
  {
    id: "findmyvenue",
    title: "FindMyVenue",
    category: "Marketplace · Booking",
    url: "https://www.findmyvenue.com/",
    description:
      "Venue discovery and booking product built for clear search, conversion, and operational flow.",
    accent: "#0080FF",
    image: "/portfolio/findmyvenue.webp",
  },
  {
    id: "spacefit",
    title: "SpaceFit",
    category: "SaaS · Product Design",
    url: "https://www.spacefit.co/",
    description:
      "Modern product experience with polished UI systems for space and fitness workflows.",
    accent: "#7C5CFF",
    image: "/portfolio/spacefit.webp",
  },
  {
    id: "laderach",
    title: "Läderach",
    category: "E-commerce · Brand",
    url: "https://laderach.com/eu-en/",
    description:
      "Premium chocolate commerce experience — sensory storytelling, collections, and elite retail UX.",
    accent: "#C45C26",
    image: "/portfolio/laderach.webp",
  },
  {
    id: "vertex",
    title: "Vertex Environment",
    category: "3D · Interactive",
    url: "https://vertex-env.vercel.app/",
    description:
      "Immersive environment experience engineered for presence, motion, and visual craft.",
    accent: "#3DDC97",
    image: "/portfolio/vertex-v2.webp",
  },
  {
    id: "davinci",
    title: "DaVinci AI",
    category: "AI · Game Assets",
    url: "https://davinciai.vercel.app/",
    description:
      "AI-powered game asset studio with a striking product surface and generation-first UX.",
    accent: "#FF2D8B",
    image: "/portfolio/davinci.webp",
  },
];

/** Additional work shown on the full portfolio detail page. */
export const ARCHIVE_PROJECTS: PortfolioProject[] = [
  {
    id: "dentrix",
    title: "Dentrix Ascend",
    category: "Healthcare · SaaS",
    url: "https://www.dentrixascend.com/",
    description:
      "Cloud dental practice platform focused on clarity, reliability, and clinical workflows.",
    accent: "#0080FF",
    image: "/portfolio/dentrix.webp",
  },
  {
    id: "plodie",
    title: "Plodie",
    category: "Product · Web Apps",
    url: "https://plodie.com/",
    description:
      "Product-led web experience with clean information architecture and sharp interaction design.",
    accent: "#F5C518",
    image: "/portfolio/plodie.webp",
  },
  {
    id: "iptechview",
    title: "IP Tech View",
    category: "SaaS · Analytics",
    url: "https://www.iptechview.com/",
    description:
      "Technology visibility product for teams that need structured insight and operational clarity.",
    accent: "#5B9CF5",
    image: "/portfolio/iptechview.webp",
  },
  {
    id: "smiels",
    title: "Smiels",
    category: "Brand · Digital",
    url: "https://www.smiels.com/",
    description:
      "Brand-forward digital presence with a refined visual system and conversion-minded layout.",
    accent: "#FF7A1A",
    image: "/portfolio/smiels.webp",
  },
  {
    id: "aijoborbit",
    title: "AI Job Orbit",
    category: "AI · Marketplace",
    url: "http://aijoborbit.com/",
    description:
      "AI-era job discovery experience connecting talent and opportunity with modern product UX.",
    accent: "#818CF8",
    image: "/portfolio/aijoborbit-v2.webp",
  },
  {
    id: "hoap",
    title: "HOAP",
    category: "Nonprofit · Web",
    url: "https://www.hoap.org.pk/",
    description:
      "Mission-driven organization site for HOAP — clear storytelling and accessible public presence.",
    accent: "#25D366",
    image: "/portfolio/hoap.webp",
  },
  {
    id: "storecloud",
    title: "Storecloud Explore",
    category: "SaaS · Dashboard",
    url: "https://explore.storecloud.org/dashboard",
    description:
      "Operational dashboard surface for explore and store workflows with dense, usable UI.",
    accent: "#00B4D8",
    image: "/portfolio/storecloud-v2.webp",
  },
  {
    id: "lidvizion",
    title: "Lidvizion AI",
    category: "AI · Product",
    url: "https://www.lidvizion.ai/",
    description:
      "AI product experience designed for trust, capability signaling, and high-end interface craft.",
    accent: "#A78BFA",
    image: "/portfolio/lidvizion.webp",
  },
];

export const ALL_PROJECTS: PortfolioProject[] = [
  ...FEATURED_PROJECTS,
  ...ARCHIVE_PROJECTS,
];

/** @deprecated Prefer FEATURED_PROJECTS */
export const CASE_STUDIES = FEATURED_PROJECTS;

export const FAQ_ITEMS = [
  {
    q: "What kinds of products do you build?",
    a: "SaaS platforms, web apps, AI-powered tools, booking and marketplace systems, fintech flows, dashboards, and custom software — end-to-end from interface to infrastructure.",
  },
  {
    q: "How long does a typical project take?",
    a: "Focused MVPs and product slices often ship in weeks. Larger platforms and multi-module systems are scoped in phases so you see progress early and can launch in stages.",
  },
  {
    q: "Do you only build websites?",
    a: "No. Websites are one surface. We build full products — authentication, cloud backends, payments, real-time features, analytics, automation, and the interactive experiences around them.",
  },
  {
    q: "How do we start?",
    a: "Send a WhatsApp message or email with your idea or problem. We reply with clarity on scope, approach, and next steps — usually within the hour during business hours.",
  },
] as const;

export const TECH_STACK = [
  { id: "react", label: "React" },
  { id: "next", label: "Next.js" },
  { id: "node", label: "Node.js" },
  { id: "mongo", label: "MongoDB" },
  { id: "typescript", label: "TypeScript" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "cloud", label: "Cloud Hosting" },
  { id: "figma", label: "Figma" },
  { id: "whatsapp", label: "WhatsApp API" },
  { id: "vercel", label: "Vercel" },
] as const;

export const PROOF_STATS = [
  { value: "Full-stack delivery", label: "UI · API · Cloud · Launch" },
  { value: "Product-grade builds", label: "SaaS, apps & platforms" },
  { value: "Direct engineering", label: "No middlemen — founder-led" },
] as const;
