import React from "react";
import classes from "../Login/Login.module.scss";
import sliderImage1 from "../../assets/images/sliderImage1.png";
import showpassword from '../../assets/images/showpassword.svg'
import hidepassword from '../../assets/images/hidepassword.svg'
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <main className={classes.login}>
      <div className={classes.loginLeft}>
        <div className={classes.content}>
          <p>iPhone 13 Pro</p>
          <h1>Oh. So. Pro.</h1>
        </div>
        <img src={sliderImage1} alt="phones" />
      </div>
      <div className={classes.loginRight}>
        <div className={classes.loginWrapper}>
          <h4>Sign Up</h4>
          <p className={classes.signupDescription}>
            Sign up and you’ll be able to manage your account, track orders,
            save products and access easier returns
          </p>
          <form action="">
            <div className={classes.inputHolder}>
              <label htmlFor="email">Email*</label>
              <input type="email" name="" id="" />
            </div>
            <div className={classes.inputHolder}>
              <label htmlFor="password">Password*</label>
              <input type="password" name="" id="" />
              <div className={classes.passwordReveal}>
                <img src={hidepassword} alt="" />
              </div>
            </div>
            <button>Create Account</button>
          </form>
          <p className={classes.newAccount}>
            New to California ? <Link to="/">Create an Account</Link>{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
