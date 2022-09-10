import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Restaurant from "./pages/Restaurant";
import Search from "./pages/Search";
import SignPage from "./pages/signup/SignupPage";
import LoginForm from "./pages/signup/SignupForm";
import Recipe from "./pages/recipes/Recipe";
import AuthProvider from "./context/Authcontext";
import MainRoutes from "./routes";
function App() {
  const themeStyles = lightTheme;
  return (
    <ThemeProvider theme={themeStyles}>
      <div className="App">
        <GlobalStyle />

        <Router>
          <AuthProvider>
            <Navbar />

            <MainRoutes />
          </AuthProvider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
