import React, { useContext } from "react";
import CategoryCard from "./CategoryCard";
import SectionTitle from "./SectionHeader";
import { categories } from "../utils/data";
import { Link } from "react-router-dom";
import { FiltersContext } from "../App";

const CategoriesGrid = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  return (
    <div className="align-element mt-8 mb-20">
      <SectionTitle text="Categories" />
      <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 my-4 py-4">
        {categories.map((category) => {
          return (
            <Link to={"/products"} key={category.id} onClick={() => setFilters({ ...filters, category: category.title })}>
              <CategoryCard title={category.title} img={category.img} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesGrid;
