import React from "react";
import classes from "./LatestOrders.module.scss";

const LatestOrders = () => {
  const headings = ["Order ID", "Total", "Status"];
  return (
    <div className={classes.latestOrders}>
      <div className={classes.head}>
        <h5>Latest Orders</h5>
        <button>View All</button>
      </div>
      <table>
        <thead>
          <tr>
            {headings.map((heading, index) => {
              return <th key={index}>{heading}</th>;
            })}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default LatestOrders;
