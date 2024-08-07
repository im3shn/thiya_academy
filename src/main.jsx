import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import styles from "./App.module.css";
import "./index.css";
import { Courses } from "./components/Courses/Courses";
import { WhyUs } from "./components/WhyUs/WhyUs";
import { Contact } from "./components/Contact/Contact";
import { Navbar } from "./components/Navbar/Navbar";
import "@fontsource/outfit";
import "@fontsource/roboto";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/courses",
    element: <Courses/> ,
  },
  {
    path: "/whyus",
    element: <WhyUs/> ,
  },{
    path: "/contact",
    element: <Contact/> ,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <RouterProvider router={router} />
    <Contact></Contact>
  </React.StrictMode>
);
