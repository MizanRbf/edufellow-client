import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useScholarshipRating = (scholarshipId) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: averageRating,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["averageRating", scholarshipId],
    queryFn: async () => {
      const res = await axiosSecure(`/reviews/average-rating/${scholarshipId}`);
      return res.data;
    },
    enabled: !!scholarshipId, // Only run if scholarshipId exists
  });

  return { averageRating, isPending, isError };
};

export default useScholarshipRating;
