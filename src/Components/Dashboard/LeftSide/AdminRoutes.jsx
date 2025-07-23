import React from "react";
import { NavLink } from "react-router";
import { IoIosArrowForward, IoIosMailOpen, IoMdSettings } from "react-icons/io";
import { FaUser, FaUsersCog } from "react-icons/fa";
import {
  MdFactCheck,
  MdMarkunreadMailbox,
  MdOutlineAddTask,
} from "react-icons/md";
const AdminRoutes = ({ handleClick }) => {
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
            to="addScholarship"
            className={({ isActive }) =>
              `flex justify-between items-center font-bold hover:text-secondary ${
                isActive ? "text-secondary bg-white" : "text-white"
              }`
            }
          >
            <div className="flex items-center gap-2 ">
              <MdOutlineAddTask />
              <p>Add Scholarship</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </button>
        <button className="w-full" onClick={handleClick}>
          <NavLink
            to="manageScholarship"
            className={({ isActive }) =>
              `flex justify-between items-center font-bold hover:text-secondary ${
                isActive ? "text-secondary bg-white" : "text-white"
              }`
            }
          >
            <div className="flex items-center gap-2 ">
              <IoMdSettings />
              <p>Manage Scholarship</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </button>
        <button className="w-full" onClick={handleClick}>
          <NavLink
            to="allAppliedScholarship"
            className={({ isActive }) =>
              `flex justify-between items-center font-bold hover:text-secondary ${
                isActive ? "text-secondary bg-white" : "text-white"
              }`
            }
          >
            <div className="flex items-center gap-2 ">
              <MdMarkunreadMailbox />
              <p>Manage Applied Application</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </button>
        <button className="w-full" onClick={handleClick}>
          <NavLink
            to="manageUsers"
            className={({ isActive }) =>
              `flex justify-between items-center font-bold hover:text-secondary ${
                isActive ? "text-secondary bg-white" : "text-white"
              }`
            }
          >
            <div className="flex items-center gap-2 ">
              <FaUsersCog />
              <p>Manage Users</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </button>
        <button className="w-full" onClick={handleClick}>
          <NavLink
            to="manageReview"
            className={({ isActive }) =>
              `flex justify-between items-center font-bold hover:text-secondary ${
                isActive ? "text-secondary bg-white" : "text-white"
              }`
            }
          >
            <div className="flex items-center gap-2 ">
              <MdFactCheck />
              <p> Manage Review</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </button>
      </ul>
    </div>
  );
};

export default AdminRoutes;
