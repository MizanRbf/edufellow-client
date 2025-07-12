import React from "react";
import UserRoutes from "./UserRoutes";
import ModeratorRoutes from "./ModeratorRoutes";
import AdminRoutes from "./AdminRoutes";
import { Link } from "react-router";

const LeftSide = () => {
  return (
    <div className="p-4 w-full h-screen bg-secondary text-white ">
      <div className="">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <img className="w-15" src="/assets/logo.png" alt="" />
          <h1 className="text-white">Edufellow</h1>
        </div>
        <hr className="mb-10 mt-4" />

        {/* Home Route */}
        <Link to="/">
          <p className="px-2 hover:bg-white hover:text-secondary mb-2">Home</p>
        </Link>

        {/* User Routes */}
        <div className="mb-2">
          <UserRoutes></UserRoutes>
        </div>

        {/* Moderator Routes */}
        <div className="mb-2">
          <ModeratorRoutes></ModeratorRoutes>
        </div>

        {/* Admin Routes */}
        <div className="mb-2">
          <AdminRoutes></AdminRoutes>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
