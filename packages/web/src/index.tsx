import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CalculatorPage from "./features/calculator/CalculatorPage";
import HomePage from "./features/home/HomePage";
import { calculatorRoute, homeRoute } from "./routes";
import { ReactComponent } from "./types";
import "./styles";

const theme = createTheme();

function App(): ReactComponent {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path={homeRoute.routerPath} element={<HomePage />} />
          <Route
            path={calculatorRoute.routerPath}
            element={<CalculatorPage />}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("app"));
