import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "../src/Components/CompoundComponents/Error/Error";
import Root from "../src/Components/CompoundComponents/Routes/Root";

import { ThemeProvider } from "./Components/ContextApi/ThemeCustom/ThemeContext";
import Homepage from "./Components/pages/Homepage/Homepage";
import About from "./Components/pages/About/About";
import Work from "./Components/pages/Work/Work";
import Contact from "./Components/pages/Contact/Contact";
import Universe from "./Components/pages/Universe/Universe";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root>
        <Homepage />
      </Root>
    ),
  },
  {
    path: "/about",
    element: (
      <Root>
        <About />
      </Root>
    ),
  },
  {
    path: "/work",
    element: (
      <Root>
        <Work />
      </Root>
    ),
  },
  {
    path: "/contact",
    element: (
      <Root>
        <Contact />
      </Root>
    ),
  },
  {
    path: "/*",
    element: (
      <Root>
        <Error />
      </Root>
    ),
  },
  {
    path: "/universe",
    element: (
      <Root>
        <Universe />
      </Root>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
