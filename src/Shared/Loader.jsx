import React from "react";
import { ClockLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-288px)]">
      <h2>
        <ClockLoader size={100} color="#005f74" />
      </h2>
    </div>
  );
};

export default Loader;
