
import React from 'react';
import { Hand, RefreshCw, Shield, Settings, Key, Headphones, DollarSign, CloudUpload, Smile } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Hand strokeWidth={1.5} />,
      accentColor: "#FF6634",
      title: "Easiest",
      subtitle: "Usability"
    },
    {
      icon: <RefreshCw strokeWidth={1.5} />,
      accentColor: "#FF6634",
      title: "Periodic",
      subtitle: "Updates"
    },
    {
      icon: <Shield strokeWidth={1.5} />,
      accentColor: "#FF6634",
      title: "More",
      subtitle: "Security"
    },
    {
      icon: <Settings strokeWidth={1.5} />,
      accentColor: "#FF6634",
      title: "Regular",
      subtitle: "Maintainance"
    },
    {
      icon: <Key strokeWidth={1.5} />,
      accentColor: "#FF6634",
      title: "Access Anytime",
      subtitle: "Anywhere"
    },
    {
      icon: <Headphones strokeWidth={1.5} />,
      accentColor: "#FF6634",
      title: "Constant Technical",
      subtitle: "Support"
    },
    {
      icon: <DollarSign strokeWidth={1.5} />,
      accentColor: "#FF6634",
      title: "No Huge Upfront",
      subtitle: "Investment"
    },
    {
      icon: <RefreshCw strokeWidth={1.5} />,
      accentColor: "#FF6634",
      title: "Better",
      subtitle: "ROI"
    },
    {
      icon: <CloudUpload strokeWidth={1.5} />,
      accentColor: "#FF6634",
      title: "99.99%",
      subtitle: "Uptime"
    },
    {
      icon: <Smile strokeWidth={1.5} />,
      accentColor: "#FF6634",
      title: "Best User",
      subtitle: "Experience"
    }
  ];

  const DualColorIcon = ({ icon, accentColor }) => {
    return (
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Base icon (dark outline) */}
        <div className="absolute inset-0 flex items-center justify-center">
          {React.cloneElement(icon, {
            className: "w-10 h-10",
            stroke: "#0F172A"
          })}
        </div>
        
        {/* Accent parts (orange) */}
        <div className="absolute inset-0 flex items-center justify-center">
          {React.cloneElement(icon, {
            className: "w-6 h-6",
            stroke: accentColor
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-white text-black hover:bg-white px-6 py-2 rounded-full mb-6 font-normal">
            <span className="font-semibold">SuperPOS</span> helps
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            How <span className="font-bold">SuperPOS</span> Enables
            <br />
            Your Success?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-0 rounded-3xl shadow-sm"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  <DualColorIcon icon={benefit.icon} accentColor={benefit.accentColor} />
                </div>
                <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="font-bold text-sm text-gray-600">{benefit.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

