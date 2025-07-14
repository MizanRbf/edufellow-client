import React from "react";
import { useLoaderData } from "react-router";
import Loader from "../../Shared/Loader";

const MyApplicationDetails = () => {
  const applicationInfo = useLoaderData();
  const {
    scholarship_category,
    university_name,
    phone,
    photo,
    address,
    gender,
    applying_degree,
    ssc_result,
    hsc_result,
    study_gap,
    subject_category,
    user_name,
    user_email,
    university_address,
    application_fees,
    service_charge,
    date,
  } = applicationInfo;

  return (
    <div className="border p-4 flex gap-4">
      <img className="w-60" src={photo} alt="" />
      <div>
        <p>
          <span></span>
          {scholarship_category}
        </p>
        <p>
          <span></span>
          {date}
        </p>
        <p>
          <span></span>
          {service_charge}
        </p>
        <p>
          <span></span>
          {application_fees}
        </p>
        <p>
          <span></span>
          {university_address}
        </p>
        <p>
          <span></span>
          {user_email}
        </p>
        <p>
          <span></span>
          {user_name}
        </p>
        <p>
          <span></span>
          {subject_category}
        </p>
        <p>
          <span></span>
          {study_gap}
        </p>
        <p>
          <span></span>
          {ssc_result}
        </p>
        <p>
          <span></span>
          {hsc_result}
        </p>
        <p>
          <span></span>
          {applying_degree}
        </p>
        <p>
          <span></span>
          {gender}
        </p>
        <p>
          <span></span>
          {address}
        </p>
        <p>
          <span></span>
          {phone}
        </p>
        <p>
          <span></span>
          {university_name}
        </p>
      </div>
    </div>
  );
};

export default MyApplicationDetails;
