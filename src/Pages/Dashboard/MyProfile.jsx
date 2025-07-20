import React from "react";
import useAuth from "../../Hooks/useAuth";
import useUserRole from "../../Hooks/useUserRole";
import Loader from "../../Shared/Loader";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user } = useAuth();
  const { role, isLoading } = useUserRole();
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet>
        <title>My Profile || Edufellow</title>
      </Helmet>
      <img
        className="rounded-full ring-2 ring-primary"
        src={user?.photoURL}
        alt=""
      />
      <h2>{user?.displayName}</h2>
      <p>{user?.email}</p>
      {role !== "User" && <p>{role}</p>}
    </div>
  );
};

export default MyProfile;
