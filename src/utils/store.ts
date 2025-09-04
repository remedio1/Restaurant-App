import { ActionTypes, CartType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initalState = {
  product: [],
  total: 0,
  totalPrice: 0,
};

export const useCartStore = create (persist<CartType & ActionTypes>(
    (set, get) => ({
      products: initalState.product,
      totalItems: initalState.total,
      totalPrice: initalState.totalPrice,
      addToCart(item) {
        const product = get().products;
        const productinState = product.find(
          (product) => product.id === item.id
        );

        if (productinState) {
          const updatedProducts = product.map((product) =>
            product.id === productinState.id
              ? {
                  ...product,
                  quantity: item.quantity + product.quantity,
                  price: item.price + product.price,
                }
              : product
          );
          set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price * item.quantity,
          }));
        } else {
          set((state) => ({
          products: [...state.products, item],
          totalItems: state.totalItems + item.quantity,
          totalPrice: state.totalPrice + item.price * item.quantity,
        }));
        }
        
      },
      removeFromCart(item) {
        set((state) => ({
          products: state.products.filter((product) => product.id !== item.id),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price * item.quantity,
        }));
      },
    }),
    { name: "cart-storage" }
  )
  )

