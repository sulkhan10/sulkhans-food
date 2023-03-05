import React from "react";
import ReactDOM from "react-dom/client";
import FormMenu from "../components/FormMenu.js";
import FormCategory from "../components/FormCategory.js";
import Menu from "../pages/Menu.js";
import Categories from "../pages/Categories.js";
import Register from "../pages/Register.js";
import Login from "../pages/Login.js";
import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import "../index.css";
import Layout from "../components/Layout.js";
import EditMenu from "../components/EditMenu.js";
import EditCategory from "../components/EditCategory.js";
const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: () => {
      if (!localStorage.access_token) {
        throw redirect("/login");
      } else {
        return null;
      }
    },
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/newmenu",
        element: <FormMenu />,
      },
      {
        path: "/editmenu/:menuId",
        element: <EditMenu />,
      },
      {
        path: "/editcategory/:categoryId",
        element: <EditCategory />,
      },
      {
        path: "/newcategory",
        element: <FormCategory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        throw redirect("/");
      } else {
        return null;
      }
    },
  },
]);

export default router;
