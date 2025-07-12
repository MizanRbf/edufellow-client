import React from "react";
import { NavLink } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";

const UserRoutes = () => {
  return (
    <div>
      <ul className="*:hover:bg-white *:hover:text-primary  space-y-4 *:px-2">
        <li>
          <NavLink
            to="myProfile"
            className="flex justify-between items-center hover:text-secondary font-bold"
          >
            <div className="flex items-center gap-2 ">
              <FaUser />
              <p>My Profile</p>
            </div>
            <IoIosArrowForward />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="myApplication"
            className="flex justify-between items-center hover:text-secondary font-bold"
          >
            <div className="flex items-center gap-2 ">
              <FaFileAlt />
              <p>My Application</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="myReviews"
            className="flex justify-between items-center hover:text-secondary font-bold"
          >
            <div className="flex items-center gap-2 ">
              <FaPenNib />
              <p>My Reviews</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserRoutes;
