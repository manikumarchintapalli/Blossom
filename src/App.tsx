import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

const App = () => {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Main Content Pages */}
      <Box p="2rem" height="100%" width="100%">
        <AppRoutes />
      </Box>
    </main>
  );
};

export default App;
