import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import LeftSide from "../../Components/Dashboard/LeftSide/LeftSide";
import DashBar from "../../Components/Dashboard/LeftSide/DashBar";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="md:flex relative">
        {/* Left Side */}
        <div
          className={`absolute lg:static top-0 left-0 w-full md:w-80 transition-all duration-500 ease-out transform z-10 ${
            open
              ? "opacity-0 -translate-x-full pointer-events-none"
              : "opacity-100 translate-x-0"
          }`}
        >
          <LeftSide />
        </div>

        {/* Right Side */}
        <div className="w-full">
          <DashBar handleClick={handleClick}></DashBar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
