import { Link, useNavigate } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { useSelector } from "react-redux";

const ProductsList = ({ filters, filteredProducts, products, mylist }) => {
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  async function handleDelete(id) {
    try {
      const response = await customFetch.post(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      toast.success(response.data);
      navigate("/mylistings");
    } catch (error) {
      toast.error(error.response);
    }
  }

  return (
    <div className="grid gap-y-8">
      {(filters?.search || filters?.category || filters?.new || filters?.range ? filteredProducts : products).map((item) => {
        const { id, title, description, images, price, negociable, category } = item;
        return (
          <div key={id} className="flex flex-col gap-8">
            <Link to={`/products/${id}`} className="grid gap-8 md:grid-cols-[auto_1fr] hover:scale-105 duration-200 rounded-lg ">
              {images?.length > 0 ? <img src={`https://seller-project-server-1.onrender.com/${images[0]}`} alt={title} className="w-44 sm:w-80 h-52 object-cover rounded-md" /> : <BiImageAdd className="w-44 sm:w-80 h-52" />}
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
            {mylist ? (
              <div className="flex gap-4 ">
                <Link to={`/listing/${id}`} className="btn btn-accent btn-sm">
                  <FaRegEdit className="w-4 h-4" />
                  Edit
                </Link>
                <button type="button" onClick={() => handleDelete(id)} className="btn btn-accent  btn-sm">
                  <MdDeleteForever className="w-5 h-5" />
                  Delete
                </button>
              </div>
            ) : (
              ""
            )}
            <hr className=" border-t-base-300"></hr>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
