import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { UserInfo } from "../components/index";

export const loader = async (request) => {
  const id = request.params.id;
  const response = await axios(`http://localhost:3000/products/${id}`);
  const { product, views } = response.data;
  return { product, views };
};

const SingleProduct = () => {
  const { product, views } = useLoaderData();
  console.log(views);
  const { id, title, category, description, images, new: newProperty, date, price, negociable } = product;

  return (
    <div className="align-element grid md:grid-cols-4 gap-6 my-8">
      <div className="bg-base-200 col-span-3 rounded-md">
        <h2 className="text-3xl font-bold py-6 mx-6 border-b-2 border-base-300">{title}</h2>
        <div className="flex justify-between">
          <p className="mx-6 pt-2 font-medium text-sm sm:text-base text-slate-500">Published on {date.substring(0, 10)}</p>
          <p className="mx-6 pt-2 font-medium text-sm sm:text-base text-slate-500">Views: {views.views}</p>
        </div>

        {/* CAROUSEL */}

        <div className="carousel w-full">
          {images.map((image, index) => {
            const prevIndex = (index - 1 + images.length) % images.length;
            const nextIndex = (index + 1) % images.length;
            return (
              <div key={image} id={`slide${index}`} className="carousel-item relative w-full">
                <img src={`http://localhost:3000/uploads/${image}`} alt={title} className="w-full max-h-[900px] object-contain px-6 pt-2 pb-6" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 p-8">
                  <a href={`#slide${prevIndex}`} className="btn btn-circle btn-sm">
                    ❮
                  </a>
                  <a href={`#slide${nextIndex}`} className="btn btn-circle btn-sm ">
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* USER INFO */}
      <UserInfo />

      {/* DESCRIPTION AND OTHER INFO */}
      <div className="bg-base-200 col-span-3 rounded-md p-6">
        <div className="pb-4 flex gap-2 flex-wrap justify-between">
          <div className="flex gap-2">
            <Link to="#" className="btn btn-sm border-none capitalize bg-base-300">
              {category}
            </Link>
            {newProperty == true ? (
              <div>
                <p className="bg-base-300 btn btn-sm border-none ml-2 hover:bg-base-300  cursor-default">New</p>
              </div>
            ) : (
              <div>
                <p className="bg-base-300 btn btn-sm border-none ml-2 hover:bg-base-300 cursor-default">Used</p>
              </div>
            )}
          </div>
          <div className="font-bold text-2xl text-accent">{price ? price + "$" : "Exchange"}</div>
        </div>
        {negociable == true ? <p className=" font-medium text-right text-slate-500">Negociable</p> : ""}
        <div>
          <h3 className="pb-4 text-2xl font-semibold border-b-2 border-base-300">Description</h3>
          <p className=" whitespace-pre-wrap pt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
