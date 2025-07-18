import ScholarCard from "../../Components/AllScholarship/scholarCard";
import Loader from "../../Shared/Loader";

import useScholarships from "../../Hooks/useScholarships";
import SearchBar from "../../Pages/AllScholarship/SearchBar";
import { useEffect, useState } from "react";

const AllScholarship = () => {
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Get
  const {
    scholarships: allScholarships,
    isPending,
    isError,
    error,
  } = useScholarships();

  useEffect(() => {
    if (allScholarships) {
      setFilteredScholarships(allScholarships);
    }
  }, [allScholarships]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInput = e.target.search.value.trim().toLowerCase();
    setSearchText(searchInput);

    const filtered = allScholarships.filter(
      (scholarship) =>
        scholarship.scholarship_name?.toLowerCase().includes(searchInput) ||
        scholarship.university_name?.toLowerCase().includes(searchInput) ||
        scholarship.degree?.toLowerCase().includes(searchInput) ||
        scholarship.degree?.toLowerCase().includes(searchInput)
    );
    setFilteredScholarships(filtered);
  };

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="pt-25 pb-20">
      <div className="max-w-[1500px] mx-auto px-4">
        <div className="my-10">
          <h1 className="mb-2">All Scholarship</h1>
          <p className="">
            Search by Scholarship Name or University Name or Degree.
          </p>
        </div>

        {/* Search Button */}
        <div className="flex justify-center">
          <SearchBar
            handleSubmit={handleSubmit}
            searchText={searchText}
          ></SearchBar>
        </div>

        {/* Blank Page */}
        {filteredScholarships.length === 0 && (
          <EmptyState
            message="No scholarships found!"
            buttonText="Go Home"
            redirectPath="/"
          ></EmptyState>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredScholarships?.map((scholarship) => (
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
