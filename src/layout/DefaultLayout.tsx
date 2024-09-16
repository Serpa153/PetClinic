// src/components/layout/DefaultLayout.tsx
import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import LogoutButton from "../components/button/LogOut";
import { Link } from "react-router-dom";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {/* Redirecionamento para a página Home */}
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: location.pathname === "/" ? "orange" : "white",
                marginRight: "20px",
              }}
            >
              <Typography variant="button">Home</Typography>
            </Link>

            {/* Redirecionamento para a página Cientes */}
            <Link
              to="/Clientes"
              style={{
                marginRight: "20px",
                textDecoration: "none",
                color: location.pathname === "/Clientes" ? "orange" : "white",
              }}
              data-testid="clienteLinkText"
            >
              <Typography variant="button">Clientes</Typography>
            </Link>

            {/* Redirecionamento para a página Pets */}
            <Link
              to="/Pets"
              style={{
                textDecoration: "none",
                color: location.pathname === "/Pets" ? "orange" : "white",
                marginRight: "20px",
              }}
              data-testid="petLinkText"
            >
              <Typography variant="button">Pets</Typography>
            </Link>
          </Box>
          <LogoutButton data-testid="logout-button" />
        </Toolbar>
      </AppBar>

      {/* Espaço para o conteúdo abaixo do Toolbar */}
      <Box
        sx={{
          mt: "64px", // margem para baixo do AppBar
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
