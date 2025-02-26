import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginDiv_img from "./loginDiv_img.jpeg";
import styles from "./login.module.css";

const validateUser = (email, password) => {
  const storedUser = JSON.parse(localStorage.getItem("auth"));
  return storedUser && storedUser.email === email && storedUser.password === password;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (validateUser(email, password)) {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className={styles.loginDiv}>
      <div className={styles.leftDiv}>
        <h1>Welcome back to Pretty Login</h1>
        <h3>It's great to have you back</h3>

        <div className={styles.email}>
          <h2>Email:</h2>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className={styles.password}>
          <h2>Password:</h2>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className={styles.checkbox}>
          <div className={styles.check}>
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <p>Forget Password?</p>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.btnDiv}>
          <button className={styles.loginBtn} onClick={handleLogin}>Login</button>
          <button className={styles.newAccount} onClick={() => navigate("/create-account")}>
            Create Account
          </button>
        </div>
      </div>

      <div className={styles.rightDiv}>
        <img src={loginDiv_img} alt="Login Visual" />
      </div>
    </div>
  );
};

export default Login;
