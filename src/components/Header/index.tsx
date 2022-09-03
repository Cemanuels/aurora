import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { NextComponentType } from "next";
import { LogoIcon } from "../../assets/Icons/LogoIcon";
import AddIcon from "@mui/icons-material/Add";
import { SearchBar } from "../SearchBar";
import { Avatar } from "../Avatar";

export const Header: NextComponentType = () => {
  const router = useRouter();

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="space-between"
      mb="47px"
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LogoIcon />
        <Typography
          sx={{
            marginLeft: "15px",
            fontSize: 28,
            lineHeight: "35px",
            letterSpacing: "0.2em",
            fontWeight: 700,
          }}
        >
          AURORA
        </Typography>
      </Box>
      <SearchBar
        onSubmit={(value) => console.log(value)}
        onChange={(value) => console.log(value)}
      />
      <Stack
        direction="row"
        justifyContent="center"
        spacing={4}
        alignItems="center"
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            height: "50px",
            width: "145px",
            borderRadius: "100px",
            textTransform: "none",
            backgroundColor: "secondary.main",
            boxShadow: "none",
            border: "3px solid transparent",

            transition: "color 0.5s, transform 0.2s, background-color 0.2s",

            "&:hover": {
              backgroundColor: "#000",
            },
          }}
          onClick={() => {
            router.push("/create");
          }}
        >
          Create
        </Button>
        <IconButton
          onClick={() => {
            router.push("/profile");
          }}
        >
          <Avatar />
        </IconButton>
      </Stack>
    </Stack>
  );
};
