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
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Process" },
  { href: "#founder", label: "About" },
  { href: "#contact", label: "Contact" },
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
    title: "Authentication & Security",
    description:
      "Secure auth, roles, and access control engineered for real users — without slowing the product down.",
    icon: "shield" as const,
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
    title: "Real-Time & Communication Apps",
    description:
      "Live chat, presence, notifications, and collaborative experiences that stay in sync as things happen.",
    icon: "radio" as const,
  },
  {
    title: "Document & Reporting Solutions",
    description:
      "Generate, manage, and deliver polished documents and reports — automated, branded, audit-ready.",
    icon: "file" as const,
  },
  {
    title: "Payment & Fintech Solutions",
    description:
      "Checkout flows, wallets, and payment systems built for trust, compliance, and conversion.",
    icon: "wallet" as const,
  },
  {
    title: "Discovery & Booking Platforms",
    description:
      "Search, availability, and booking experiences that turn browsers into confirmed customers.",
    icon: "calendar" as const,
  },
  {
    title: "Technical Consultation & Support",
    description:
      "Architecture reviews, roadmap guidance, and ongoing engineering partnership from concept to production.",
    icon: "compass" as const,
  },
] as const;

export const CASE_STUDIES = [
  {
    id: "edtech",
    title: "Designing an EdTech Platform",
    category: "Web Apps · Product Design",
    accent: "mint" as const,
    visual: "mobile" as const,
    tag: "LearnFlow",
  },
  {
    id: "commerce",
    title: "Scaling an E-Commerce System",
    category: "SaaS · Web Development",
    accent: "gold" as const,
    visual: "desktop" as const,
    tag: "CommerceOS",
  },
  {
    id: "ai",
    title: "Building an A.I. Product",
    category: "AI · Automation",
    accent: "violet" as const,
    visual: "ai" as const,
    tag: "Neural Lab",
  },
  {
    id: "fintech",
    title: "Digitizing a FinTech Flow",
    category: "Payments · Mobile Apps",
    accent: "blue" as const,
    visual: "fintech" as const,
    tag: "PayStack",
  },
] as const;

export const TIER1 = [
  {
    title: "Startups & Product Teams",
    description:
      "Founders shipping MVPs, SaaS cores, and customer-facing products that need elite engineering from day one.",
  },
  {
    title: "Growing Digital Brands",
    description:
      "Businesses ready to move beyond a brochure site into real platforms — bookings, commerce, and ops systems.",
  },
  {
    title: "Agencies & Studios",
    description:
      "Partners who need a reliable engineering arm for complex builds, interactive experiences, and product launches.",
  },
  {
    title: "Education & Learning",
    description:
      "EdTech platforms, academies, and course products with enrollment, progress tracking, and learner dashboards.",
  },
  {
    title: "Health & Wellness",
    description:
      "Clinics and wellness brands that need booking, patient flows, and secure digital experiences.",
  },
] as const;

export const TIER2 = [
  {
    title: "FinTech & Payments",
    description:
      "Wallets, checkout systems, and financial workflows where security, trust, and reliability are non-negotiable.",
  },
  {
    title: "Real Estate & Property Tech",
    description:
      "Listing platforms, lead engines, and virtual discovery tools for builders, agencies, and housing societies.",
  },
  {
    title: "Enterprise & Operations",
    description:
      "Internal tools, ERP-style systems, and automation layers that replace spreadsheets and scattered chats.",
  },
  {
    title: "Marketplaces & Platforms",
    description:
      "Multi-sided products with discovery, matching, transactions, and real-time communication at the core.",
  },
  {
    title: "Events & Experiences",
    description:
      "Ticketing, venue booking, and experiential platforms that convert attention into confirmed attendance.",
  },
] as const;

export const PROCESS = [
  {
    num: "01",
    title: "Discover",
    description:
      "We map your product vision, users, and constraints — then define the sharpest path to ship.",
  },
  {
    num: "02",
    title: "Architect",
    description:
      "Clear system design: stack, data model, security, and UX — so the build never drifts.",
  },
  {
    num: "03",
    title: "Build & Iterate",
    description:
      "We ship in focused cycles with demos you can touch — polish, performance, and product feel included.",
  },
  {
    num: "04",
    title: "Launch & Scale",
    description:
      "Deploy, monitor, and evolve. Your product stays fast, secure, and ready for the next wave of users.",
  },
] as const;

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
