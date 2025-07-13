import React from "react";
import useAuth from "../../Hooks/useAuth";
import useUserRole from "../../Hooks/useUserRole";
import Loader from "../../Shared/Loader";

const MyProfile = () => {
  const { user } = useAuth();
  const { role, isLoading } = useUserRole();
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="rounded-full ring-2 ring-primary"
        src={user?.photoURL}
        alt=""
      />
      <h2>{user?.displayName}</h2>
      <p>{user?.email}</p>
      <p>{role}</p>
    </div>
  );
};

export default MyProfile;
