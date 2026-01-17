import type { CartItem, Product } from "./product.types";

export interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  decrementItem: (id: string | number) => void;
  removeItem: (id: string | number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
}
