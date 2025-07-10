import React from "react";

const ScholarCard = ({ scholarship }) => {
  const {
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
  } = scholarship;
  return (
    <div>
      <img src={university_image} alt="" />
      <h1>{scholarship_name}</h1>
      <p>{tuition_fees}</p>
    </div>
  );
};

export default ScholarCard;
