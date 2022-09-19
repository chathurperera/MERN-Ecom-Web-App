import React from "react";
import classes from "./orders.module.scss";

const orders = () => {
  return (
    <div className={classes.orders}>
      <div className={classes.ordersHolder}>
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#568908</td>
              <td>August 29, 2022</td>
              <td>Completed</td>
              <td>LKR 4,025.00 for 1 item</td>
              <td>
                <div>
                  <button>View</button>
                  <button>Invoice</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default orders;
