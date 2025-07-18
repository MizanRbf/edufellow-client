import React from "react";

const ApplicantsDetails = ({ applicant }) => {
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
    applied_date,
  } = applicant;

  return (
    <div className="border p-4 flex flex-col md:flex-row gap-4">
      <img className="max-w-100" src={photo} alt="" />
      <div>
        <p className="font-bold text-xl">{user_name}</p>
        <p>
          <span className="font-bold">University Name: </span>
          {university_name}
        </p>
        <p>
          <span className="font-bold">Scholarship Category: </span>
          {scholarship_category}
        </p>
        <p>
          <span className="font-bold">Degree: </span>
          {applying_degree}
        </p>
        <p>
          <span className="font-bold">Subject Category: </span>
          {subject_category}
        </p>

        <p>
          <span className="font-bold">University Address: </span>
          {university_address}
        </p>
        <p>
          <span className="font-bold">Email: </span>
          {user_email}
        </p>

        <p>
          <span className="font-bold">Study Gap: </span>
          {study_gap}
        </p>
        <p>
          <span className="font-bold">SSC Result: </span>
          {ssc_result}
        </p>
        <p>
          <span className="font-bold">HSC Result: </span>
          {hsc_result}
        </p>

        <p>
          <span className="font-bold">Gender: </span>
          {gender}
        </p>
        <p>
          <span className="font-bold">Address: </span>
          {address}
        </p>
        <p>
          <span className="font-bold">Service Charge: </span>
          {service_charge}
        </p>
        <p>
          <span className="font-bold">Application Fees: </span>
          {application_fees}
        </p>
        <p>
          <span className="font-bold">Phone: </span>
          {phone}
        </p>
        <p>
          <span className="font-bold">Applied Date: </span>
          {applied_date}
        </p>
      </div>
    </div>
  );
};

export default ApplicantsDetails;
