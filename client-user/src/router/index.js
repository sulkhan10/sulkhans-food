import Menu from "../pages/Menu";
import DetailMenu from "../pages/DetailMenu";
import HowToOrder from "../pages/HowToOrder";
import About from "../pages/About";
import News from "../pages/News";
import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home.js";

const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/detailmenu/:menuId",
        element: <DetailMenu />,
      },
      {
        path: "/order",
        element: <HowToOrder />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);

export default router;
