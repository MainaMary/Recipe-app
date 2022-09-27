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
    path: `/cuisines`,
    component: <Cuisines />,
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
    path: `/cuisines/:cuisine`,
    component: <AllCuisines />,
  },
  {
    path: `/search/:query`,
    component: <SearchResults />,
  },
  // {
  //   path: `/recipe/:id/instructions`,
  //   component: <Instructions />,
  // },
  // {
  //   path: `/recipe/:id/ingredients`,
  //   component: <Ingredients />,
  // },
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
