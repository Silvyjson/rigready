// src/App.js
import Header from "../../components/landing/home/Header";
import HeroSection from "../../components/landing/home/HeroSection";
import StatsSection from "../../components/landing/home/StatsSection";
import FeaturesSection from "../../components/landing/home/FeaturesSection";
import PlatformSection from "../../components/landing/home/PlatformSection";
import SolutionsSection from "../../components/landing/home/SolutionsSection";
import MobileAppSection from "../../components/landing/home/MobileAppSection";
import IntegrationsSection from "../../components/landing/home/IntegrationsSection";
import SecuritySection from "../../components/landing/home/SecuritySection";
import PricingSection from "../../components/landing/home/PricingSection";
import TestimonialsSection from "../../components/landing/home/TestimonialsSection";
import ContactSection from "../../components/landing/home/ContactSection";
import Footer from "../../components/landing/home/Footer";

function Home() {

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PlatformSection />
      <SolutionsSection />
      <MobileAppSection />
      <IntegrationsSection />
      <SecuritySection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;