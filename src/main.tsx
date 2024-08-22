import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../src/pages/Homepage/Homepage";
import About from "../src/pages/About/About";
import Work from "../src/pages/Work/Work";
import Contact from "../src/pages/Contact/Contact";
import Error from "../src/Components/CompoundComponents/Error/Error";
import Root from "../src/Components/CompoundComponents/Routes/Root";

import Universe from "./pages/Universe/Universe";
import { ThemeProvider } from "./Components/ContextApi/ThemeCustom/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root>
        <HomePage />
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
