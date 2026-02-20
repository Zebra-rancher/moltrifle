import Hero from "./components/Hero";
import ThreatSection from "./components/ThreatSection";
import ToolCatalog from "./components/ToolCatalog";
import Testimonials from "./components/Testimonials";
import Membership from "./components/Membership";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ThreatSection />
      <ToolCatalog />
      <Testimonials />
      <Membership />
      <Footer />
    </main>
  );
}
