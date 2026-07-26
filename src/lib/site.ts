export const SITE = {
  name: "Ayaz Web Studio",
  founder: "Ahmed Ayaz",
  tagline: "Websites & Business Systems for Karachi",
  description:
    "Ayaz Web Studio builds fast, professional websites and business management systems for restaurants, boutiques, clinics, gyms, salons and more across Karachi.",
  phoneDisplay: "0313-2139616",
  phoneTel: "+923132139616",
  whatsapp:
    "https://wa.me/923132139616?text=Hi%20Ayaz%20Web%20Studio%2C%20I%27d%20like%20to%20know%20more%20about%20a%20website%20for%20my%20business",
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
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Process" },
  { href: "#founder", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const ROTATE_WORDS = ["Sales", "Customers", "Orders", "Bookings"] as const;

export const SERVICES = [
  {
    title: "Business Websites",
    description:
      "Customers find you on Google, browse your menu or catalog, and message you on WhatsApp in one tap — more inquiries, less friction.",
    icon: "layout" as const,
  },
  {
    title: "Management Systems & ERP",
    description:
      "Stop juggling notebooks and chats. Track stock, staff, and daily ops in one place built around how you already work.",
    icon: "layers" as const,
  },
  {
    title: "Appointment Booking Systems",
    description:
      "Clients book their own slots online. You get notified instantly — fewer missed calls, a fuller calendar.",
    icon: "calendar" as const,
  },
  {
    title: "Order Management Systems",
    description:
      "Orders stay organized from click to delivery. Nothing gets lost in a WhatsApp thread when things get busy.",
    icon: "package" as const,
  },
  {
    title: "E-Commerce Store",
    description:
      "Sell online with a clean product catalog, cart, and checkout — built for mobile shoppers in Karachi who buy on WhatsApp too.",
    icon: "store" as const,
  },
] as const;

export const TIER1 = [
  {
    title: "Restaurants & Food Businesses",
    description:
      "Cafes, food trucks, catering services and dine-in restaurants with zero web presence.",
  },
  {
    title: "Boutiques & Fashion Retail",
    description:
      "Clothing brands, fabric shops and accessory stores currently running purely on Instagram.",
  },
  {
    title: "Clinics, Dentists & Health Practitioners",
    description:
      "Private doctors, specialists and diagnostic centers with no appointment booking system.",
  },
  {
    title: "Gyms & Fitness Studios",
    description:
      "Personal trainers, yoga studios and fitness centers lacking class schedules and online sign-ups.",
  },
  {
    title: "Salons & Beauty Services",
    description:
      "Parlors, barbershops and aesthetic clinics operating entirely via WhatsApp and phone calls.",
  },
] as const;

export const TIER2 = [
  {
    title: "Real Estate & Property Development",
    description:
      "Builders, agents and housing societies that need property listings and virtual tours.",
  },
  {
    title: "Automobile Dealers & Parts Suppliers",
    description:
      "Showrooms, spare parts distributors and service centers lacking digital inventory catalogs.",
  },
  {
    title: "Pharmaceuticals & Healthcare",
    description:
      "Pharma companies, medical stores and wellness brands needing credibility and product listings.",
  },
  {
    title: "Educational Institutions & Tuition Centers",
    description:
      "Schools, academies, coaching centers and EdTech startups with outdated or non-existent websites.",
  },
  {
    title: "Wedding Planners & Event Management",
    description:
      "Decorators, caterers, photographers and venue owners who need portfolio showcases and booking systems.",
  },
] as const;

export const PROCESS = [
  {
    num: "01",
    title: "Send us a message",
    description:
      "Tell us about your business on WhatsApp or by call — takes 5 minutes.",
  },
  {
    num: "02",
    title: "We design & build",
    description:
      "You send your logo, photos and details — we handle everything technical.",
  },
  {
    num: "03",
    title: "You review it",
    description:
      "See your actual website before it ever goes live — request changes freely.",
  },
  {
    num: "04",
    title: "We launch it",
    description:
      "Your domain goes live, and your business is searchable on Google.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "Do I need to know anything technical?",
    a: "No. You send your business details, logo and photos over WhatsApp — we handle the domain, hosting and all the technical setup.",
  },
  {
    q: "How long does a website actually take?",
    a: "Most basic business websites are live within 4–5 days of receiving your details. Management systems and booking platforms take longer depending on scope.",
  },
  {
    q: "What do I need to pay upfront?",
    a: "A 50% advance to begin work, with the remaining 50% due once your website is ready to review. Domain and hosting setup is included in your quote.",
  },
  {
    q: "Can you build something beyond a basic website?",
    a: "Yes — appointment booking systems, order management, and custom management/ERP systems are all things we build regularly, tailored to your business.",
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
