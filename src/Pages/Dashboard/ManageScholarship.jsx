import React from "react";
import Loader from "../../Shared/Loader";
import ManageScholarTable from "../../Components/ManageScholarships/ManageScholarTable";
import useScholarships from "../../Hooks/useScholarships";

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
      <h1>Manage Scholarship</h1>
      <table className="table">
        {/* head */}

        <thead className={`text-lg ${allScholarships.length < 1 && "hidden"}`}>
          <tr className="text-primary">
            <th>No.</th>
            <th>Image</th>
            <th>Scholarship Name</th>
            <th>University Name</th>
            <th>Subject Category</th>
            <th>Degree</th>
            <th>Application Fees</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {allScholarships.map((scholarship, index) => (
            <ManageScholarTable
              key={scholarship._id}
              scholarship={scholarship}
              index={index}
            ></ManageScholarTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageScholarship;
