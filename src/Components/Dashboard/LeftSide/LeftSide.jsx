import React from "react";
import UserRoutes from "./UserRoutes";
import ModeratorRoutes from "./ModeratorRoutes";
import AdminRoutes from "./AdminRoutes";
import { Link, useNavigate } from "react-router";
import { MdArrowBackIos } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import useAuth from "../../../Hooks/useAuth";
import useUserRole from "../../../Hooks/useUserRole";
import Loader from "../../../Shared/Loader";

const LeftSide = ({ handleClick }) => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();
  const { role, isLoading } = useUserRole();

  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(role);
  // LogOut
  const handleLogout = () => {
    logOutUser().then(navigate("/auth/login")).catch();
  };
  return (
    <div className="p-4 md:w-80 h-screen overflow-y-auto bg-secondary text-white flex flex-col justify-between z-10">
      {/* Top section: Logo + Links */}
      <div>
        {/* Logo */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 items-center">
            <img className="w-12" src="/assets/logo.png" alt="logo" />
            <h2 className="text-white">Edufellow</h2>
          </div>
          <button onClick={handleClick}>
            <MdArrowBackIos
              size={30}
              className="text-white ml-4 md:hidden cursor-pointer"
            />
          </button>
        </div>

        <hr className="mb-10 mt-4" />

        {/* Navigation Routes */}
        <div>
          {/* Home Route */}
          <Link to="/">
            <div className="px-2 hover:bg-white hover:text-secondary mb-4 flex items-center justify-between font-bold">
              <div className="flex items-center gap-2">
                <FaHome />
                <p> Home</p>
              </div>
              <IoIosArrowForward />
            </div>
          </Link>

          {/* User Routes */}
          {role === "user" && (
            <div className="mb-4">
              <UserRoutes handleClick={handleClick} />
            </div>
          )}

          {/* Moderator Routes */}
          {role === "moderator" && (
            <div className="mb-4">
              <ModeratorRoutes handleClick={handleClick} />
            </div>
          )}

          {/* Admin Routes */}
          {role === "admin" && (
            <div className="mb-4">
              <AdminRoutes handleClick={handleClick} />
            </div>
          )}
        </div>
      </div>

      {/* Bottom section: Logout Button */}
      <div className="bg-white font-bold text-secondary pl-2 border cursor-pointer py-3 flex justify-center">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-sm cursor-pointer"
        >
          <BiLogOut size={20} />
          <span className="text-xl">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
