export interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  img: string;
  category: "GPU" | "CPU" | "Peripherals" | "Storage" | "Neural";
  store: {
    id: string;
    name: string;
    isVerified: boolean;
  };
  specs?: Record<string, string>; // e.g., { "VRAM": "24GB", "Clock": "2.5GHz" }
  stock: number;
}

/**
 * Specifically for items residing in the cart.
 */
export interface CartItem extends Product {
  quantity: number;
}
