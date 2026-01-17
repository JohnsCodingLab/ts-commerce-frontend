import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-950/80 backdrop-blur-xl border-t border-white/10 pt-24 pb-10 px-6 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-96 h-96 bg-neon-purple/20 blur-[180px]" />
        <div className="absolute -top-32 right-1/4 w-80 h-80 bg-neon-blue/20 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">
        {/* Brand */}
        <div className="space-y-7">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-7 h-7 rotate-45 rounded bg-[linear-gradient(135deg,#9D00FF,#00F0FF)] shadow-[0_0_20px_rgba(157,0,255,0.6)]">
              <div className="absolute inset-1 bg-dark-950 rounded-sm" />
            </div>
            <span className="text-xl font-black uppercase tracking-tighter text-white">
              Neuro
              <span className="bg-[linear-gradient(90deg,#9D00FF,#00F0FF)] bg-clip-text text-transparent">
                Cart
              </span>
            </span>
          </Link>

          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            A verified neural commerce grid for high-fidelity hardware. Built to
            eliminate counterfeits and restore trust in tech retail.
          </p>

          <div className="flex gap-5">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <Icon
                key={i}
                size={18}
                className="text-gray-400 hover:text-neon-blue cursor-pointer transition-colors hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.6)]"
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs mb-8">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm">
            {[
              { label: "Marketplace", to: "/market" },
              { label: "Verified Stores", to: "/stores" },
              { label: "Hardware Specs", to: "/hardware" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-gray-400 hover:text-neon-purple transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs mb-8">
            Assistance
          </h4>
          <ul className="space-y-4 text-sm">
            {[
              { label: "Help Center", to: "/help" },
              { label: "Terms of Protocol", to: "/terms" },
              { label: "Privacy Shield", to: "/privacy" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-gray-400 hover:text-neon-purple transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs mb-8">
            Contact Grid
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-neon-blue" />
              <span>ops@neurocart.tech</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={14} className="text-neon-purple" />
              <span>Tech District, Lagos, NG</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500">
          © {currentYear} NeuroCart — All Rights Reserved
        </p>

        <div className="text-[10px] uppercase tracking-widest text-gray-500">
          System Status:{" "}
          <span className="text-neon-blue drop-shadow-[0_0_6px_rgba(0,240,255,0.7)]">
            Optimal
          </span>
        </div>
      </div>
    </footer>
  );
};
