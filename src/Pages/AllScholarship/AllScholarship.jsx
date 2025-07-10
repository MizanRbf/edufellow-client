import axios from "axios";
import React, { useEffect, useState } from "react";
import ScholarCard from "../../Components/AllScholarship/scholarCard";

const AllScholarship = () => {
  const [allScholarships, setAllScholarships] = useState([]);
  // Get
  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/scholarships");
        setAllScholarships(data);
      } catch {
        (error) => {
          console.log(error);
        };
      }
    };
    response();
  }, []);

  return (
    <div className="pt-25">
      <div className="">
        <h1>All Scholarship</h1>
        <div>
          {allScholarships.map((scholarship) => (
            <ScholarCard
              key={scholarship._id}
              scholarship={scholarship}
            ></ScholarCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllScholarship;
