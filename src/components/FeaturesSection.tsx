import React from 'react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Globe, Smartphone, Code, QrCode, Share } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
const FeaturesSection = () => {
  const features = [{
    label: 'Ordering Suite',
    active: true
  }, {
    label: 'Delivery Suite',
    active: false
  }, {
    label: 'Back-office Management',
    active: false
  }, {
    label: 'Marketing Automation',
    active: false
  }, {
    label: 'Payment Solution',
    active: false
  }];
  const orderingFeatures = [{
    icon: Globe,
    label: 'Ordering Website'
  }, {
    icon: Smartphone,
    label: 'Branded Mobile Apps'
  }, {
    icon: Code,
    label: 'Ordering Widget'
  }, {
    icon: QrCode,
    label: 'QR Code Ordering'
  }, {
    icon: Share,
    label: 'Social Media Ordering'
  }];
  return <section className="py-16 bg-[#f4efe9]">
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
            {features.map(feature => <ToggleGroupItem key={feature.label} value={feature.label} className={`rounded-full px-6 py-2 text-sm ${feature.active ? 'bg-[#F97316] text-white hover:bg-[#F97316]/90' : 'bg-[#FDE1D3] text-[#F97316] hover:bg-[#FDE1D3]/90'}`}>
                {feature.label}
              </ToggleGroupItem>)}
          </ToggleGroup>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <Card className="p-8 border-0 shadow-lg py-[120px]">
            <CardContent className="p-0 space-y-6">
              <h3 className="text-2xl font-bold">Accept & Manage Orders Online</h3>
              <p className="text-gray-600">
                Set up & Grow Your Online Ordering Business in minutes with an all-in-one Online
                Ordering Solution. Let your customers order food and other products online
                straight from your reliable website, app, and a widget.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {orderingFeatures.map(feature => <div key={feature.label} className="inline-flex items-center bg-[#FDE1D3] rounded-full px-4 py-2 mr-2 mb-2">
                    <feature.icon className="w-4 h-4 mr-2 text-[#F97316]" />
                    <span className="text-sm text-[#F97316]">{feature.label}</span>
                  </div>)}
              </div>

              <Button variant="default" className="bg-[#F97316] hover:bg-[#F97316]/90 text-white">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Right Column - Image */}
          <div className="bg-[#FDE1D3] rounded-lg p-4">
            <img src="/lovable-uploads/c9cb59bc-4dcd-4d68-92ba-e98a951c9e25.png" alt="Features Dashboard" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturesSection;