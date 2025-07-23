import ScholarCard from "../../Components/AllScholarship/scholarCard";
import Loader from "../../Shared/Loader";

import useScholarships from "../../Hooks/useScholarships";
import SearchBar from "../../Pages/AllScholarship/SearchBar";
import { useEffect, useState } from "react";
import EmptyState from "../../Shared/EmptyState";
import Pagination from "../../Components/AllScholarship/Pagination";
import { Helmet } from "react-helmet-async";

const AllScholarship = () => {
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredScholarships.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentScholarships = filteredScholarships.slice(startIndex, endIndex);

  // Scroll Behavior
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

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
      <Helmet>
        <title>All Scholarship || Edufellow</title>
      </Helmet>
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Title */}
        <div className="my-10">
          <div className="flex justify-center">
            <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg">
              <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
                All Scholarships
              </h1>
            </div>
          </div>
        </div>

        <p className="text-center mb-2">
          Search by Scholarship Name or University Name or Degree.
        </p>
        {/* Search Button */}
        <div className="flex justify-center">
          <SearchBar
            handleSubmit={handleSubmit}
            searchText={searchText}
          ></SearchBar>
        </div>

        {/* Blank Page */}
        {currentScholarships.length === 0 && (
          <EmptyState
            message="No scholarships found!"
            buttonText="Go Home"
            redirectPath="/"
          ></EmptyState>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentScholarships?.map((scholarship) => (
            <ScholarCard
              key={scholarship._id}
              scholarship={scholarship}
            ></ScholarCard>
          ))}
        </div>
        {/* Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        ></Pagination>
      </div>
    </div>
  );
};

export default AllScholarship;
