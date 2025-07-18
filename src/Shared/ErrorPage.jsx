import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/404_Error_Page.json";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="text-center max-w-xl">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-80 mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          The page you're looking for might have been removed or doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-full hover:bg-purple-700 transition"
        >
          <FaArrowLeft />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
