import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import CreateAccount from "./components/CreateAccount";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
};

export default App;








