import React from "react";
import { NavLink } from "react-router";
import { IoIosArrowForward, IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import {
  MdMarkunreadMailbox,
  MdOutlineAddTask,
  MdRateReview,
} from "react-icons/md";
const ModeratorRoutes = () => {
  return (
    <div>
      <ul className="*:hover:bg-white *:hover:text-primary  space-y-4 *:px-2">
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </div>
  );
};

export default ModeratorRoutes;
