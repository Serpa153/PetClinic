import React from "react";
import { Typography, Box } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h3" data-testid="home-title">
        Bem-vindo à Home
      </Typography>
      <Typography data-testid="home-text">HOME</Typography>
    </Box>
  );
};

export default Home;
