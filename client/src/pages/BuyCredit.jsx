// import React from "react";
// import { assets, plans } from "../assets/assets";
// import { FaRupeeSign } from "react-icons/fa";
// import { AppContext } from "../context/AppContext";
// import { useContext } from "react";
// import { delay, motion } from "motion/react";
// import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import axios from "axios";

// const BuyCredit = () => {
//   const { user, backendUrl, loadsCreditsData, token } = useContext(AppContext);

//   const navigate = useNavigate();

//   const initPay = async (order) => {
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: order.currency,
//       name: "Credits Payments",
//       description: "Credits Payment",
//       order_id: order.id,
//       receipt: order.receipt,
//       handler: async (response) => {
//         console.log(response);
//       },
//     };
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };
//   const paymentRazorpay = async (planId) => {
//     try {
//       if (!user) {
//         navigate("/login");
//       }
//       const { data } = await axios.post(
//         backendUrl + "/api/user/pay-razor",
//         { planId },
//         {
//           headers: { token },
//         }
//       );
//       if (data.success) {
//         initPay(data.order);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0.2, y: 100 }}
//         transition={{ duration: 1 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="pb-40"
//       >
//         <div className="flex flex-col justify-center items-center gap-3 mt-16">
//           <div
//             className="text-gray-600 font-semibold inline-flex text-center gap-2 bg-white
//                    px-6 py-2 shadow-xl shadow-orange-200/50 rounded-full bg-gradient-to-b from-teal-200 to-orange-200 cursor-context-menu"
//           >
//             <p>Our Plans</p>
//           </div>
//           <h1 className="text-2xl text-gray-600 font-semibold mt-3 mb-2">
//             Choose the plan
//           </h1>
//         </div>

//         <div className="flex flex-row flex-wrap w-full justify-center items-center gap-8 mt-10">
//           {plans.map((items, index) => (
//             <div
//               className="w-70 text-left border border-white p-6 rounded-[5px] bg-white shadow-xl shadow-white-200/50 hover:scale-105 transition-all duration-700"
//               key={index}
//             >
//               <img src={assets.logo_icon} alt="" width={20} />
//               <h1 className="text-xl font-medium pt-3">{items.id}</h1>
//               <p className="text-[14px] text-gray-500">{items.desc}</p>
//               <div className="flex items-center gap-3 pt-6">
//                 <h1 className="flex items-center text-2xl font-semibold">
//                   <FaRupeeSign size={20} color="#000" />
//                   {items.price}
//                 </h1>
//                 <span className="text-gray-600">/</span>
//                 <p className="text-sm font-medium text-gray-600">
//                   {items.credits} Credits
//                 </p>
//               </div>
//               <button
//                 onClick={() => paymentRazorpay(items.id)}
//                 className="px-10 py-2 border-zinc-900 bg-zinc-900 text-white font-medium rounded-[6px] mt-8 text-center cursor-pointer mb-3"
//               >
//                 {user ? "Purchase" : "Get Started"}
//               </button>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default BuyCredit;

// import React from "react";
// import { assets, plans } from "../assets/assets";
// import { FaRupeeSign } from "react-icons/fa";
// import { AppContext } from "../context/AppContext";
// import { useContext } from "react";
// import { delay, motion } from "motion/react";
// import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import axios from "axios";

// const BuyCredit = () => {
//   const { user, backendUrl, loadsCreditsData, token } = useContext(AppContext);

//   const navigate = useNavigate();

