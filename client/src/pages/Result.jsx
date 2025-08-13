import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { delay, motion } from "motion/react";
import { AppContext } from "../context/AppContext";

// const Result = () => {
//   const [image, setImage] = useState(assets.krishna);
//   const [isImageLoaded, setIsImageLoaded] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [input, setInput] = useState("");
//   const { generateImage } = useContext(AppContext);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     if (input) {
//       const image = await generateImage(input);
//       if (image) {
//         setIsImageLoaded(true);
//         setImage(image);
//       }
//     }
//     setIsLoading(false);
//   };
//   return (
//     <>
//       <motion.form
//         onSubmit={onSubmitHandler}
//         initial={{ opacity: 0.2, y: 100 }}
//         transition={{ duration: 1 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//       >
//         <div className="pb-40">
//           <div className="relative flex justify-center mt-20 mb-12 sm:mt-15">
//             <img
//               className="w-[220px] sm:w-[250px] hover:scale-95 transition-all duration-700"
//               src={image}
//               alt=""
//             />
//             {/* <span
//               className={`absolute bottom-0 left-98 h-1 bg-blue-500 w-[220px] sm:w-[247px] transition-all duration-[10s]`}
//             /> */}
//           </div>

//           <div className="sm:ml-100 ml-0 sm:text-left text-center mt-3 sm:mt-0 mb-2 sm:mb-3">
//             <p className={!isLoading ? "hidden" : ""}>Loading.....</p>
//           </div>

//           {!isImageLoaded && (
//             <div className="flex justify-center mt-5 flex-wrap gap-3 sm:gap-0">
//               <input
//                 onChange={(e) => setInput(e.target.value)}
//                 value={input}
//                 className="w-70 sm:w-120 p-2 border-2 rounded-3xl text-center bg-gray-500 text-white border-black"
//                 type="text"
//                 placeholder="Enter what you want to generate"
//               />
//               <button
//                 type="submit"
//                 className="px-27 sm:px-10 py-2 bg-black text-white rounded-3xl sm:ml-[-80px] ml-0 cursor-pointer"
//               >
//                 Generate
//               </button>
//             </div>
//           )}
//           {isImageLoaded && (
//             <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-8 rounded-full">
//               <p
//                 onClick={() => {
//                   setIsImageLoaded(false);
//                 }}
//                 className="bg-gradient-to-b from-teal-200 to-orange-200 rounded-full text-black flex items-center px-8 py-2 cursor-pointer hover:scale-105 transition-all duration-700"
//               >
//                 Generate Another
//               </p>
//               <a
//                 href={image}
//                 download
//                 className="bg-zinc-900 px-12 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-700"
//               >
//                 Download
//               </a>
//             </div>
//           )}
//         </div>
//       </motion.form>
//     </>
//   );
// };

// export default Result;
// ... (imports and component setup)

const Result = () => {
  const [image, setImage] = useState(assets.krishna);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (input) {
      const newImage = await generateImage(input);
      if (newImage) {
        setIsImageLoaded(true);
        setImage(newImage); // Update the image state with the new image
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <motion.form
        onSubmit={onSubmitHandler}
        // ... (motion props)
      >
        <div className="pb-40">
          <div className="relative flex justify-center mt-20 mb-12 sm:mt-15">
            <img
              className="w-[220px] sm:w-[250px] hover:scale-95 transition-all duration-700"
              src={image} // This will display the current image from the state
              alt=""
            />
          </div>

          <div className="sm:ml-100 ml-0 sm:text-left text-center mt-3 sm:mt-0 mb-2 sm:mb-3">
            <p className={!isLoading ? "hidden" : ""}>Loading.....</p>
          </div>

          {/* This block will now always render the input and generate button */}
          <div className="flex justify-center mt-5 flex-wrap gap-3 sm:gap-0">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="w-70 sm:w-120 p-2 border-2 rounded-3xl text-center bg-gray-500 text-white border-black"
              type="text"
              placeholder="Enter what you want to generate"
            />
            <button
              type="submit"
              className="px-27 sm:px-10 py-2 bg-black text-white rounded-3xl sm:ml-[-80px] ml-0 cursor-pointer"
            >
              Generate
            </button>
          </div>

          {/* This block will render only after an image has been successfully loaded */}
          {isImageLoaded && (
            <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-8 rounded-full">
              <p
                onClick={() => {
                  setIsImageLoaded(false);
                  setImage(assets.krishna); // Optional: Reset to default image
                }}
                className="bg-gradient-to-b from-teal-200 to-orange-200 rounded-full text-black flex items-center px-8 py-2 cursor-pointer hover:scale-105 transition-all duration-700"
              >
                Generate Another
              </p>
              <a
                href={image}
                download
                className="bg-zinc-900 px-12 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-700"
              >
                Download
              </a>
            </div>
          )}
        </div>
      </motion.form>
    </>
  );
};
export default Result;
