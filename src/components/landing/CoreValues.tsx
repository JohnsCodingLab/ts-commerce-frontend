import { ShieldCheck, Cpu, Zap, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: <ShieldCheck size={30} />,
    title: "Zero Fake Policy",
    desc: "Every store and product undergoes strict verification.",
  },
  {
    icon: <Cpu size={30} />,
    title: "Tech-Only Focus",
    desc: "Pure hardware. No distractions. No diluted inventory.",
  },
  {
    icon: <Zap size={30} />,
    title: "Rapid Fulfillment",
    desc: "Optimized logistics from store shelf to your hands.",
  },
  {
    icon: <HeartHandshake size={30} />,
    title: "Vendor Growth",
    desc: "Empowering physical tech stores to scale digitally.",
  },
];

export const CoreValues = () => (
  <section className="relative py-28">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <div
            key={i}
            className="
              group relative p-10 rounded-3xl
              bg-dark-800/40 backdrop-blur-xl
              border border-white/10
              hover:border-neon-blue/40
              transition-all duration-300
              hover:shadow-[0_0_40px_rgba(0,240,255,0.25)]
            "
          >
            <div className="mb-8 inline-flex p-4 rounded-2xl bg-neon-blue/10 text-neon-blue group-hover:bg-neon-blue/20 transition">
              {v.icon}
            </div>

            <h4 className="text-lg font-black uppercase tracking-wide mb-3">
              {v.title}
            </h4>

            <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
