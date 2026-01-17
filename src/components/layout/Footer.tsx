import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-neon-purple rounded rotate-45" />
            <span className="text-xl font-black uppercase tracking-tighter text-white">
              Neural<span className="text-neon-blue">Ops</span>
            </span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed">
            The continent's premier neural gateway for verified high-fidelity
            hardware. Bridge the trust gap with TS Commerce.
          </p>
          <div className="flex space-x-4">
            <Github
              size={18}
              className="text-gray-400 hover:text-neon-blue cursor-pointer transition-colors"
            />
            <Twitter
              size={18}
              className="text-gray-400 hover:text-neon-blue cursor-pointer transition-colors"
            />
            <Linkedin
              size={18}
              className="text-gray-400 hover:text-neon-blue cursor-pointer transition-colors"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>
              <Link
                to="/market"
                className="hover:text-neon-purple transition-colors"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                to="/stores"
                className="hover:text-neon-purple transition-colors"
              >
                Verified Stores
              </Link>
            </li>
            <li>
              <Link
                to="/hardware"
                className="hover:text-neon-purple transition-colors"
              >
                Hardware Specs
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
            Assistance
          </h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>
              <Link
                to="/help"
                className="hover:text-neon-purple transition-colors"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-neon-purple transition-colors"
              >
                Terms of Protocol
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-neon-purple transition-colors"
              >
                Privacy Shield
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
            Contact Grid
          </h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-center space-x-3">
              <Mail size={14} /> <span>ops@tscommerce.tech</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={14} /> <span>Tech District, Lagos, NG</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
          © {currentYear} TS Commerce. All Rights Reserved.
        </p>
        <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-gray-600">
          <span>
            System Status: <span className="text-neon-blue">Optimal</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
