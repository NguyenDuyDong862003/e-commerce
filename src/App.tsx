import React from 'react';
import './App.css';
import Navbar from "./component/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';

// redux
import {useEffect} from 'react';
import {Provider, useDispatch} from "react-redux";
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
            <div className="container">
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default App;
