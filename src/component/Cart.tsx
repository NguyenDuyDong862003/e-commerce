import React, {useState} from "react";
import './Cart.css';

import {useDispatch, useSelector} from "react-redux";
import {addCart, delCart} from "../store/Action";
import {Link} from "react-router-dom";

function Cart() {
    const cart = useSelector((state: any) => state.cart);
    return (
        <div>
            <h1>Đây là trang giỏ hàng</h1>
            <div className="container">
                <div className="headerCart row text-bg-secondary">
                    <div className="col-1">
                        <input className="form-check-input text-bg-danger " type="checkbox"/>
                    </div>
                    <div className="col-4 d-flex">
                        Sản phẩm
                    </div>
                    <div className="col-2">
                        Đơn giá
                    </div>
                    <div className="col-2">
                        Số lượng
                    </div>
                    <div className="col-2">
                        Số tiền
                    </div>
                    <div className="col-1">
                        Xóa khỏi giỏ
                    </div>
                </div>
                {/*<div className="row border border-primary"></div>*/}

                {cart.map((item: any) => (
                    <Product key={item.id}
                             id={item.id}
                             title={item.title}
                             productImageUrl={item.productImageUrl}
                             price={item.price}
                    />
                ))}

                <div className="itemCart row text-bg-light border border-danger border-to">
                    <div className="col-1">
                        <input className="form-check-input text-bg-danger" type="checkbox"/>
                    </div>
                    <div className="col-4 d-flex gap-2">
                        <img className="col-1" src="a"/>
                        <h5>
                            {/*<label className=" fw-bold">*/}
                            Tiêu đề sản phẩm
                            Tiêu đề sản phẩm
                            Tiêu đề sản phẩm
                            Tiêu đề sản phẩm
                            {/*</label>*/}
                        </h5>
                    </div>
                    <div className=" col-2">
                        125000₫
                    </div>
                    <div className="col-2 d-flex gap-1">
                        <div className="btn btn-danger">-</div>
                        <input className="form-control text-black" type=" number"/>
                        <div className="btn btn-success">+</div>
                    </div>
                    <div className="col-2 text-danger">
                        125000₫
                    </div>
                    <div className="col-1">
                        <button className=" col btn btn-danger w-100">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

export function Product(data: any) {
    var [product, setProduct] = useState(data);

    console.log("test", product);

    const dispatch = useDispatch();

    return (
        <div className="itemCart row text-bg-light border border-danger border-to">
            <div className="col-1">
                <input className="form-check-input text-bg-danger" type="checkbox"/>
            </div>
            <div className="col-4 d-flex gap-2">
                <img className="col-1" src={product.productImageUrl}/>
                <h5>

                    {product.title}
                </h5>
            </div>
            <div className=" col-2">
                {product.price}
            </div>
            <div className="col-2 d-flex gap-1">
                <div className="btn btn-danger">-</div>
                <input className="form-control text-black" type="number" value={1}></input>
                <div className="btn btn-success">+</div>
            </div>
            <div className="col-2 text-danger">
                {product.price * 2}
            </div>
            <div className="col-1">
                <button className=" col btn btn-danger w-100"
                        onClick={() => {
                            dispatch(delCart(product))
                            setProduct({...product})
                            console.log("Click r")
                        }}
                >Xóa
                </button>
            </div>
        </div>)
        ;
}