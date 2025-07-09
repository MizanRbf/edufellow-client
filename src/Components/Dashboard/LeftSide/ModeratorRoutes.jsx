import React from "react";
import { NavLink } from "react-router";

const ModeratorRoutes = () => {
  return (
    <div>
      <ul className="*:hover:bg-white *:hover:text-primary  space-y-2 *:px-2">
        <li>
          <NavLink to="myProfile">My Profile</NavLink>
        </li>
        <li>
          <NavLink to="addScholarship">Add Scholarship</NavLink>
        </li>
        <li>
          <NavLink to="manageScholarship">Manage Scholarships</NavLink>
        </li>
        <li>
          <NavLink to="allAppliedScholarship">All applied Scholarship</NavLink>
        </li>
        <li>
          <NavLink to="allReviews">All reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ModeratorRoutes;
