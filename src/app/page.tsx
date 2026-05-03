import Image from "next/image";
import Link from "next/link";
import { Clock, Tag, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";

// Mock data for categories
const CATEGORIES = [
  { name: "Vegetables", image: "🥗", color: "bg-green-100" },
  { name: "Fruits", image: "🍎", color: "bg-red-100" },
  { name: "Dairy & Eggs", image: "🥛", color: "bg-blue-100" },
  { name: "Atta & Rice", image: "🌾", color: "bg-amber-100" },
  { name: "Dal & Pulses", image: "🥣", color: "bg-orange-100" },
  { name: "Oils & Ghee", image: "🫙", color: "bg-yellow-100" },
  { name: "Snacks", image: "🍪", color: "bg-pink-100" },
  { name: "Beverages", image: "🧃", color: "bg-purple-100" },
  { name: "Household", image: "🧼", color: "bg-teal-100" },
];

const DEALS = [
  { id: 1, name: "Aashirvaad Select Premium Sharbati Atta", weight: "5 kg", mrp: 350, price: 299, discount: 14, image: "🌾", tag: "Deal of the Day" },
  { id: 2, name: "Amul Taaza Homogenised Toned Milk", weight: "1 L", mrp: 74, price: 72, discount: 2, image: "🥛", tag: "Popular" },
  { id: 3, name: "Fortune Sunlite Refined Sunflower Oil", weight: "1 L", mrp: 180, price: 135, discount: 25, image: "🫙", tag: "Super Saver" },
  { id: 4, name: "Tata Salt, Vacuum Evaporated Iodised", weight: "1 kg", mrp: 28, price: 24, discount: 14, image: "🧂", tag: "Essential" },
  { id: 5, name: "Surf Excel Easy Wash Detergent Powder", weight: "1.5 kg", mrp: 225, price: 199, discount: 11, image: "🧼", tag: "Combo Pack" },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/hero_banner.png"
            alt="Super Offers - Upto 50% Off"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Categories Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Shop by Category</h2>
        </div>
        <div className="flex overflow-x-auto pb-4 gap-4 sm:gap-6 hide-scrollbar snap-x">
          {CATEGORIES.map((cat, idx) => (
            <Link href={`/category/${cat.name.toLowerCase()}`} key={idx} className="snap-start shrink-0 flex flex-col items-center gap-2 group cursor-pointer">
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-3xl sm:text-4xl ${cat.color} group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}>
                {cat.image}
              </div>
              <span className="text-sm font-medium text-gray-700 text-center w-20 sm:w-24 leading-tight">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Deal of the Day */}
      <section className="bg-orange-50 py-8 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-500 text-white p-2 rounded-lg">
                <Clock size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">Deal of the Day</h2>
                <p className="text-sm text-red-600 font-semibold">Ends in 04:23:15</p>
              </div>
            </div>
            <button type="button" className="text-[#1a6b2e] font-semibold flex items-center justify-center hover:underline cursor-pointer">
              View All <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {DEALS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Offers & Bank Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-6 text-white shadow-sm flex flex-col justify-center items-start">
            <h3 className="text-xl font-bold mb-1">Buy 2 Get 1 Free</h3>
            <p className="text-sm text-purple-100 mb-4">On selected chocolates & snacks</p>
            <button type="button" className="bg-white text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold cursor-pointer">Shop Now</button>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-sm flex flex-col justify-center items-start">
            <div className="flex items-center gap-2 mb-1">
              <Tag size={20} />
              <h3 className="text-xl font-bold">Flat ₹100 Cashback</h3>
            </div>
            <p className="text-sm text-green-100 mb-4">On orders above ₹999 via UPI</p>
            <button type="button" className="bg-white text-emerald-600 px-4 py-1.5 rounded-full text-sm font-bold cursor-pointer">Claim Offer</button>
          </div>
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl p-6 text-white shadow-sm flex flex-col justify-center items-start">
            <h3 className="text-xl font-bold mb-1">Combo Packs</h3>
            <p className="text-sm text-amber-50 mb-4">Save up to 30% on monthly essentials</p>
            <button type="button" className="bg-white text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold cursor-pointer">Explore</button>
          </div>
        </div>
      </section>
    </div>
  );
}
