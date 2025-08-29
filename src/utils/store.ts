
import { ActionTypes, CartType } from "@/types/types";
import { create } from "zustand";

const initalState = {
  product: [],
  total: 0,
  totalPrice: 0,
};

export const useCartStore = create<CartType & ActionTypes>((set, get) => ({
  products: initalState.product,
  totalItems: initalState.total,
  totalPrice: initalState.totalPrice,
  addToCart(item) {
    set((state) => ({
      products: [...state.products, item],
      totalItems: state.totalItems + item.quantity,
      totalPrice: state.totalPrice + item.price * item.quantity,
    }));
  },
  removeFromCart(item) {
    set((state) => ({
      products: state.products.filter((product) => product.id !== item.id),
      totalItems: state.totalItems - item.quantity,
      totalPrice: state.totalPrice - item.price * item.quantity,
    }));
  },
}));
