import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    text: {
      secondary: "#232323",
    },
    background: {
      default: "#DBDCDF",
      paper: "#EFF0F4",
    },
    secondary: {
      main: "#1F50FF",
      light: "#6F75F7",
    },
  },

  typography: {
    fontFamily: "Open Sans",
    button: {
      fontSize: "20px",
      lineHeight: "25px",
      fontStyle: "normal",
      fontWeight: 400,
    },
  },
});
