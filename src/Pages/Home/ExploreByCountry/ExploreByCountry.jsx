import React from "react";
import CategoryCard from "../../../Components/ExploreByCountry/CategoryCard";
import useScholarships from "../../../Hooks/useScholarships";
import Loader from "../../../Shared/Loader";

const Countries = [
  {
    id: 1,
    country: "Saudi Arabia",
    flag: "https://flagcdn.com/w80/sa.png",
  },
  {
    id: 2,
    country: "United States",
    flag: "https://flagcdn.com/w80/us.png",
  },
  {
    id: 3,
    country: "Germany",
    flag: "https://flagcdn.com/w80/de.png",
  },
  {
    id: 4,
    country: "Italy",
    flag: "https://flagcdn.com/w80/it.png",
  },
  {
    id: 5,
    country: "China",
    flag: "https://flagcdn.com/w80/cn.png",
  },
  {
    id: 6,
    country: "Japan",
    flag: "https://flagcdn.com/w80/jp.png",
  },
  {
    id: 7,
    country: "United Kingdom",
    flag: "https://flagcdn.com/w80/gb.png",
  },
  {
    id: 8,
    country: "Malaysia",
    flag: "https://flagcdn.com/w80/my.png",
  },
  {
    id: 9,
    country: "Australia",
    flag: "https://flagcdn.com/w80/au.png",
  },
];

const ExploreByCountry = () => {
  const { scholarships, isPending } = useScholarships();
  if (isPending) {
    return <Loader></Loader>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Countries.map((country) => (
        <CategoryCard
          key={country.id}
          scholarships={scholarships}
          country={country}
        ></CategoryCard>
      ))}
    </div>
  );
};

export default ExploreByCountry;
