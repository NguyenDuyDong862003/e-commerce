import React from "react";

function hello(props: any) {
    return (
        <div>
            <p>Hello {props.name}, MSSV {props.mssv}</p>
        </div>
    );
}

function hello2({name, year}: any) {
    return (
        <div>
            <p>Hello {name}</p>
        </div>
    );
}

export default hello;
