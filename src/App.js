import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Restaurant from "./pages/Restaurant";
import Search from "./pages/Search";
import SignPage from "./pages/signup/SignPage";
import LoginForm from "./pages/login/LoginForm";
import Recipe from "./pages/recipes/Recipe";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
