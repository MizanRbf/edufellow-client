import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";

const SmallDevice = ({ open, setOpen, handleSignOut }) => {
  const { user } = useAuth();
  return (
    <div>
      <nav
        className={`absolute top-18 lg:hidden right-0 left-0 py-6 shadow bg-[rgba(0,0,0,0.81)]  text-lg font-bold text-white transform transition-all ease-in-out duration-300 z-50 ${
          open
            ? "opacity-100 translate-y-2 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        <ul className="px-10 *:hover:bg-white *:hover:text-black  *:hover:duration-300 space-y-2">
          <li>
            <Link to="/">
              <button
                className="w-full text-left cursor-pointer"
                onClick={() => {
                  setOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/allScholarship">
              <button
                className="w-full text-left cursor-pointer"
                onClick={() => {
                  setOpen(false);
                }}
              >
                All Scholarship
              </button>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <button
                className="w-full text-left cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </button>
            </Link>
          </li>
        </ul>
        {/* Login Button */}

        <div className="px-10">
          {user ? (
            <button
              onClick={handleSignOut}
              className="cursor-pointer py-2 mt-2 bg-white rounded-sm text-primary shadow-2xl w-full hover:bg-[rgb(248,237,208)]"
            >
              Logout
            </button>
          ) : (
            <Link to="/auth/login">
              <button
                className="cursor-pointer py-2 mt-2 bg-white rounded-sm
                    text-primary shadow-2xl w-full"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default SmallDevice;
