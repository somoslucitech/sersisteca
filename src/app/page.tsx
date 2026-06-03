import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <About />
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}
