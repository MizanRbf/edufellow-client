import React from "react";
import { NavLink } from "react-router";
import useUserRole from "../../Hooks/useUserRole";
import Loader from "../../Shared/Loader";
import { Underline } from "lucide-react";

const LargeDevice = ({ isHome, isScrolled }) => {
  const { role, isLoading } = useUserRole();

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div
      className={`space-x-4  hidden lg:block *:px-3 transition-all duration-500 ease-in-out font-bold text-white`}
    >
      <NavLink
        onClick={() => window.scrollTo(0, 0)}
        to="/"
        className={({ isActive }) =>
          `px-3 transition-all duration-300 ${
            isActive && "border-3 border-b-primary border-x-0 border-t-0"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allScholarship"
        className={({ isActive }) =>
          `px-3 transition-all duration-300 ${
            isActive && "border-3 border-b-primary border-x-0 border-t-0"
          }`
        }
      >
        All Scholarship
      </NavLink>

      <NavLink
        to={`/Dashboard`}
        className={({ isActive }) =>
          `px-3 transition-all duration-300 ${
            isActive && "border-3 border-b-primary border-x-0 border-t-0"
          }`
        }
      >
        {role === "admin" ? "Admin Dashboard" : "User Dashboard"}
      </NavLink>
    </div>
  );
};

export default LargeDevice;
