// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Signup() {
//   const navigate = useNavigate();
//   const { setUser, setToken } = useContext(AppContext);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       toast.error("All fields are required!");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_BACKEND_URL}/api/user/registerUser`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ name, email, password }),
//         }
//       );

//       let data;
//       try {
//         data = await response.json();
//       } catch {
//         throw new Error("Invalid server response");
//       }

//       if (response.ok && data.success) {
//         toast.success("Registration successful!");
//         setUser({ name: data.user.name });
//         setToken(data.token);
//         localStorage.setItem("token", data.token);
//         navigate("/");
//       } else {
//         toast.error(data.message || "Registration failed!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error(error.message || "Network error occurred!");
//     }
//   };

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center p-4 sm:p-6">
//         <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm">
//           <img
//             src={assets.cross_icon}
//             alt="Close"
//             className="absolute top-4 right-4 w-3 h-3 cursor-pointer"
//             onClick={() => navigate("/")}
//           />

//           <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
//             Sign Up
//           </h2>
//           <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
//             Create your account to get started
//           </p>

//           <form onSubmit={onSubmitHandler}>
//             <div className="mb-4">
//               <input
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
//               />
//             </div>

//             <div className="mb-4">
//               <input
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 type="email"
//                 placeholder="Email id"
//                 className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
//               />
//             </div>

//             <div className="mb-6">
//               <input
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 type="password"
//                 placeholder="Password"
//                 className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg hover:opacity-90 transition text-sm sm:text-base"
//             >
//               Sign Up
//             </button>
//           </form>

//           <p className="mt-4 text-center text-xs sm:text-sm text-gray-600">
//             Already have an account?{" "}
//             <a href="/login" className="text-blue-600 hover:underline">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/registerUser`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid server response");
      }

      if (response.ok && data.success) {
        toast.success("Registration successful!");
        setUser({ name: data.user.name });
        setToken(data.token);
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        toast.error(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Network error occurred!");
    }
  };

  return (
    <>
           {" "}
      <div className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center p-4 sm:p-6">
               {" "}
        <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm">
                   {" "}
          <img
            src={assets.cross_icon}
            alt="Close"
            className="absolute top-4 right-4 w-3 h-3 cursor-pointer"
            onClick={() => navigate("/")}
          />
                   {" "}
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
                        Sign Up          {" "}
          </h2>
                   {" "}
          <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
                        Create your account to get started          {" "}
          </p>
                   {" "}
          <form onSubmit={onSubmitHandler}>
                       {" "}
            <div className="mb-4">
                           {" "}
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Full Name"
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
                         {" "}
            </div>
                       {" "}
            <div className="mb-4">
                           {" "}
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email id"
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
                         {" "}
            </div>
                       {" "}
            <div className="mb-6">
                           {" "}
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
                         {" "}
            </div>
                       {" "}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg hover:opacity-90 transition text-sm sm:text-base"
            >
                            Sign Up            {" "}
            </button>
                     {" "}
          </form>
                   {" "}
          <p className="mt-4 text-center text-xs sm:text-sm text-gray-600">
                        Already have an account?            {" "}
            <a href="/login" className="text-blue-600 hover:underline">
                            Login            {" "}
            </a>
                     {" "}
          </p>
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </>
  );
}
