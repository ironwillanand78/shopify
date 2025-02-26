import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import CreateAccount from "./components/CreateAccount";
import Product from "./components/product/Product";
import Contact from './components/Contact/Contact'
import UserDetails from "./components/userDetail/UserDetails";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<UserDetails/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;








