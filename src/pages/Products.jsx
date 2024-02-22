import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Filters } from "../components/index";
import { BiImageAdd } from "react-icons/bi";

export const loader = async () => {
  const response = await axios.get("http://localhost:3000/products");
  return response.data;
};

const Products = () => {
  const [products, setProducts] = useState(useLoaderData());
  console.log(products);

  return (
    <div className="align-element">
      <Filters />
      {products.map((item) => {
        const { id, title, images, description, category } = item;
        console.log(images);
        return (
          <div key={id} className="border my-5">
            <h2>{title}</h2>
            {images.length > 0 ? <img src={`http://localhost:3000/uploads/${images[0]}`} alt={title} className="w-32 h-32" /> : <BiImageAdd className="w-32 h-32" />}
            <p>{description}</p>
            <p>{category}</p>
            {item.new == true ? <p className="btn">new</p> : <p className="btn">used</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
