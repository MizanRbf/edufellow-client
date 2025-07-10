import axios from "axios";
import ScholarCard from "../../Components/AllScholarship/scholarCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader";

const AllScholarship = () => {
  // Get
  const {
    isPending,
    isError,
    error,
    data: allScholarships,
  } = useQuery({
    queryKey: ["allScholarships"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/scholarships");
      return res.data;
    },
  });

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div className="pt-25">
      <div className="max-w-[1500px] mx-auto px-4">
        <h1 className="mb-8">All Scholarship</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allScholarships?.map((scholarship) => (
            <ScholarCard
              key={scholarship._id}
              scholarship={scholarship}
            ></ScholarCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllScholarship;
