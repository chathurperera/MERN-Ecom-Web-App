import React, { useEffect, useState } from "react";
import StatsCard from "../../components/dashboard/StatsCard";
import classes from "./dashboard.module.scss";
import { useSelector } from "react-redux";
import API from "api";
import LatestOrders from "components/dashboard/LatestOrders";

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  API.defaults.headers.token = `Bearer ${user.currentUser.token}`;

  useEffect(() => {
    fetchAll();
  }, [user]);

  const [isFetching, setIsFetching] = useState(true);
  const [allUsers, setAllUsers] = useState();
  const [allOrders, setAllOrders] = useState();
  const [allProducts, setAllProducts] = useState();

  const fetchAll = async () => {
    setIsFetching(true);

    const fetchAllProducts = API.get("/products");
    const fetchAllUsers = API.get("/");
    const fetchAllOrders = API.get("/order");

    const [productsResponse, ordersResponse, usersResponse] = await Promise.all(
      [fetchAllProducts, fetchAllOrders, fetchAllUsers]
    );

    setAllOrders(ordersResponse?.data.data);
    setAllUsers(usersResponse?.data.data);
    setAllProducts(productsResponse?.data.data);

    setIsFetching(false);
  };

 
  
  const latestSignupsHeading = ["Name", "Email", "Date"];

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

      <div className={classes.dashboardTables}>
        <LatestOrders />
      </div>
    </div>
  );
};

export default Dashboard;
