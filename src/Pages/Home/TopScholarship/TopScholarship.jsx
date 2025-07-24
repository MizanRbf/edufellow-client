import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../Shared/Loader";
import TopScholarCard from "../../../Components/TopScholarship/TopScholarCard";
import { Link } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { motion } from "motion/react";
const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const TopScholarship = () => {
  const axiosSecure = useAxiosSecure();
  const { data: topScholarships, isLoading } = useQuery({
    queryKey: ["topScholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get("/topScholarships");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {topScholarships?.map((topScholarship) => (
          <Section>
            <TopScholarCard
              key={topScholarship._id}
              topScholarship={topScholarship}
            ></TopScholarCard>
          </Section>
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
