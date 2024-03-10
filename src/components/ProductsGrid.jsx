import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";

const ProductsGrid = ({ filters, filteredProducts, products }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {(filters.search || filters.category || filters.new || filters.range ? filteredProducts : products).map((item) => {
        const { id, title, description, images, price, negociable, category } = item;
        return (
          <Link key={id} to={`/products/${id}`} className="card card-compact sm:max-w-96 shadow-xl hover:scale-105 duration-200">
            <figure>{images?.length > 0 ? <img src={`https://seller-project-server-1.onrender.com/${images[0]}`} alt={title} className="w-full h-64 md:h-48 lg:h-48 xl:h-60 object-cover" /> : <BiImageAdd className="w-full h-64 md:h-48 xl:h-60 " />}</figure>
            <div className="card-body  rounded-b-box">
              <div className="flex justify-between sm:px-2">
                <h2 className="card-title text-xl md:text-lg lg:text-lg">{title}</h2>
              </div>
              {/* <p>{shortDescr + "..."}</p> */}
              <div className="flex flex-col justify-between h-full">
                <div className="sm:px-2 flex">
                  <button type="button" className="btn btn-xs border-none capitalize bg-base-200">
                    {category}
                  </button>
                  {item.new == true ? (
                    <div>
                      <p className="bg-base-200 btn btn-xs border-none ml-2 hover:bg-base-200  cursor-default">New</p>
                    </div>
                  ) : (
                    <div>
                      <p className="bg-base-200 btn btn-xs border-none ml-2 hover:bg-base-200 cursor-default">Used</p>
                    </div>
                  )}
                </div>
                <div className="font-semibold sm:px-2 text-lg text-accent">{price ? price + "$" : "Exchange"}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
