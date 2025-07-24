import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const DashBar = ({ handleClick, open }) => {
  return (
    <div className="flex justify-between px-4 py-3 shadow-lg lg:hidden z-[9999] bg-white fixed top-0 left-0 right-0">
      <img className="w-12" src="/assets/logo.png" alt="logo" />
      <button onClick={handleClick}>
        {open ? (
          <MdArrowForwardIos
            size={30}
            className="text-secondary ml-4 cursor-pointer"
          />
        ) : (
          <MdArrowBackIos
            size={30}
            className="text-secondary ml-4 cursor-pointer"
          />
        )}
      </button>
    </div>
  );
};

export default DashBar;
