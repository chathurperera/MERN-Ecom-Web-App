import API from "api";
import React, { useEffect, useState } from "react";
import StatsCard from "../../components/dashboard/StatsCard";

const Dashboard = () => {
  useEffect(() => {
    fetchAll();
}, []);

  const [allUsers, setAllUsers] = useState({});
  const [allOrders, setAllOrders] = useState({});
  const [allProducts, setAllProducts] = useState({});

  const fetchAll = async () => {
    const allProducts = API.get("/products");
    const allOrders = API.get("/order");
    const allUsers = API.get("/");

    const [productsResponse, ordersResponse, usersResponse] = await Promise.all(
      [allProducts, allOrders, allUsers]
    );

    console.log('productsResponse',productsResponse)
    console.log('ordersResponse',ordersResponse)
    console.log('usersResponse',usersResponse)
  };

  return (
    <div>
      <StatsCard />
    </div>
  );
};

export default Dashboard;
