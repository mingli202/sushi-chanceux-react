import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorPage.tsx";
import { AboutUs, ContactUs, Home, OrderSection } from "./components";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/order",
          element: <OrderSection />,
        },
      ],
    },
  ],
  // { basename: import.meta.env.DEV ? "/" : "/react-vite-gh-pages/" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
