import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import LeftSide from "../../Components/Dashboard/LeftSide/LeftSide";
import DashBar from "../../Components/Dashboard/RightSide/DashBar/DashBar";
import OverViewPage from "../../Components/Dashboard/RightSide/OverViewPage";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="md:flex relative">
        {/* Left Side */}
        <div
          className={`absolute md:static top-0 left-0 w-full md:w-100 transition-all duration-500 ease-out transform z-10 ${
            open
              ? "opacity-0 -translate-x-full pointer-events-none"
              : "opacity-100 translate-x-0"
          }`}
        >
          <LeftSide setOpen={setOpen} handleClick={handleClick} />
        </div>

        {/* Right Side */}
        <div className="w-full">
          {/* DashBar */}
          <DashBar handleClick={handleClick}></DashBar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
