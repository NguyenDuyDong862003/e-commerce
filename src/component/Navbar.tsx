import {useState} from "react";
import React from "react";
import './Navbar.css';

import logo from "../img/logo.png";
import imgCart from "../img/shopping_cart_PNG38.png";
import {Link} from "react-router-dom";

import {useSelector} from 'react-redux';

const menuItems = [
    {label: "Home", value: ""},
    {label: "Shop", value: "list-product"},
    {label: "About", value: "about"}
];

function Navbar() {
    const cart = useSelector((state: any) => state.cart);

    const [menuItem, setMenuItem] = useState("list-product");

    return (
        <div className="navbar">
            <div className="navLogo">
                <img src={logo} alt="Ảnh logo"/>
                <p>Front end</p>
            </div>

            <ul className="navMenu">
                {menuItems.map((item) => (
                    <li key={item.value}
                        onClick={() => setMenuItem(item.value)}
                    >
                        <Link to={'/' + item.value}
                        >
                            {item.label}
                        </Link>
                        {menuItem === item.value}
                    </li>
                ))}
            </ul>

            <div className="navLoginCart">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={imgCart} alt="Ảnh giỏ hàng"/>
                </Link>
                <div className="navCartCount">{cart.length}</div>
            </div>
        </div>
    )
}

export default Navbar;