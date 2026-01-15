import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { registerSchema, type RegisterFormValues } from "@/schemas/auth.schema";
import { publicApiClient } from "@/api/client";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await publicApiClient.post("/auth/register", data);
    } catch (err) {
      console.error("Registry error:", err);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_20%,#050505,#0f111a,#050505)] p-6">
      {/* Neural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      {/* Glow Orbs */}
      <div className="absolute w-125 h-125 bg-[#9D00FF]/20 rounded-full blur-[160px] -top-40 -left-40" />
      <div className="absolute w-112.5 h-112.5 bg-[#00F0FF]/20 rounded-full blur-[140px] -bottom-40 -right-40" />

      {/* Registration Core */}
      <motion.div
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-[rgba(27,30,46,0.45)] backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      >
        {/* Scanline */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.08),transparent)] animate-[scan_3s_linear_infinite]" />

        {/* Header */}
        <h2 className="text-3xl font-black uppercase tracking-widest text-white mb-10 text-center">
          Create{" "}
          <span className="bg-[linear-gradient(90deg,#9D00FF,#00F0FF)] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(157,0,255,0.6)]">
            Account
          </span>
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 relative z-10"
        >
          {/* Firstname */}
          <div>
            <label className="block text-[10px] text-[#00F0FF] uppercase font-bold tracking-widest mb-1">
              FirstName
            </label>
            <input
              {...register("firstname")}
              className="w-full bg-[rgba(5,5,5,0.6)] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#9D00FF] outline-none transition-all duration-300 focus:scale-[1.03]"
              placeholder="neuro_user"
            />
            {errors.firstname && (
              <p className="text-[#FF5C00] text-xs mt-1">
                {errors.firstname.message}
              </p>
            )}
          </div>

          {/* Lastname */}
          <div>
            <label className="block text-[10px] text-[#00F0FF] uppercase font-bold tracking-widest mb-1">
              LastName
            </label>
            <input
              {...register("lastname")}
              className="w-full bg-[rgba(5,5,5,0.6)] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#9D00FF] outline-none transition-all duration-300 focus:scale-[1.03]"
              placeholder="neuro_user"
            />
            {errors.lastname && (
              <p className="text-[#FF5C00] text-xs mt-1">
                {errors.lastname.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-[10px] text-[#00F0FF] uppercase font-bold tracking-widest mb-1">
              Email
            </label>
            <input
              {...register("email")}
              className="w-full bg-[rgba(5,5,5,0.6)] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#9D00FF] outline-none transition-all duration-300 focus:scale-[1.03]"
              placeholder="user@neurocart.ai"
            />
            {errors.email && (
              <p className="text-[#FF5C00] text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-[10px] text-[#00F0FF] uppercase font-bold tracking-widest mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full bg-[rgba(5,5,5,0.6)] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#9D00FF] outline-none transition-all duration-300 focus:scale-[1.03]"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-[#FF5C00] text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 30px rgba(157,0,255,0.6), 0 0 60px rgba(0,240,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-[linear-gradient(90deg,#9D00FF,#00F0FF)] rounded-xl font-black uppercase tracking-[0.3em] text-black shadow-[0_0_25px_rgba(157,0,255,0.5)]"
          >
            Signup
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
