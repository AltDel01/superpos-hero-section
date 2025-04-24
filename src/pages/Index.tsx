
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import BrandsSection from "@/components/BrandsSection"
import FeaturesSection from "@/components/FeaturesSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f4efe9]">
      <Navbar />
      <Hero />
      <BrandsSection />
      <FeaturesSection />
    </div>
  )
}

export default Index
