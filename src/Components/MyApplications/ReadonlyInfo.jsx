import React from "react";
import useAuth from "../../Hooks/useAuth";

const ReadonlyInfo = ({ application }) => {
  const { user } = useAuth();
  console.log(user);
  const today = new Date();
  const date = today.toISOString().split("T")[0];
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <input
        type="date"
        className="input input-bordered w-full"
        required
        value={date}
        disabled
      />
      <input
        type="text"
        className="input input-bordered"
        value={application.scholarship_category}
        disabled
      />
      <input
        type="text"
        className="input input-bordered"
        value={application.university_name}
        disabled
      />
      <input
        type="text"
        className="input input-bordered"
        value={user?.displayName}
        disabled
      />
      <input
        type="email"
        className="input input-bordered"
        value={user?.photoURL}
        disabled
      />
      <input
        type="email"
        className="input input-bordered"
        value={user?.email}
        disabled
      />
    </div>
  );
};

export default ReadonlyInfo;
