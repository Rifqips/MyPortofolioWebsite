import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
// import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="background-grid pt-16">
      <div className="background-glow" />

      <Navbar />

      <HeroSection />
      <AboutSection />
      <ServicesSection/>
      <PricingSection />
      <ProcessSection />
      <ProjectsSection />
      <WhyChooseSection />
      <FaqSection />
      <ContactSection />

      <Footer />
    </main>
  );
}