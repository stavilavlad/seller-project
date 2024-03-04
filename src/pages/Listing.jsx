import { Form, Navigate, redirect } from "react-router-dom";
import { categories } from "../utils/data";
import ImagesGridInput from "../components/ImagesGridInput";
import { toast } from "react-toastify";
import PriceInput from "../components/PriceInput";
import { useState } from "react";
import { customFetch } from "../utils";
import { useSelector } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    try {
      const formData = await request.formData();
      formData.append("userId", user.id);

      const response = await customFetch.post("/listing", formData);
      toast.success("Listing created succesfully");
      return redirect("/mylistings");
    } catch (error) {
      toast.error("Error creating listing");
      console.error(error);
      return null;
    }
  };

const Listing = () => {
  const user = useSelector((state) => state.userState.user);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // const handleLocation = () => {
  //   const options = {
  //     enableHighAccuracy: true,
  //     timeout: 5000,
  //     maximumAge: 0,
  //   };

  //   function success(pos) {
  //     const crd = pos.coords;

  //     console.log("Your current position is:");
  //     console.log(`Latitude : ${crd.latitude}`);
  //     console.log(`Longitude: ${crd.longitude}`);
  //     console.log(`More or less ${crd.accuracy} meters.`);
  //   }

  //   function error(err) {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //   }
  //   navigator.geolocation.getCurrentPosition(success, error, options);
  // };

  if (!user) {
    toast.warning("You need to log in");
    return <Navigate to={"/login"} replace={true} />;
  }

  return (
    <div className="align-element">
      <h1 className="text-3xl font-bold mt-8 ">Create Listing</h1>
      <Form method="POST" className="pb-8" encType="multipart/form-data">
        <div className="grid my-8 bg-base-200 rounded-lg">
          <div className="flex flex-col m-4 lg:max-w-[60%] sm:pr-4 ">
            {/* TITLE */}
            <label htmlFor="title" className="text-primary font-semibold text-2xl py-3">
              Product Title
            </label>
            <p className="text-slate-400 text-sm py-1">Min. of 15 characters *</p>
            <input type="text" name="title" id="title" minLength={15} maxLength={70} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex. Iphone 11, new etc.." required className=" input invalid:focus:border-red-500 bg-base-300 col-span-1 rounded-lg focus:outline-none tracking-wide mr-1" />
            <label htmlFor="title" className="flex justify-between text-end">
              <div className={`${title.length < 70 ? "opacity-0" : ""} text-red-600`}>Maximum of 70 characters allowed</div>
              <div>{`${title.length}/70`}</div>
            </label>
            {/* CATEGORY */}
            <div className="grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="category" className="text-primary font-semibold text-2xl py-3">
                  Category
                </label>

                <select type="select" name="category" id="category" defaultValue="" required className=" select bg-base-300 col-span-1 rounded-lg focus:outline-none text-md capitalize mb-5 tracking-wide mr-1 ">
                  <option disabled value="">
                    Choose a Category
                  </option>
                  {categories.map((category) => {
                    return (
                      <option key={category.id} value={category.title} className="capitalize">
                        {category.title}
                      </option>
                    );
                  })}
                </select>
              </div>
              {/* NEW CHECKBOX */}
              <div className="form-control">
                <label htmlFor="used" className="label cursor-pointer">
                  <span className="label-text text-primary font-semibold text-2xl sm:ml-3">New</span>
                </label>
                <input type="checkbox" name="used" id="used" className="checkbox checkbox-primary ml-4 sm:my-5 sm:ml-7 " />
              </div>
            </div>
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="bg-base-200 mb-8 p-4 rounded-lg flex flex-col">
          <label htmlFor="description" className="text-primary font-semibold text-2xl py-3">
            Description
          </label>
          <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Write a detailed description about the product..." className="bg-base-300 rounded-lg mb-5 p-3 pb-10 tracking-wide lg:max-w-[60%] whitespace-pre-wrap"></textarea>
          <label htmlFor="description" className="flex justify-between text-end lg:max-w-[60%]">
            <div className={`${description.length <= 5000 ? "opacity-0" : ""} text-red-600`}>Description should be shorter than 5000 characters</div>
            <div>{`${description.length}/5000`}</div>
          </label>
        </div>

        {/* IMAGE */}
        <ImagesGridInput />

        {/* PRICE */}
        <PriceInput />

        {/* <button className="btn" onClick={handleLocation}>
          Location
        </button> */}

        <button type="submit" disabled={title.length > 70 || description.length > 5000 ? true : false} className={`btn btn-primary`}>
          Create Listing
        </button>
      </Form>
    </div>
  );
};

export default Listing;
