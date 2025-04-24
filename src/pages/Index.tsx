
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import BrandsSection from "@/components/BrandsSection"
import FeaturesSection from "@/components/FeaturesSection"
import ComparisonSection from "@/components/ComparisonSection"
import WhomWeHelpSection from "@/components/WhomWeHelpSection"
import StatsSection from "@/components/StatsSection"

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
    </div>
  )
}

export default Index
