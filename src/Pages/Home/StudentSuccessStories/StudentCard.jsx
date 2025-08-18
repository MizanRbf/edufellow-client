import React from "react";

const StudentCard = ({ student }) => {
  const {
    name,
    photo,
    university,
    country,
    scholarship,
    fieldOfStudy,
    testimonial,
  } = student;
  return (
    <div className="border rounded-xl p-4">
      <p>{name}</p>
      <img className="w-50" src={photo} alt="" />
      <p>{university}</p>
      <p>{scholarship}</p>
      <p>{country}</p>
      <p>{fieldOfStudy}</p>
      <p>{testimonial}</p>
    </div>
  );
};

export default StudentCard;
