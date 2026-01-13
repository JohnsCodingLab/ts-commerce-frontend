import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

const PublicRoute = () => {
  const isAuthenticated = useAuthStore((state) =>
    Boolean(state.token && state.user)
  );

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
