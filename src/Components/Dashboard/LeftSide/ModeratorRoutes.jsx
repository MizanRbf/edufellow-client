import React from "react";
import { NavLink } from "react-router";
import { IoIosArrowForward, IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import {
  MdMarkunreadMailbox,
  MdOutlineAddTask,
  MdRateReview,
} from "react-icons/md";
const ModeratorRoutes = ({ handleClick }) => {
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
            <div className="flex items-center gap-2 ">
              <FaUser />
              <p> My Profile</p>
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
              <p>Manage Scholarships</p>
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
              <p>All applied Scholarship</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </button>
        <button className="w-full" onClick={handleClick}>
          <NavLink
            to="allReviews"
            className={({ isActive }) =>
              `flex justify-between items-center font-bold hover:text-secondary ${
                isActive ? "text-secondary bg-white" : "text-white"
              }`
            }
          >
            <div className="flex items-center gap-2 ">
              <MdRateReview />
              <p>All reviews</p>
            </div>

            <IoIosArrowForward />
          </NavLink>
        </button>
      </ul>
    </div>
  );
};

export default ModeratorRoutes;
