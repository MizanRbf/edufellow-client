import React from "react";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";
import { Navigate, useLocation } from "react-router";
import Loader from "../Shared/Loader";

const ModeratorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, isLoading } = useUserRole();
  const location = useLocation();

  if (loading || isLoading) {
    return <Loader></Loader>;
  }

  if (!user || role !== "Moderator") {
    return <Navigate to="/" state={location.pathname}></Navigate>;
  }
  return children;
};

export default ModeratorRoute;
