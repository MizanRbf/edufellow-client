import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaUniversity, FaWpforms } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Shared/Loader";
import CountUp from "react-countup";

const Stats = () => {
  const axiosSecure = useAxiosSecure();

  // allScholarship
  const {
    isPending,
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
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  // allApplications
  const { data: allApplications } = useQuery({
    queryKey: ["allApplications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applicants");
      return res.data;
    },
  });

  //  allReviews
  const { data: allReviews } = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  const stats = [
    {
      title: "Total Scholarships",
      value: allScholarships.length,
      icon: <FaUniversity size={30} />,
      bg: "bg-pink-600",
    },
    {
      title: "Total Users",
      value: users.length,
      icon: <FaUsers size={30} />,
      bg: "bg-cyan-500",
    },
    {
      title: "Total Applications",
      value: allApplications.length,
      icon: <FaWpforms size={30} />,
      bg: "bg-green-500",
    },
    {
      title: "Total Reviews",
      value: allReviews.length,
      icon: <MdRateReview size={30} />,
      bg: "bg-orange-400",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-4 text-white p-4 rounded-sm shadow-md ${item.bg}`}
        >
          <div className="text-white">{item.icon}</div>
          <div className="flex flex-col">
            <span className="uppercase text-sm font-semibold">
              {item.title}
            </span>
            <span className="text-2xl font-bold">
              <CountUp end={item.value} duration={20} />+
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
