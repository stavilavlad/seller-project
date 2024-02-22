import { Form } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const SearchForm = () => {
  return (
    <Form className="align-element flex mt-8" method="GET">
      <div className=" w-full">
        <label htmlFor="search">
          <input type="search" placeholder="Search" name="search" id="search" className="w-full input input-bordered rounded-l-lg rounded-r-none bg-base-200 focus:outline-none" autoComplete="off" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary rounded-l-none text-md sm:text-lg">
        Search
        <IoSearchOutline className="w-6 h-6" />
      </button>
    </Form>
  );
};

export default SearchForm;
