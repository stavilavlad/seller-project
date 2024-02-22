import React from "react";
import CategoryCard from "./CategoryCard";
import SectionTitle from "./SectionHeader";
import { categories } from "../utils/data";

const CategoriesGrid = () => {
  return (
    <div className="align-element mt-8 mb-20">
      <SectionTitle text="Categories" />
      <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 my-4 py-4">
        {categories.map((category) => {
          return <CategoryCard key={category.id} title={category.title} img={category.img} />;
        })}
      </div>
    </div>
  );
};

export default CategoriesGrid;
