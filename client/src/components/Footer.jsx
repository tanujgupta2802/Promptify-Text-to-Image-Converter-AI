import React from "react";
import { Link } from "react-router";
import { assets } from "../assets/assets";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex pb-8 justify-between flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-5 font-medium text-center sm:text-left">
          {/* <div>
            <Link to="/">
              <h1
                className="text-[16px] mb-5 mt-5 text-shadow-amber-300 text-gray-700 bg-gradient-to-b from-teal-200 to-orange-200 px-5 
                sm:px-10 py-1.5 sm:py-3 font-bold shadow-xl shadow-orange-200/50 cursor-pointer hover:scale-105 transition-all duration-700 rounded-full"
              >
                Promptify
              </h1>
            </Link>
          </div> */}
          <div>
            <Link to="/">
              <div
                className="flex items-center gap-2 bg-gradient-to-b from-teal-200 to-orange-200 px-3 text-[8px] sm:text-[13px] mb-5 sm:mb-1 
                      sm:px-6 py-1.5 sm:py-3 font-bold shadow-xl shadow-orange-200/50 cursor-pointer hover:scale-105 transition-all duration-700 rounded-full
          "
              >
                <img src={assets.logo_icon} alt="" width={20} />

                <h1 className="text-[18px] text-shadow-amber-300 text-gray-700">
                  Promptify
                </h1>
              </div>
            </Link>
          </div>
          <div>
            <p className="text-[12px] sm:text-[14px] text-gray-600">
              Copyright @Promptify.dev | All right reserved.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center mt-2 sm:mt-5">
          <a href="mailto:tanujg2802@gmail.com">
            <MdEmail
              size={43}
              color="#000"
              className="bg-white border-1 border-gray-500 p-2 rounded-full hover:scale-125 transition-all duration-700"
            />
          </a>
          <a
            href="https://www.instagram.com/tanuj.gupta.369/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-1 border-gray-500 p-2 rounded-full hover:scale-125 transition-all duration-700"
          >
            <FaInstagram size={25} color="#E1306C" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
