import React, { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";

const ProductsContainer = ({ filters, products, count, filteredProducts, filteredCount }) => {
  const [layout, setLayout] = useState("list");

  return (
    <div>
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8">
        <h2 className=" my-6 text-xl font-medium">{filters.search || filters.category || filters.new || filters.range ? filteredCount : count} Products</h2>
        <hr></hr>
        <div className="flex gap-4 items-center">
          <button type="button" onClick={() => setLayout("list")} className={`btn btn-sm btn-square ${layout == "list" ? "btn-primary" : "btn-ghost"} `}>
            <BsList className=" w-6 h-6" />
          </button>
          <button type="button" onClick={() => setLayout("grid")} className={`btn btn-sm btn-square ${layout == "grid" ? "btn-primary" : "btn-ghost"} `}>
            <BsFillGrid3X3GapFill className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* DISPLAY */}
      {filteredCount == 0 ? <p className="text-2xl font-semibold py-2">No products matched your search...</p> : layout == "list" ? <ProductsList filters={filters} filteredProducts={filteredProducts} products={products} /> : <ProductsGrid filters={filters} filteredProducts={filteredProducts} products={products} />}
    </div>
  );
};

export default ProductsContainer;
