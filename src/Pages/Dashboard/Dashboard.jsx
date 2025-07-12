import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import LeftSide from "../../Components/Dashboard/LeftSide/LeftSide";
import { MdArrowForwardIos } from "react-icons/md";

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
          className={`absolute lg:static top-0 left-0 w-full md:w-80 transition-all duration-500 ease-out transform z-10 ${
            open
              ? "opacity-0 -translate-x-full pointer-events-none"
              : "opacity-100 translate-x-0"
          }`}
        >
          <LeftSide setOpen={setOpen} handleClick={handleClick} />
        </div>

        {/* Right Side */}
        <div className="w-full">
          <div className="flex justify-between px-4 py-3 shadow-lg md:hidden">
            <img className="w-12" src="/assets/logo.png" alt="logo" />
            <button onClick={handleClick}>
              <MdArrowForwardIos
                size={30}
                className="text-secondary ml-4 cursor-pointer"
              />
            </button>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
