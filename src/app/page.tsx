




import { ContactSection } from "@/components/Contact-section";
import { CTASection } from "@/components/Cta-section";
import { FeaturesSection } from "@/components/Feature-section";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Hero-section";
import { PricingSection } from "@/components/Pricing-section";
import { ServicesSection } from "@/components/Service-section";
import { TestimonialsSection } from "@/components/Testimonial-section";


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
