import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div
        className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen
    bg-gradient-to-b from-teal-100 to-orange-100"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/credit" element={<BuyCredit />} />
          <Route
            path="/login"
            element={
              <>
                <Login />
                <Home />
              </>
            }
          />
          <Route
            path="/signUp"
            element={
              <>
                <SignUp />
                <Home />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
