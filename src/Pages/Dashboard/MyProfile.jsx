import React from "react";
import useAuth from "../../Hooks/useAuth";
import useUserRole from "../../Hooks/useUserRole";
import Loader from "../../Shared/Loader";
import { Helmet } from "react-helmet-async";
import ProfileUpdate from "../../Components/MyProfile/ProfileUpdate";

const MyProfile = () => {
  const { user } = useAuth();
  const { role, isLoading } = useUserRole();
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="">
      <Helmet>
        <title>My Profile || Edufellow</title>
      </Helmet>

      {/* Title */}
      <div className="flex justify-center mt-5 md:mt-10 mb-6 md:mb-20">
        <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
          <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
            My Profile
          </h1>
        </div>
      </div>

      {/* My Profile */}
      <div className="flex items-center justify-center px-4 ">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
          {/* Left Side - Profile Info */}
          <div className="flex flex-col items-center justify-center bg-primary/10 p-8 lg:w-1/3 space-y-4">
            <img
              src={
                user?.photoURL || "https://i.ibb.co/FzF3YVn/default-avatar.png"
              }
              alt="Profile"
              className="h-32 w-32 rounded-full ring-4 ring-primary object-cover shadow-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {user?.displayName || "No Name"}
            </h2>
            <p className="text-sm text-gray-600">{user?.email || "No Email"}</p>
            {role !== "User" && (
              <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                {role}
              </span>
            )}
          </div>

          {/* Right Side - Profile Update */}
          <div className="flex-1 p-6 lg:p-10">
            <div className="bg-slate-100 p-4 rounded-xl shadow-inner">
              <ProfileUpdate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
