import React from "react";
import classes from "./EmailSubSection.module.scss";
import ctaImage from "../../assets/images/Sign Up Image (2).png";
const EmailSubSection = () => {
  return (
    <section className={classes.emailSubSection}>
      <div className={classes.wrapper}>
        <h2>Never miss a thing</h2>
        <p>Be the first to know about latest tech </p>
        <img src={ctaImage} alt="A laptop  mobile phone and a watch" />
        <div className={classes.inputBox}>
          <input type="text" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default EmailSubSection;
