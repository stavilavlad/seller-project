import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, Layout, Products, Listing, SingleProduct, MyListings } from "./pages/index";

// LOADERS
import { loader as loaderProducts } from "./pages/Products";
import { loader as loaderSingleProduct } from "./pages/SingleProduct";

// ACTIONS
import { action as actionListing } from "./pages/Listing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
        loader: loaderProducts,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: loaderSingleProduct,
      },
      {
        path: "listing",
        element: <Listing />,
        action: actionListing,
      },
      {
        path: "mylistings",
        element: <MyListings />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
