import React from "react";

import UserInfo from "./UserInfo";
import UserRoutes from "./UserRoutes";
import ModeratorRoutes from "./ModeratorRoutes";
import AdminRoutes from "./AdminRoutes";

const LeftSide = () => {
  return (
    <div className="p-4 w-full bg-primary text-white">
      {/* User Photo,Email,Name */}
      <div className="">
        <UserInfo></UserInfo>
        <hr className="my-4" />

        {/* User Routes */}
        <div>
          <UserRoutes></UserRoutes>
        </div>

        {/* Moderator Routes */}
        <div>
          <ModeratorRoutes></ModeratorRoutes>
        </div>

        {/* Admin Routes */}
        <div>
          <AdminRoutes></AdminRoutes>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
