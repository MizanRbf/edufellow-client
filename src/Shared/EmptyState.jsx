import React from "react";
import { Link } from "react-router";

const EmptyState = ({
  message = "No data found!",
  buttonText = "Go Back",
  redirectPath = "/",
}) => {
  return (
    <div className="w-full text-center py-20 text-gray-600 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-6">{message}</h2>
      <Link to={redirectPath}>
        <button className="btn btn-neutral px-6">{buttonText}</button>
      </Link>
    </div>
  );
};

export default EmptyState;
