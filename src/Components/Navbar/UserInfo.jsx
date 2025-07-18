import React from "react";
import useAuth from "../../Hooks/useAuth";

const UserInfo = () => {
  const { user } = useAuth();
  return (
    <div>
      {user && (
        <div className="flex items-center gap-3">
          <p className="text-black bg-white text-xs px-2 border border-secondary rounded-sm font-bold">
            {user?.displayName || "User"}
          </p>
          <div className="relative group ring-primary ring-1 ring-offset-1 rounded-full">
            <img
              className=" rounded-full min-w-[30px] md:min-w-[35px] h-[30px] md:h-[35px]"
              src={user?.photoURL || "/default-avatar.png"}
              alt="User"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
