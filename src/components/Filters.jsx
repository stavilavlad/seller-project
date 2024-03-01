import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { categories } from "../utils/data";
import { FiltersContext } from "../App";

const Filters = ({ maxPrice, setText, setCurrentPage }) => {
  const { filters, setFilters } = useContext(FiltersContext);
  const [range, setRange] = useState(() => filters.range || maxPrice);

  function handleCategory(e) {
    setCurrentPage(1);
    setFilters({ ...filters, category: e.target.innerText });
  }

  function handleNew(e) {
    setCurrentPage(1);
    setFilters({ ...filters, new: e.target.checked });
  }

  return (
    <div className="col-span-2 sm:col-span-1">
      <div>
        {/* CATEGORIES */}
        <div className="mt-5">
          <h2 className="font-semibold text-xl">Category</h2>
          <div className="form-control py-4">
            <button
              type="button"
              onClick={() => {
                setCurrentPage(1);
                setFilters({ ...filters, category: null });
              }}
              className={`capitalize text-start  ${filters.category == null ? "link" : ""}`}
            >
              All
            </button>
            {categories.map((item) => {
              return (
                <button key={item.id} type="button" onClick={handleCategory} className={`capitalize text-start  ${filters.category?.toLowerCase() == item.title.toLowerCase() ? "link" : ""}`}>
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* PRICE RANGE */}
        <div className="py-2 form-control pr-4">
          <label htmlFor="range" className="text-lg font-semibold">
            Price
          </label>
          <span className="text-accent font-semibold">{range}$</span>
          <input
            type="range"
            id="range"
            min={0}
            max={filters.maxPrice}
            onChange={(e) => {
              setCurrentPage(1);
              setRange(e.target.value);
              setFilters({ ...filters, range: e.target.value });
            }}
            value={range}
            step={10}
            className="range range-primary range-xs"
          />
        </div>

        {/* NEW/USED */}
        <div className="flex gap-6 py-2">
          <label htmlFor="new" className=" cursor-pointer text-lg font-semibold ">
            Only New
          </label>
          <input type="checkbox" id="new" onChange={handleNew} className="checkbox mt-1" />
        </div>
        {/* CLEAR BUTTON */}
        <button
          type="button"
          onClick={() => {
            setCurrentPage(1);
            setFilters({
              search: null,
              category: null,
              new: false,
              maxPrice: maxPrice,
              range: maxPrice,
            });
            setRange(maxPrice);
            document.querySelector("#new").checked = false;
            setText("");
          }}
          className="btn btn-warning text-lg my-3"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
