import { createBrowserRouter } from "react-router";
import MainLoyouts from "../Layouts/MainLoyouts";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddListing from "../Pages/AddListing";
import PetsSupplies from "../Pages/PetsSupplies";
import MyListings from "../Pages/MyListings";
import MyOrders from "../Pages/MyOrders";
import ListingDatailsCard from "../componet/ListingDatailsCard";
import OrderModel from "../componet/OrderModel";
import FilteredProductPage from "../Pages/FilteredProductPage";
import Error from "../Pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLoyouts />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:3000/latest-models')
            },
            {
                path: "/pets-supplies",
                element: <PetsSupplies />,
                loader: () => fetch('http://localhost:3000/models')
            },
            {
                path: "/add-listing",
                element: <AddListing />,
            },
            {
                path: "/my-listing",
                element: <MyListings />,
            },
            {
                path: "/listing-details/:id",
                element: <ListingDatailsCard />,
                loader: ({ params }) => fetch(`http://localhost:3000/models/${params.id}`)
            },
            {
                path: "/my-orderes",
                element: <MyOrders />
            },
            {
                path: "/category-filtered-prduct/:categoryName",
                element: <FilteredProductPage />
            },
            {
                path: "/my-orderes/:id",
                element: <OrderModel />,
                loader: ({ params }) => fetch(`http://localhost:3000/models/${params.id}`),
            },
            {
                path: "/regiter",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
        ]
    },
      {
        path: "*",
        element: <Error />
    }
])
export default router;