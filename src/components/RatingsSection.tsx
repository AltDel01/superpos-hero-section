
import React from 'react';
import { Button } from "@/components/ui/button";

const RatingsSection = () => {
  const ratings = [{
    logo: "/lovable-uploads/835cfeaf-8e3d-402c-b9ed-e8534bc2f771.png", // Capterra logo
    rating: 5.0,
    isCapterra: true // Flag to identify Capterra for special styling
  }, {
    logo: "/lovable-uploads/aa4ff6b4-cbbe-4c2d-bd07-6228435e53cc.png",
    rating: 5.0,
    isCapterra: false
  }, {
    logo: "/lovable-uploads/745a76f5-d04a-4e4d-997c-555661a0bb75.png",
    rating: 5.0,
    isCapterra: false
  }];

  return (
    <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">
            <span className="font-bold italic">SuperPOS</span>'s Industry Rating: Trusted by
          </h2>
          <h3 className="text-4xl font-bold">
            Top Software Platforms
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {ratings.map((platform, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={platform.logo} 
                alt="Platform logo" 
                className={`${platform.isCapterra ? 'h-20' : 'h-12'} mb-8 object-contain`} 
              />
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-3xl font-bold ml-2">{platform.rating.toFixed(1)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4">
              Kick Start Your Hyperlocal<br />Business With <span className="font-bold italic">SuperPOS</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Empower Your Local Entrepreneurial Dreams with <span className="font-bold italic">SuperPOS</span>.<br />
              Unleash the Potential of Your Hyperlocal Business Now!
            </p>
            <Button className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white px-6">
              Get Started →
            </Button>
          </div>
          <div className="flex-shrink-0">
            <img src="/lovable-uploads/4bbbfd87-4307-47d3-9ac5-661ab9f0be57.png" alt="Location marker" className="w-48 h-48 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;
