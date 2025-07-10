import React, { useEffect } from "react";
import { Link } from "react-router";

const ScholarshipDetails = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <h1>Scholarship Details</h1>
      <Link to={-1}>
        <button className="bg-primary px-4 py-1 rounded-sm text-white">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ScholarshipDetails;
