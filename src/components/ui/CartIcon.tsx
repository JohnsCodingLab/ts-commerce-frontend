import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const CartIcon = ({ totalItems }: { totalItems: number }) => (
  <Link
    to="/cart"
    className="relative group text-white/70 hover:text-neon-blue transition"
  >
    <ShoppingCart size={20} />

    {totalItems > 0 && (
      <motion.span
        key={totalItems}
        initial={{ scale: 0, y: -4 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 22 }}
        className="
          absolute -top-2 -right-2
          min-w-[16px] h-[16px]
          px-1 flex items-center justify-center
          rounded-full
          bg-[linear-gradient(90deg,#ff3b3b,#ff6a6a)]
          text-[10px] font-black text-white
          shadow-[0_0_14px_rgba(255,59,59,0.85)]
        "
      >
        {totalItems > 99 ? "99+" : totalItems}
      </motion.span>
    )}
  </Link>
);

export default CartIcon;
