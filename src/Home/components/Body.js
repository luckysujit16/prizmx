// src/components/Body.js
import React from "react";
// import Banner from "./Banner";

const Body = ({ children }) => {
  // const children = [<Banner />];
  return <main className="container">{children}</main>;
};

export default Body;
