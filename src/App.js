import "../src/App.css";
import React, { } from "react";
import Login from "./components/login";
import SignUp from "./components/signUp";
import Home from "./components/home/Home";
import Product from "./components/product"
import { Route, Navigate, Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

function App(props) {
  return (
    <>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/login" />} />
        {/* <Navigate to="/login" /> */}
      </Routes>
    </>
  );
}

export default App;