
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"

const Hero = () => {
  const [api, setApi] = useState<any>()

  useEffect(() => {
    if (api) {
      const interval = setInterval(() => {
        api.scrollNext()
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [api])

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
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            <CarouselItem className="flex items-center justify-center">
              <img
                src="/lovable-uploads/387b0f04-1a8c-4198-bb4b-92081a82d98c.png"
                alt="SuperPOS Mobile App"
                className="w-full h-auto object-contain animate-fade-in"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center">
              <img
                src="/lovable-uploads/0fbfe49c-1c76-4b57-8d6a-2db90d0b56af.png"
                alt="SuperPOS Order Management"
                className="w-full h-auto object-contain animate-fade-in"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center">
              <img
                src="/lovable-uploads/d8a274e5-7bfd-40af-90b3-bad01d96ef18.png"
                alt="SuperPOS Dashboard"
                className="w-full h-auto object-contain animate-fade-in"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </div>
  )
}

export default Hero
