import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";
import Navbar from "./component/Navbar";

// redux
import {useEffect} from 'react';
import {Provider, useDispatch} from "react-redux";
import {store} from "./store/Store";
import ProductList from "./component/ProductList";
import {loadProduct} from "./store/Action";
import {products} from "./data/ProductData";

// router
import {Outlet} from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProduct(products));
    })

    return (
        <div className="App">
            <Navbar></Navbar>

            <h1>Web Thương mại điện tử - Front end - Project cuối kỳ</h1>
            <h3>Đặt đồ ăn trưa</h3>
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

            <div className="container">
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default App;
