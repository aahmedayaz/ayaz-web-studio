import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofBar } from "@/components/ProofBar";
import { TechMarquee } from "@/components/TechMarquee";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Process } from "@/components/Process";
import { Founder } from "@/components/Founder";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <div className="site-shell">
        <Header />
        <main>
          <Hero />
          <ProofBar />
          <TechMarquee />
          <Services />
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
