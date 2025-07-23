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
      <h1 className="mb-10 text-center">Scholarship By Country</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1500px] mx-auto px-4">
        {scholarships?.map((scholarship) => (
          <ScholarshipByCategoryCard
            key={scholarship._id}
            scholarship={scholarship}
          ></ScholarshipByCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipByCountry;
