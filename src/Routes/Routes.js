import React from "react";
import News from "../Components/DynamicRoutes/News";
import Home from "../Components/Home";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Components/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/categories/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
]);
