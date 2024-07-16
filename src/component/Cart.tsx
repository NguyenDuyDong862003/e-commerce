import React, {useState} from "react";
import './Cart.css';

import {useDispatch, useSelector} from "react-redux";
import {delCart, loadProduct, setCheckoutItem, setQuantityItem} from "../store/Action";
import {useNavigate} from "react-router-dom";

function Cart() {
    const cart = useSelector((state: any) => state.cart);
    const navigate = useNavigate(); // sử dụng để điều hướng
    return (
        <div>
            <h1>Giỏ hàng</h1>
            <div className="container mb-3">
                <div className="headerCart row text-bg-success border-2">
                    <div className="col-1">
                    </div>
                    <div className="col-2">
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
                    <div className="col-2">
                        Xóa khỏi giỏ
                    </div>
                </div>

                {cart.map((item: any) => (

                    < Product key={item.id}
                              id={item.id}
                              title={item.name}
                              productImageUrl={item.img}
                              price={item.price}
                              quantity={item.quantity}
                              isCheckout={item.isCheckout}
                    />
                ))}
            </div>
            <div className="btn btn-primary"
                 onClick={() => {
                     navigate('/checkout');
                 }}>Thanh toán
            </div>
        </div>
    );
}

export default Cart;

export function Product(data: any) {
    var [product, setProduct] = useState(data);

    console.log("test render", product);

    const dispatch = useDispatch();

    return (
        <div className="itemCart row text-bg-light border border-2 mb-1 ">
            <div className="col-1">
                <input className="form-check-input text-bg-danger" type="checkbox" checked={product.isCheckout}
                       onChange={(event) => {
                           console.log(event.target.checked);
                           setProduct({...product, isCheckout: event.target.checked});
                           dispatch(setCheckoutItem({id: product.id, isCheckout: event.target.checked}));
                       }
                       }
                />
            </div>
            <div className="col-2 gap-2 d-flex ">
                <img className="col-1" src={product.productImageUrl}/>
                <h5>
                    {product.title}
                </h5>
            </div>
            <div className=" col-2">
                {product.price.toLocaleString()} VNĐ
            </div>
            <div className="col-2 d-flex gap-2">
                <div className="btn btn-danger"
                     onClick={() => {
                         if (product.quantity > 1) {
                             setProduct({...product, quantity: product.quantity - 1})
                             dispatch(setQuantityItem({id: product.id, quantity: product.quantity - 1}))
                         }
                     }}>-
                </div>
                <input className="form-control text-black " type="number"
                       onChange={event => {
                           let inputValue = Number(event.target.value);
                           inputValue = Math.max(1, inputValue);
                           console.log(inputValue)
                           setProduct({...product, quantity: inputValue})
                           // nhớ rằng sau khi gọi setProduct thì giá trị của Product ko cập nhật ngay
                           // mà lần render tiếp theo mới cập nhật
                           dispatch(setQuantityItem({id: product.id, quantity: inputValue}))
                       }}
                       value={product.quantity}
                ></input>
                <div className="btn btn-success"
                     onClick={() => {
                         setProduct({...product, quantity: product.quantity + 1})
                         dispatch(setQuantityItem({id: product.id, quantity: product.quantity + 1}))
                     }}>+
                </div>
            </div>
            <div className="col-2 text-danger">
                {(product.price * product.quantity).toLocaleString()} VNĐ
            </div>
            <div className="col-2">
                <button className="btn btn-danger w-50"
                        onClick={() => {
                            dispatch(delCart(product))
                            console.log("Click r")
                        }}
                >Xóa
                </button>
            </div>
        </div>)
        ;
}