import { useCartStore } from "@/store/cartStore";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useAuthStore } from "@/store/authStore";

const CartPage = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { items, removeItem, addItem, decrementItem } = useCartStore();

  const handleCheckoutClick = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: location.pathname } });
    } else {
      navigate("/checkout");
    }
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  /* ================= EMPTY STATE ================= */
  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="p-6 bg-dark-800/50 rounded-full border border-white/5"
        >
          <ShoppingBag size={48} className="text-gray-600" />
        </motion.div>

        <h2 className="text-2xl font-black uppercase tracking-tighter">
          Inventory Empty
        </h2>
        <p className="text-sm text-gray-500 max-w-xs">
          No assets detected. Return to the market and acquire resources.
        </p>

        <Link
          to="/"
          className="px-8 py-3 bg-neon-blue text-dark-900 font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-transform"
        >
          Return to Market
        </Link>
      </div>
    );
  }

  /* ================= MAIN CART ================= */
  return (
    <div className="max-w-7xl mx-auto px-6 py-28">
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-12">
        Neural <span className="text-neon-purple">Inventory</span>
      </h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* ================= ITEMS ================= */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex gap-6 p-6 bg-dark-800/30 border border-white/5 rounded-2xl backdrop-blur-xl"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold uppercase text-sm tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-neon-blue uppercase font-bold tracking-widest">
                        {item.store.name}
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* Quantity + Price */}
                  <div className="flex justify-between items-end pt-4">
                    <div className="flex items-center space-x-3 bg-dark-900/50 rounded-lg p-1 border border-white/5">
                      <button
                        disabled={item.quantity === 1}
                        onClick={() => decrementItem(item.id)}
                        className="p-1 disabled:opacity-30 hover:text-neon-blue"
                      >
                        <Minus size={14} />
                      </button>

                      <motion.span
                        key={item.quantity}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="text-xs font-bold w-4 text-center"
                      >
                        {item.quantity}
                      </motion.span>

                      <button
                        onClick={() => addItem(item)}
                        className="p-1 hover:text-neon-blue"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <motion.p
                      key={item.quantity}
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                      className="font-black text-lg"
                    >
                      ${(item.price * item.quantity).toLocaleString()}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ================= SUMMARY ================= */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-24 p-8 bg-dark-800/40 border border-neon-purple/20 rounded-3xl backdrop-blur-2xl shadow-glass"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-neon-purple mb-8">
              Protocol Summary
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-400">
                <span>Neural Tax (5%)</span>
                <span>${tax.toLocaleString()}</span>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="font-bold uppercase tracking-widest text-xs">
                  Total Credit
                </span>
                <span className="text-2xl font-black text-neon-blue">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>

            <motion.button
              onClick={handleCheckoutClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 bg-neon-purple text-white font-black uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 hover:shadow-neon-purple transition-all"
            >
              Initiate Checkout <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
