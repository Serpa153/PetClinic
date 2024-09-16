import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/Auth";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/Login");
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleLogout}
      data-testid="logout-button"
    >
      Sair
    </Button>
  );
};

export default LogoutButton;
