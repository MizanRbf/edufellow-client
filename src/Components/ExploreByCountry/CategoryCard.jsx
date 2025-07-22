import React from "react";
import { Link } from "react-router";

const CategoryCard = ({ country }) => {
  return (
    <Link to={`/scholarshipByCountry/${country.country}`}>
      <div className="border border-primary p-4 rounded-sm flex gap-3 items-center">
        {/* Image */}
        <div>
          <img className="shadow-lg" src={country.flag} alt="" />
        </div>

        {/* Rest Item */}
        <div>
          <h3>{country.country}</h3>
          <p>
            <span className="font-bold">Scholarships: </span>{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