//   const initPay = async (order) => {
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: order.currency,
//       name: "Credits Payments",
//       description: "Credits Payment",
//       order_id: order.id,
//       receipt: order.receipt,
//       handler: async (response) => {
//         console.log(response);
//       },
//     };
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };
//   const paymentRazorpay = async (planId) => {
//     try {
//       if (!user) {
//         navigate("/login");
//       }
//       const { data } = await axios.post(
//         backendUrl + "/api/user/pay-razor",
//         { planId },
//         {
//           // Correcting the headers to match your backend middleware's expectation.
//           // It now sends the token as an 'Authorization' header with a 'Bearer ' prefix.
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       if (data.success) {
//         initPay(data.order);
//       } else {
//         toast.error("Payment initiation failed on the server.");
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <>
//            {" "}
//       <motion.div
//         initial={{ opacity: 0.2, y: 100 }}
//         transition={{ duration: 1 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="pb-40"
//       >
//                {" "}
//         <div className="flex flex-col justify-center items-center gap-3 mt-16">
//                    {" "}
//           <div
//             className="text-gray-600 font-semibold inline-flex text-center gap-2 bg-white
//                    px-6 py-2 shadow-xl shadow-orange-200/50 rounded-full bg-gradient-to-b from-teal-200 to-orange-200 cursor-context-menu"
//           >
//                         <p>Our Plans</p>         {" "}
//           </div>
//                    {" "}
//           <h1 className="text-2xl text-gray-600 font-semibold mt-3 mb-2">
//                         Choose the plan          {" "}
//           </h1>
//                  {" "}
//         </div>
//                {" "}
//         <div className="flex flex-row flex-wrap w-full justify-center items-center gap-8 mt-10">
//                    {" "}
//           {plans.map((items, index) => (
//             <div
//               className="w-70 text-left border border-white p-6 rounded-[5px] bg-white shadow-xl shadow-white-200/50 hover:scale-105 transition-all duration-700"
//               key={index}
//             >
//                           <img src={assets.logo_icon} alt="" width={20} />
//                   <h1 className="text-xl font-medium pt-3">{items.id}</h1>
//                       <p className="text-[14px] text-gray-500">{items.desc}</p>
//                {" "}
//               <div className="flex items-center gap-3 pt-6">
//                                {" "}
//                 <h1 className="flex items-center text-2xl font-semibold">
//                                     <FaRupeeSign size={20} color="#000" />
//                         {items.price}               {" "}
//                 </h1>
//                                 <span className="text-gray-600">/</span>       {" "}
//                 <p className="text-sm font-medium text-gray-600">
//                                     {items.credits} Credits                {" "}
//                 </p>
//                              {" "}
//               </div>
//                            {" "}
//               <button
//                 onClick={() => paymentRazorpay(items.id)}
//                 className="px-10 py-2 border-zinc-900 bg-zinc-900 text-white font-medium rounded-[6px] mt-8 text-center cursor-pointer mb-3"
//               >
//                                 {user ? "Purchase" : "Get Started"}             {" "}
//               </button>
//                          {" "}
//             </div>
//           ))}
//                  {" "}
//         </div>
//              {" "}
//       </motion.div>
//          {" "}
//     </>
//   );
// };

// export default BuyCredit;
import React from "react";
import { assets, plans } from "../assets/assets";
import { FaRupeeSign } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { delay, motion } from "motion/react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { user, backendUrl, loadsCreditsData, token } = useContext(AppContext);

  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payments",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        navigate("/login");
      }
      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (data.success) {
        initPay(data.order);
      } else {
        toast.error("Payment initiation failed on the server.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pb-40"
      >
        <div className="flex flex-col justify-center items-center gap-3 mt-16">
          <div
            className="text-gray-600 font-semibold inline-flex text-center gap-2 bg-white
            px-6 py-2 shadow-xl shadow-orange-200/50 rounded-full bg-gradient-to-b from-teal-200 to-orange-200 cursor-context-menu"
          >
            <p>Our Plans</p>
          </div>
          <h1 className="text-2xl text-gray-600 font-semibold mt-3 mb-2">
            Choose the plan
          </h1>
        </div>

        <div className="flex flex-row flex-wrap w-full justify-center items-center gap-8 mt-10">
          {plans.map((items, index) => (
            <div
              className="w-70 text-left border border-white p-6 rounded-[5px] bg-white shadow-xl shadow-white-200/50 hover:scale-105 transition-all duration-700"
              key={index}
            >
              <img src={assets.logo_icon} alt="" width={20} />
              <h1 className="text-xl font-medium pt-3">{items.id}</h1>
              <p className="text-[14px] text-gray-500">{items.desc}</p>

              <div className="flex items-center gap-3 pt-6">
                {/* Rupee symbol and price in one line */}
                <h1 className="text-2xl font-semibold flex items-center">
                  <FaRupeeSign size={20} color="#000" />
                  {items.price}
                </h1>
                <span className="text-gray-600">/</span>
                <p className="text-sm font-medium text-gray-600">
                  {items.credits} Credits
                </p>
              </div>

              <button
                onClick={() => paymentRazorpay(items.id)}
                className="px-10 py-2 border-zinc-900 bg-zinc-900 text-white font-medium rounded-[6px] mt-8 text-center cursor-pointer mb-3"
              >
                {user ? "Purchase" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default BuyCredit;
