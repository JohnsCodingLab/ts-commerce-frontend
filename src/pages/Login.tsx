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
    <div className="min-h-screen bg-testcolor flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-dark-800/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-glass"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter font-lato">
            System <span className="text-neon-purple">Login</span>
          </h1>
          <p className="text-dark-400 text-sm mt-2">
            Enter credentials to access the tech-grid
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs uppercase text-neon-blue tracking-widest font-bold">
              Identity String
            </label>
            <input
              {...register("email")}
              className="w-full bg-dark-900/50 border border-white/5 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-neon-purple outline-none transition-all"
              placeholder="user@future.com"
            />
            {errors.email && (
              <p className="text-neon-orange text-xs">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase text-neon-blue tracking-widest font-bold">
              Security Key
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full bg-dark-900/50 border border-white/5 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-neon-purple outline-none transition-all"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-neon-orange text-xs">
                {errors.password.message}
              </p>
            )}
          </div>

          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(157, 0, 255, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-neon-purple text-white font-black py-4 rounded-lg uppercase tracking-widest text-sm transition-shadow"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
