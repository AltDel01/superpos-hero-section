
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="py-4 px-6 flex items-center justify-between w-full">
      <img src="/lovable-uploads/2dc3af84-e70e-45ac-893c-cf4eecd98cf4.png" alt="SuperPOS Logo" className="h-12 object-contain" />
      <div className="flex-1 flex justify-center">
        <div className="flex gap-8">
          <a href="#" className="flex items-center text-gray-700 hover:text-primary">
            Product <ChevronDown className="ml-1 h-4 w-4" />
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-primary">
            Solutions <ChevronDown className="ml-1 h-4 w-4" />
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-primary">
            About <ChevronDown className="ml-1 h-4 w-4" />
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-primary">Customer Story</a>
        </div>
      </div>
      <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
        Login / Sign Up
      </Button>
    </nav>
  )
}

export default Navbar
