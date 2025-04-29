
import React from 'react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const StatsSection = () => {
  return <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-primary/10 text-primary px-4 rounded-full text-sm mb-6 font-bold inline-block py-[6px]">
            Pride
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Our Numbers Speak<br />For Themselves
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            <span className="font-bold italic">SuperPOS</span> has helped numerous businesses grow their online presence and streamline operations. Here's a glimpse of our impact.
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="text-5xl font-bold text-[#FF6634] mb-2">310+</div>
              <p className="text-gray-600">Businesses Using SuperPOS</p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="text-5xl font-bold text-[#FF6634] mb-2">12K+</div>
              <p className="text-gray-600">Daily Orders Processed</p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="text-5xl font-bold text-[#FF6634] mb-2">99.9%</div>
              <p className="text-gray-600">Uptime Reliability</p>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="text-5xl font-bold text-[#FF6634] mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Stats in Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Row 2 - Card 1 */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="text-5xl font-bold text-[#FF6634] mb-2">5M+</div>
              <p className="text-gray-600">Registered App Users</p>
            </CardContent>
          </Card>

          {/* Row 2 - Card 2 */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="text-5xl font-bold text-[#FF6634] mb-2">4.8/5</div>
              <p className="text-gray-600">Average App Rating</p>
            </CardContent>
          </Card>

          {/* Row 2 - Card 3 */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="text-5xl font-bold text-[#FF6634] mb-2">25+</div>
              <p className="text-gray-600">Countries Served</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};

export default StatsSection;
