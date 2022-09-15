import React from "react";
import classes from "./Login.module.scss";
import signUpImage from "../../assets/images/Sign Up Image (2).png";

import { Link } from "react-router-dom";
const Login = () => {
  return (
    <main className={classes.login}>
      <div className={classes.loginLeft}>
      <div className={classes.loginLeftHolder}>
          <div className={classes.content}>
            <p>We bring you the latest and greatest</p>
            <h1>Except the best</h1>
          </div>
          <img src={signUpImage} alt="phones" />
        </div>
      </div>
      <div className={classes.loginRight}>
        <div className={classes.loginWrapper}>
          <h4>Login</h4>
          <form action="">
            <div className={classes.inputHolder}>
              <label htmlFor="email">Email</label>
              <input type="email" name="" id="" />
            </div>
            <div className={classes.inputHolder}>
              <label htmlFor="password">Password</label>
              <input type="password" name="" id="" />
            </div>
            <button>Log in</button>
          </form>
          <p className={classes.newAccount}>
            New to California ? <Link to="/">Create an Account</Link>{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
