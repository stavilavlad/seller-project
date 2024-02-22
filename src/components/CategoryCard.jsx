import React from "react";

const CategoryCard = ({ img, title }) => {
  return (
    <>
      <div className="card card-compact max-w-96 bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer">
        <figure className="">
          <img src={img} alt={title} className=" h-36 sm:h-48 w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center capitalize text-base md:text-lg">{title}</h2>
        </div>
      </div>

      {/* <div className="card card-compact max-w-96 bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300">
        <figure>
          <img src={img} alt={title} className="rounded-box h-48 object-cover" />
          <h2 className="card-title justify-center capitalize absolute bottom-3 text-2xl text-shadow">{title}</h2>
        </figure>
        <div className="card-body"></div>
      </div> */}
    </>
  );
};

export default CategoryCard;
