import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const DashBar = ({ handleClick }) => {
  return (
    <div className="flex justify-between px-4 py-3 shadow-lg lg:hidden">
      <img className="w-12" src="/assets/logo.png" alt="logo" />
      <button onClick={handleClick}>
        <MdArrowForwardIos
          size={30}
          className="text-secondary ml-4 cursor-pointer"
        />
      </button>
    </div>
  );
};

export default DashBar;
