import React, { useState } from "react";
import classes from "../Login/Login.module.scss";
import signUpImage from "../../assets/images/Sign Up Image (2).png";
import showpassword from "../../assets/images/showpassword.svg";
import hidepassword from "../../assets/images/hidepassword.svg";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
const Signup = () => {
  const [loading, setLoading] = useState(false);
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
          <h4>Sign Up</h4>
          <p className={classes.signupDescription}>
            Sign up and you’ll be able to manage your account, track orders,
            save products and access easier returns
          </p>
          <form action="">
            <div className={classes.inputGroup}>
              <div className={classes.inputHolder}>
                <label htmlFor="fName">First Name</label>
                <input type="text" name="" id="" />
              </div>
              <div className={classes.inputHolder}>
                <label htmlFor="lName">Last Name</label>
                <input type="text" name="" id="" />
              </div>
            </div>
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
            <button>{loading ? <Spinner /> : "Sign up"}</button>
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
