import React, { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Router>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </HashRouter>
    </>
  )
}

export default App;
