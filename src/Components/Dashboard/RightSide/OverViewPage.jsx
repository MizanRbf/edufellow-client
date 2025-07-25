import React from "react";
import Stats from "./Stats";
import Chart2 from "./Chart2";
import Loader from "../../../Shared/Loader";
import Chart from "./Chart";
import useApplications from "../../../Hooks/useApplications";
import useReviews from "../../../Hooks/useReviews";
import useScholarships from "../../../Hooks/useScholarships";
import useUsers from "../../../Hooks/useUsers";
import useUserRole from "../../../Hooks/useUserRole";

const OverViewPage = () => {
  // allScholarship
  const { scholarships: allScholarships, isPending: scholarshipsPending } =
    useScholarships();

  // allUsers
  const { users, isPending: usersPending } = useUsers();

  // allApplications
  const { applications: allApplications, isPending: applicationsPending } =
    useApplications();

  //  allReviews
  const { allReviews, isPending: reviewsPending } = useReviews();

  const { role, isPending: rolePending } = useUserRole();

  const anyPending =
    scholarshipsPending ||
    usersPending ||
    applicationsPending ||
    reviewsPending ||
    rolePending;

  if (anyPending) {
    return <Loader></Loader>;
  }

  return (
    <div className="w-full">
      {/* Title */}
      <div className="flex justify-center mt-10 mb-8">
        <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
          <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
            {role} Dashboard
          </h1>
        </div>
      </div>

      {/* Stats */}
      <div className="">
        <Stats
          allApplications={allApplications}
          allReviews={allReviews}
          users={users}
          allScholarships={allScholarships}
        ></Stats>
      </div>

      <div className="md:flex gap-4">
        {/* Chart-2 */}
        <div className="md:w-[50%] h-[390px] md:h-[400px]">
          <Chart2 allScholarships={allScholarships} />
        </div>
        <div className="md:w-[50%] h-[340px] md:h-[400px]">
          <Chart allApplications={allApplications} />
        </div>
      </div>
    </div>
  );
};

export default OverViewPage;
