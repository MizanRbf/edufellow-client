import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Layouts/AuthLayout/login";
import Register from "../Layouts/AuthLayout/Register";
import HomePage from "../Pages/Home/HomePage";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import AllScholarship from "../Pages/AllScholarship/AllScholarship";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddScholarship from "../Pages/Dashboard/AddScholarship";
import MyProfile from "../Pages/Dashboard/MyProfile";
import MyApplication from "../Pages/Dashboard/MyApplication";
import MyReviews from "../Pages/Dashboard/MyReviews";
import ManageScholarship from "../Pages/Dashboard/ManageScholarship";
import AllAppliedScholarship from "../Pages/Dashboard/AllAppliedScholarship";
import AllReviews from "../Pages/Dashboard/AllReviews";
import ManageAppliedApplication from "../Pages/Dashboard/ManageAppliedApplication";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import ManageReview from "../Pages/Dashboard/ManageReview";

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

  // Dashboard Routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "myApplication",
        element: <MyApplication></MyApplication>,
      },
      {
        path: "myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "addScholarship",
        element: <AddScholarship></AddScholarship>,
      },
      {
        path: "manageScholarship",
        element: <ManageScholarship></ManageScholarship>,
      },
      {
        path: "allAppliedScholarship",
        element: <AllAppliedScholarship></AllAppliedScholarship>,
      },
      {
        path: "allReviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "manageAppliedApplication",
        element: <ManageAppliedApplication></ManageAppliedApplication>,
      },
      {
        path: "manageReview",
        element: <ManageReview></ManageReview>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
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
