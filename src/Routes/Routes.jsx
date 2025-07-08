import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Layouts/AuthLayout/login";
import Register from "../Layouts/AuthLayout/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>hii</h1>,
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
