import { SITE } from "@/lib/site";
import { FAQ_ITEMS } from "@/lib/site";

/** JSON-LD for LocalBusiness + FAQ — SEO rich results. */
export function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://ayazwebstudio.vercel.app/#business",
    name: SITE.name,
    description: SITE.description,
    url: "https://ayazwebstudio.vercel.app",
    telephone: SITE.phoneTel,
    email: SITE.email,
    image: "https://ayazwebstudio.vercel.app/brand/logo-full.webp",
    logo: "https://ayazwebstudio.vercel.app/brand/logo-mark.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pakistan Diamond City Society, Malir 15",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      postalCode: "75050",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.9056,
      longitude: 67.0822,
    },
    founder: {
      "@type": "Person",
      name: SITE.founder,
      jobTitle: "Founder & Lead Developer",
    },
    areaServed: [
      { "@type": "City", name: "Karachi" },
      { "@type": "Country", name: "Pakistan" },
    ],
    knowsAbout: [
      "SaaS development",
      "Web application development",
      "AI automation",
      "Cloud architecture",
      "Product engineering",
    ],
    sameAs: [
      SITE.whatsappShort,
      SITE.social.linkedin,
      SITE.social.github,
      SITE.social.facebook,
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: "https://ayazwebstudio.vercel.app",
    description: SITE.description,
    inLanguage: "en-PK",
    publisher: { "@id": "https://ayazwebstudio.vercel.app/#business" },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
