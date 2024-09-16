import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoute from "../auth/ProtectedRoute";
import UnprotectedRoute from "../auth/UnprotectedRoute";
import DefaultLayout from "../layout/DefaultLayout";
import ClientPage from "../pages/clientpage/ClientPage";
import PetPage from "../pages/petpage/PetPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      </ProtectedRoute>
    ),
  },

  {
    path: "/Clientes",
    element: (
      <ProtectedRoute>
        <DefaultLayout>
          <ClientPage />
        </DefaultLayout>
      </ProtectedRoute>
    ),
  },

  {
    path: "/Pets",
    element: (
      <ProtectedRoute>
        <DefaultLayout>
          <PetPage />
        </DefaultLayout>
      </ProtectedRoute>
    ),
  },

  {
    path: "/Login",
    element: (
      <UnprotectedRoute>
        <Login />
      </UnprotectedRoute>
    ),
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
