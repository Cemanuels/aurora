import React from "react";
import { Stack } from "@mui/material";
import { Navigation } from "../../components/Navigation";
import { Banner } from "../../components/Banner";

export const HomePage: React.FC = () => {
  return (
    <Stack direction="row">
      <Navigation />
      <Banner />
    </Stack>
  );
};
