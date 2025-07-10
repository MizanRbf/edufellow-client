import React from "react";
import Loader from "../../Shared/Loader";
import { Link } from "react-router";
const TopScholarCard = ({ topScholarship }) => {
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
    <div className="border border-primary shadow-lg rounded-sm p-4">
      <img className="h-[200px] w-full" src={university_image} alt="" />
      <h1>{scholarship_name}</h1>
      <p>
        <span className="font-semibold">Category: </span>
        {scholarship_category}
      </p>
      <p>
        <span className="font-semibold">Location: </span>
        {university_city},{university_country}
      </p>
      <p>
        <span className="font-semibold">Deadline: </span>
        {application_deadline}
      </p>
      <p>
        <span className="font-semibold">Subject: </span>
        {subject_category}
      </p>
      <p>
        <span className="font-semibold">Tuition Fees: </span>
        {tuition_fees}
      </p>
      <p>
        <span className="font-semibold">Application Fees: </span>
        {application_fees}
      </p>
      <p>
        <span className="font-semibold">Service Charge: </span>
        {service_charge}
      </p>
      <p>
        <span className="font-semibold">Ratings: </span>
      </p>
      <div className="flex justify-end">
        <Link to={`/scholarship/${_id}`}>
          <button className="bg-primary px-4 py-1 rounded-sm text-white">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopScholarCard;
