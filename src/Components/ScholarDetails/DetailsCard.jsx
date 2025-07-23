import React from "react";
import Loader from "../../Shared/Loader";
import { Link } from "react-router";
import useScholarshipRating from "../../Hooks/useScholarshipRating";

const DetailsCard = ({ singleScholarship }) => {
  const { averageRating, isPending, isError } = useScholarshipRating(
    singleScholarship?._id
  );

  if (!singleScholarship) {
    return <Loader></Loader>;
  }

  // HandleApply

  const {
    _id,
    scholarship_name,
    university_name,
    university_image,
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
    stipend,
    description,
  } = singleScholarship;
  return (
    <div>
      <div className="border border-gray-200 shadow-lg rounded-sm overflow-hidden flex flex-col md:flex-row gap-6 p-6 bg-white text-gray-800  transition-all duration-300">
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center items-center">
          <img
            className="h-[200px] w-full md:w-auto object-cover rounded-sm shadow-md"
            src={university_image}
            alt="University"
          />
        </div>

        {/* Info Section */}
        <div className="md:w-2/3 space-y-2">
          <h1 className="text-2xl font-bold text-primary">
            {scholarship_name}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-base">
            <p>
              <span className="font-bold">Category:</span>{" "}
              {scholarship_category}
            </p>
            <p>
              <span className="font-bold">University Name:</span>{" "}
              {university_name}
            </p>
            <p>
              <span className="font-bold">Degree:</span> {degree}
            </p>
            <p>
              <span className="font-bold">World Rank:</span>{" "}
              {university_world_rank}
            </p>
            <p>
              <span className="font-bold">Location:</span> {university_city},{" "}
              {university_country}
            </p>
            <p>
              <span className="font-bold">Deadline:</span>{" "}
              {application_deadline}
            </p>
            <p>
              <span className="font-bold">Subject:</span> {subject_category}
            </p>
            <p>
              <span className="font-bold">Tuition Fees:</span> {tuition_fees}
            </p>
            <p>
              <span className="font-bold">Application Fees:</span>{" "}
              {application_fees}
            </p>
            <p>
              <span className="font-bold">Service Charge:</span>{" "}
              {service_charge}
            </p>
            <p>
              <span className="font-bold">Ratings:</span>{" "}
              {isPending
                ? "Loading..."
                : isError
                ? "N/A"
                : averageRating !== undefined
                ? averageRating.average
                : "No ratings"}
            </p>
            <p>
              <span className="font-bold">Post Date:</span> {post_date}
            </p>
            <p>
              <span className="font-bold">Posted By:</span> {posted_user_email}
            </p>
            <p>
              <span className="font-bold">Stipend:</span> {stipend}
            </p>
          </div>

          {/* Description */}
          <p className="mt-2">
            <span className="font-bold">Description:</span> {description}
          </p>

          {/* Button */}
          <div className="flex justify-end mt-4">
            <Link to={`/applicationForm/${_id}`}>
              <button className="bg-primary px-6 py-2 rounded-sm cursor-pointer text-white text-lg font-medium transition duration-300">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
