import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

interface UnprotectedRouteProps {
  children: React.ReactNode;
}

const UnprotectedRoute: React.FC<UnprotectedRouteProps> = ({ children }) => {
  const { token } = useAuth();

  if (token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default UnprotectedRoute;
