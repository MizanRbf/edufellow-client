import React from "react";
import useAuth from "../../Hooks/useAuth";
import { NavLink } from "react-router";

const LargeDevice = ({ isHome, isScrolled }) => {
  const { user } = useAuth();
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

      {user && (
        <>
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
            Dashboard
          </NavLink>
        </>
      )}
    </div>
  );
};

export default LargeDevice;
