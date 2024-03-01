import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Filters, ProductsContainer, SearchForm } from "../components/index";
import { FiltersContext } from "../App";
import { customFetch } from "../utils";

export const loader = async () => {
  const response = await customFetch("/products");
  const products = response.data.products;
  const count = response.data.count;
  return { products, count };
};

const Products = () => {
  const { products, count } = useLoaderData();
  const maxPrice = Math.max(...products.map((product) => product.price));

  const { filters, setFilters } = useContext(FiltersContext);
  const [text, setText] = useState(filters.search || "");

  useEffect(() => {
    setFilters((prevFilters) => ({ ...prevFilters, maxPrice: maxPrice, range: maxPrice }));

    return () => {
      setFilters({
        search: null,
        category: null,
        new: false,
        maxPrice: maxPrice,
        range: maxPrice,
      });
    };
  }, []);

  const filteredProducts = products.filter((product) => {
    const titleMatch = !filters.search || product.title.toLowerCase().includes(filters?.search?.toLowerCase());
    const categoryMatch = !filters.category || product.category.toLowerCase() === filters?.category?.toLowerCase();
    const newMatch = !filters.new || product.new === filters.new;
    const rangeMatch = product.price <= parseInt(filters.range, 10);
    return titleMatch && categoryMatch && newMatch && rangeMatch;
  });

  const filteredCount = filteredProducts.length;

  return (
    <>
      <SearchForm filters={filters} setFilters={setFilters} text={text} setText={setText} />
      <div className="align-element my-6 gap-4 grid sm:grid-cols-[200px_1fr] ">
        <Filters filters={filters} setFilters={setFilters} maxPrice={maxPrice} setText={setText} />
        <ProductsContainer filters={filters} products={products} count={count} filteredCount={filteredCount} filteredProducts={filteredProducts} />
      </div>
    </>
  );
};

export default Products;
