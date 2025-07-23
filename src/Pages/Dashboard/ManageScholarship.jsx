import React from "react";
import Loader from "../../Shared/Loader";
import ManageScholarTable from "../../Components/ManageScholarships/ManageScholarTable";
import useScholarships from "../../Hooks/useScholarships";
import { Helmet } from "react-helmet-async";
import EmptyState from "../../Shared/EmptyState";

const ManageScholarship = () => {
  // Get
  const {
    scholarships: allScholarships,
    isPending,
    isError,
    error,
  } = useScholarships();

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <Helmet>
        <title>Manage Scholarship || Edufellow</title>
      </Helmet>

      {/* Title */}
      <div className="flex justify-center mt-5 md:mt-10 mb-6 ">
        <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
          <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
            Manage Scholarship
          </h1>
        </div>
      </div>
      <div>
        {/* Blank Page */}
        {allScholarships.length === 0 && (
          <EmptyState
            message="No Scholarship found!"
            buttonText="Go Back"
            redirectPath={-1}
          ></EmptyState>
        )}
        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
          <table className="min-w-full table-auto bg-white">
            {/* Table Head */}
            <thead
              className={`bg-primary/10 text-primary text-base ${
                allScholarships.length < 1 && "hidden"
              }`}
            >
              <tr>
                <th className="px-4 py-3 text-left">No.</th>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Scholarship Name</th>
                <th className="px-4 py-3 text-left">University Name</th>
                <th className="px-4 py-3 text-left">Subject Category</th>
                <th className="px-4 py-3 text-left">Degree</th>
                <th className="px-4 py-3 text-left">Application Fees</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {allScholarships.map((scholarship, index) => (
                <ManageScholarTable
                  key={scholarship._id}
                  scholarship={scholarship}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageScholarship;
