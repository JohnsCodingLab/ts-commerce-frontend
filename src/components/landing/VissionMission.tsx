import { motion } from "motion/react";

export const VisionMission = () => {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      {/* Accent Line */}
      <div className="absolute left-1/2 top-20 bottom-20 w-px bg-gradient-to-b from-neon-purple/0 via-neon-purple/40 to-neon-blue/0 hidden md:block" />

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <span className="text-xs font-black uppercase tracking-[0.45em] text-neon-blue">
          Our Vision
        </span>

        <h2 className="text-5xl md:text-6xl font-black leading-[1.05] uppercase">
          Building the{" "}
          <span className="bg-[linear-gradient(90deg,#9D00FF,#00F0FF)] bg-clip-text text-transparent">
            Most Trusted
          </span>{" "}
          Tech Ecosystem
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
          A future where buying high-end technology online is risk-free —
          powered by verification, transparency, and store-first integrity.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative p-12 rounded-3xl
          bg-dark-800/50 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_60px_rgba(157,0,255,0.15)]
        "
      >
        <h3 className="text-neon-purple font-black uppercase tracking-[0.3em] mb-6">
          The Mission
        </h3>

        <p className="text-gray-300 leading-relaxed italic text-lg">
          “To bridge the trust gap between legitimate tech vendors and hardware
          enthusiasts by delivering a verified, store-centric marketplace that
          guarantees authenticity and seamless service.”
        </p>
      </motion.div>
    </section>
  );
};
