import React from "react";
import { assets } from "../assets/assets";
import { delay, motion } from "motion/react";

const Description = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-[-120px] sm:mt-[-110px] min-h-screen"
      >
        <div className="flex flex-col items-center justify-center gap-3 mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Create AI Images
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-10">
            Turn your visualization into visuals
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-x-10 w-[90%] mx-auto">
          <img
            className="w-64 sm:w-72 md:w-80 xl:w-96 hover:scale-95 transition-all duration-700"
            src={assets.sample_img_1}
            alt=""
          />

          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-2xl font-medium mb-4">
              Introducing the AI_Powered text to Image generator
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Easily bring your ideas to life with our free AI image generator.
              Whether you need stunning visuals or unique imagery, our tool
              transforms your text into eye-catching images with just a few
              clicks. Imagine it, describe it, and watch it come to life
              instantly.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Simply type in a text prompt, and our cutting-edge AI will
              generate high-quality images in seconds. From product visuals to
              character designs and portraits, even concepts that don’t yet
              exist can be visualized effortlessly. Powered by advanced AI
              technology, the creative possibilities are limitless!
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Description;
