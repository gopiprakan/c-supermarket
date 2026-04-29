import ProductCard from "@/components/ProductCard";
import { Filter, ChevronDown } from "lucide-react";

const DEALS = [
  { id: 101, name: "Fresh Onion (Pyaz)", weight: "1 kg", mrp: 40, price: 32, discount: 20, image: "🧅", tag: "Fresh" },
  { id: 102, name: "Tomato - Local (Tamatar)", weight: "1 kg", mrp: 50, price: 45, discount: 10, image: "🍅", tag: "Fresh" },
  { id: 103, name: "Potato (Aloo)", weight: "1 kg", mrp: 35, price: 28, discount: 20, image: "🥔", tag: "Daily Need" },
  { id: 104, name: "Fresh Coriander Leaves (Dhania)", weight: "100 g", mrp: 15, price: 12, discount: 20, image: "🌿", tag: "Fresh" },
  { id: 105, name: "Green Chilli (Hari Mirch)", weight: "100 g", mrp: 20, price: 15, discount: 25, image: "🌶️", tag: "Spicy" },
  { id: 106, name: "Lemon (Nimbu)", weight: "250 g", mrp: 40, price: 30, discount: 25, image: "🍋", tag: "Citrus" },
  { id: 107, name: "Garlic (Lahsun)", weight: "250 g", mrp: 80, price: 65, discount: 18, image: "🧄", tag: "Essential" },
  { id: 108, name: "Ginger (Adrak)", weight: "250 g", mrp: 60, price: 48, discount: 20, image: "🫚", tag: "Fresh" },
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-4 flex items-center gap-1">
          <span>Home</span>
          <span>/</span>
          <span className="font-semibold text-gray-800">{categoryName}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hidden lg:block h-fit">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-900 flex items-center gap-2">
                <Filter size={18} /> Filters
              </h2>
              <button className="text-sm text-[#1a6b2e] font-semibold">Clear All</button>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm text-gray-800 mb-3">Price Range</h3>
              <div className="space-y-2">
                {["Under ₹50", "₹50 - ₹100", "₹100 - ₹200", "Over ₹200"].map((range, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1a6b2e] focus:ring-[#1a6b2e]" />
                    <span className="text-sm text-gray-600">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm text-gray-800 mb-3">Discount</h3>
              <div className="space-y-2">
                {["10% or more", "20% or more", "30% or more"].map((discount, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1a6b2e] focus:ring-[#1a6b2e]" />
                    <span className="text-sm text-gray-600">{discount}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">{categoryName} <span className="text-sm text-gray-500 font-normal ml-2">(124 items)</span></h1>
              
              <div className="flex items-center gap-3">
                <button className="lg:hidden flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-lg text-sm font-semibold">
                  <Filter size={16} /> Filter
                </button>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg text-sm font-semibold cursor-pointer">
                  <span>Sort by: Relevance</span>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {DEALS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
