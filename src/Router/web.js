import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {ProductList2} from "../component/ProductList";
import {loadProduct, ProductDetail} from "../component/ProductDetail";
import Error from "../component/Error";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../component/Cart";
import Checkout from "../component/Checkout";
import {Category} from "../component/Category";
import {products} from "../data/ProductData";
import {Shop} from "../component/Shop";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: 'list-product',
                // element: <ProductList2 listProduct={products}/>
                element: <Shop/>
            }, {
                path: 'product/:id',
                element: <ProductDetail/>,
                loader: loadProduct,
            }, {
                path: 'cart',
                element: <Cart/>,
                errorElement: <Error/>,
            }, {
                path: 'category',
                element: <Category/>,
                errorElement: <Error/>,
            }
            , {
                path: 'checkout',
                element: <Checkout/>,
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