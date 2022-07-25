import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Restaurant from "./pages/Restaurant";
import Search from "./pages/Search";
import SignPage from "./pages/signup/SignPage";
import LoginForm from "./pages/login/LoginForm";
import Recipe from "./pages/recipes/Recipe";
import AuthProvider from "./context/userContext";

function App() {
  const themeStyles = lightTheme;
  return (
    <AuthProvider>
      <ThemeProvider theme={themeStyles}>
        <div className="App">
          <GlobalStyle />

          <Router>
            <Navbar />
            <Routes>
              <Route index path="/" element={<SignPage />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/recipe" element={<Recipe />} />
              <Route path="/restaurants" element={<Restaurant />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/SignupForm" element={<LoginForm />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
