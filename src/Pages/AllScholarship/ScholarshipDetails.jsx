import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import Loader from "../../Shared/Loader";
import DetailsCard from "../../Components/ScholarDetails/DetailsCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ReviewSlider from "../../Components/ScholarDetails/ReviewSlider";
import { Helmet } from "react-helmet-async";

const ScholarshipDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  // Review fetching
  const { data: reviews, isLoading: reviewLoading } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await axiosSecure(`/reviews/${id}`);
      return res.data;
    },
  });

  const { data: singleScholarship, isLoading: scholarshipLoading } = useQuery({
    queryKey: ["singleScholarship"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarship/${id}`);
      return res.data;
    },
  });

  const anyLoading = reviewLoading || scholarshipLoading;
  if (anyLoading) {
    return <Loader></Loader>;
  }
  console.log(reviews);
  return (
    <div className="pt-25">
      <Helmet>
        <title>All Scholarship Details || Edufellow</title>
      </Helmet>
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Details Card */}
        <h1>Scholarship Details</h1>
        <div>
          <DetailsCard singleScholarship={singleScholarship}></DetailsCard>
        </div>

        {/* Reviews Slider */}
        <ReviewSlider reviews={reviews}></ReviewSlider>

        {/* Back Button */}
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
