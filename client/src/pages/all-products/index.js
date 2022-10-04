import API from "api";
import ProductSkeleton from "components/ProductSkeleton";
import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import ItemCard from "../../components/ItemCard";
import ResultsCount from "../../components/ResultsCount";
import SelectedFilters from "../../components/SelectedFilters";
import classes from "./allProducts.module.scss";
// import arrowIcon from "../../assets/images/down-arrow.png";

const AllProducts = () => {
  const [filters, setFilters] = useState({
    shorts: false,
    tanks: false,
    shoes: false,
    rating: "",
    price: "",
    availability: "",
  });

  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    const res = await API.get("/products");
    console.log(res);
    setProducts(res.data.data);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const productsList = products?.map((product) => {
    return <ItemCard product={product} key={product._id} />;
  });

  const skeletonLoaders = [1, 2, 3, 4, 5, 6].map((number) => {
    return <ProductSkeleton key={number} />;
  });

  return (
    <div className={classes.allProducts}>
      <div className={classes.wrapper}>
        <aside>
          <Filter filters={filters} setFilters={setFilters}/>
        </aside>
        <div>
          <ResultsCount />
          <SelectedFilters filters={filters} setFilters={setFilters} />
          <div className={classes.productsGrid}>
            {products.length ? productsList : skeletonLoaders}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
