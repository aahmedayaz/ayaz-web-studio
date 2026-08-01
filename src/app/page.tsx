import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofBar } from "@/components/ProofBar";
import { Footer } from "@/components/Footer";
import { GridRails, GridRule } from "@/components/GridRails";

const TechMarquee = dynamic(() =>
  import("@/components/TechMarquee").then((m) => ({ default: m.TechMarquee })),
);
const Services = dynamic(() =>
  import("@/components/Services").then((m) => ({ default: m.Services })),
);
const CaseStudies = dynamic(() =>
  import("@/components/CaseStudies").then((m) => ({ default: m.CaseStudies })),
);
const ManifestoQuote = dynamic(() =>
  import("@/components/ManifestoQuote").then((m) => ({
    default: m.ManifestoQuote,
  })),
);
const Industries = dynamic(() =>
  import("@/components/Industries").then((m) => ({ default: m.Industries })),
);
const Founder = dynamic(() =>
  import("@/components/Founder").then((m) => ({ default: m.Founder })),
);
const FAQ = dynamic(() =>
  import("@/components/FAQ").then((m) => ({ default: m.FAQ })),
);
const Contact = dynamic(() =>
  import("@/components/Contact").then((m) => ({ default: m.Contact })),
);
const WhatsAppFloat = dynamic(() =>
  import("@/components/WhatsAppFloat").then((m) => ({
    default: m.WhatsAppFloat,
  })),
);

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="site-shell relative pt-[4rem] md:pt-[4.5rem]">
        <GridRails />
        <main className="relative z-[1]">
          <Hero />
          <GridRule />
          <ProofBar />
          <div className="content-auto">
            <TechMarquee />
          </div>
          <GridRule />
          <div className="content-auto">
            <Services />
          </div>
          <GridRule />
          <div className="content-auto">
            <CaseStudies />
          </div>
          <GridRule />
          <div className="content-auto">
            <ManifestoQuote />
          </div>
          <GridRule />
          <div className="content-auto">
            <Industries />
          </div>
          <GridRule />
          <div className="content-auto">
            <Founder />
          </div>
          <GridRule />
          <div className="content-auto">
            <FAQ />
          </div>
          <GridRule />
          <div className="content-auto">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
      <WhatsAppFloat />
    </>
  );
}
