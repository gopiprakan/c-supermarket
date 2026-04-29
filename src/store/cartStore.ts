import { create } from 'zustand';

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  mrp: number;
  quantity: number;
  image: string;
  weight: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  totalAmount: () => number;
  totalItems: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (item) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      return {
        items: state.items.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      };
    }
    return { items: [...state.items, { ...item, quantity: 1 }], isOpen: true };
  }),
  
  removeItem: (id) => set((state) => ({
    items: state.items.filter(i => i.id !== id)
  })),
  
  updateQuantity: (id, quantity) => set((state) => ({
    items: quantity > 0 
      ? state.items.map(i => i.id === id ? { ...i, quantity } : i)
      : state.items.filter(i => i.id !== id)
  })),
  
  clearCart: () => set({ items: [] }),
  
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  totalAmount: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  totalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  }
}));
