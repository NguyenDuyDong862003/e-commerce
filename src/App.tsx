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
import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

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
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
