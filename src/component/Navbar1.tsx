import {useState} from "react";
import React from "react";
import './Navbar1.css';

import logo from "../img/tai-logo-truong-dai-hoc-nong-lam-tphcm.png";
import cart from "../img/shopping_cart_PNG38.png";

const menuItems = [
    {label: "Shop", value: "shop"},
    {label: "Men", value: "men"},
    {label: "Women", value: "women"},
    {label: "Kids", value: "kid"}
];

function Navbar1() {

    const [menuItem, setMenuItem] = useState("shop");

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
                        {item.label}
                        {menuItem === item.value && <hr/>}
                    </li>
                ))}
                {/*<li>Shop <hr/></li>*/}
                {/*<li>Men</li>*/}
                {/*<li>Women</li>*/}
                {/*<li>Kids</li>*/}
            </ul>

            <div className="navLoginCart">
                <button>Login</button>
                <img src={cart} alt="Ảnh giỏ hàng"/>
                <div className="navCartCount">10</div>
            </div>
        </div>
    )
}

export default Navbar1;