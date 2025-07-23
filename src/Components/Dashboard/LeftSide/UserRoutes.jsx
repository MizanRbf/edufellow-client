import React from "react";
import { NavLink } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";

const UserRoutes = ({ handleClick }) => {
  return (
    <div>
      <ul className="*:hover:bg-white *:hover:text-primary  space-y-4 *:px-2">
        <button className="w-full" onClick={handleClick}>
          <NavLink
            to="myProfile"
            className={({ isActive }) =>
              `flex justify-between items-center font-bold hover:text-secondary ${
                isActive ? "text-secondary bg-white" : "text-white"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <FaUser />
              <p>My Profile</p>
            </div>
            <IoIosArrowForward />
          </NavLink>
        </button>
        <button className="w-full" onClick={handleClick}>
          <NavLink
            to="myApplication"
            className={({ isActive }) =>
              `flex justify-between items-center font-bold hover:text-secondary ${
                isActive ? "text-secondary bg-white" : "text-white"
              }`
            }
          >
            <div className="flex items-center gap-2 ">
              <FaFileAlt />
              <p>My Application</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </button>
        <button className="w-full" onClick={handleClick}>
          <NavLink
            to="myReviews"
            className={({ isActive }) =>
              `flex justify-between items-center font-bold hover:text-secondary ${
                isActive ? "text-secondary bg-white" : "text-white"
              }`
            }
          >
            <div className="flex items-center gap-2 ">
              <FaPenNib />
              <p>My Reviews</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </button>
      </ul>
    </div>
  );
};

export default UserRoutes;
