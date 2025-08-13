import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { delay, motion } from "motion/react";

const Testimonial = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-2 mt-[120px] mb-[80px] sm:mt-[-130px] min-h-screen"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Career Testimonials
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-10">
          What other users are saying
        </p>

        <div className="flex flex-row flex-wrap justify-center gap-8">
          {testimonialsData.map((items, index) => (
            <div
              key={index}
              className="w-[280px] h-[290px] flex flex-col items-center justify-evenly border border-orange-100 bg-orange-100 hover:scale-105 transition-all duration-700 rounded-[8px] p-3 shadow-lg shadow-orange-300"
            >
              <img
                className="rounded-full"
                src={items.image}
                alt=""
                width={70}
              />
              <h1 className="text-2xl font-medium">{items.name}</h1>
              <h3 className="text-[15px] text-gray-600">{items.role}</h3>
              <div className="flex mb-2">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <img key={i} src={assets.rating_star} alt="" />
                  ))}
              </div>
              <p className="text-[12px] text-gray-600 text-center">
                {items.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Testimonial;
