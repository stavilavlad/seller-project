import { IoSearchOutline } from "react-icons/io5";

const SearchForm = ({ filters, setFilters, text, setText, setCurrentPage }) => {
  return (
    <div className="align-element flex mt-8">
      <div className=" w-full">
        <label htmlFor="searchProduct">
          <input
            type="search"
            placeholder="Search"
            name="searchProduct"
            id="searchProduct"
            value={text}
            onChange={(e) => {
              setCurrentPage(1);
              setText(e.target.value);
              setFilters({ ...filters, search: e.target.value });
            }}
            className="w-full input input-bordered rounded-l-lg rounded-r-none bg-base-200 focus:outline-none"
            autoComplete="off"
          />
        </label>
      </div>
      <button type="button" className="btn btn-primary rounded-l-none text-md sm:text-lg">
        Search
        <IoSearchOutline className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchForm;
