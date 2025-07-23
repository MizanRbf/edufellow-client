import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import Loader from "../../Shared/Loader";
import ManageScholarDetailsCard from "../../Components/ManageScholarships/ManageScholarDetailsCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageScholarshipDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { data: singleScholarship, isLoading } = useQuery({
    queryKey: ["singleScholarship"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarship/${id}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <Helmet>
        <title>Manage Scholarship Details || Edufellow</title>
      </Helmet>

      {/* Title */}
      <div className="flex justify-center mt-5 mb-6">
        <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
          <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
            Scholarship Details
          </h1>
        </div>
      </div>

      <div className="pt-25">
        <div className="max-w-[1500px] mx-auto px-4">
          <div>
            <ManageScholarDetailsCard
              singleScholarship={singleScholarship}
            ></ManageScholarDetailsCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageScholarshipDetails;
