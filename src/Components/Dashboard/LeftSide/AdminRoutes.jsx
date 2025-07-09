import React from "react";
import { NavLink } from "react-router";

const AdminRoutes = () => {
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
          <NavLink to="manageScholarship">Manage Scholarship</NavLink>
        </li>
        <li>
          <NavLink to="manageAppliedApplication">
            Manage Applied Application
          </NavLink>
        </li>
        <li>
          <NavLink to="manageUsers">Manage Users</NavLink>
        </li>
        <li>
          <NavLink to="manageReview">Manage Review</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminRoutes;
