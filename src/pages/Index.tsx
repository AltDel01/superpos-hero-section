
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import BrandsSection from "@/components/BrandsSection"
import FeaturesSection from "@/components/FeaturesSection"
import ComparisonSection from "@/components/ComparisonSection"
import WhomWeHelpSection from "@/components/WhomWeHelpSection"
import StatsSection from "@/components/StatsSection"
import DeliveryOptionsSection from "@/components/DeliveryOptionsSection"
import BenefitsSection from "@/components/BenefitsSection"
import SuccessStoriesSection from "@/components/SuccessStoriesSection"
import RatingsSection from "@/components/RatingsSection"
import ContactSection from "@/components/ContactSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f4efe9]">
      <Navbar />
      <Hero />
      <BrandsSection />
      <FeaturesSection />
      <ComparisonSection />
      <WhomWeHelpSection />
      <StatsSection />
      <DeliveryOptionsSection />
      <BenefitsSection />
      <SuccessStoriesSection />
      <RatingsSection />
      <ContactSection />
    </div>
  )
}

export default Index
