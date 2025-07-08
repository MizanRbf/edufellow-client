import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Layouts/AuthLayout/login";
import Register from "../Layouts/AuthLayout/Register";
import HomePage from "../Pages/Home/HomePage";
import RootLayout from "../Layouts/RootLayout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
    ],
  },
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
