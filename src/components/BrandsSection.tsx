
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const BrandsSection = () => {
  const brands = [{
    src: "/lovable-uploads/1c0c9294-a28f-4ae4-ae2e-23c6af0268aa.png",
    alt: "Solaria"
  }, {
    src: "/lovable-uploads/ed1ab54e-c773-43ce-9918-5745f7731440.png",
    alt: "Fogo Brazilian BBQ"
  }, {
    src: "/lovable-uploads/a9dcd907-81bc-410c-a97e-5fcda90eac59.png",
    alt: "Grand Wing Heng"
  }, {
    src: "/lovable-uploads/dac6333a-3908-4524-9a02-e38f0bd95d41.png",
    alt: "Hangry"
  }, {
    src: "/lovable-uploads/ef2cb903-5490-4a24-a71c-75dcb9ffa2ce.png",
    alt: "Ayam Gepuk"
  }, {
    src: "/lovable-uploads/38da9ec1-535a-4754-8319-ab6c70469aa6.png",
    alt: "Wedrink"
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
          delay: 1000,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
          playOnInit: true
        })]} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/5 lg:basis-1/6">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
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
