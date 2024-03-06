import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { categories } from "../utils/data";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-base-300 ">
      <footer className="align-element footer p-10 text-base-content ">
        <nav className="">
          <h6 className="footer-title">Categories</h6>
          <a href="/products" className="link link-hover">
            Products
          </a>
          <a href="/mylistings" className="link link-hover">
            My Listings
          </a>
          <a href="/listing" className="link link-hover">
            Create Listing
          </a>
        </nav>
        <nav className="">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="">
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/stavilavlad" target="_blank">
              <FaGithub className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/vladstavila/" target="_blank">
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a href="https://stav-projects.netlify.app/" target="_blank">
              <TbWorldWww className="w-7 h-7" />
            </a>
          </div>
          <p className="mt-4">Copyright © {year} - Seller</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
