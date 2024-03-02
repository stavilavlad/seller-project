import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, Layout, Products, Listing, SingleProduct, MyListings, Login, Register, Error, EditListing } from "./pages/index";
import { createContext, useState } from "react";

// LOADERS
import { loader as loaderProducts } from "./pages/Products";
import { loader as loaderSingleProduct } from "./pages/SingleProduct";
import { loader as loaderEditListing } from "./pages/EditListing";

// ACTIONS
import { action as actionListing } from "./pages/Listing";
import { action as actionEditListing } from "./pages/EditListing";
import { action as actionLogin } from "./pages/Login";
import { action as actionRegister } from "./pages/Register";

import { store } from "./store";

export const FiltersContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
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
        action: actionListing(store),
      },
      {
        path: "mylistings",
        element: <MyListings />,
      },
      {
        path: "listing/:id",
        element: <EditListing />,
        loader: loaderEditListing,
        action: actionEditListing,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: actionLogin(store),
  },
  {
    path: "/register",
    element: <Register />,
    action: actionRegister,
  },
]);

function App() {
  const [filters, setFilters] = useState({
    search: null,
    category: null,
    new: false,
    maxPrice: "",
    range: "",
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      <RouterProvider router={router} />
    </FiltersContext.Provider>
  );
}

export default App;
