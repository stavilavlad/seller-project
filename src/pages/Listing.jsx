import { Form } from "react-router-dom";
import { categories } from "../utils/data";
import ImagesGrid from "../components/ImagesGrid";
import axios from "axios";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    // const data = Object.fromEntries(formData);

    const response = await axios.post("http://localhost:3000/listing", formData);
    toast.success("Listing created succesfully");
    return response;
  } catch (error) {
    toast.error("Error creating listing");
    console.error(error);
    return null;
  }
};

const Listing = () => {
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
            <input type="text" name="title" id="title" placeholder="Ex. Iphone 11, new etc.." required className=" input bg-base-300 col-span-1 rounded-lg focus:outline-none tracking-wide mr-1" />
            <label htmlFor="title" className=" text-end">
              0/10
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
          <textarea name="description" id="description" placeholder="Write a detailed description about the product..." className="bg-base-300 rounded-lg mb-5 p-3 pb-10 tracking-wide lg:max-w-[60%]"></textarea>
        </div>

        {/* IMAGE */}
        <ImagesGrid />
        <button type="submit" className="btn btn-primary">
          Create Listing
        </button>
      </Form>
    </div>
  );
};

export default Listing;
