import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      {/* Logo */}
      <h1 className="font-semibold text-2xl text-[#4f46e5]">EVENT HUB</h1>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <Link
          to="/Signup"
          className="bg-[#4f46e5] text-white px-4 py-2 rounded-md hover:bg-[#4338ca] transition"
        >
          Sign Up
        </Link>
        <Link
          to="/Signin"
          className="border border-[#4f46e5] text-[#4f46e5] px-4 py-2 rounded-md hover:bg-[#eef2ff] transition"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
