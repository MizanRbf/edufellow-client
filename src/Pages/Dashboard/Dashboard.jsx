import React from "react";
import { Outlet } from "react-router";
import LeftSide from "../../Components/Dashboard/LeftSide/LeftSide";

const Dashboard = () => {
  return (
    <div className="m-10 shadow-2xl flex gap-4 ">
      {/* Left Side */}
      <div className="w-80">
        <LeftSide></LeftSide>
      </div>
      {/* Right Side */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
