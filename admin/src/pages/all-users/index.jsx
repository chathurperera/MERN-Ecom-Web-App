import API from "api";
import React, { useEffect, useState } from "react";
import classes from "./all-users.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import deleteIcon from "assets/images/delete.png";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    await API.get("/")
      .then((res) => {
        setAllUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = async (userId) => {
    await API.delete(`/${userId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const headings = ["userID", "email", "Name", "Date"];
  return (
    <div className={classes.allUsers}>
      <div className={classes.head}>
        <h3>All Users</h3>
      </div>
      <div className={classes.tableCard}>
        <table className={classes.allUsersTable}>
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.email}</td>
                  <td>{user.firstName + " " + user.lastName}</td>
                  <td>{moment(user.createdAt).format("LL")}</td>
                  <td>
                    <div className={classes.actionButtons}>
                      <img
                        src={deleteIcon}
                        onClick={() => deleteUser(user._id)}
                        alt="delete user"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
            {allUsers?.length < 1 && <h4>No users found</h4>}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AllUsers;
