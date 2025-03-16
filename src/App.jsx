import React, { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
