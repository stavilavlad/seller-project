import { useLoaderData, Link } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";

const ProductsList = ({ filters, filteredProducts, products }) => {
  return (
    <div className="grid gap-y-8">
      {(filters.search || filters.category || filters.new || filters.range ? filteredProducts : products).map((item) => {
        const { id, title, description, images, price, negociable, category } = item;

        return (
          <div key={id} className="flex flex-col gap-8">
            <Link to={`/products/${id}`} className="grid gap-8 md:grid-cols-[auto_1fr] hover:scale-105 duration-200 rounded-lg ">
              {images.length > 0 ? <img src={`http://localhost:3000/uploads/${images[0]}`} alt={title} className="w-44 sm:w-80 h-52 object-cover rounded-md" /> : <BiImageAdd className="w-44 sm:w-80 h-52" />}
              <div>
                <div className="flex justify-between gap-x-12 lg:gap-x-24">
                  <h2 className=" font-semibold text-xl lg:text-2xl">{title}</h2>
                  <div className="font-semibold sm:px-2 text-xl text-accent ">{price ? price + "$" : "Exchange"}</div>
                </div>
                <div className="flex my-3">
                  <div>
                    <button type="button" className="btn btn-xs border-none capitalize bg-base-200">
                      {category}
                    </button>
                  </div>
                  {item.new == true ? (
                    <div>
                      <p className="bg-base-200 btn btn-xs border-none ml-2 hover:bg-base-200  cursor-default">New</p>
                    </div>
                  ) : (
                    <div>
                      <p className="bg-base-200 btn btn-xs border-none ml-2 hover:bg-base-200 cursor-default">Used</p>
                    </div>
                  )}
                </div>
                <p>{description.substring(0, 250) + "..."}</p>
              </div>
            </Link>
            <hr className=" border-t-base-300"></hr>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
