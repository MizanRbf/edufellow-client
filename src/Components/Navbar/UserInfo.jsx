import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Tooltip } from "react-tooltip";

const UserInfo = () => {
  const { user } = useAuth();
  return (
    <div>
      {user && (
        <a className="my-anchor-element">
          <div className="relative group ring-primary ring-1 ring-offset-1 rounded-full">
            <img
              className=" rounded-full min-w-[30px] md:min-w-[35px] h-[30px] md:h-[35px]"
              src={user?.photoURL || "/default-avatar.png"}
              alt="User"
            />
          </div>

          <Tooltip anchorSelect=".my-anchor-element" place="left">
            <p>{user?.displayName || "User"}</p>
          </Tooltip>
        </a>
      )}
    </div>
  );
};

export default UserInfo;
