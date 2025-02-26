import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth"); 
    navigate("/login"); 
  };

  return (
    <div className={styles.navbar}>
      <ul>
        <li><button><Link to="/">Home</Link></button></li>
        <li><button><Link to="/product">Product</Link></button></li>
        <li><button><Link to="/user">User</Link></button></li>
        <li><button><Link to="/contact">Contact</Link></button></li>
        <li>
          <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
