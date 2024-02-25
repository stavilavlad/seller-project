import React, { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const [layout, setLayout] = useState("list");
  const { count } = useLoaderData();
  // const count = 0;
  return (
    <div>
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8">
        <h2 className=" my-6 text-xl font-medium">{count} Products</h2>
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
      {count == 0 ? <p className="text-2xl font-semibold py-2">No products matched your search...</p> : layout == "list" ? <ProductsList /> : <ProductsGrid />}
    </div>
  );
};

export default ProductsContainer;
