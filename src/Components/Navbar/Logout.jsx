import React from "react";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Logout = ({ handleSignOut }) => {
  const { user } = useAuth();
  return (
    <div>
      <div className="hidden lg:block">
        {user ? (
          <button
            onClick={handleSignOut}
            className="cursor-pointer bg-primary rounded-sm text-sm md:text-lg py-1 md:py-2 px-2 md:px-6 font-bold text-white"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="bg-primary rounded-sm text-sm md:text-lg py-1 md:py-2 px-2 md:px-6 font-bold text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Logout;
