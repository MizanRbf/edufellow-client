import React from "react";
import { NavLink } from "react-router";
import useUserRole from "../../Hooks/useUserRole";
import Loader from "../../Shared/Loader";

const LargeDevice = ({ isHome, isScrolled }) => {
  const { role, isLoading } = useUserRole();

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div
      className={`space-x-4  hidden lg:block *:px-3 transition-all duration-500 ease-in-out font-bold ${
        isScrolled ? "text-black" : "text-white"
      }`}
    >
      <NavLink
        onClick={() => window.scrollTo(0, 0)}
        to="/"
        className={({ isActive }) =>
          `px-3 transition-all duration-300 ${
            isHome
              ? isActive
                ? "text-white bg-primary rounded-full"
                : isScrolled
                ? "text-black"
                : "text-white"
              : "text-black"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allScholarship"
        className={({ isActive }) =>
          `px-3 transition-all duration-300 ${
            isActive
              ? "text-white bg-primary rounded-full"
              : isHome
              ? isScrolled
                ? "text-black"
                : "text-white"
              : "text-black"
          }`
        }
      >
        All Scholarship
      </NavLink>

      <NavLink
        to={`/Dashboard`}
        className={({ isActive }) =>
          `px-3 transition-all duration-300 ${
            isActive
              ? "text-white bg-primary rounded-full"
              : isHome
              ? isScrolled
                ? "text-black"
                : "text-white"
              : "text-black"
          }`
        }
      >
        {role === "admin" ? "Admin Dashboard" : "User Dashboard"}
      </NavLink>
    </div>
  );
};

export default LargeDevice;
