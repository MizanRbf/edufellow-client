import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Layouts/AuthLayout/login";
import Register from "../Layouts/AuthLayout/Register";
import HomePage from "../Pages/Home/HomePage";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import AllScholarship from "../Pages/AllScholarship/AllScholarship";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/allScholarship",
        Component: AllScholarship,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/user",
        element: <h1>User</h1>,
      },
      {
        path: "/dashboard/moderator",
        element: <h1>Moderator</h1>,
      },
      {
        path: "/dashboard/admin",
        element: <h1>admin</h1>,
      },
    ],
  },

  // Auth Routes
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
