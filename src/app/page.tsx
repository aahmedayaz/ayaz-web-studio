import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofBar } from "@/components/ProofBar";
import { TechMarquee } from "@/components/TechMarquee";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

/** Client islands deferred — HTML still SSR'd, JS loads after critical path. */
const CaseStudies = dynamic(() =>
  import("@/components/CaseStudies").then((m) => ({ default: m.CaseStudies })),
);
const Industries = dynamic(() =>
  import("@/components/Industries").then((m) => ({ default: m.Industries })),
);
const FAQ = dynamic(() =>
  import("@/components/FAQ").then((m) => ({ default: m.FAQ })),
);

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="site-shell pt-[3.75rem] min-[375px]:pt-16 md:pt-[4.25rem]">
        <main>
          <Hero />
          <ProofBar />
          <TechMarquee />
          <Services />
          <CaseStudies />
          <Industries />
          <Process />
          <Founder />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
      <WhatsAppFloat />
    </>
  );
}
