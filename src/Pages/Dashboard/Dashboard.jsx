import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import LeftSide from "../../Components/Dashboard/LeftSide/LeftSide";
import DashBar from "../../Components/Dashboard/RightSide/DashBar/DashBar";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    if (window.innerWidth <= 1024) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Dashboard || Edufellow</title>
      </Helmet>
      <div className="flex flex-col md:flex-row relative max-h-screen">
        {/* Left Side */}
        <div
          className={`absolute lg:static top-0 left-0 w-full md:w-0 md:min-w-[300px] transition-all duration-500 ease-out transform z-10 ${
            open
              ? "opacity-0 -translate-x-full pointer-events-none"
              : "opacity-100 translate-x-0"
          }`}
        >
          <LeftSide setOpen={setOpen} handleClick={handleClick} />
        </div>

        {/* Right Side */}
        <div className="overflow-x-auto p-6 w-full max-h-[100vh-60px]">
          {/* DashBar */}
          <DashBar handleClick={handleClick}></DashBar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
