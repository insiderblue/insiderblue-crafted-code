import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NumbersSection from "@/components/NumbersSection";
import ServicesSection from "@/components/ServicesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TechSection from "@/components/TechSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <NumbersSection />
      <ServicesSection />
      <ShowcaseSection />
      <TechSection />
      <HowItWorksSection />
      <WhyUsSection />
      <FAQSection />
      <CTABanner />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
