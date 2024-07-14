import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import Cart, {Product} from "./Cart";
import {delCart, setCheckoutItem, setQuantityItem} from "../store/Action";
import './Checkout.css';

function Checkout() {
    const cart = useSelector((state: any) => state.cart);
    let sumItem = cart.reduce((sum: number, item: any) => {
        if (item.isCheckout) {
            return sum + item.quantity;
        }
        return sum;
    }, 0);

    let sumAmount = cart.reduce((sum: number, item: any) => {
        if (item.isCheckout) {
            return sum + item.price * item.quantity;
        }
        return sum;
    }, 0);

    return (
        <div>
            <h1>Thanh toán</h1>
            <div className="container">
                <div className="headerCheckout row text-bg-secondary">
                    <div className="col-3">
                        Sản phẩm
                    </div>
                    <div className="col-2">
                        Đơn giá
                    </div>
                    <div className="col-2">
                        Số lượng
                    </div>
                    <div className="col-2">
                        Thành tiền
                    </div>
                </div>

                {cart.map((item: any) => {
                    if (item.isCheckout) {
                        return (
                            < OrderDetail key={item.id}
                                          id={item.id}
                                          title={item.name}
                                          productImageUrl={item.img}
                                          price={item.price}
                                          quantity={item.quantity}
                                          isCheckout={item.isCheckout}
                            />);
                    }
                })}

                <div className="headerCheckout row text-bg-secondary d-flex justify-content-end">
                    <div className="col-3">
                        Tổng số tiền ({sumItem} sản phẩm):
                    </div>
                    <div className="col-2">
                        {sumAmount.toLocaleString()} VNĐ
                    </div>
                </div>
            </div>
            <div className="btn btn-primary">
                Thanh toán hóa đơn
            </div>
        </div>);
}

export default Checkout;

export function OrderDetail(data: any) {
    var [product, setProduct] = useState(data);

    console.log("test render", product);

    const dispatch = useDispatch();

    return (
        <div className="itemCheckout row text-bg-light border border-danger border-to">
            <div className="col-3 d-flex gap-2">
                <img className="col-1" src={product.productImageUrl}/>
                <h5>
                    {product.title}
                </h5>
            </div>
            <div className=" col-2">
                {product.price.toLocaleString()} VNĐ
            </div>
            <div className="col-2">
                {product.quantity}
            </div>
            <div className="col-2 text-danger">
                {(product.price * product.quantity).toLocaleString()} VNĐ
            </div>
        </div>)
        ;
}