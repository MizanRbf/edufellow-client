import React from "react";
import Stats from "./Stats";
import Chart2 from "./Chart2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Shared/Loader";
import Chart from "./Chart";

const OverViewPage = () => {
  const axiosSecure = useAxiosSecure();

  // allScholarship
  const {
    isPending: scholarshipsPending,
    isError,
    error,
    data: allScholarships,
  } = useQuery({
    queryKey: ["allScholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get("/scholarships");
      return res.data;
    },
  });

  // allUsers
  const { data: users, isPending: usersPending } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  // allApplications
  const { data: allApplications, isPending: applicationsPending } = useQuery({
    queryKey: ["allApplications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applicants");
      return res.data;
    },
  });

  //  allReviews
  const { data: allReviews, isPending: reviewsPending } = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });

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
      <Stats
        allApplications={allApplications}
        allReviews={allReviews}
        users={users}
        allScholarships={allScholarships}
      ></Stats>

      {/* Chart-1 */}
      <div className="md:flex gap-4">
        {/* Chart-2 */}
        <div className="md:w-[60%] h-[400px]">
          <Chart2 allScholarships={allScholarships} />
        </div>
        <div className="md:w-[40%] h-[400px]">
          <Chart allApplications={allApplications} />
        </div>
      </div>
    </div>
  );
};

export default OverViewPage;
