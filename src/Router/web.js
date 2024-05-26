import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ProductList from "../component/ProductList";
import {loadProduct, ProductDetail} from "../component/ProductDetail";
import Error from "../component/Error";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../component/Cart";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: 'list-product',
                element: <ProductList/>
            }, {
                path: 'product/:id',
                element: <ProductDetail/>,
                loader: loadProduct,
            }, {
                path: 'cart',
                element: <Cart/>,
                errorElement: <Error/>,
            }, {
                path: 'login',
                element: <Login/>,
                errorElement: <Error/>,
            }, {
                path: 'signup',
                element: <Signup/>,
                errorElement: <Error/>,
            }
        ]
    }
]);