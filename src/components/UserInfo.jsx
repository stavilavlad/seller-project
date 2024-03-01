import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserInfo = () => {
  const { product } = useLoaderData();
  console.log(product);
  const { user_id, username, registration_date: createdAt } = product;
  return (
    <div className="w-full">
      <div className="bg-base-200 rounded-md p-6 form-control w-full">
        <h2 className="text-lg font-semibold capitalize">{username}</h2>
        <p>Joined: {createdAt.substring(0, 10)}</p>
        <p>Maybe Location</p>
        <button className="btn bg-accent text-accent-content w-full mt-4">TEXT SELLER</button>
        <Link className=" link link-info pt-4">More listings from this user</Link>
      </div>
    </div>
  );
};

export default UserInfo;
