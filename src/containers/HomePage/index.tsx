import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Navigation } from "../../components/Navigation";
import { Header } from "../../components/Header";

export const HomePage: React.FC = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Box
        sx={{
          bgcolor: "background.paper",
          height: "100vh",
          padding: "42px",
          
          "& > div:nth-child(2)": { marginTop: "40px" },
        }}
      >
        <Header />
        <Navigation />
      </Box>
    </Container>
  );
};
