
import React from 'react';
import { Hand, RefreshCw, Shield, Settings, Key, DollarSign, CloudUpload, Smile } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Hand className="w-8 h-8 text-primary" />,
      title: "Easiest",
      subtitle: "Usability"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary" />,
      title: "Periodic",
      subtitle: "Updates"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "More",
      subtitle: "Security"
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Regular",
      subtitle: "Maintainance"
    },
    {
      icon: <Key className="w-8 h-8 text-primary" />,
      title: "Access Anytime",
      subtitle: "Anywhere"
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Constant Technical",
      subtitle: "Support"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "No Huge Upfront",
      subtitle: "Investment"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Better",
      subtitle: "ROI"
    },
    {
      icon: <CloudUpload className="w-8 h-8 text-primary" />,
      title: "99.99%",
      subtitle: "Uptime"
    },
    {
      icon: <Smile className="w-8 h-8 text-primary" />,
      title: "Best User",
      subtitle: "Experience"
    }
  ];

  return (
    <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-white inline-block px-6 py-2 rounded-full mb-6">
            <span className="font-semibold">SuperPOS</span> helps
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            How <span className="italic">SuperPOS</span> Enables
            <br />
            Your Success?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 bg-[#f4efe9] p-4 rounded-2xl">
                {benefit.icon}
              </div>
              <h3 className="font-semibold mb-1">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
