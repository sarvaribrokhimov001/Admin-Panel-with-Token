import React, { useEffect, useState } from "react";
import api from "../api/api";
import Table from "./Table";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await api.get("/Products");
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Table title="Products" type="products" data={products} refresh={getProducts} />
  );
};
export default Products;