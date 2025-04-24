
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const BrandsSection = () => {
  const brands = [{
    src: "/lovable-uploads/0a3c9115-de18-47e1-a54f-3bb707f12066.png",
    alt: "88 Esteler"
  }, {
    src: "/lovable-uploads/f43a8670-8382-49a4-80c7-281659680fea.png",
    alt: "SEC Bowl"
  }, {
    src: "/lovable-uploads/c8446695-18d3-4e4b-826f-c7aefac85289.png",
    alt: "Roti'O"
  }, {
    src: "/lovable-uploads/1220abb3-3b80-4113-acef-5410eb6491b3.png",
    alt: "Wedrink"
  }, {
    src: "/lovable-uploads/18a50f87-cd81-4a12-86c2-e70bcb81d974.png",
    alt: "Tomoro Coffee"
  }, {
    src: "/lovable-uploads/5c6f9ac7-2fa0-4535-be0c-381db38f3a42.png",
    alt: "SEC Bowl Lite"
  }, {
    src: "/lovable-uploads/995e4bec-d012-489f-873a-5236b1d474af.png",
    alt: "Solaria"
  }, {
    src: "/lovable-uploads/87844aaf-0a71-477b-9478-a8b06e956b0c.png",
    alt: "Fogo Brazilian BBQ"
  }, {
    src: "/lovable-uploads/c739474c-5892-425e-a3e5-bd354a16fa58.png",
    alt: "Grand Wing Heng"
  }, {
    src: "/lovable-uploads/6f820d8e-5bf9-4b01-8bb6-5a29766dc43d.png",
    alt: "Hangry"
  }, {
    src: "/lovable-uploads/9b4800e9-6a98-4f3d-931a-5cae6a65de87.png",
    alt: "Hangry Alt"
  }, {
    src: "/lovable-uploads/49955802-dd8b-460f-b77f-9be6d311d916.png",
    alt: "Ayam Gepuk"
  }, {
    src: "/lovable-uploads/43ee26dc-d226-4634-b6a0-591d7bc34484.png",
    alt: "Nissin x Irvins"
  }, {
    src: "/lovable-uploads/9cea3ff6-7c45-44b9-8b75-cab287ab533e.png",
    alt: "Ikan Bakar"
  }, {
    src: "/lovable-uploads/4fff51cb-329d-4c1c-b6c4-a337bc59e1f2.png",
    alt: "Pagi Sore"
  }, {
    src: "/lovable-uploads/05d1914b-a607-4f95-8092-6ee255106e2b.png",
    alt: "Gelato"
  }, {
    src: "/lovable-uploads/d2dd8840-7bfa-44b0-8616-bcdf8ae80b28.png",
    alt: "Wallace"
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
          delay: 2000, // Increased delay for slower animation
          stopOnInteraction: false,
          stopOnMouseEnter: false,
          playOnInit: true
        })]} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/5 lg:basis-1/6">
                <div className="aspect-square w-full bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
                  <img 
                    src={brand.src} 
                    alt={brand.alt} 
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-500" 
                  />
                </div>
              </CarouselItem>)}
          </CarouselContent>
        </Carousel>
      </div>
    </section>;
};

export default BrandsSection;
