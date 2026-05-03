"use client";

import { Search, ShoppingCart, MapPin, User, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function Header() {
  const { toggleCart, totalItems, totalAmount } = useCartStore();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      {/* Top Banner */}
      <div className="bg-[#1a6b2e] text-white text-xs py-1.5 font-medium text-center">
        Express delivery in 10 minutes • Free delivery above ₹299
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button type="button" className="md:hidden p-1 text-gray-700 cursor-pointer">
              <Menu size={24} />
            </button>
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="KiranaCart Logo" 
                width={140} 
                height={40} 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Location Picker (Hidden on small mobile) */}
          <div className="hidden lg:flex items-center gap-2 hover:bg-gray-50 px-3 py-2 rounded-lg cursor-pointer border border-transparent hover:border-gray-200 transition">
            <MapPin size={20} className="text-[#1a6b2e]" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Deliver to</span>
              <span className="text-sm font-semibold text-gray-900 leading-tight">Mumbai 400001</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-auto hidden md:block">
            <div className="relative flex items-center w-full h-12 rounded-xl focus-within:shadow-[0_0_0_2px_rgba(26,107,46,0.2)] focus-within:border-[#1a6b2e] bg-gray-50 border border-gray-200 overflow-hidden transition-all duration-300">
              <div className="grid place-items-center h-full w-12 text-gray-400">
                <Search size={20} />
              </div>
              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-transparent font-medium"
                type="text"
                id="search"
                placeholder="Search for groceries, vegetables, or brands in English or Hindi..."
              />
              <button type="button" className="bg-[#1a6b2e] text-white px-6 h-full font-semibold text-sm hover:bg-[#124d20] transition-colors cursor-pointer flex items-center justify-center">
                Search
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-5">
            <button type="button" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-[#1a6b2e] font-medium transition cursor-pointer">
              <User size={22} />
              <span>Login</span>
            </button>

            <button 
              type="button"
              onClick={toggleCart}
              className="flex items-center gap-2 bg-[#f9c740] hover:bg-[#e0b030] text-gray-900 px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-bold hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <ShoppingCart size={22} />
                {totalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalItems()}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">₹{totalAmount()}</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative flex items-center w-full h-10 rounded-lg bg-gray-50 border border-gray-200 overflow-hidden">
            <div className="grid place-items-center h-full w-10 text-gray-400">
              <Search size={18} />
            </div>
            <input
              className="peer h-full w-full outline-none text-xs text-gray-700 pr-2 bg-transparent"
              type="text"
              placeholder="Search for groceries..."
            />
          </div>
        </div>
      </div>
    </header>
  );
}
