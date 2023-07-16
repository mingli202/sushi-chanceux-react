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
      path: "/react-vite-gh-pages/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/react-vite-gh-pages/",
          element: <Home />,
        },
        {
          path: "/react-vite-gh-pages/contact",
          element: <ContactUs />,
        },
        {
          path: "/react-vite-gh-pages/about",
          element: <AboutUs />,
        },
        {
          path: "/react-vite-gh-pages/order",
          element: <OrderSection />,
        },
      ],
    },
  ],
  { basename: "/react-vite-gh-pages/" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
