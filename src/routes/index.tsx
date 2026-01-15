import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import LandingPage from "@/pages/LandingPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Public Access */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Tech Grid */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<h1>Welcome to the Grid</h1>} />
        <Route path="/dashboard" element={<h1>Futuristic Dashboard</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
