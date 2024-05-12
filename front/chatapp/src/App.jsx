import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/home/:userId" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
