import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Shared/Loader";
import MyReviewCard from "../../Components/MyReviews/MyReviewCard";
import EmptyState from "../../Shared/EmptyState";
import { Helmet } from "react-helmet-async";

const MyReviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const email = user.email;

  const {
    data: myReviews,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["myReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?email=${email}`);
      return res.data;
    },
  });
  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    alert(error.message);
  }
  return (
    <div>
      <Helmet>
        <title>My Reviews || Edufellow</title>
      </Helmet>

      {/* Title */}
      <div className="flex justify-center mt-5 md:mt-10 mb-6">
        <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
          <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
            My Reviews
          </h1>
        </div>
      </div>

      <div className="overflow-x-auto pr-4">
        {/* Blank Page */}
        {myReviews.length === 0 && (
          <EmptyState
            message="You have not review any scholarship yet!"
            buttonText="Go to My Application"
            redirectPath="/dashboard/myApplication"
          ></EmptyState>
        )}

        <div className="overflow-x-auto shadow-xl rounded-lg">
          <table className="table border-3 rounded-lg border-primary w-full bg-[#00000059]">
            {/* Table Head */}
            <thead
              className={`text-base bg-primary text-white ${
                myReviews.length < 1 ? "hidden" : ""
              }`}
            >
              <tr>
                <th className="py-4 px-2">No.</th>
                <th className="py-4 px-2">Scholarship Name</th>
                <th className="py-4 px-2">University Name</th>
                <th className="py-4 px-2">Review Comments</th>
                <th className="py-4 px-2">Review Date</th>
                <th className="py-4 px-2">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {myReviews.length > 0 ? (
                myReviews.map((myReview, index) => (
                  <MyReviewCard
                    key={myReview._id}
                    myReviews={myReviews}
                    myReview={myReview}
                    index={index}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-400 font-medium"
                  >
                    No reviews found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
