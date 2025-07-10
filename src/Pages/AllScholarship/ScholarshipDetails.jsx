import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router";
import Loader from "../../Shared/Loader";
import DetailsCard from "../../Components/ScholarDetails/DetailsCard";

const ScholarshipDetails = () => {
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
          <DetailsCard singleScholarship={singleScholarship}></DetailsCard>
        </div>
        <Link to={-1}>
          <button className="bg-primary px-4 py-1 rounded-sm text-white">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
