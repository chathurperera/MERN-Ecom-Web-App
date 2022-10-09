import React from "react";
import classes from "./profile.module.scss";

const dashboard = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.profileCard}>
        <div className={classes.nameBox}>
          <div className={classes.inputGroup}>
            <label htmlFor="">First Name</label>
            <input type="text" name="" id="" />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="">Last Name</label>
            <input type="text" name="" id="" />
          </div>
        </div>
          <div className={classes.inputGroup}>
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
          </div>

          <button className={classes.saveBtn}>Save Changes</button>
      </div>
    </div>
  );
};

export default dashboard;
