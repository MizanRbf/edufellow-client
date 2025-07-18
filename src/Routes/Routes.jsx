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
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import ManageReview from "../Pages/Dashboard/ManageReview";
import ScholarshipDetails from "../Pages/AllScholarship/ScholarshipDetails";
import Payment from "../Pages/Payment/Payment";
import ApplicationForm from "../Pages/ApplicationForm/ApplicationForm";
import OverViewPage from "../Components/Dashboard/RightSide/OverViewPage";
import axios from "axios";
import Loader from "../Shared/Loader";
import UpdateMyApplication from "../Pages/Dashboard/Update/MyApplication/UpdateMyApplication";
import ManageScholarshipDetails from "../Pages/Dashboard/ManageScholarshipDetails";
import ErrorPage from "../Shared/ErrorPage";

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
        path: "/payment/:scholarshipId",
        element: <Payment></Payment>,
      },
      {
        path: "/allScholarship",
        Component: AllScholarship,
      },
      {
        path: "/scholarship/:id",
        element: <ScholarshipDetails></ScholarshipDetails>,
      },
      {
        path: "/applicationForm/:scholarshipId",
        element: <ApplicationForm></ApplicationForm>,
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
        index: true,
        element: <OverViewPage></OverViewPage>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "myApplication",
        element: <MyApplication></MyApplication>,
      },
      {
        path: "updateMyApplication/:id",
        loader: async ({ params }) => {
          const res = await axios.get(
            `http://localhost:3000/myApplication/${params.id}`
          );
          return res.data;
        },
        errorElement: <Loader />,
        element: <UpdateMyApplication />,
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
        path: "scholarship2/:id",
        element: <ManageScholarshipDetails></ManageScholarshipDetails>,
      },
      {
        path: "allReviews",
        element: <AllReviews></AllReviews>,
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

  // Error Route
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
