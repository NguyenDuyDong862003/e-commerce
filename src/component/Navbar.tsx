import {useState} from "react";
import React from "react";
import './Navbar.css';

import logo from "../img/tai-logo-truong-dai-hoc-nong-lam-tphcm.png";
import cart from "../img/shopping_cart_PNG38.png";
import {Link} from "react-router-dom";

const menuItems = [
    {label: "Shop", value: "list-product"},
    {label: "Category", value: "category"},
    {label: "Deal", value: "deal"},
    {label: "Kids", value: "kid"}
];

function Navbar() {

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
                        {menuItem === item.value && <hr/>}
                    </li>
                ))}
            </ul>

            <div className="navLoginCart">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cart} alt="Ảnh giỏ hàng"/>
                </Link>
                <div className="navCartCount">10</div>
            </div>
        </div>
    )
}

export default Navbar;