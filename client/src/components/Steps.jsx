import React from "react";
import { stepsData } from "../assets/assets";
import { delay, motion } from "motion/react";

const Steps = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-28 flex flex-col min-h-screen pb-40"
      >
        <h1 className="text-4xl font-semibold">How it works</h1>
        <p className="mt-2 text-gray-600 text-[15px] mb-10">
          Transform words into stunning images
        </p>

        <div>
          {stepsData.map((items, index) => (
            <div
              key={index}
              className="flex items-center gap-5 border border-white rounded-[8px] p-6 mb-8 bg-white shadow-lg shadow-gray-400 hover:scale-95 transition-all duration-700"
            >
              <img src={items.icon} alt="" />
              <div>
                <h2 className="text-left text-[20px] font-semibold">
                  {items.title}
                </h2>
                <p className="text-[15px] text-gray-600">{items.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Steps;
