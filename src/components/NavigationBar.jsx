import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constantes";
import SearchBar from "./SearchBar";

function NavigationBar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        backgroundColor: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        src={logo}
        style={{ display: "flex", alignItems: "center" }}
        alt="logo"
        height={45}
      >
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default NavigationBar;
