import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signup/SignupPage";
import Cuisines from "./pages/Cuisines";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/Home";
import Recipe from "./pages/recipes/Recipe";
// import { Instructions } from "./pages/Meal";
// import { Ingredients } from "./pages/Meal";
import Meal from "./pages/Meal";
import AllCuisines from "./pages/AllCuisines";
import SearchResults from "./pages/SearchResults";
import Diet from "./pages/diet/Diet";

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
    component: <Home />,
  },

  {
    path: "/recipe",
    component: <Recipe />,
  },
  {
    path: `/recipe/:id`,
    component: <Meal />,
  },
  {
    path: "/cuisines",
    component: <Cuisines />,
  },
  {
    path: `/cuisines/:cuisine`,
    component: <AllCuisines />,
  },
  {
    path: `/search/:query`,
    component: <SearchResults />,
  },
  {
    path: `/diet`,
    component: <Diet />,
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
