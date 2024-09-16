import React from "react";
import { Typography, Box } from "@mui/material";
import DefaultLayout from "../../layout/DefaultLayout";

const PetPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Box p={3}>
        <Typography variant="h5" data-testid="petpage-title">
          Dados do Pet
        </Typography>
        <Typography data-testid="petpage-text">Dados do Pet.</Typography>
      </Box>
    </DefaultLayout>
  );
};

export default PetPage;
