import React, { useContext } from "react";
import "../assets/assets";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 pt-3 sm:pt-4 lg:pt-5">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <div
              className="flex items-center gap-2 bg-gradient-to-b from-teal-200 to-orange-200 px-2 
            sm:px-8 py-1.5 sm:py-3 font-bold shadow-xl shadow-orange-200/50 cursor-pointer hover:scale-105 transition-all duration-700 rounded-full"
            >
              <img src={assets.logo_icon} alt="" width={20} />

              <h1 className="text-[18px] text-shadow-amber-300 text-gray-700">
                Promptify
              </h1>
            </div>
          </Link>
        </div>

        <div>
          {user ? (
            <div>
              <div className="flex items-center gap-2 sm:gap-3 ">
                <button
                  onClick={() => navigate("/credit")}
                  className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-yellow-300 to-orange-300
                px-1 sm:px-5 py-1 sm:py-3 rounded-full shadow-md shadow-yellow-400/50
                hover:scale-105 transition-all duration-700 cursor-pointer text-xs sm:text-sm"
                >
                  <img
                    className="w-4 sm:w-5"
                    src={assets.credit_star}
                    alt="credit star"
                  />
                  <p className="whitespace-nowrap">Credit left: {credit}</p>
                </button>

                <p className="pl-5 text-xs sm:text-sm max-sm:hidden">
                  Hi, {user.name ?? "User"}
                </p>
                <div className="relative group cursor-pointer">
                  <img
                    className="w-10 drop-shadow"
                    src={assets.profile_icon}
                    alt="profile icon"
                  />
                  <div
                    className="absolute hidden group-hover:block
                   top-0 left-0 z-10 text-block rounded-full pt-12"
                  >
                    <ul
                      onClick={logout}
                      className="list-none m-0 p-2 bg-red-600 hover:bg-red-700 rounded-md text-sm border-red-400 text-white font-semibold"
                    >
                      Logout
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-5 cursor-pointer">
              <p
                className="text-sm bg-blue-500 border border-blue-500 px-3 py-2 sm:px-10 rounded-full text-white cursor-pointer hover:scale-105 transition-all duration-500"
                onClick={() => navigate("/credit")}
              >
                Pricing
              </p>
              <button
                onClick={() => navigate("/login")}
                className="text-sm bg-zinc-800 px-3 py-2 sm:px-10 rounded-full text-white cursor-pointer hover:scale-105 transition-all duration-500"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
