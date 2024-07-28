// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Home/Index";
import Register from "./Frontend/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />        
      </Routes>
    </Router>
  );
};

export default App;
