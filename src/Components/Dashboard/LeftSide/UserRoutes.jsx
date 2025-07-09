import React from "react";
import { NavLink } from "react-router";

const UserRoutes = () => {
  return (
    <div>
      <ul className="*:hover:bg-white *:hover:text-primary  space-y-2 *:px-2">
        <li>
          <NavLink to="myProfile">My Profile</NavLink>
        </li>
        <li>
          <NavLink to="myApplication">My Application</NavLink>
        </li>
        <li>
          <NavLink to="myReviews">My Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserRoutes;
