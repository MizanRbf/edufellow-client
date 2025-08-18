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
    <div className="border border-[#224f6d27] bg-[#224f6d11] rounded-xl p-6 flex flex-col items-center gap-4 max-w-xs w-full hover:shadow-lg transition-shadow duration-300">
      {/* Profile image with better styling */}
      <div className="relative mt- mb-2">
        <img
          className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md"
          src={photo}
          alt={name}
        />
      </div>

      {/* Name with emphasis */}
      <h3 className="text-lg font-semibold text-[#224f6d]">{name}</h3>

      {/* University with icon */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
        <span>{university}</span>
      </div>

      {/* Scholarship with icon */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4H5z"
          />
        </svg>
        <span className="font-medium text-[#224f6d]">{scholarship}</span>
      </div>

      {/* Country and field with icons */}
      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-1 text-gray-600">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{country}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <span>{fieldOfStudy}</span>
        </div>
      </div>

      {/* Testimonial with quote styling */}
      <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-[#224f6d] italic text-gray-700 text-sm">
        <p>"{testimonial}"</p>
      </div>
    </div>
  );
};

export default StudentCard;
