import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 3, url: "/products", text: "Products" },
  { id: 4, url: "/mylistings", text: "My Listings" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id} className="">
            <NavLink to={link.url} className="">
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
