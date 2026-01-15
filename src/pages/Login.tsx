import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { loginSchema, type LoginFormValues } from "@/schemas/auth.schema";
import { useAuthStore } from "@/store/authStore";
import { authService } from "@/api/auth.service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.login);
  const setLoading = useAuthStore((state) => state.setLoading);
  const isLoading = useAuthStore((state) => state.isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    try {
      const { user, token } = await authService.login(data);
      setAuth(user, token);
      toast.success(`Neural link established. Welcome, ${user.firstName}`);
      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Authorization Sequence Error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(circle_at_50%_20%,#050505,#0f111a,#050505)]">
      {/* SAME Neural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      {/* SAME Neon Orbs */}
      <div className="absolute w-150 h-150 bg-neon-purple/20 rounded-full blur-[180px] -top-50 -left-50" />
      <div className="absolute w-125 h-125 bg-neon-blue/20 rounded-full blur-[160px] -bottom-50 -right-50" />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          relative z-10
          w-full max-w-md
          rounded-2xl
          border border-white/10
          bg-dark-800/40
          backdrop-blur-xl
          p-8
          shadow-glass
        "
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
            Access{" "}
            <span className="bg-[linear-gradient(90deg,#9D00FF,#00F0FF)] bg-clip-text text-transparent">
              NeuroCart
            </span>
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Authenticate to enter the neural commerce grid
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
              {...register("email")}
              placeholder="user@neurocart.ai"
              className="
                w-full
                bg-dark-900/50
                border border-white/10
                rounded-lg
                px-4 py-3
                text-white
                placeholder:text-white/30
                outline-none
                transition
                focus:ring-2 focus:ring-neon-purple
              "
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
              {...register("password")}
              placeholder="••••••••"
              className="
                w-full
                bg-dark-900/50
                border border-white/10
                rounded-lg
                px-4 py-3
                text-white
                placeholder:text-white/30
                outline-none
                transition
                focus:ring-2 focus:ring-neon-purple
              "
            />
            {errors.password && (
              <p className="text-neon-orange text-xs">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            disabled={isLoading}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0,240,255,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full
              rounded-full
              bg-[linear-gradient(90deg,#00F0FF,#9D00FF)]
              py-4
              font-black
              uppercase
              tracking-widest
              text-black
              shadow-[0_0_30px_rgba(0,240,255,0.4)]
            "
          >
            {isLoading ? "Verifying..." : "Login"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
