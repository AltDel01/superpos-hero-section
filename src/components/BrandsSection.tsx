
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const BrandsSection = () => {
  const brands = [{
    src: "/placeholder.svg",
    alt: "Brand 1"
  }, {
    src: "/placeholder.svg",
    alt: "Brand 2"
  }, {
    src: "/placeholder.svg",
    alt: "Brand 3"
  }, {
    src: "/placeholder.svg",
    alt: "Brand 4"
  }, {
    src: "/placeholder.svg",
    alt: "Brand 5"
  }, {
    src: "/placeholder.svg",
    alt: "Brand 6"
  }];

  return <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-primary/10 text-primary px-4 rounded-full text-sm mb-6 font-bold inline-block py-[6px] my-[20px]">
            Brands That Trust Us
          </div>
          <div className="text-4xl font-bold mb-4">
            Trusted By Over Thousands Of F&B
            <br />
            Businesses Across the world
          </div>
        </div>
        
        <Carousel opts={{
          align: "center",
          loop: true,
          dragFree: true,
          skipSnaps: true,
        }} plugins={[Autoplay({
          delay: 600,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
          playOnInit: true
        })]} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/5 lg:basis-1/6">
                <div className="w-full h-24 bg-white rounded-lg shadow-md p-1 flex items-center justify-center">
                  <img 
                    src={brand.src} 
                    alt={brand.alt} 
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              </CarouselItem>)}
          </CarouselContent>
        </Carousel>
      </div>
    </section>;
};

export default BrandsSection;

