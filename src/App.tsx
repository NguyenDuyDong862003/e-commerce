import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";
import Navbar from "./component/Navbar";

// redux
import {useEffect} from 'react';
import {Provider, useDispatch} from "react-redux";
import {store} from "./store/Store";
import ProductList from "./component/product/ProductList";
import {loadProduct} from "./store/Action";
import {products} from "./data/ProductData";

import {Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';

const routes = [
    // {path: '/', element: <Home/>},
    // {path: '/about', element: <About/>},
    // {path: '/contact', element: <Contact/>},
    {path: '/shop', element: <Shop/>},
    {path: '/men', element: <ShopCategory category="men"/>},
    {path: '/women', element: <ShopCategory category="women"/>},
    {path: '/kid', element: <ShopCategory category="kid"/>},
    {path: '/product', element: <Product/>},
    {path: '/cart', element: <Cart/>},
    {path: '/login', element: <LoginSignup/>},
];

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProduct(products));
    })

    return (
        <div className="App">
            <Navbar></Navbar>

            <Routes>
                {routes.map((item, index) => (
                        <Route key={index} path={item.path} element={item.element}></Route>
                    )
                )}

                {/*<Route path="/" element={<Shop/>}></Route>*/}
                {/*<Route path="/" element={<Shop/>}></Route>*/}
            </Routes>

            <h1>Web Thương mại điện tử - Front end - Project cuối kỳ</h1>
            <Hello
                name="Nguyễn Duy Đông"
                mssv="21130318"
            />
            <Hello
                name="Nguyễn Quốc Khánh"
                mssv="21130397"
            />
            <Hello
                name="Đinh Quang Linh"
                mssv="21130421"
            />

            <ProductList/>
        </div>
    );
}

export default App;
