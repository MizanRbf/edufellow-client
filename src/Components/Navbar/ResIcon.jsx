import React from "react";
import { TbMenuDeep } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const ResIcon = ({ isHome, isScrolled, open, setOpen }) => {
  return (
    <div
      className={`py-1 px-3 rounded-sm lg:hidden ${
        isScrolled ? "bg-slate-200 shadow-2xl" : "bg-white"
      }`}
    >
      <span onClick={() => setOpen(!open)}>
        {open ? (
          <RxCross2
            className={`cursor-pointer   text-2xl ${
              isHome ? (isScrolled ? "text-black" : "text-black") : "text-black"
            }`}
          />
        ) : (
          <TbMenuDeep
            className={`cursor-pointer text-2xl ${
              isHome ? (isScrolled ? "text-black" : "text-black") : "text-black"
            }`}
          />
        )}
      </span>
    </div>
  );
};

export default ResIcon;
