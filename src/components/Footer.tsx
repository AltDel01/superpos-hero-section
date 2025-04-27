
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cylinder, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#FF6634] to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/94201b22-772f-44e8-b478-d943f8168ed7.png" 
              alt="SuperPOS" 
              className="h-32 mb-4"
            />
            <p className="text-white text-sm">
              <span className="font-bold italic">SuperPOS</span> offers a Complete Online POS System for Food, Groceries, Meat, Milk, Snack, and more.
            </p>
            <p className="text-white text-sm mt-4">
              Our platform is ideally suited for Small Food Outlet, Chain Restaurants, and cloud Kitchens.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white hover:text-[#FF6634] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#FF6634] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#FF6634] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#FF6634] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#FF6634] transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-[#FF6634]"><span className="font-bold italic">SuperPOS</span> Express</a></li>
              <li><a href="#" className="text-white hover:text-[#FF6634]"><span className="font-bold italic">SuperPOS</span> Ressto</a></li>
              <li><a href="#" className="text-white hover:text-[#FF6634]">Driver App</a></li>
              <li><a href="#" className="text-white hover:text-[#FF6634]">Merchant App</a></li>
            </ul>
          </div>

          {/* Quick Look */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Look</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-[#FF6634]">Pricing</a></li>
              <li><a href="#" className="text-white hover:text-[#FF6634]">Blog</a></li>
              <li><a href="#" className="text-white hover:text-[#FF6634]">About Us</a></li>
              <li><a href="#" className="text-white hover:text-[#FF6634]">FAQs</a></li>
              <li><a href="#" className="text-white hover:text-[#FF6634]">Customers</a></li>
            </ul>
          </div>

          {/* Newsletter Section - Moved next to Contact Us */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Get in Touch</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-[#FF6634]">Contact Us</a></li>
              <li><a href="#" className="text-white hover:text-[#FF6634]">Knowledge Base</a></li>
              <li><a href="#" className="text-white hover:text-[#FF6634]">Raise Ticket</a></li>
              <li><a href="#" className="text-white hover:text-[#FF6634]">Track Ticket</a></li>
              <li><a href="#" className="text-white hover:text-[#FF6634]">Become a Partner/Reseller</a></li>
            </ul>
          </div>
        </div>

        {/* Usecases */}
        <div className="mb-12">
          <h5 className="font-bold mb-3 text-white">Usecases:</h5>
          <div className="flex flex-wrap gap-2 text-sm text-white">
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

        {/* Newsletter Section */}
        <div className="py-8">
          <div className="max-w-md">
            <div className="flex flex-col space-y-4">
              <h3 className="text-3xl font-bold text-black mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-black/70 max-w-xl mb-6">
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
                    className="pl-10 h-11 w-full bg-white rounded-full border border-gray-300"
                    required
                  />
                </div>
                <Button type="submit" className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white rounded-full px-6">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="text-sm text-white hover:text-[#FF6634]">Terms of Service</a>
            <a href="#" className="text-sm text-white hover:text-[#FF6634]">Privacy Policy</a>
          </div>
          <div className="text-sm text-white">
            © 2025 <span className="font-bold italic">SuperPOS</span> All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
