import React, { useEffect } from "react";
import SectionTitle from "../components/SectionHeader";
import ProductsList from "../components/ProductsList";
import { customFetch } from "../utils";
import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const loader = (store) => async () => {
  try {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warning("You need to log in first!");
      return redirect("/login");
    }

    const response = await customFetch("/mylistings", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const products = response.data;
    return products;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const MyListings = () => {
  const user = useSelector((state) => state.userState.user);
  const products = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      toast.warning("You need to log in first!");
    }
  });

  return (
    <div className="align-element my-6">
      <SectionTitle text="my listings" />
      <div className="align-element my-8">{products.length == 0 ? <p className=" font-semibold text-2xl">No personal listings found...</p> : <ProductsList products={products} mylist={true} />}</div>
    </div>
  );
};

export default MyListings;
