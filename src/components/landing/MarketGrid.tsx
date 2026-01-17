import { motion } from "motion/react";
import { ShoppingCart, ExternalLink } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";
import type { Product } from "@/types/product.types";

const products: Product[] = [
  {
    id: "gpu-01",
    name: "RTX 5090 Neural Edition",
    description:
      "The ultimate neural processing powerhouse for AI and high-fidelity rendering.",
    price: 1999,
    category: "GPU",
    store: { id: "st-01", name: "GigaStore", isVerified: true },
    img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    stock: 5,
    specs: { VRAM: "24GB GDDR7", Cores: "16384", Architecture: "Blackwell" },
  },
  {
    id: "cpu-01",
    name: "Ryzen 9 9950X Node",
    description:
      "16-core flagship processor optimized for massive multi-threaded workloads.",
    price: 649,
    category: "CPU",
    store: { id: "st-02", name: "SiliconAlley", isVerified: true },
    img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    specs: { Cores: "16", Threads: "32", "Max Clock": "5.7GHz" },
  },
  {
    id: "per-01",
    name: "Quantum-X Mechanical Keys",
    description:
      "Ultra-low latency mechanical board with hot-swappable optic switches.",
    price: 249,
    category: "Peripherals",
    store: { id: "st-03", name: "TactileOps", isVerified: true },
    img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    specs: {
      "Switch Type": "Optical",
      "Polling Rate": "8000Hz",
      RGB: "Per-key",
    },
  },
  {
    id: "sto-01",
    name: "NeuralGate NVMe 4TB",
    description:
      "Next-gen PCIe 5.0 storage with record-breaking read/write speeds.",
    price: 499,
    category: "Storage",
    store: { id: "st-04", name: "DataNode", isVerified: false },
    img: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=600&q=80",
    stock: 8,
    specs: { Read: "12,000MB/s", Write: "11,000MB/s", Interface: "PCIe Gen 5" },
  },
];

export const MarketGrid = () => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast.success(`${product.name} synced to cart`, {
      icon: "🚀",
      style: {
        borderRadius: "10px",
        background: "#0f111a",
        color: "#fff",
        border: "1px solid rgba(0, 240, 255, 0.2)",
      },
    });
  };
  return (
    <section className="relative py-16 px-6 max-w-7xl mx-auto">
      {/* Ambient Section Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-neon-blue/10 blur-[200px] pointer-events-none" />

      {/* Header */}
      <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-neon-purple mb-3">
            Live Marketplace
          </h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Featured{" "}
            <span className="bg-[linear-gradient(90deg,#9D00FF,#00F0FF)] bg-clip-text text-transparent">
              Hardware
            </span>
          </h3>
        </div>

        <button className="self-start md:self-end text-xs font-black uppercase tracking-widest text-white/70 hover:text-neon-blue transition-colors border-b border-white/10 hover:border-neon-blue pb-1">
          Explore All Nodes
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -12 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="
              group relative
              rounded-3xl
              bg-dark-800/40
              border border-white/10
              backdrop-blur-xl
              overflow-hidden
              shadow-glass
              hover:border-neon-blue/40
              hover:shadow-[0_0_40px_rgba(0,240,255,0.15)]
              transition-all
            "
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-neon-purple/20 blur-[120px]" />
            </div>

            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-dark-900">
              <img
                src={product.img}
                alt={product.name}
                className="
                  w-full h-full object-cover
                  opacity-80
                  group-hover:opacity-100
                  group-hover:scale-110
                  transition-all duration-700
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Content */}
            <div className="relative p-6">
              <div className="flex justify-between items-start mb-3">
                <p className="text-[10px] uppercase font-black tracking-widest text-neon-blue">
                  {product.store.name}
                </p>
                <p className="text-white font-black">{product.price}</p>
              </div>

              <h4 className="text-sm font-black uppercase tracking-tight text-white/80 group-hover:text-white transition-colors">
                {product.name}
              </h4>

              {/* Actions */}
              <div className="mt-7 flex gap-3">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="
                    flex-1
                    flex items-center justify-center gap-2
                    rounded-xl
                    bg-white/5
                    border border-white/10
                    py-2.5
                    text-[10px] font-black uppercase tracking-widest
                    text-white/80
                    hover:bg-neon-purple
                    hover:border-neon-purple
                    hover:text-white
                    hover:shadow-[0_0_20px_rgba(157,0,255,0.6)]
                    transition-all
                  "
                >
                  <ShoppingCart size={12} />
                  Add to Cart
                </button>

                <button
                  className="
                    p-3 rounded-xl
                    bg-white/5
                    border border-white/10
                    text-white/70
                    hover:bg-neon-blue
                    hover:border-neon-blue
                    hover:text-dark-900
                    hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]
                    transition-all
                  "
                >
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
