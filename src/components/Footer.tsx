
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cylinder } from "lucide-react";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="relative">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-b from-[#FF6634] to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-16 space-y-4">
            <h3 className="text-3xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-white/90 max-w-xl text-center mb-6">
              Stay updated with our latest features and releases
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
              <div className="relative flex-1">
                <div className="absolute left-3 top-2.5 text-gray-500">
                  <Cylinder className="h-5 w-5" />
                </div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-11 w-full bg-white rounded-full"
                  required
                />
              </div>
              <Button type="submit" className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white rounded-full px-6">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <img src="/lovable-uploads/6e6ab558-a577-424d-97fe-69b67d1817ee.png" alt="SuperPOS" className="h-12 mb-4" />
              <p className="text-gray-700 text-sm">
                <span className="font-bold italic">SuperPOS</span> offers a Complete Online POS System for Food, Groceries, Meat, Milk, Snack, and more.
              </p>
              <p className="text-gray-700 text-sm mt-4">
                Our platform is ideally suited for Small Food Outlet, Chain Restaurants, and cloud Kitchens.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-lg mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]"><span className="font-bold italic">SuperPOS</span> Express</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]"><span className="font-bold italic">SuperPOS</span> Ressto</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]">Driver App</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]">Merchant App</a></li>
              </ul>
            </div>

            {/* Quick Look */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Look</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]">Pricing</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]">Blog</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]">About Us</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]">FAQs</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]">Customers</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]">Contact Us</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]">Knowledge Base</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]">Raise Ticket</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]">Track Ticket</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#FF6634]">Become a Partner/Reseller</a></li>
              </ul>
            </div>
          </div>

          {/* Usecases */}
          <div className="mb-12">
            <h5 className="font-bold mb-3">Usecases:</h5>
            <div className="flex flex-wrap gap-2 text-sm text-gray-700">
              <span>→ Food Delivery</span>
              <span>→ Grocery Delivery</span>
              <span>→ Meat Delivery</span>
              <span>→ Catering Delivery</span>
              <span>→ Liquor Delivery</span>
              <span>→ Pizza Delivery</span>
              <span>→ Healthy Food Delivery</span>
              <span>→ Courier Delivery</span>
              <span>→ Protein bar Delivery</span>
              <span>→ Milk Delivery</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <div className="flex gap-4 mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-600 hover:text-[#FF6634]">Terms of Service</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#FF6634]">Privacy Policy</a>
            </div>
            <div className="text-sm text-gray-600">
              © 2025 <span className="font-bold italic">SuperPOS</span> All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
