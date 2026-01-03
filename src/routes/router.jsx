import { createBrowserRouter } from "react-router";
import MainLoyouts from "../Layouts/MainLoyouts";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PetsSupplies from "../Pages/PetsSupplies";
import ListingDatailsCard from "../componet/ListingDatailsCard";
import OrderModel from "../componet/OrderModel";
import FilteredProductPage from "../Pages/FilteredProductPage";
import Error from "../Pages/Error";
import UpdateModel from "../componet/UpdateModel";
import PrivateRouter from "../Providers/PrivateRouter";
import Loading from "../Pages/Loading";
import DashboardLayout from "../Layouts/DashbordLayouts";
import Overview from "../Pages/Dashboard/common/Overview";
import About from "../componet/About";
import Blog from "../componet/Blog";
import Support from "../componet/Support";
import MyListings from "../Pages/Dashboard/user/MyListings";
import AddListing from "../Pages/Dashboard/user/AddListing";
import MyOrders from "../Pages/Dashboard/user/MyOrders";
import ManageUsers from "../Pages/Dashboard/admin/ManageUser";
import AllProducts from "../Pages/Dashboard/admin/AllProducts";
import SalesAnalytics from "../Pages/Dashboard/admin/SalesAnalytics";
import ProfileSettings from "../Pages/Dashboard/common/ProfileSettings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLoyouts />,
        hydrateFallbackElement: <Loading />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://pawmart-server-gray.vercel.app/latest-models')
            },
            {
                path: "/pets-supplies",
                element: (<PrivateRouter>
                    <PetsSupplies />
                </PrivateRouter>),
                loader: () => fetch('https://pawmart-server-gray.vercel.app/models')
            },
            {
                path: "/listing-details/:id",
                element: (
                    <PrivateRouter>
                        <ListingDatailsCard />
                    </PrivateRouter>
                ),
                loader: ({ params }) => fetch(`https://pawmart-server-gray.vercel.app/models/${params.id}`)
            },

            {
                path: "/category-filtered-prduct/:categoryName",
                element: (<PrivateRouter>
                    <FilteredProductPage />
                </PrivateRouter>)
            },
            {
                path: "/my-orderes/:id",
                element: <OrderModel />,
                loader: ({ params }) => fetch(`https://pawmart-server-gray.vercel.app/models/${params.id}`),
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'support',
                element: <Support />
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
        path: '/dashboard',
        element: (
            <PrivateRouter>
                <DashboardLayout />
            </PrivateRouter>

        ),
        children: [
            {
                index: true,
                element: <Overview />
            },
            {
                path: "overview",
                element: (
                    <PrivateRouter>
                        <Overview />
                    </PrivateRouter>

                )
            },
            {
                path: "update-model/:id",
                element: (<PrivateRouter>
                    <UpdateModel />
                </PrivateRouter>
                ),
                loader: ({ params }) => fetch(`https://pawmart-server-gray.vercel.app/models/${params.id}`),
            },
            {
                path: "my-listing",
                element: (<PrivateRouter>
                    <MyListings />
                </PrivateRouter>),
            },
            {
                path: "add-listing",
                element: (
                    <PrivateRouter>
                        <AddListing />
                    </PrivateRouter>

                ),
            },
            {
                path: "my-orderes",
                element: (<PrivateRouter>
                    <MyOrders />
                </PrivateRouter>)
            },
            {
                path: "manageuser",
                element: (<PrivateRouter>
                    <ManageUsers />
                </PrivateRouter>)
            },
            {
                path: "allproducts",
                element: (<PrivateRouter>
                    <AllProducts />
                </PrivateRouter>)
            },
            {
                path: "salesanalytics",
                element: (<PrivateRouter>
                    <SalesAnalytics />
                </PrivateRouter>)
            },
            {
                path: "profilesettings",
                element: (<PrivateRouter>
                    <ProfileSettings />
                </PrivateRouter>)

            },
        ]

    },
    {
        path: "*",
        element: <Error />
    }
])
export default router;