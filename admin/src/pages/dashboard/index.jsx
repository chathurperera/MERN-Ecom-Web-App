import API from "api";
import React, { useEffect, useState } from "react";
import StatsCard from "../../components/dashboard/StatsCard";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import classes from "./dashboard.module.scss";

const Dashboard = () => {
  useEffect(() => {
    fetchAll();
  }, []);

  const [isFetching, setIsFetching] = useState(true);
  const [allUsers, setAllUsers] = useState();
  const [allOrders, setAllOrders] = useState();
  const [allProducts, setAllProducts] = useState();

  const fetchAll = async () => {
    setIsFetching(true);
    const allProducts = API.get("/products");
    const allOrders = API.get("/order");
    const allUsers = API.get("/");

    const [productsResponse, ordersResponse, usersResponse] = await Promise.all(
      [allProducts, allOrders, allUsers]
    );

    setAllProducts(productsResponse?.data.data);
    setAllOrders(ordersResponse?.data.data);
    setAllUsers(usersResponse?.data.data);
    setIsFetching(false);
  };

  const skeletonLoader = (
    <div className={classes.skeletonLoader}>
      <div className={classes.skeletonCard}>
        <div>
          <Skeleton variant="rectangular" width={80} height={8} />
          <Skeleton
            variant="rectangular"
            sx={{ marginTop: "7px" }}
            width={60}
            height={30}
          />
        </div>
        <Skeleton variant="circular" width={55} height={55} />
      </div>
      <div className={classes.skeletonCard}>
        <div>
          <Skeleton variant="rectangular" width={80} height={8} />
          <Skeleton
            variant="rectangular"
            sx={{ marginTop: "7px" }}
            width={60}
            height={30}
          />
        </div>
        <Skeleton variant="circular" width={55} height={55} />
      </div>
      <div className={classes.skeletonCard}>
        <div>
          <Skeleton variant="rectangular" width={80} height={8} />
          <Skeleton
            variant="rectangular"
            sx={{ marginTop: "7px" }}
            width={60}
            height={30}
          />
        </div>
        <Skeleton variant="circular" width={55} height={55} />
      </div>
      <div className={classes.skeletonCard}>
        <div>
          <Skeleton variant="rectangular" width={80} height={8} />
          <Skeleton
            variant="rectangular"
            sx={{ marginTop: "7px" }}
            width={60}
            height={30}
          />
        </div>
        <Skeleton variant="circular" width={55} height={55} />
      </div>
    </div>
  );

  return (
    <div>
      {!isFetching ? (
        <StatsCard
          allUsers={allUsers}
          allProducts={allProducts}
          allOrders={allOrders}
        />
      ) : (
        skeletonLoader
      )}
    </div>
  );
};

export default Dashboard;
