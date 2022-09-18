import React from "react";
import classes from "./Sidebar.module.scss";
import dashboard from "../../assets/images/userProfile/dashboard.png";
import shoppingBag from "../../assets/images/userProfile/shopping-bag.png";
import user from "../../assets/images/userProfile/user.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.linksHolder}>
        <div className={classes.sideLink}>
          <Link to="/">
            <img src={user} alt="user" />
            Profile 
          </Link>
        </div>
        <div className={classes.sideLink}>
          <Link to="/">
            <img src={shoppingBag} alt="shopping bag" />
            Orders
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
