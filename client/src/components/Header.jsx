import React, { useContext } from "react";
import "../assets/assets";
import { assets } from "../assets/assets";
import Steps from "./Steps";
import { delay, motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router";

const Header = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <motion.div
        className="flex flex-col justify-center items-center text-center my-12"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0.2, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 font-semibold inline-flex text-center gap-2 bg-white 
        px-3 sm:px-6 py-2 mt-3 sm:mt-0 shadow-xl shadow-orange-200/50 rounded-full bg-gradient-to-b from-teal-200 to-orange-200 cursor-context-menu"
        >
          <p>Best prompt to image converter</p>
          <img src={assets.star_icon} alt="" />
        </motion.div>

        <motion.h1 className="text-5xl max-w-[300px] sm:text-[55px] sm:max-w-[590px] mx-auto mt-15 text-center">
          Turn prompt to <span className="text-blue-600">image</span>, in
          seconds
        </motion.h1>

        <motion.p
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mt-3 text-[18px] text-gray-800"
        >
          Unleash your creativity with AI, Turn your imagination into visual art
          in seconds - just type, and watch the magic happen.
        </motion.p>

        <button
          onClick={onClickHandler}
          className="sm:text-lg text-white bg-black w-auto mt-8 mb-4 px-8 py-2.5 flex items-center gap-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-500"
        >
          Generate Images
          <img className="h-6" src={assets.star_group} alt="" />
        </button>

        <div className="flex flex-wrap justify-center mt-5 gap-2">
          {Array(6)
            .fill("")
            .map((items, index) => (
              <img
                className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
                src={index % 2 == 0 ? assets.sample_img_2 : assets.sample_img_1}
                key={index}
                width={70}
              ></img>
            ))}
        </div>

        <p className="mt-2 text-gray-600">Generated images from Promptify</p>
        <Steps />
      </motion.div>
    </>
  );
};

export default Header;
