import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
// compnents
import AppBar from "./navbar";

export default function MainLayout({ children }) {
  return (
    <Box>
      <CssBaseline />
      <AppBar />
      <Outlet />
    </Box>
  );
}
