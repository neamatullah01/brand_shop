import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoutes from "./PrivateRoutes";
import Products from "../Pages/Products/Products";
import Details from "../Pages/Details/Details";
import MyCart from "../Pages/MyCart/MyCart";
import Update from "../Pages/Update/Update";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register> 
        },
        {
          path: '/addProduct',
          element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
        },
        {
          path: '/products/:brand_name',
          element: <Products></Products>,
          loader: ({params})=>fetch(`https://assignment-10-server-myux27iuc-neamatullah01.vercel.app/products/${params}`)
        },
        {
          path: '/details/:id',
          element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        },
        {
          path: '/myCart',
          element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
          loader: () => fetch('https://assignment-10-server-myux27iuc-neamatullah01.vercel.app/carts')
        },
        {
          path: '/update',
          element: <Update></Update>
        }
      ]
    },
  ]);

  export default router;