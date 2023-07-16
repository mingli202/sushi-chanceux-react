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
          path: "/sushi-chanceux-react/",
          element: <Home />,
        },
        {
          path: "/sushi-chanceux-react/contact",
          element: <ContactUs />,
        },
        {
          path: "/sushi-chanceux-react/about",
          element: <AboutUs />,
        },
        {
          path: "/sushi-chanceux-react/order",
          element: <OrderSection />,
        },
      ],
    },
  ],
  // { basename: "/sushi-chanceux-react/" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
