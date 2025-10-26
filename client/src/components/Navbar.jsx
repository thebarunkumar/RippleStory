import React from "react";
import { assets } from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer">
      {/* <img onClick={() => navigate('/')} src={assets.logo} alt="logo"  className='w-32 sm:w-44 cursor-pointer' /> */}

      {/* Logo text instead of image */}

      <h1 onClick={() => navigate("/")} className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent cursor-pointer transition-transform duration-500 hover:scale-110 hover:tracking-wide">RippleStory</h1>

      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
      >
        {token ? "Dashboard" : "Login"}
        <img src={assets.arrow} className="w-3" alt="arrow" />
      </button>
    </div>
  );
};

export default Navbar;
