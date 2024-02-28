import React from "react";
import { Link } from "react-router-dom";

const UserInfo = () => {
  return (
    <div className="w-full">
      <div className="bg-base-200 rounded-md p-6 form-control w-full">
        <h2 className="text-lg font-semibold">UserName</h2>
        <p>Joined:</p>
        <p>Maybe Location</p>
        <button className="btn bg-accent text-accent-content w-full mt-4">TEXT SELLER</button>
        <Link className=" link link-info pt-4">More listings from this user</Link>
      </div>
    </div>
  );
};

export default UserInfo;
