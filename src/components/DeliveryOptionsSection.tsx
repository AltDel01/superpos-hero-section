
import React from 'react';
import { Utensils, ShoppingBasket, Pizza, Beef, Wine, Stethoscope } from 'lucide-react';

const DeliveryOptionsSection = () => {
  const deliveryOptions = [
    {
      icon: <Utensils className="w-8 h-8 text-orange-500" />,
      title: "Food Delivery",
      imageUrl: "/lovable-uploads/27f13b91-dc4c-4510-82e0-888e564af6df.png"
    },
    {
      icon: <ShoppingBasket className="w-8 h-8 text-orange-500" />,
      title: "Grocery Delivery",
      imageUrl: "/lovable-uploads/f93e5bd8-fa7e-475e-afa6-b0c6c67bddaf.png"
    },
    {
      icon: <Pizza className="w-8 h-8 text-orange-500" />,
      title: "Pizza Delivery",
      imageUrl: "/lovable-uploads/6d688bb5-c2f1-4703-a534-8281b4fc9fe0.png"
    },
    {
      icon: <Beef className="w-8 h-8 text-orange-500" />,
      title: "Meat Delivery",
      imageUrl: "/lovable-uploads/1da599b8-654e-4f64-832c-b8b7adce443c.png"
    },
    {
      icon: <Wine className="w-8 h-8 text-orange-500" />,
      title: "Liquor Delivery",
      imageUrl: "/lovable-uploads/48df855d-ec0b-41ea-919a-11f1e81f4da9.png"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-orange-500" />,
      title: "Pharmacy Delivery",
      imageUrl: "/lovable-uploads/c3abadd1-c712-46b2-b9e4-2a37ee810ae0.png"
    }
  ];

  return (
    <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-[#1a1f2c] max-w-4xl mx-auto leading-tight">
            Our Online Order Taking System Loved By
            <br />
            Millions Restaurants & Aggregators
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quickly set up your online businesses and secure endless growth with our fully customizable readymade solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliveryOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4">{option.title}</h3>
              <div className="w-full h-[500px] relative overflow-hidden rounded-xl flex items-center justify-center group">
                <img
                  src={option.imageUrl}
                  alt={option.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryOptionsSection;
