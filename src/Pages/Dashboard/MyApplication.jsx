import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Shared/Loader";
import MyApplicationTable from "../../Components/MyApplications/MyApplicationTable";
import { Helmet } from "react-helmet-async";
import EmptyState from "../../Shared/EmptyState";

const MyApplication = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Get My Application
  const email = user.email;
  const {
    data: myApplications,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["myApplications"],
    queryFn: async () => {
      const res = await axiosSecure(`/applicants?email=${email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    console.log(error.message);
  }

  return (
    <div>
      <Helmet>
        <title>My Application || Edufellow</title>
      </Helmet>

      {/* Title */}
      <div className="flex justify-center mt-5 md:mt-10 mb-6">
        <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
          <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
            My Application
          </h1>
        </div>
      </div>

      <div className="overflow-x-auto pr-4">
        {/* Blank Page */}
        {myApplications.length === 0 && (
          <EmptyState
            message="You have not applied any scholarship!"
            buttonText="Go to Apply"
            redirectPath="/"
          ></EmptyState>
        )}
        <table className="min-w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          {/* Head */}
          <thead
            className={`${
              myApplications.length < 1 ? "hidden" : ""
            } bg-primary text-white`}
          >
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider border-r">
                No.
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider border-r">
                Image
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider border-r">
                University Name
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider border-r">
                University Address
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider border-r">
                Application Feedback
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider border-r">
                Subject Category
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider border-r">
                Applied Degree
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider border-r">
                Application Fees
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider border-r">
                Service Charge
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">
                Application Status
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {myApplications.map((application, index) => (
              <MyApplicationTable
                key={application._id}
                application={application}
                index={index}
                className="odd:bg-white even:bg-gray-50 hover:bg-teal-100 transition-colors duration-200"
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
