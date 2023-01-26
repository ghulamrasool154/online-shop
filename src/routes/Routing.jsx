import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../client/Client";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Home />} />
    </Routes>
  );
};

export default Routing;
