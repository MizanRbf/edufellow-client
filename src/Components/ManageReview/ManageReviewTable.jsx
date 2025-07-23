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
    <div className="border border-primary rounded-lg p-6 flex gap-6 bg-white shadow-md max-w-xl mx-auto">
      {/* Image */}
      <div className="flex-shrink-0 w-28 h-28">
        <img
          className="w-full h-full object-cover rounded-lg shadow-sm"
          src={user_photo}
          alt={`${user_name}'s photo`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {user_name}
        </h3>

        <p className="text-gray-700">
          <span className="font-semibold text-primary">University: </span>
          {university_name}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold text-primary">Subject: </span>
          {subject_category}
        </p>

        <p className="text-gray-500 text-sm italic mb-3">{review_date}</p>

        <p className="text-gray-700">
          <span className="font-semibold text-primary">Ratings: </span>
          <span className="text-yellow-500">{rating} ★</span>
        </p>

        <p className="text-gray-700 mt-3">
          <span className="font-semibold text-primary">Comment: </span>
          <span className="italic">"{commentReview}"</span>
        </p>
      </div>
    </div>
  );
};

export default ManageReviewTable;
