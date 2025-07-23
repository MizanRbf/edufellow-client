import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CategoryCard = ({ country }) => {
  const axiosSecure = useAxiosSecure();
  const [countryCount, setCountryCount] = useState([]);
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await axiosSecure(
          `/scholarshipByCategory/${country?.country}`
        );
        const data = await res.data;
        setCountryCount(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTutors();
  }, [country?.country, axiosSecure]);

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
            {countryCount?.length}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
