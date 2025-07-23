import React from "react";
import Loader from "../../Shared/Loader";
import { Link } from "react-router";
import useScholarshipRating from "../../Hooks/useScholarshipRating";

const TopScholarCard = ({ topScholarship }) => {
  const { averageRating, isPending, isError } = useScholarshipRating(
    topScholarship?._id
  );

  if (!topScholarship) {
    return <Loader></Loader>;
  }
  const {
    _id,
    scholarship_name,
    university_name,
    university_image,
    university_logo,
    university_country,
    university_city,
    university_world_rank,
    subject_category,
    scholarship_category,
    degree,
    tuition_fees,
    application_fees,
    service_charge,
    application_deadline,
    post_date,
    posted_user_email,
  } = topScholarship;
  return (
    <div className="group bg-white border border-gray-200 shadow-md hover:shadow-xl rounded-sm overflow-hidden transition-all duration-300 ease-in-out flex flex-col">
      {/* Image */}
      <img
        className="h-[250px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
        src={university_image}
        alt={scholarship_name}
      />

      {/* Content */}
      <div className="p-5 border border-t-0 border-primary rounded-b-sm flex flex-col flex-1">
        {/* Top content that grows */}
        <div className="flex-1 space-y-1">
          <h4 className="text-lg font-semibold text-gray-800">
            {scholarship_name}
          </h4>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Category:</span>{" "}
            {scholarship_category}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Location:</span>{" "}
            {university_city}, {university_country}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Deadline:</span>{" "}
            {application_deadline}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Subject:</span>{" "}
            {subject_category}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Tuition Fees:</span>{" "}
            {tuition_fees}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Application Fees:</span>{" "}
            {application_fees}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Service Charge:</span>{" "}
            {service_charge}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Ratings:</span>{" "}
            {isPending
              ? "Loading..."
              : isError
              ? "N/A"
              : averageRating?.average || "No ratings"}
          </p>
        </div>

        {/* Bottom button fixed */}
        <div className="pt-3 text-right">
          <Link to={`/scholarship/${_id}`}>
            <button className="bg-primary hover:bg-secondary text-white font-medium px-5 py-2 rounded-sm transition-colors duration-300">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopScholarCard;
