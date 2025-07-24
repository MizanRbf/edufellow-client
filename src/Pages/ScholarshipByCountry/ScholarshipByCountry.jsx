import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Shared/Loader";
import ScholarshipByCategoryCard from "./ScholarshipByCategoryCard";
import { Helmet } from "react-helmet-async";

const ScholarshipByCountry = () => {
  const axiosSecure = useAxiosSecure();
  const { country } = useParams();
  const { data: scholarships, isPending } = useQuery({
    queryKey: ["scholarships", country],
    queryFn: async () => {
      const res = await axiosSecure(`/scholarshipByCountry/${country}`);
      return res.data;
    },
  });
  if (isPending) {
    return <Loader></Loader>;
  }
  return (
    <div className="pt-25 pb-20">
      <Helmet>
        <title>Scholarship By Category || Edufellow</title>
      </Helmet>
      {/* Title */}
      <div className="flex justify-center mt-5 md:mt-10 mb-6">
        <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
          <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
            Scholarship By Country
          </h1>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1500px] mx-auto px-4 gap-4">
          {scholarships?.map((scholarship) => (
            <ScholarshipByCategoryCard
              key={scholarship._id}
              scholarship={scholarship}
            ></ScholarshipByCategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipByCountry;
