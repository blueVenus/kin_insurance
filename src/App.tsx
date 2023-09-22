import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PayPage from "./content/credit-card/pages/PayPage";
import theme from "./theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" Component={PayPage} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
