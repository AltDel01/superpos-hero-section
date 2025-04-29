
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ShoppingBag, Utensils, Beef, Pizza, Beer, Truck, Apple, Salad } from "lucide-react";

const WhomWeHelpSection = () => {
  return <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-primary/10 text-primary px-4 rounded-full text-sm mb-6 font-bold inline-block py-[6px]">
            Who is This For?
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="font-bold italic">SuperPOS</span> is Made<br />Exclusively For You!
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether you're a restaurant owner, grocery store, or any food business looking to optimize operations and increase your online presence - <span className="font-bold italic">SuperPOS</span> has got you covered.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="mb-10 flex justify-center">
          <ToggleGroup type="single" defaultValue="restaurant" className="bg-white rounded-full p-1 shadow-md">
            <ToggleGroupItem value="restaurant" className="rounded-full data-[state=on]:bg-[#FDE1D3] data-[state=on]:text-[#FF6634]">
              <Utensils className="mr-2 h-4 w-4" /> Restaurant
            </ToggleGroupItem>
            <ToggleGroupItem value="grocery" className="rounded-full data-[state=on]:bg-[#FDE1D3] data-[state=on]:text-[#FF6634]">
              <ShoppingBag className="mr-2 h-4 w-4" /> Grocery
            </ToggleGroupItem>
            <ToggleGroupItem value="meat" className="rounded-full data-[state=on]:bg-[#FDE1D3] data-[state=on]:text-[#FF6634]">
              <Beef className="mr-2 h-4 w-4" /> Meat Shop
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Business Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Restaurants */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                <Utensils className="h-8 w-8 text-[#FF6634]" />
              </div>
              <h3 className="font-bold text-xl mb-2">Restaurants</h3>
              <p className="text-gray-600 text-sm">
                Perfect for dine-in restaurants looking to expand with delivery and takeaway options
              </p>
            </CardContent>
          </Card>

          {/* Card 2 - Pizza Shops */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                <Pizza className="h-8 w-8 text-[#FF6634]" />
              </div>
              <h3 className="font-bold text-xl mb-2">Pizza Shops</h3>
              <p className="text-gray-600 text-sm">
                Specialized tools for pizza delivery tracking and order management
              </p>
            </CardContent>
          </Card>

          {/* Card 3 - Liquor Stores */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                <Beer className="h-8 w-8 text-[#FF6634]" />
              </div>
              <h3 className="font-bold text-xl mb-2">Liquor Stores</h3>
              <p className="text-gray-600 text-sm">
                Age verification, inventory management, and safe delivery options
              </p>
            </CardContent>
          </Card>

          {/* Card 4 - Grocery Stores */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-8 w-8 text-[#FF6634]" />
              </div>
              <h3 className="font-bold text-xl mb-2">Grocery Stores</h3>
              <p className="text-gray-600 text-sm">
                Manage extensive inventories and provide convenient delivery scheduling
              </p>
            </CardContent>
          </Card>

          {/* Card 5 - Meat Shops */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                <Beef className="h-8 w-8 text-[#FF6634]" />
              </div>
              <h3 className="font-bold text-xl mb-2">Meat Shops</h3>
              <p className="text-gray-600 text-sm">
                Special features for fresh product handling and temperature-controlled delivery
              </p>
            </CardContent>
          </Card>

          {/* Card 6 - Courier Services */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-[#FF6634]" />
              </div>
              <h3 className="font-bold text-xl mb-2">Courier Services</h3>
              <p className="text-gray-600 text-sm">
                Route optimization and real-time tracking for efficient package delivery
              </p>
            </CardContent>
          </Card>

          {/* Card 7 - Fruit Stores */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                <Apple className="h-8 w-8 text-[#FF6634]" />
              </div>
              <h3 className="font-bold text-xl mb-2">Fruit Stores</h3>
              <p className="text-gray-600 text-sm">
                Seasonal inventory management and freshness tracking for produce
              </p>
            </CardContent>
          </Card>

          {/* Card 8 - Healthy Food */}
          <Card className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border-0 shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                <Salad className="h-8 w-8 text-[#FF6634]" />
              </div>
              <h3 className="font-bold text-xl mb-2">Healthy Food</h3>
              <p className="text-gray-600 text-sm">
                Nutritional information display and specialized prep instructions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};

export default WhomWeHelpSection;
