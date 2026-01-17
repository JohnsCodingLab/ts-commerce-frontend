import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { ShieldCheck, CreditCard, ArrowRight, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const items = useCartStore((state) => state.items);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      {/* Stepper */}
      <div className="max-w-lg mx-auto mb-20">
        <div className="relative flex justify-between items-center">
          {/* Progress Line */}
          <div className="absolute left-0 right-0 top-5 h-[2px] bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: step === 2 ? "100%" : "0%" }}
              className="h-full bg-[linear-gradient(90deg,#9D00FF,#00F0FF)]"
            />
          </div>

          {[
            { id: 1, label: "Shipment", icon: Truck },
            { id: 2, label: "Protocol", icon: ShieldCheck },
          ].map(({ id, label, icon: Icon }) => (
            <div
              key={id}
              className={`relative z-10 flex flex-col items-center gap-2 ${
                step >= id ? "text-neon-blue" : "text-gray-600"
              }`}
            >
              <div
                className={`
                  w-10 h-10 rounded-full border-2 flex items-center justify-center
                  ${
                    step >= id
                      ? "border-neon-blue bg-neon-blue/15 shadow-[0_0_18px_rgba(0,240,255,0.5)]"
                      : "border-gray-800 bg-dark-900"
                  }
                `}
              >
                <Icon size={16} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-14">
        {/* Main */}
        <div className="md:col-span-3">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="shipping"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-10"
              >
                <h2 className="text-2xl font-black uppercase tracking-tight">
                  Delivery <span className="text-neon-blue">Protocol</span>
                </h2>

                <div className="space-y-4">
                  {["FULL NAME", "NEURAL EMAIL"].map((placeholder) => (
                    <input
                      key={placeholder}
                      placeholder={placeholder}
                      className="
                        w-full
                        bg-dark-800/60
                        border border-white/5
                        p-4 rounded-xl
                        focus:border-neon-blue
                        focus:ring-2 focus:ring-neon-blue/30
                        outline-none transition
                      "
                    />
                  ))}

                  <textarea
                    placeholder="SECURE DELIVERY ADDRESS"
                    className="
                      w-full h-32
                      bg-dark-800/60
                      border border-white/5
                      p-4 rounded-xl
                      focus:border-neon-blue
                      focus:ring-2 focus:ring-neon-blue/30
                      outline-none transition
                    "
                  />
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="
                    w-full py-4
                    bg-[linear-gradient(90deg,#00F0FF,#9D00FF)]
                    text-black
                    font-black uppercase tracking-widest
                    rounded-xl
                    flex items-center justify-center gap-2
                    shadow-[0_0_30px_rgba(0,240,255,0.4)]
                    hover:scale-[1.02]
                    transition
                  "
                >
                  Proceed to Verification <ArrowRight size={18} />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="payment"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-10"
              >
                <h2 className="text-2xl font-black uppercase tracking-tight">
                  Payment <span className="text-neon-purple">Encryption</span>
                </h2>

                <div className="p-6 rounded-2xl border border-neon-purple/30 bg-dark-800/40 flex gap-4">
                  <ShieldCheck className="text-neon-purple shrink-0" />
                  <div>
                    <h4 className="font-bold uppercase text-sm">
                      Secure Gateway Active
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      256-bit encryption • Zero-trust verification • PCI-DSS
                    </p>
                  </div>
                </div>

                <button
                  className="
                    w-full py-4
                    bg-neon-purple
                    text-white
                    font-black uppercase tracking-widest
                    rounded-xl
                    flex items-center justify-center gap-2
                    shadow-[0_0_30px_rgba(157,0,255,0.5)]
                    hover:scale-[1.02]
                    transition
                  "
                >
                  Authorize Transaction <CreditCard size={18} />
                </button>

                <button
                  onClick={() => setStep(1)}
                  className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition"
                >
                  ← Back to Shipment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <div className="md:col-span-2">
          <div className="sticky top-24 p-6 rounded-2xl bg-dark-800/30 border border-white/5 backdrop-blur-xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
              Payload Summary
            </h3>

            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-xs">
                  <span className="text-gray-300">
                    {item.quantity}× {item.name}
                  </span>
                  <span className="font-bold">
                    ${(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between">
              <span className="text-xs font-black uppercase">Total</span>
              <span className="text-neon-blue font-black">
                ${subtotal.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
