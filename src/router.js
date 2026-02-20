import { createBrowserRouter } from "react-router";
import MainPage from "./page/MainPage";
import MyPage from "./page/MyPage";
import Search from "./page/Search";
import NotFound from "./page/NotFound";
import App from "./App";
import Register from "./page/Register";
import Recipe from "./page/Recipe";
import Login from "./page/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: MainPage },
      { path: "mypage", Component: MyPage },
      { path: "login", Component: Login },
      { path: "search", Component: Search },
      { path: "register", Component: Register },
      { path: "recipe", Component: Recipe },
      { path: "*", Component: NotFound },
    ],
  },
]);

export default router;
