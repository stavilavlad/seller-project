import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { categories } from "../utils/data";
import ImagesGridInput from "../components/ImagesGridInput";
import { toast } from "react-toastify";
import PriceInput from "../components/PriceInput";
import { useEffect, useState } from "react";
import { customFetch } from "../utils";
import { useSelector } from "react-redux";

export const action = async ({ request, params }) => {
  try {
    const formData = await request.formData();
    const response = await customFetch.patch(`/listing/${params.id}`, formData);

    toast.success("Listing updated succesfully");
    return redirect("/mylistings");
  } catch (error) {
    toast.error("Error updating listing");
    console.error(error);
    return null;
  }
};

export const loader = async ({ params }) => {
  const response = await customFetch.get(`/listing/${params.id}`);
  const product = response.data;
  return product;
};

const EditListing = () => {
  const user = useSelector((state) => state.userState.user);
  const product = useLoaderData();

  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.warning("Access denied");
      navigate("/login");
    }
    if (user.id != product.user_id) {
      toast.warning("Access denied");
      navigate(`/products/${product.id}`);
    }
  }, []);

  return (
    <div className="align-element">
      <h1 className="text-3xl font-bold mt-8 ">Edit Listing</h1>
      <Form method="PATCH" className="pb-8" encType="multipart/form-data">
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

                <select type="select" name="category" id="category" defaultValue={product.category} required className=" select bg-base-300 col-span-1 rounded-lg focus:outline-none text-md capitalize mb-5 tracking-wide mr-1 ">
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
                <input type="checkbox" name="used" id="used" defaultChecked={product.new} className="checkbox checkbox-primary ml-4 sm:my-5 sm:ml-7 " />
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
        <ImagesGridInput text={"If no images are provided the old ones will persist *"} />

        {/* PRICE */}
        <PriceInput price={product.price} negociable={product.negociable} phone={product.phone} />

        <button type="submit" disabled={title.length > 70 || description.length > 5000 ? true : false} className={`btn btn-primary`}>
          Update Listing
        </button>
      </Form>
    </div>
  );
};

export default EditListing;
