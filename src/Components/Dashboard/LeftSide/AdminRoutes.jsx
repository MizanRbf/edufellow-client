import React from "react";
import { NavLink } from "react-router";
import { IoIosArrowForward, IoIosMailOpen, IoMdSettings } from "react-icons/io";
import { FaUser, FaUsersCog } from "react-icons/fa";
import { MdFactCheck, MdOutlineAddTask } from "react-icons/md";
const AdminRoutes = () => {
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
            to="addScholarship"
            className="flex justify-between items-center hover:text-secondary font-bold"
          >
            <div className="flex items-center gap-2 ">
              <MdOutlineAddTask />
              <p>Add Scholarship</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="manageScholarship"
            className="flex justify-between items-center hover:text-secondary font-bold"
          >
            <div className="flex items-center gap-2 ">
              <IoMdSettings />
              <p>Manage Scholarship</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="manageAppliedApplication"
            className="flex justify-between items-center hover:text-secondary font-bold"
          >
            <div className="flex items-center gap-2 ">
              <IoIosMailOpen />
              <p>Manage Applied Application</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="manageUsers"
            className="flex justify-between items-center hover:text-secondary font-bold"
          >
            <div className="flex items-center gap-2 ">
              <FaUsersCog />
              <p>Manage Users</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="manageReview"
            className="flex justify-between items-center hover:text-secondary font-bold"
          >
            <div className="flex items-center gap-2 ">
              <MdFactCheck />
              <p> Manage Review</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminRoutes;
