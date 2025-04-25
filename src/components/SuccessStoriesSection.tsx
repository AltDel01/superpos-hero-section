
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const SuccessStoriesSection = () => {
  const stories = [{
    title: "UPH Canteen (Kawaraci)",
    description: "UPH Canteen serves as the leading healthy catering for retail and events. Providing a comprehensive platform for customers to order a wide array of food products, utilities, groceries, and everyday essentials from their preferred stores and restaurants, UPH Canteen ensures swift and hassle-free deliveries.",
    image: "/lovable-uploads/9acab3ce-cca1-47e6-b093-02130bd8caab.png",
    logo: "/lovable-uploads/87d92d85-c1fb-43d4-b56c-4308abb7ca26.png"
  }, {
    title: "Go Food Court (Bekasi)",
    description: "GO Foodcourt, Bekasi's first secure and cashless food ordering and delivery service, is revolutionizing dining in Bekasi with over 10,000+ downloads. By integrating mobile apps for consumers, vendors, and delivery drivers, GO Foodcourt offers PCI-compliant payments, real-time order tracking, and driver identification, setting a new standard for digital food services and supporting local businesses.",
    image: "/lovable-uploads/56c9cf2e-4d00-4897-9233-494aac9ba45e.png",
    logo: "/lovable-uploads/773017b7-cd5a-4380-9314-bc4c6f85d342.png"
  }];
  
  return <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-[#ffdfd3] text-[#FF6634] hover:bg-[#ffdfd3]/90 px-6 py-2 rounded-full mb-6">
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Noteworthy Use Cases<br />To Inspire You
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            See how existing clients are using our SaaS-based online ordering and delivery solutions to increase profits, customer base, and brand presence. This could be you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => <Card key={index} className="bg-white rounded-3xl overflow-hidden border shadow-lg">
              <CardContent className="p-6">
                <div className="relative w-full aspect-[16/9] mb-4 bg-[#f4f4f4] rounded-2xl flex items-center justify-center">
                  <img src={story.image} alt={story.title} className="w-full h-full object-contain p-4" />
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#f4f4f4] flex items-center justify-center overflow-hidden">
                    <img src={story.logo} alt={`${story.title} logo`} className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="text-lg font-bold">{story.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {story.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};

export default SuccessStoriesSection;
