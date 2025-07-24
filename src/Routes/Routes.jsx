import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Layouts/AuthLayout/login";
import Register from "../Layouts/AuthLayout/Register";
import HomePage from "../Pages/Home/HomePage";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import AllScholarship from "../Pages/AllScholarship/AllScholarship";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddScholarship from "../Pages/Dashboard/AddScholarship";
import MyProfile from "../Pages/Dashboard/MyProfile";
import MyApplication from "../Pages/Dashboard/MyApplication";
import MyReviews from "../Pages/Dashboard/MyReviews";
import ManageScholarship from "../Pages/Dashboard/ManageScholarship";
import AllAppliedScholarship from "../Pages/Dashboard/AllAppliedScholarship";
import AllReviews from "../Pages/Dashboard/AllReviews";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import ScholarshipDetails from "../Pages/AllScholarship/ScholarshipDetails";
import Payment from "../Pages/Payment/Payment";
import ApplicationForm from "../Pages/ApplicationForm/ApplicationForm";
import OverViewPage from "../Components/Dashboard/RightSide/OverViewPage";
import axios from "axios";
import Loader from "../Shared/Loader";
import UpdateMyApplication from "../Pages/Dashboard/Update/MyApplication/UpdateMyApplication";
import ManageScholarshipDetails from "../Pages/Dashboard/ManageScholarshipDetails";
import ErrorPage from "../Shared/ErrorPage";
import PrivateRoute from "../Routes/PrivateRoute";
import ScholarshipByCountry from "../Pages/ScholarshipByCountry/ScholarshipByCountry";
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
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "/allScholarship",
        Component: AllScholarship,
      },
      {
        path: "/scholarship/:id",
        element: (
          <PrivateRoute>
            <ScholarshipDetails></ScholarshipDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/applicationForm/:scholarshipId",
        element: (
          <PrivateRoute>
            <ApplicationForm></ApplicationForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/scholarshipByCountry/:country",
        element: <ScholarshipByCountry></ScholarshipByCountry>,
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
        element: (
          <PrivateRoute>
            <OverViewPage></OverViewPage>
          </PrivateRoute>
        ),
      },
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "myApplication",
        element: (
          <PrivateRoute>
            <MyApplication></MyApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "updateMyApplication/:id",
        loader: async ({ params }) => {
          const res = await axios.get(
            `https://edufellow-server.vercel.app/myApplication/${params.id}`
          );
          return res.data;
        },
        errorElement: <Loader />,
        element: (
          <PrivateRoute>
            <UpdateMyApplication />
          </PrivateRoute>
        ),
      },

      {
        path: "myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "addScholarship",
        element: (
          <PrivateRoute>
            <AddScholarship></AddScholarship>
          </PrivateRoute>
        ),
      },
      {
        path: "manageScholarship",
        element: (
          <PrivateRoute>
            <ManageScholarship></ManageScholarship>
          </PrivateRoute>
        ),
      },
      {
        path: "allAppliedScholarship",
        element: (
          <PrivateRoute>
            <AllAppliedScholarship></AllAppliedScholarship>
          </PrivateRoute>
        ),
      },
      {
        path: "scholarship2/:id",
        element: (
          <PrivateRoute>
            <ManageScholarshipDetails></ManageScholarshipDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "allReviews",
        element: (
          <PrivateRoute>
            <AllReviews></AllReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <ManageUsers></ManageUsers>
          </PrivateRoute>
        ),
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
