// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRouter from "./routes/AppRoutes";

const App = () => {
<<<<<<< HEAD
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />        
      </Routes>
    </Router>
  );
=======
  return <AppRouter />;
>>>>>>> a49520ce574f3c1dea3baf572f242a6c5e70c142
};

export default App; 
