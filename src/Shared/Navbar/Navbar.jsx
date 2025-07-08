import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import LargeDevice from "../../Components/Navbar/LargeDevice";
import SmallDevice from "../../Components/Navbar/SmallDevice";
import UserInfo from "../../Components/Navbar/UserInfo";
import ResIcon from "../../Components/Navbar/ResIcon";
import Logout from "../../Components/Navbar/Logout";

const Navbar = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  // sign out
  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div
      className={` text-black fixed right-0 top-0 left-0 z-999 transform transition-all duration-300 ease-in-out ${
        isHome
          ? isScrolled
            ? "bg-white py-2 shadow-xl"
            : "bg-secondary shadow-4xl py-4"
          : "bg-white shadow-xl py-4"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1800px] mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Company Logo */}
          <div className="flex items-center gap-1 text-primary">
            <img className="w-14" src="/assets/logo.png" alt="" />
            <h1
              className={`${
                isHome
                  ? isScrolled
                    ? "text-primary"
                    : "text-white"
                  : "text-primary"
              }`}
            >
              Edufellow
            </h1>
          </div>
        </div>
        {/* Menubar for Large Device */}
        <LargeDevice isHome={isHome} isScrolled={isScrolled}></LargeDevice>

        {/* Menubar for Small Device */}
        <SmallDevice
          open={open}
          setOpen={setOpen}
          handleSignOut={handleSignOut}
          isHome={isHome}
          isScrolled={isScrolled}
        ></SmallDevice>

        {/* Login Info */}
        <div className="flex gap-4 items-center">
          {/* <div className="bg-white rounded-4xl p-1 rounded-">
            <DarkMood></DarkMood>
          </div> */}

          {/* User Info */}
          <div>
            <UserInfo></UserInfo>
          </div>

          {/* Responsive Icon */}
          <div>
            <ResIcon
              isHome={isHome}
              isScrolled={isScrolled}
              open={open}
              setOpen={setOpen}
            ></ResIcon>
          </div>

          {/* Log Button */}
          <div>
            <Logout handleSignOut={handleSignOut}></Logout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
