import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserInfo = ({ product }) => {
  const { user_id, username, registration_date: createdAt, phone } = product;
  const user = useSelector((state) => state.userState.user);

  return (
    <div className="w-full">
      <div className="bg-base-200 rounded-md p-6 form-control w-full">
        <h2 className="text-lg font-semibold capitalize">{username}</h2>
        <p>Joined: {createdAt.substring(0, 10)}</p>
        <button onClick={() => document.getElementById("phone").toggleAttribute("hidden")} className="btn bg-accent text-accent-content w-full mt-4">
          TEXT SELLER
        </button>
        <p className="pt-2 font-semibold text-center" id="phone" hidden>
          {phone ? `Tel. ${phone?.replace(/(\d{4})(\d{3})(\d{3})/, "$1-$2-$3")}` : "No phone number provided"}
        </p>

        {user?.id == user_id ? (
          <Link to={"/mylistings"} className="link link-info pt-4">
            See all my listings
          </Link>
        ) : (
          <Link to={`/user/listings/${user_id}`} className="link link-info pt-4">
            More listings from this user
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
