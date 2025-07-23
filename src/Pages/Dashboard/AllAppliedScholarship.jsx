import React, { useState } from "react";
import Loader from "../../Shared/Loader";
import Applicant from "../../Components/AppliedScholarships/Applicant";
import useApplications from "../../Hooks/useApplications";
import EmptyState from "../../Shared/EmptyState";
import DeleteRejectedButton from "../../Shared/DeleteRejectedButton";
import { Helmet } from "react-helmet-async";

const AllAppliedScholarship = () => {
  // Get Applied Applicants
  const {
    applications: allAppliedScholarships,
    isPending,
    isError,
    error,
  } = useApplications();

  const [sortOption, setSortOption] = useState("");

  // Sorted Applications
  const sortedApplications = [...allAppliedScholarships];

  if (sortOption === "applied_dateLatest") {
    sortedApplications.sort(
      (a, b) => new Date(b.applied_date) - new Date(a.applied_date)
    );
  } else if (sortOption === "applied_dateOldest") {
    sortedApplications.sort(
      (a, b) => new Date(a.applied_date) - new Date(b.applied_date)
    );
  } else if (sortOption === "deadlineSoonest") {
    sortedApplications.sort(
      (a, b) =>
        new Date(a.scholarship_deadline) - new Date(b.scholarship_deadline)
    );
  } else if (sortOption === "deadlineLatest") {
    sortedApplications.sort(
      (a, b) =>
        new Date(b.scholarship_deadline) - new Date(a.scholarship_deadline)
    );
  }

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    console.log(error.message);
  }
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <Helmet>
        <title>All Applied Scholarship || Edufellow</title>
      </Helmet>

      {/* Title */}
      <div className="flex justify-center mt-5 md:mt-10 mb-6">
        <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-10 py-5 shadow-2xl rounded-lg">
          <h1 className="transform skew-x-12 text-white text-3xl md:text-4xl font-extrabold uppercase tracking-widest select-none">
            Manage Applications
          </h1>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0 max-w-5xl mx-auto">
        <div className="flex justify-center">
          <DeleteRejectedButton />
        </div>

        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="select select-bordered w-full max-w-xs md:max-w-sm"
          value={sortOption}
          aria-label="Sort or filter applications"
        >
          <option value="">Sort/Filter By</option>
          <option value="applied_dateLatest">Applied Date (Latest)</option>
          <option value="applied_dateOldest">Applied Date (Oldest)</option>
          <option value="deadlineSoonest">
            Scholarship Deadline (Soonest)
          </option>
          <option value="deadlineLatest">Scholarship Deadline (Latest)</option>
        </select>
      </div>

      {/* Blank State */}
      {sortedApplications.length === 0 && (
        <EmptyState
          message="No Applied Scholarship found!"
          buttonText="Go Back"
          redirectPath={-1}
        />
      )}

      {/* Table Container */}
      <div className="overflow-x-auto shadow-lg rounded-lg max-w-7xl mx-auto bg-white border border-gray-200">
        <table className="min-w-full border-collapse rounded-lg">
          {/* Head */}
          <thead
            className={`${
              sortedApplications.length < 1 ? "hidden" : ""
            } bg-primary sticky top-0 z-20 shadow-md`}
          >
            <tr>
              {[
                "No.",
                "Image",
                "University Name",
                "Scholarship Category",
                "Subject Category",
                "Feedback",
                "Application Status",
              ].map((title, idx) => (
                <th
                  key={idx}
                  className={`py-3 px-5 text-left text-sm font-semibold text-white uppercase tracking-wide ${
                    idx < 6 ? "border-r" : ""
                  }`}
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {sortedApplications.map((applicant, index) => (
              <Applicant
                key={applicant._id}
                applicant={applicant}
                index={index}
                className="odd:bg-white even:bg-gray-50 hover:bg-indigo-100 transition-colors duration-200 cursor-pointer"
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAppliedScholarship;
