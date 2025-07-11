import React from "react";
import useAuth from "../../Hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="rounded-full ring-2 ring-primary"
        src={user?.photoURL}
        alt=""
      />
      <h2>{user?.displayName}</h2>
      <p>{user?.email}</p>
      <p>Role:</p>
    </div>
  );
};

export default MyProfile;
