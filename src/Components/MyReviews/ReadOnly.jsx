import React from "react";
import useAuth from "../../Hooks/useAuth";

const ReadOnly = ({ myReview }) => {
  const { scholarship_name, university_name, commentReview } = myReview;
  const { user } = useAuth();
  const today = new Date();
  const date = today.toISOString().split("T")[0];
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <input
        type="date"
        name="review_date"
        className="input input-bordered w-full"
        required
        value={date}
        readOnly
      />
      <input
        type="text"
        name="scholarship_name"
        className="input input-bordered"
        value={scholarship_name}
        readOnly
      />

      <input
        type="text"
        name="university_name"
        className="input input-bordered"
        value={university_name}
        readOnly
      />

      <input
        type="text"
        name="user_name"
        className="input input-bordered"
        value={user?.displayName}
        readOnly
      />
      <input
        type="email"
        name="user_photo"
        className="input input-bordered"
        value={user?.photoURL}
        readOnly
      />
      <input
        type="email"
        name="user_email"
        className="input input-bordered"
        value={user?.email}
        readOnly
      />
    </div>
  );
};

export default ReadOnly;
