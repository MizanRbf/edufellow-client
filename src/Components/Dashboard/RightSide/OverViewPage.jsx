import React from "react";
import Stats from "./Stats";
import Chart2 from "./Chart2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Shared/Loader";
import Chart from "./Chart";
import Map from "./map";
import useApplications from "../../../Hooks/useApplications";
import useReviews from "../../../Hooks/useReviews";
import useScholarships from "../../../Hooks/useScholarships";

const OverViewPage = () => {
  const axiosSecure = useAxiosSecure();

  // allScholarship
  const { scholarships: allScholarships, isPending: scholarshipsPending } =
    useScholarships();

  // allUsers
  const { data: users, isPending: usersPending } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  // allApplications
  const { applications: allApplications, isPending: applicationsPending } =
    useApplications();

  //  allReviews
  const { allReviews, isPending: reviewsPending } = useReviews();

  const anyPending =
    scholarshipsPending ||
    usersPending ||
    applicationsPending ||
    reviewsPending;

  if (anyPending) {
    return <Loader></Loader>;
  }

  return (
    <div className="w-full">
      <div className="mt-10 md:mt-0">
        <Stats
          allApplications={allApplications}
          allReviews={allReviews}
          users={users}
          allScholarships={allScholarships}
        ></Stats>
      </div>

      {/* Chart-1 */}
      <div className="md:flex gap-4">
        {/* Chart-2 */}
        <div className="md:w-[60%] h-[390px] md:h-[400px]">
          <Chart2 allScholarships={allScholarships} />
        </div>
        <div className="md:w-[40%] h-[340px] md:h-[400px]">
          <Chart allApplications={allApplications} />
        </div>
      </div>

      {/* Map */}
      <div className="shadow-xl rounded-sm p-1 bg-secondary md:mt-4">
        <Map></Map>
      </div>
    </div>
  );
};

export default OverViewPage;
