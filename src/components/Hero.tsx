
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 mt-16 max-w-6xl mx-auto">
      <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm mb-6">
        The Best F&B Point-of-Sale System
      </div>
      
      <h1 className="text-5xl font-bold mb-6 leading-tight">
        Launch, Grow And Scale Your
        <br />
        <span className="text-primary">Food & Beverage</span> Business with <span className="font-bold italic">SuperPOS</span>
      </h1>
      
      <p className="text-gray-600 max-w-3xl mb-8">
        Grow your food business, chain restaurant, or cloud kitchen with our cutting-edge platform. Our intuitive, user-friendly system
        streamlines ordering, boosts efficiency, and enhances customer satisfaction. From seamless app creation to comprehensive delivery
        management, we offer a tailored, all-in-one solution to fuel your growth in the competitive food industry.
      </p>
      
      <div className="flex gap-4 mb-12">
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg text-lg">
          Get Started →
        </Button>
        <Button variant="outline" className="px-8 py-6 rounded-lg text-lg border-gray-300">
          Pricing →
        </Button>
      </div>

      <div className="bg-[#FFF6F3] px-8 py-3 rounded-full flex items-center gap-3 relative">
        <div className="absolute left-0 right-0 -z-10">
          <img src="/lovable-uploads/0e4e7893-1b3d-4083-a456-14086edcd756.png" alt="" className="w-full h-full object-cover" />
        </div>
        <img src="https://capterra.com/favicon.ico" alt="Capterra" className="w-5 h-5" />
        <span className="font-medium">Capterra</span>
        <span className="text-amber-400">★</span>
        <span className="font-medium">5.0/5</span>
      </div>

      <div className="mt-12 w-full">
        <img src="/lovable-uploads/29dbcdf4-13ba-4ee7-b58b-abcad163c1ca.png" alt="SuperPOS Dashboard" className="w-full" />
      </div>
    </div>
  )
}

export default Hero
