import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../Shared/Loader";
import TopScholarCard from "../../../Components/TopScholarship/TopScholarCard";
import { Link } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { motion } from "motion/react";
import ClosingSoonCard from "../../../Components/ClosingSoon/ClosingSoonCard";
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

const ClosingSoon = () => {
  const axiosSecure = useAxiosSecure();
  const { data: closingSoon, isLoading } = useQuery({
    queryKey: ["closingSoon"],
    queryFn: async () => {
      const res = await axiosSecure.get("/closingSoon");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {closingSoon?.map((closingSoon) => (
          <Section>
            <ClosingSoonCard
              key={closingSoon._id}
              closingSoon={closingSoon}
            ></ClosingSoonCard>
          </Section>
        ))}
      </div>
    </div>
  );
};

export default ClosingSoon;
