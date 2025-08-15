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
    university_image,
    university_country,
    university_city,
    subject_category,
    scholarship_category,
    tuition_fees,
    application_fees,
    service_charge,
    application_deadline,
  } = topScholarship;
  return (
    <div className="group bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 ease-in-out flex flex-col h-[550px] p-3 border border-gray-200">
      {/* Image */}
      <div className="h-[250px] w-full overflow-hidden rounded-sm">
        <img
          className="h-[250px] min-h-[250px] max-h-[250px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={university_image}
          alt={scholarship_name}
        />
      </div>

      {/* Content */}
      <div className="mt-4  flex flex-col flex-1">
        <div className="flex-1 space-y-1 overflow-auto">
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

        {/* Bottom Button */}
        <div className="pt-3 mt-auto text-right">
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
