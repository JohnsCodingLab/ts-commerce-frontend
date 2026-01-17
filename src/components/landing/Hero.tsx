import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(circle_at_50%_20%,#050505,#0f111a,#050505)]">
      {/* Neural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      {/* Neon Orbs */}
      <div className="absolute w-150 h-150 bg-neon-purple/20 rounded-full blur-[180px] -top-50 -left-50" />
      <div className="absolute w-125 h-125 bg-neon-blue/20 rounded-full blur-[160px] -bottom-50 -right-50" />

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 text-white">
          Neuro
          <span className="bg-[linear-gradient(90deg,#9D00FF,#00F0FF)] bg-clip-text text-transparent">
            Cart
          </span>
        </h1>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4">
          Next Gen <span className="text-neon-blue">Commerce</span>
        </h1>
        {/* <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Experience the neural grid. Acquire high-fidelity hardware through our
              encrypted quantum gateway.
            </p> */}

        <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Neural-powered commerce. Secure. Decentralized. Hyper-fast.
        </p>

        <Link to="/register">
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 40px rgba(0,240,255,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-[linear-gradient(90deg,#00F0FF,#9D00FF)] text-black font-black rounded-full uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Enter the Neural Grid
          </motion.button>
        </Link>
      </motion.div>

      {/* Floating Glyphs */}
      {["▲", "◉", "◆", "▢"].map((g, i) => (
        <motion.div
          key={i}
          className="absolute text-neon-purple/40 text-2xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
        >
          {g}
        </motion.div>
      ))}
    </div>
  );
};

export default Hero;
