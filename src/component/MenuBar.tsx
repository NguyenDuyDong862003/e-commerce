import React from "react";
import './MenuBar.css';

function MenuBar(props: any) {
    return (
        <div className="containerMenuBar">
            <div className="feedBack">Feed back</div>
            <div className="login">Login</div>
            <div className="signUp">Sign up</div>
            <div className="changeLanguage">Change language</div>
        </div>
    )
}

export default MenuBar;
