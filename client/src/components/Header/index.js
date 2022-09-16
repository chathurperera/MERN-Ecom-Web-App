import React, { useState } from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/images/BlackLogo.svg";
import CartIcon from "../../assets/images/CartIcon.svg";
import user from "../../assets/images/user.png";
import SearchIcon from "../../assets/images/SearchIcon.svg";
import NavMenuButton from "../../assets/images/NavMenuButton.svg";
import downArrow from "../../assets/images/downArrow.svg";
import { Link } from "react-router-dom";
import MegaDropDown from "../MegaDropDown";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>ALL PRODUCTS</li>
            <li onClick={() => setShowDropDown((prevState) => !prevState)}>
              SOLUTIONS <img src={downArrow} alt="down arrow" />
              {showDropDown && <MegaDropDown />}
            </li>
            <li>ABOUT</li>
            <li>SUPPORT</li>
          </ul>
        </nav>
        <div className={classes.navIcons}>
          <img src={SearchIcon} alt="Search Icon" />
          <img src={CartIcon} alt="cart icon" />
          <Link to="login">
            <img src={user} alt="user icon" />
          </Link>

          <img
            src={NavMenuButton}
            className={classes.hamburgerIcon}
            alt="hambuger icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
