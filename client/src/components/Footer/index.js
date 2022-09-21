import React from "react";
import classes from "./Footer.module.scss";
import logo from "../../assets/images/BlackLogo.svg";
import visa from "../../assets/images/footer/visa.png";
import applePay from "../../assets/images/footer/apple-pay.png";
import googlePay from "../../assets/images/footer/google-pay.png";
import mastercard from "../../assets/images/footer/mastercard.png";
import americanExpress from "../../assets/images/footer/american-express.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerWrapper}>
        <div className={classes.logoColumn}>
          <img src={logo} alt="logo" className={classes.logo} />
          <p>
            Sign up to save and know about the latest tech <br /> exclusive
            offers , events and more.
          </p>
          <div className={classes.logos}>
            <img src={visa} alt="visa" />
            <img src={mastercard} alt="mastercard" />
            <img src={americanExpress} alt="americanExpress" />
            <img src={applePay} alt="applePay" />
            <img src={googlePay} alt="googlePay" />
          </div>
        </div>
        <div>
          <h3>All products</h3>
          <ul>
            <li>Phones</li>
            <li>Watch</li>
            <li>Tablet</li>
            <li>Laptops</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Support</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3>Policies</h3>
          <ul>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3>Follow us</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
