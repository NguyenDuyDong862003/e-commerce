import React, {useState} from "react";
import './Cart.css';

import {useDispatch, useSelector} from "react-redux";
import {addCart, delCart, setQuantityItem, setCheckoutItem} from "../store/Action";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

function Cart() {
    const cart = useSelector((state: any) => state.cart);
    const navigate = useNavigate(); // sử dụng để điều hướng
    return (
        <div>
            <h1>Đây là trang giỏ hàng</h1>
            <div className="container">
                <div className="headerCart row text-bg-secondary">
                    <div className="col-1">
                        <input className="form-check-input text-bg-danger " type="checkbox"
                               onChange={
                                   (event) => {
                                       // tích chọn tất cả, hoặc hủy chọn tất cả
                                       // bổ sung sau cũng được
                                   }
                               }
                        />
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

                    < Product key={item.id}
                              id={item.id}
                              title={item.title}
                              productImageUrl={item.productImageUrl}
                              price={item.price}
                              quantity={item.quantity}
                              isCheckout={item.isCheckout}
                    />
                ))}

                {/*<div className="itemCart row text-bg-light border border-danger border-to">*/}
                {/*    <div className="col-1">*/}
                {/*        <input className="form-check-input text-bg-danger" type="checkbox"/>*/}
                {/*    </div>*/}
                {/*    <div className="col-4 d-flex gap-2">*/}
                {/*        <img className="col-1" src="a"/>*/}
                {/*        <h5>*/}
                {/*            /!*<label className=" fw-bold">*!/*/}
                {/*            Tiêu đề sản phẩm*/}
                {/*            Tiêu đề sản phẩm*/}
                {/*            Tiêu đề sản phẩm*/}
                {/*            Tiêu đề sản phẩm*/}
                {/*            /!*</label>*!/*/}
                {/*        </h5>*/}
                {/*    </div>*/}
                {/*    <div className=" col-2">*/}
                {/*        125000₫*/}
                {/*    </div>*/}
                {/*    <div className="col-2 d-flex gap-1">*/}
                {/*        <div className="btn btn-danger">-</div>*/}
                {/*        <input className="form-control text-black" type=" number"/>*/}
                {/*        <div className="btn btn-success">+</div>*/}
                {/*    </div>*/}
                {/*    <div className="col-2 text-danger">*/}
                {/*        125000₫*/}
                {/*    </div>*/}
                {/*    <div className="col-1">*/}
                {/*        <button className=" col btn btn-danger w-100">Xóa</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className="btn btn-primary"
                 onClick={() => {
                     navigate('/checkout');
                 }}>Thanh toán những món hàng đã tích chọn trong giỏ
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
        <div className="itemCart row text-bg-light border border-danger border-to">
            <div className="col-1">
                <input className="form-check-input text-bg-danger" type="checkbox"
                       onChange={(event) => {
                           console.log(event.target.checked)
                           setProduct({...product, isCheckout: event.target.checked})
                           dispatch(setCheckoutItem({id: product.id, isCheckout: event.target.checked}))
                       }
                       }
                       checked={product.isCheckout}
                />
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
                <div className="btn btn-danger"
                     onClick={() => {
                         if (product.quantity > 1) {
                             setProduct({...product, quantity: product.quantity - 1})
                             dispatch(setQuantityItem({id: product.id, quantity: product.quantity - 1}))
                         }
                     }}>-
                </div>
                <input className="form-control text-black" type="number"
                       onChange={event => {
                           // nó yêu cầu phải có onChange thì mới sửa dc cái input,
                           // nhưng có onChange rồi vẫn không được???? phải gọi setProduct và dispatch
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
                {product.price * product.quantity}
            </div>
            <div className="col-1">
                <button className=" col btn btn-danger w-100"
                        onClick={() => {
                            dispatch(delCart(product))
                            // setProduct({...product})
                            console.log("Click r")
                        }}
                >Xóa
                </button>
            </div>
        </div>)
        ;
}