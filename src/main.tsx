import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Faq from "./components/pages/Faq";
import Price from "./components/pages/Price";
import ErrorPage from "./components/pages/ErrorPage";
import Layout from "./components/layer/LayerOutlet";
import Home from "./components/pages/HomePage";
import Dashboard from "./components/pages/Dashboard";
import LoginSignModal from "./components/authentication/LoginSignContainer";
import ProtectedRoute from "./components/authentication/ProtectedRoute";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute element={<Layout />} />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <ProtectedRoute element={<Home />} />,
        },
        {
          path: "Home",
          element: <ProtectedRoute element={<Home />} />,
        },
        {
          path: "Dashboard",
          element: <ProtectedRoute element={<Dashboard />} />,
        },
        {
          path: "Faq",
          element: <ProtectedRoute element={<Faq />} />,
        },
        {
          path: "Price",
          element: <ProtectedRoute element={<Price />} />,
        },
      ],
    },
    {
      path: "/LoginSignup",
      element: <LoginSignModal />,
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
