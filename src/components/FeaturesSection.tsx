
import React from 'react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Globe, Smartphone, Code, QrCode, Share } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    { label: 'Ordering Suite', active: true },
    { label: 'Delivery Suite', active: false },
    { label: 'Back-office Management', active: false },
    { label: 'Marketing Automation', active: false },
    { label: 'Payment Solution', active: false }
  ];

  const orderingFeatures = [
    { icon: Globe, label: 'Ordering Website' },
    { icon: Smartphone, label: 'Branded Mobile Apps' },
    { icon: Code, label: 'Ordering Widget' },
    { icon: QrCode, label: 'QR Code Ordering' },
    { icon: Share, label: 'Social Media Ordering' },
  ];

  return (
    <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-primary/10 text-primary px-4 rounded-full text-sm mb-6 font-bold inline-block py-[6px]">
            Explore Features
          </div>
          <h2 className="text-4xl font-bold mb-10">
            Everything You Need To Run
            <br />
            Your Business
          </h2>

          {/* Features Toggle Group */}
          <ToggleGroup type="single" className="justify-center gap-2 flex-wrap" defaultValue="Ordering Suite">
            {features.map((feature) => (
              <ToggleGroupItem
                key={feature.label}
                value={feature.label}
                className={`rounded-full px-6 py-2 text-sm ${
                  feature.active ? 'bg-primary text-white' : 'bg-[#FFF3ED]'
                }`}
              >
                {feature.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Accept & Manage Orders Online</h3>
            <p className="text-gray-600 mb-6">
              Set up & Grow Your Online Ordering Business in minutes with an all-in-one Online
              Ordering Solution. Let your customers order food and other products online
              straight from your reliable website, app, and a widget.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {orderingFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="inline-flex items-center bg-[#FFF3ED] rounded-full px-4 py-2 mr-2 mb-2"
                >
                  <feature.icon className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm">{feature.label}</span>
                </div>
              ))}
            </div>

            <Button variant="default" className="mt-6">
              Learn More
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="bg-[#FFF3ED] rounded-lg p-4">
            <img
              src="/lovable-uploads/6975dcee-f385-44ed-a50e-b14ba3b2aec4.png"
              alt="Features Dashboard"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
