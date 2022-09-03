import React from "react";
import { ThemeProvider, Box, Container } from "@mui/material";
import { Header } from "../Header";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../../assets/styles/theme";
interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container disableGutters maxWidth={false}>
          <Box
            sx={{
              bgcolor: "background.paper",
              height: "100vh",
              padding: "42px",
            }}
          >
            <Header />
            <main>{children}</main>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};
