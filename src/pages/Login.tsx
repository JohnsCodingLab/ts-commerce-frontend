import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { loginSchema, type LoginFormValues } from "@/schemas/auth.schema";
// import { useAuthStore } from "@/store/zustand/authStore"; // We'll build this next

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Initiating login sequence...", data);
    // Integration logic goes here
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_10%,#050505,#0f111a,#1b1e2e)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated neon background spots */}
      <div className="absolute inset-0 before:content-[''] before:absolute before:w-150 before:h-150 before:rounded-full before:bg-neon-purple before:blur-[250px] before:animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="absolute inset-0 after:content-[''] after:absolute after:w-125 after:h-125 after:rounded-full after:bg-neon-blue after:blur-[200px] after:animate-[pulse_10s_ease-in-out_infinite]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-md bg-[rgba(27,30,46,0.4)] backdrop-blur-xl border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 shadow-glass"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black uppercase tracking-tighter text-white">
            Login{" "}
            <span className="bg-[linear-gradient(90deg,#9D00FF,#00F0FF)] bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(157,0,255,0.7)]">
              NeuroCart
            </span>
          </h1>
          <p className="text-[rgba(255,255,255,0.4)] text-sm mt-2">
            Enter your credentials to access the Neural Tech Grid
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-neon-blue">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="user@neurocart.ai"
              className="w-full bg-[rgba(5,5,5,0.5)] border border-[rgba(255,255,255,0.05)] rounded-lg px-4 py-3 text-white placeholder:text-[rgba(255,255,255,0.4)] focus:ring-2 focus:ring-neon-purple outline-none transition-all duration-300 focus:scale-105"
            />
            {errors.email && (
              <p className="text-neon-orange text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-neon-blue">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="••••••••"
              className="w-full bg-[rgba(5,5,5,0.5)] border border-[rgba(255,255,255,0.05)] rounded-lg px-4 py-3 text-white placeholder:text-[rgba(255,255,255,0.4)] focus:ring-2 focus:ring-neon-purple outline-none transition-all duration-300 focus:scale-105"
            />
            {errors.password && (
              <p className="text-neon-orange text-xs">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 0 30px rgba(157, 0, 255, 0.6), 0 0 50px rgba(0, 240, 255, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[linear-gradient(90deg,#9D00FF,#00F0FF)] text-white font-black py-4 rounded-lg uppercase tracking-widest text-sm transition-all duration-300 shadow-[0_0_20px_rgba(157,0,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
