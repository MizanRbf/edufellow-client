import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router";
import Loader from "../../Shared/Loader";
import ManageScholarDetailsCard from "../../Components/ManageScholarships/ManageScholarDetailsCard";

const ManageScholarshipDetails = () => {
  const { id } = useParams();
  const { data: singleScholarship, isLoading } = useQuery({
    queryKey: ["singleScholarship"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/scholarship/${id}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="pt-25">
      <div className="max-w-[1500px] mx-auto px-4">
        <h1>Scholarship Details</h1>
        <div>
          <ManageScholarDetailsCard
            singleScholarship={singleScholarship}
          ></ManageScholarDetailsCard>
        </div>
      </div>
    </div>
  );
};

export default ManageScholarshipDetails;
