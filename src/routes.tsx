import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signup/SignupPage";
import Homepage from "./pages/Homepage";
import Restaurant from "./pages/Restaurant";
import LoginPage from "./pages/login/LoginPage";

const routes = [
  {
    path: "/",
    component: <SignupPage />,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/home",
    component: <Homepage />,
  },
  {
    path: "/restaurant",
    component: <Restaurant />,
  },
];
const MainRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, component }, index) => (
        <Route key={index} path={path} element={component} />
      ))}
    </Routes>
  );
};
export default MainRoutes;
