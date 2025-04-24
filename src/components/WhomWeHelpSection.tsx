
import React from 'react';
import { Rocket, Cloud, Link, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhomWeHelpSection = () => {
  const cards = [
    {
      icon: Rocket,
      title: "F&B Outlet",
      description: "Starting your journey with the passion of cooking? Put your foot strong with our White-label F&B App Solution that offers a complete suite of advanced features to succeed.",
      image: "/lovable-uploads/43ba9eb3-6d64-41a2-9678-bee53bd73e26.png" // Woman serving bread image
    },
    {
      icon: Link,
      title: "Chain Restaurants",
      description: "Want to simplify operational workflows of your restaurant chains? Our readymade Food delivery solution automates food orders & deliveries to simplify business management.",
      image: "/lovable-uploads/47b352f3-a8e6-4c8a-b527-11f2104e5e5f.png" // Solaria restaurant image
    },
    {
      icon: Cloud,
      title: "Cloud Kitchens",
      description: "Want a platform for your dark kitchen to connect with your customers? Count on your readymade white-label restaurant delivery solution and flaunt your delicious meals online.",
      image: "/lovable-uploads/23ce913a-cf19-4d4c-927d-f1c914df5caf.png" // Kitchen staff working image
    },
    {
      icon: Truck,
      title: "Delivery Company",
      description: "We empower delivery companies to streamline operations, enhance efficiency, and exceed customer expectations in today's fast-paced digital landscape.",
      image: "/lovable-uploads/fa4b1ad9-442b-49bd-b031-1c861a1c36e3.png" // Delivery man in red image
    }
  ];

  return (
    <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-primary/10 text-primary px-4 rounded-full text-sm mb-6 font-bold inline-flex items-center gap-2 py-[6px]">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Who is This For?
          </div>
          <h2 className="text-4xl font-bold mb-4">Whom we help</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you own a multinational restaurant chain or running a small pizzeria,{' '}
            <span className="font-medium">SuperPOS</span> can turn your business online within minutes; no fuss or delay.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg flex">
              <div className="p-8 flex-1">
                <card.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
              <div className="w-[200px] bg-gray-100">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8">
            Get Started
          </Button>
          <Button variant="outline" className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10">
            Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhomWeHelpSection;
