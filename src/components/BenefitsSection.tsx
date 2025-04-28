import React from 'react';
import { CheckCircle, Store, ShoppingBag, CreditCard, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-primary/10 text-primary px-4 rounded-full text-sm mb-6 font-bold inline-flex items-center gap-2 py-[6px]">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span><span className="font-bold italic">SuperPOS</span> Helps</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            How <span className="font-bold italic">SuperPOS</span> Enables<br />Your Success?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of tools and features designed to empower your business and drive success in today's competitive market.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Seamless Online Ordering</h3>
            <p className="text-gray-600 text-center">
              Enable customers to easily place orders online, enhancing convenience and expanding your reach.
            </p>
          </div>

          {/* Benefit Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Store className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Efficient Store Management</h3>
            <p className="text-gray-600 text-center">
              Streamline your store operations with intuitive tools for inventory, menu management, and more.
            </p>
          </div>

          {/* Benefit Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Delivery Management</h3>
            <p className="text-gray-600 text-center">
              Optimize your delivery process with real-time tracking, driver management, and route optimization.
            </p>
          </div>

          {/* Benefit Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <CreditCard className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payment Processing</h3>
            <p className="text-gray-600 text-center">
              Ensure secure and reliable payment processing for online and in-store transactions.
            </p>
          </div>

          {/* Benefit Card 5 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Data-Driven Insights</h3>
            <p className="text-gray-600 text-center">
              Gain valuable insights into your business performance with comprehensive analytics and reporting tools.
            </p>
          </div>

          {/* Benefit Card 6 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Customer Loyalty Programs</h3>
            <p className="text-gray-600 text-center">
              Implement loyalty programs to reward your best customers and encourage repeat business.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white px-8">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
