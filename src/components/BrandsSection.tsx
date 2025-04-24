
const BrandsSection = () => {
  const brands = [
    { src: "/lovable-uploads/1c0c9294-a28f-4ae4-ae2e-23c6af0268aa.png", alt: "Solaria" },
    { src: "/lovable-uploads/ed1ab54e-c773-43ce-9918-5745f7731440.png", alt: "Fogo Brazilian BBQ" },
    { src: "/lovable-uploads/a9dcd907-81bc-410c-a97e-5fcda90eac59.png", alt: "Grand Wing Heng" },
    { src: "/lovable-uploads/dac6333a-3908-4524-9a02-e38f0bd95d41.png", alt: "Hangry" },
    { src: "/lovable-uploads/ef2cb903-5490-4a24-a71c-75dcb9ffa2ce.png", alt: "Ayam Gepuk" },
    { src: "/lovable-uploads/fdafbee7-fe06-46ce-b983-31e705442164.png", alt: "Nissin x Irvins" },
    { src: "/lovable-uploads/aa7e7321-7365-4f48-9042-0340bd93f69a.png", alt: "Roti'O" },
    { src: "/lovable-uploads/38da9ec1-535a-4754-8319-ab6c70469aa6.png", alt: "Wedrink" },
    { src: "/lovable-uploads/a84f5611-bf44-4e6a-8a49-abc4e4d83a05.png", alt: "Tomoro Coffee" },
    { src: "/lovable-uploads/fe6b5bad-5863-4068-bbcf-cee9d95580d1.png", alt: "Sec Bowl" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-primary mb-4 font-medium">
            Brands That Trust Us
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Trusted By Over Thousands Of F&B
            <br />
            Businesses Across the world
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div key={index} className="w-32 h-32 flex items-center justify-center p-4">
              <img
                src={brand.src}
                alt={brand.alt}
                className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
