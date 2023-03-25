// routes
import { Box } from "@mui/material";
import "./App.css";

// layout
import MainLayout from "./layout";
// pages
import Home from "./pages";

function App() {
  return (
    <Box>
      <MainLayout />
      <Home />
    </Box>
  );
}

export default App;
