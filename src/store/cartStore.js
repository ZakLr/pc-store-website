import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],

  addItem: (item) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: (updatedItems[existingItemIndex].quantity || 1) + 1,
        };
        return { cartItems: updatedItems };
      } else {
        return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }
    }),

  removeItem: (index) =>
    set((state) => ({
      cartItems: state.cartItems.filter((_, i) => i !== index),
    })),

  updateQuantity: (index, newQuantity) =>
    set((state) => {
      if (newQuantity <= 0) {
        return { cartItems: state.cartItems.filter((_, i) => i !== index) };
      }

      const updatedItems = [...state.cartItems];
      updatedItems[index] = { ...updatedItems[index], quantity: newQuantity };
      return { cartItems: updatedItems };
    }),

  clearCart: () => set({ cartItems: [] }),
}));
