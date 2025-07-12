import React from "react";

const ManageReviewTable = ({ manageSingleReview }) => {
  const {
    university_name,
    subject_category,
    user_photo,
    user_name,
    review_date,
    rating,
    commentReview,
  } = manageSingleReview;
  return (
    <div className="border rounded-sm border-primary p-4 flex gap-4">
      {/* image */}
      <div className="">
        <img className="w-full mb-3 rounded-sm" src={user_photo} alt="" />
      </div>

      {/* Content */}
      <div>
        <h3>{user_name}</h3>
        <p>
          <span className="font-semibold">University: </span>
          {university_name}
        </p>
        <p>
          <span className="font-semibold">Subject: </span>
          {subject_category}
        </p>
        <p>{review_date}</p>
        <p>
          <span className="font-semibold">Ratings: </span>
          {rating}
        </p>
        <p>
          <span className="font-semibold">Comment: </span>
          {commentReview}
        </p>
      </div>
    </div>
  );
};

export default ManageReviewTable;
