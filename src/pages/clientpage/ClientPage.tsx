import React from "react";
import { Typography, Box } from "@mui/material";
import DefaultLayout from "../../layout/DefaultLayout";

const ClientPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Box p={3}>
        <Typography variant="h5" data-testid="clientpage-title">
          Dados de Cliente
        </Typography>
        <Typography data-testid="clientpage-text">Dados do cliente.</Typography>
      </Box>
    </DefaultLayout>
  );
};

export default ClientPage;
