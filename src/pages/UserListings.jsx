import React from "react";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionHeader";
import ProductsList from "../components/ProductsList";

export const loader = async ({ params }) => {
  try {
    const response = await customFetch(`/user/listings/${params.id}`);
    const products = response.data;
    return products;
  } catch (error) {
    console.error(error.response);
    return null;
  }
};

const UserListings = () => {
  const products = useLoaderData();

  if (!products) {
    return (
      <div className="align-element my-6">
        <h1 className="text-2xl font-semibold">No listings found for this user...</h1>
      </div>
    );
  }

  return (
    <div className="align-element my-6">
      <SectionTitle text={`${products[0].username}'s Listings`} />
      <div className="align-element my-8">
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export default UserListings;
