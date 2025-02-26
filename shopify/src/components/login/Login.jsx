import React from 'react'
import loginDiv_img from './loginDiv_img.jpeg'
import styles from './login.module.css'
const Login = () => {
  return (
    <div className={styles.loginDiv}>
      <div className={styles.leftDiv}>
        <h1>Welcome back to Pretty Login</h1>
        <h3>Its great to have you back</h3>
        <div className={styles.email}>
        <h2>Email:</h2>
        <input type="email" />
        </div>
        <div className={styles.password}>
        <h2>Password</h2>
        <input type="password" />
        </div>
        <div className={styles.checkbox}>
           <div className={styles.check}><input type="checkbox" /><p>Remember me</p> </div> 
            <p>Forget Password?</p>
        </div>
        <div className={styles.btnDiv}>
            <button className={styles.loginBtn}>Login</button>
            <button className={styles.newAccount}>Create Account</button>

        </div>
      </div>
      <div className={styles.rightDiv}><img src={loginDiv_img} /></div>
    </div>
  )
}

export default Login
