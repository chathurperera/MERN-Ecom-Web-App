import React, { useEffect, useState } from "react";
import classes from "./profile.module.scss";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "api";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const [address, setAddress] = useState({
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  useEffect(() => {
    if (user.currentUser) {
      setUserInfo(user.currentUser.user);
      user.currentUser.user.address &&
        setAddress(user.currentUser.user.address);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInfo.email || !userInfo.firstName || !userInfo.lastName) {
      toast.error("Please provide all required fields");
      return;
    }

    const payload = {
      ...userInfo,
      address: { ...address },
    };

    await API.patch("/update", payload)
      .then((res) => {
        toast.success("Profile updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.profile}>
      <form onSubmit={handleSubmit} className={classes.profileCard}>
        <div className={classes.nameBox}>
          <div className={classes.inputGroup}>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              value={userInfo.firstName}
              onChange={(event) =>
                setUserInfo({ ...userInfo, firstName: event.target.value })
              }
              id=""
            />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={userInfo.lastName}
              onChange={(event) =>
                setUserInfo({ ...userInfo, lastName: event.target.value })
              }
              id=""
            />
          </div>
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={userInfo.email}
            name="email"
            onChange={(event) =>
              setUserInfo({ ...userInfo, email: event.target.value })
            }
            id=""
          />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="">Address</label>
          <input
            type="text"
            name="address"
            value={address.address}
            onChange={(event) =>
              setAddress({ ...address, address: event.target.value })
            }
            id=""
          />
        </div>
        <div className={classes.nameBox}>
          <div className={classes.inputGroup}>
            <label htmlFor="">City</label>
            <input
              type="text"
              value={address.city}
              id=""
              onChange={(event) =>
                setAddress({ ...address, city: event.target.value })
              }
            />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="">State</label>
            <input
              type="text"
              value={address.state}
              onChange={(event) =>
                setAddress({ ...address, state: event.target.value })
              }
            />
          </div>
        </div>
        <div className={classes.nameBox}>
          <div className={classes.inputGroup}>
            <label htmlFor="">Postal Code</label>
            <input
              type="text"
              value={address.postalCode}
              onChange={(event) =>
                setAddress({ ...address, postalCode: event.target.value })
              }
            />
          </div>
          <div></div>
        </div>

        <button className={classes.saveBtn}>Save Changes</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
