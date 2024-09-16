import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { token, logout } = useAuth();
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const checkTokenExpiry = () => {
      const tokenExpiry = localStorage.getItem("tokenExpiry");
      const currentTime = Date.now();

      if (tokenExpiry && parseInt(tokenExpiry) <= currentTime) {
        logout();
        setIsExpired(true);
      }
    };

    checkTokenExpiry();
    const intervalId = setInterval(checkTokenExpiry, 1000);

    return () => clearInterval(intervalId);
  }, [logout]);

  if (isExpired || !token) {
    return <Navigate to="/Login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
