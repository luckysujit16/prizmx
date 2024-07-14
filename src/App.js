// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Home/Index";
import Register from "./Frontend/Register";
import Verify from "./Frontend/Verify";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/routes/register" element={<register />} />
        <Route path="/user_verify" element={<Verify />} />
      </Routes>
    </Router>
  );
};

export default App;
