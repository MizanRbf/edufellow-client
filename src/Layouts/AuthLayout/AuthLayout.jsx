import React from "react";
import { Outlet } from "react-router";
import RightSection from "../../Components/Registar/RightSection";

const AuthLayout = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-[#018ca5] to-[#000]">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <Outlet />
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-screen md:flex items-center hidden">
        <RightSection />
      </div>
    </div>
  );
};

export default AuthLayout;
