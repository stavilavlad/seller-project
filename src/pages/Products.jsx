import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Filters, ProductsContainer } from "../components/index";

export const loader = async () => {
  const response = await axios.get("http://localhost:3000/products");
  const products = response.data.products;
  const count = response.data.count;
  return { products, count };
};

const Products = () => {
  return (
    <div className="align-element my-12 gap-4 grid sm:grid-cols-[200px_1fr] ">
      <Filters />
      <ProductsContainer />
    </div>
  );
};

export default Products;
