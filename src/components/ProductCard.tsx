"use client";

import { useCartStore } from "@/store/cartStore";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  weight: string;
  mrp: number;
  price: number;
  discount: number;
  image: string;
  tag: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, updateQuantity, items } = useCartStore();
  const cartItem = items.find(i => i.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      mrp: product.mrp,
      quantity: 1,
      image: product.image,
      weight: product.weight
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition relative group flex flex-col h-full"
    >
      {/* Discount Badge */}
      <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">
        {product.discount}% OFF
      </div>
      
      {/* Image Placeholder */}
      <div className="w-full h-32 md:h-40 flex items-center justify-center text-6xl mb-3 bg-gray-50 rounded-lg">
        {product.image}
      </div>
      
      <p className="text-xs text-gray-500 mb-1">{product.weight}</p>
      <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-2 flex-grow line-clamp-2">
        {product.name}
      </h3>
      
      <div className="mt-auto pt-2">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
          <span className="text-xs text-gray-400 line-through">₹{product.mrp}</span>
        </div>
        
        {quantity > 0 ? (
          <div className="w-full bg-[#1a6b2e] text-white flex items-center justify-between rounded-lg overflow-hidden font-bold h-[34px]">
            <button 
              type="button"
              className="w-10 h-full flex items-center justify-center hover:bg-[#124d20] transition cursor-pointer"
              onClick={() => updateQuantity(product.id, quantity - 1)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button 
              type="button"
              className="w-10 h-full flex items-center justify-center hover:bg-[#124d20] transition cursor-pointer"
              onClick={() => updateQuantity(product.id, quantity + 1)}
            >
              +
            </button>
          </div>
        ) : (
          <button 
            type="button"
            onClick={handleAdd}
            className="w-full bg-white border border-[#1a6b2e] text-[#1a6b2e] font-bold h-[34px] flex items-center justify-center rounded-lg hover:bg-[#1a6b2e] hover:text-white transition cursor-pointer"
          >
            ADD
          </button>
        )}
      </div>
    </motion.div>
  );
}
