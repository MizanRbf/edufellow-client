import React from "react";
import { Outlet } from "react-router";

const RightSide = () => {
  return (
    <div className="p-4">
      <Outlet></Outlet>
    </div>
  );
};

export default RightSide;
