import React from "react";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";
import Loader from "../Shared/Loader";
import { Navigate, useLocation } from "react-router";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, isLoading } = useUserRole();
  const location = useLocation();

  if (loading || isLoading) {
    return <Loader></Loader>;
  }

  if (!user || role !== "admin") {
    return <Navigate to="/" state={location.pathname}></Navigate>;
  }
  return children;
};

export default AdminRoute;
