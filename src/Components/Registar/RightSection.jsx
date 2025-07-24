import React from "react";
import register from "../../assets/Register.json";
import Lottie from "lottie-react";

const RightSection = () => {
  return (
    <div className="flex w-full">
      <Lottie animationData={register} loop={true} className="w-200 mx-auto" />
    </div>
  );
};

export default RightSection;
