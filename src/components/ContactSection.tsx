
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
  };
  
  return <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-primary/10 text-primary px-4 rounded-full text-sm mb-6 font-bold inline-flex items-center gap-2 py-[6px]">
            Contact Us
          </div>
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about <span className="font-bold italic">SuperPOS</span>? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <User className="h-5 w-5" />
                  </div>
                  <Input type="text" placeholder="Your Name" className="pl-10" required />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <Input type="email" placeholder="Your Email" className="pl-10" required />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <Input type="tel" placeholder="Your Phone" className="pl-10" required />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <Textarea placeholder="Your Message" className="pl-10 min-h-[120px]" required />
                </div>
              </div>

              <Button className="w-full bg-[#FF6634] hover:bg-[#FF6634]/90 text-white">
                Send Message →
              </Button>
            </form>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-lg">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600">
                Stay updated with our latest features and releases
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <Mail className="h-5 w-5" />
                </div>
                <Input type="email" placeholder="Enter your email" className="pl-10" required />
              </div>
              <Button className="w-full bg-[#FF6634] hover:bg-[#FF6634]/90 text-white">
                Subscribe →
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
