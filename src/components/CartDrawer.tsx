"use client";

import { useCartStore } from "@/store/cartStore";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function CartDrawer() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, totalAmount, totalItems } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const total = totalAmount();
  const taxes = total * 0.05; // 5% GST
  const delivery = total > 299 ? 0 : 30;
  const grandTotal = total + taxes + delivery;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-gray-50 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-white px-4 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-[#1a6b2e]" size={24} />
            <h2 className="text-lg font-bold text-gray-900">My Cart</h2>
            <span className="bg-[#f9c740] text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full ml-1">
              {totalItems()} items
            </span>
          </div>
          <button onClick={toggleCart} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <ShoppingBag size={64} className="mb-4 text-gray-300" />
              <p className="text-lg font-semibold text-gray-500">Your cart is empty</p>
              <p className="text-sm mt-1 mb-6">Add items to start shopping</p>
              <button 
                onClick={toggleCart}
                className="bg-[#1a6b2e] text-white px-6 py-2 rounded-lg font-bold shadow-sm"
              >
                Browse Products
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3">
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center text-3xl shrink-0">
                  {item.image}
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 leading-tight">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{item.weight}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-bold text-gray-900">₹{item.price}</span>
                      <span className="text-xs text-gray-400 line-through">₹{item.mrp}</span>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center bg-gray-100 rounded-lg p-0.5 border border-gray-200">
                      {item.quantity === 1 ? (
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="w-7 h-7 flex items-center justify-center text-red-500 hover:bg-white rounded shadow-sm transition"
                        >
                          <Trash2 size={14} />
                        </button>
                      ) : (
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white rounded shadow-sm transition"
                        >
                          <Minus size={14} />
                        </button>
                      )}
                      <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#1a6b2e] hover:bg-white rounded shadow-sm transition"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Bill Details */}
        {items.length > 0 && (
          <div className="bg-white border-t border-gray-200 p-4 shrink-0 rounded-t-2xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">Bill Details</h3>
            
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex justify-between">
                <span>Item Total</span>
                <span className="font-medium text-gray-900">₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                {delivery === 0 ? (
                  <span className="font-medium text-[#1a6b2e]">FREE</span>
                ) : (
                  <span className="font-medium text-gray-900">₹{delivery}</span>
                )}
              </div>
              <div className="flex justify-between">
                <span>GST (5%)</span>
                <span className="font-medium text-gray-900">₹{taxes.toFixed(2)}</span>
              </div>
              {total > 299 && (
                <div className="flex justify-between text-[#1a6b2e] text-xs font-semibold bg-green-50 p-2 rounded mt-1">
                  <span>Yay! You unlocked FREE delivery.</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between border-t border-gray-100 pt-3 mb-4">
              <span className="font-bold text-gray-900">To Pay</span>
              <span className="font-bold text-lg text-gray-900">₹{grandTotal.toFixed(2)}</span>
            </div>
            
            <button className="w-full bg-[#1a6b2e] text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-[#124d20] transition-colors flex items-center justify-center gap-2">
              <span>Proceed to Checkout</span>
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function ChevronRight({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
