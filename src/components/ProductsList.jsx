import { useLoaderData } from "react-router-dom";

const ProductsList = () => {
  const { products, count } = useLoaderData();
  return (
    <div className="grid gap-y-8">
      {products.map((item) => {
        const { id, title, description, images, price, negociable, category } = item;

        return (
          <>
            <div key={id} className="grid gap-8 md:grid-cols-[auto_1fr] hover:scale-105 duration-200 ">
              {images.length > 0 ? <img src={`http://localhost:3000/uploads/${images[0]}`} alt={title} className="w-44 sm:w-80 h-52 object-cover rounded-md" /> : <BiImageAdd className="w-32 h-32" />}
              <div>
                <div className="flex justify-between gap-x-12 lg:gap-x-24">
                  <h2 className=" font-semibold text-xl lg:text-2xl">{title}</h2>
                  <div className="font-semibold sm:px-2 text-lg text-accent ">{price ? price + "$" : "Exchange"}</div>
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
            </div>
            <hr></hr>
          </>
        );
      })}
    </div>
  );
};

export default ProductsList;
