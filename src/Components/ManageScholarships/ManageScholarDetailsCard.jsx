import React from "react";
import Loader from "../../Shared/Loader";
import { Link } from "react-router";

const ManageScholarDetailsCard = ({ singleScholarship }) => {
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
      <div className="border border-primary shadow-lg rounded-sm flex items-center gap-6 p-4">
        <div>
          <img className="h-[200px] w-full" src={university_image} alt="" />
        </div>
        <div>
          <h1>{scholarship_name}</h1>
          <p>
            <span className="font-semibold">Category: </span>
            {scholarship_category}
          </p>
          <p>
            <span className="font-semibold">University Name: </span>
            {university_name}
          </p>
          <p>
            <span className="font-semibold">Degree: </span>
            {degree}
          </p>
          <p>
            <span className="font-semibold">World Rank: </span>
            {university_world_rank}
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
          <p>
            <span className="font-semibold">Post Date: </span> {post_date}
          </p>
          <p>
            <span className="font-semibold">Posted User Email: </span>{" "}
            {posted_user_email}
          </p>
          <p>
            <span className="font-semibold">Stipend: </span> {stipend}
          </p>
          <p>
            <span className="font-semibold">Description: </span> {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManageScholarDetailsCard;
