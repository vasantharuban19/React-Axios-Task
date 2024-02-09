import React from "react";
import Create from "../Components/Create";
import Edit from "../Components/Edit";
import TopBar from "../Components/TopBar";
import DashBoard from "../Components/DashBoard";
import { Navigate } from "react-router-dom";
import Home from "../Components/Home";

const AppRouter = [
  {
    path: "/home",
    element: <Home />,
    exact: true,
  },
  {
    path: "/",
    element: <DashBoard />,
    exact: true,
  },
  {
    path: "/create",
    element: <Create />,
    exact: true,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
    exact: true,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
    exact: false,
  },
];

export default AppRouter;
