import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { ShoppingCart, User, LogOut, Menu } from "lucide-react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { isAuthenticated, logout, user } = useAuthStore();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await toast.promise(logout(), {
        loading: "Logging out...",
        success: "Logged out",
        error: "Logout failed",
      });
    } finally {
      navigate("/login");
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
    fixed top-0 w-full z-50
    transition-all duration-200
    ${
      scrolled
        ? "bg-dark-950/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
        : "bg-transparent"
    }
  `}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rotate-45 rounded-lg bg-[linear-gradient(135deg,#9D00FF,#00F0FF)] shadow-[0_0_25px_rgba(157,0,255,0.6)]">
            <div className="absolute inset-1 rounded-md bg-dark-900" />
          </div>

          <span className="text-2xl font-black uppercase tracking-tighter text-white font-lato">
            Neuro
            <span className="bg-[linear-gradient(90deg,#9D00FF,#00F0FF)] bg-clip-text text-transparent">
              Cart
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-white/80">
          {["Market", "Hardware"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="transition-colors group-hover:text-neon-blue">
                {item}
              </span>
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-neon-blue transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Right Cluster */}
          <div className="flex items-center gap-6 pl-6 border-l border-white/10">
            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-white/70 hover:text-neon-blue transition"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-neon-purple text-[10px] flex items-center justify-center text-black font-bold shadow-[0_0_10px_rgba(157,0,255,0.7)]">
                0
              </span>
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center gap-5">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-neon-blue hover:text-white transition"
                >
                  <User size={18} />
                  <span className="hidden lg:inline text-xs">
                    {user?.username}
                  </span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-white/60 hover:text-neon-orange transition"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="text-white/70 hover:text-white transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="
                      px-6 py-2 rounded-full
                      bg-[linear-gradient(90deg,#9D00FF,#00F0FF)]
                      text-black text-xs font-black
                      shadow-[0_0_20px_rgba(157,0,255,0.5)]
                      hover:shadow-[0_0_30px_rgba(0,240,255,0.7)]
                      transition-all
                    "
                >
                  Join Grid
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Trigger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden text-white/80 hover:text-neon-blue transition"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
        absolute top-20 inset-x-0
        mx-4
        rounded-2xl
        bg-[rgba(15,17,26,0.75)]
        backdrop-blur-xl
        border border-white/10
        shadow-[0_0_40px_rgba(0,240,255,0.15)]
        md:hidden
        z-50
      "
          >
            <div className="flex flex-col px-6 py-6 space-y-6 text-sm font-bold uppercase tracking-widest text-white/80">
              {/* Navigation */}
              {["Market", "Hardware"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-neon-blue transition"
                >
                  {item}
                </Link>
              ))}

              <div className="h-px bg-white/10" />

              {/* Auth Section */}
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 text-neon-blue"
                  >
                    <User size={16} />
                    {user?.username}
                  </Link>

                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      handleLogout();
                    }}
                    className="flex items-center gap-2 text-neon-orange"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-white transition"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={() => setMobileOpen(false)}
                    className="
                mt-2
                inline-flex justify-center
                rounded-full
                px-6 py-3
                bg-[linear-gradient(90deg,#9D00FF,#00F0FF)]
                text-black
                font-black
                shadow-[0_0_20px_rgba(157,0,255,0.5)]
              "
                  >
                    Join Grid
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
