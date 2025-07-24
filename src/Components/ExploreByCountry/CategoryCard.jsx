import { Link } from "react-router";
const CategoryCard = ({ country }) => {
  return (
    <Link to={`/scholarshipByCountry/${country.country}`}>
      <div className="p-4 rounded-full flex gap-10 items-center shadow-lg bg-white">
        {/* Image */}
        <div className="w-24 h-24 rounded-full  overflow-hidden shadow-lg animate-spin-slow">
          <img
            src={country.flag}
            alt="Flag"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Rest Item */}
        <div>
          <h2 className="">{country.country}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
