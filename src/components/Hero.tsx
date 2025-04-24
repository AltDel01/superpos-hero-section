import { Button } from "@/components/ui/button"
import { Star, Wheat } from "lucide-react"

const Hero = () => {
  return (
    <div className="flex flex-col items-center px-4 mt-2 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center">
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

        <div className="mb-12">
          <img 
            src="/lovable-uploads/50aac8d4-df29-49cd-9715-c0c0ca8b41fe.png" 
            alt="Capterra Rating 5.0/5" 
            className="h-8 w-auto"
          />
        </div>

        <div className="w-full max-w-5xl animate-fade-in">
          <img
            src="/lovable-uploads/0bf8d20d-3bfd-4d65-a701-e54f36213537.png"
            alt="SuperPOS Dashboard"
            className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
