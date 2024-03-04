import React from "react";
import heroImg from "../assets/undraw_hero.svg";

const Hero = () => {
  return (
    <div className="hero py-12 bg-base-200">
      <div className=" align-element grid sm:grid-cols-8 sm:gap-12">
        <div className=" col-span-full  lg:col-span-5 ">
          <h1 className="text-5xl font-bold ">
            <span className="text-primary">Buy. </span>
            <span className="text-accent">Sell. </span>
            <span className="text-secondary">Win. </span>
            <p className="pt-4">Seller: Where Deals Happen!</p>
          </h1>
          <p className="py-6 text-lg">
            Welcome to <span className="text-primary font-semibold uppercase">Seller!</span>, the ultimate destination for hassle-free buying and selling! Discover an online marketplace where individuals can effortlessly showcase items they want to sell, and buyers can browse through a curated collection of offerings.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
        <img src={heroImg} className="hidden lg:block w-full rounded-lg shadow-2xl col-span-3 object-cover " />
      </div>
    </div>
  );
};

export default Hero;
