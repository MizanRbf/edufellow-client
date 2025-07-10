import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loader from "../../../Shared/Loader";
import TopScholarCard from "../../../Components/TopScholarship/TopScholarCard";
import { Link } from "react-router";

const TopScholarship = () => {
  const { data: topScholarships, isLoading } = useQuery({
    queryKey: ["topScholarships"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/topScholarships");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {topScholarships.map((topScholarship) => (
          <TopScholarCard topScholarship={topScholarship}></TopScholarCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/allScholarship">
          <button className="bg-primary px-4 py-3 rounded-sm text-white text-xl font-semibold cursor-pointer">
            Visit All Scholarships
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopScholarship;
