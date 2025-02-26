import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./createAccount.module.css";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (!email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const newUser = { email, password };
    localStorage.setItem("auth", JSON.stringify(newUser)); 

    setError("");
    navigate("/"); 
  };

  return (
    <div className={styles.createAccountDiv}>
      <h1>Create an Account</h1>
      <div className={styles.inputDiv}>
        <h2>Email:</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className={styles.inputDiv}>
        <h2>Password:</h2>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className={styles.inputDiv}>
        <h2>Confirm Password:</h2>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button className={styles.createBtn} onClick={handleCreateAccount}>Create Account</button>
      <button className={styles.backBtn} onClick={() => navigate("/")}>Back to Login</button>
    </div>
  );
};

export default CreateAccount;
