import React from 'react';
import { Calendar, Flag, Store, Users } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-primary/10 text-primary px-4 rounded-full text-sm mb-6 font-bold inline-flex items-center gap-2 py-[6px]">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Pride
          </div>
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-[#1a1f2c] max-w-4xl mx-auto leading-tight">
            Empowering Food Delivery Startups, SMBs, Franchises, And Big Enterprises Everywhere
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Orders Stat */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <Calendar className="w-8 h-8 mb-4 text-[#FF6634]" />
            <h3 className="text-4xl font-bold text-[#1a1f2c] mb-2">140K</h3>
            <p className="text-gray-600">Orders Delivering every month by our Solution</p>
          </div>

          {/* Countries Stat */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <Flag className="w-8 h-8 mb-4 text-[#FF6634]" />
            <h3 className="text-4xl font-bold text-[#1a1f2c] mb-2">48+</h3>
            <p className="text-gray-600">Countries using our solution and Growing</p>
          </div>

          {/* Business Stat */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <Store className="w-8 h-8 mb-4 text-[#FF6634]" />
            <h3 className="text-4xl font-bold text-[#1a1f2c] mb-2">20,000+</h3>
            <p className="text-gray-600">Business Onboarded on our solution</p>
          </div>

          {/* Revenue Stat */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <Users className="w-8 h-8 mb-4 text-[#FF6634]" />
            <h3 className="text-4xl font-bold text-[#1a1f2c] mb-2">1 Billion +</h3>
            <p className="text-gray-600">Revenue made with this solution and growing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
