import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {addCart, decrementPage, delCart, incrementPage, setCheckoutItem, setQuantityItem} from "../store/Action";
import "./ProductList.css";
import getDataAtPage, {getTotalPageProduct} from "../data/FakeServerAPI";

export default function ProductList() {
    // const products = useSelector((state: any) => state.products);
    const page = useSelector((state:any) => state.page);
    const listProductAtPage = getDataAtPage(page);
    const totalPage = getTotalPageProduct();
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row">
                {listProductAtPage.map(product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        img={product.img}
                        price={product.price}
                        cate={product.category}
                    />
                ))}
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3">
                <button
                    onClick={() => dispatch(decrementPage())}
                    disabled={page === 1}
                    className="btn btn-secondary"
                >
                    Previous Page
                </button>
                <span className="mx-3">
                    Page {page} of {totalPage}
                </span>
                <button
                    onClick={() => dispatch(incrementPage())}
                    disabled={page === totalPage}
                    className="btn btn-secondary"
                >
                    Next Page
                </button>
            </div>

        </div>
    );
}

export function Product(data: any) {
    const [product, setProduct] = useState(data);

    const dispatch = useDispatch();
    const cart = useSelector((state:any) => state.cart);
    const isInCart = cart.some((item: { id: any; }) => item.id === product.id);
    const changeColor = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (isInCart) {
            dispatch(delCart(product));
        } else {
            dispatch(addCart(product));
            dispatch(setQuantityItem({id: product.id, quantity: 1}));
        }

    };
    return (
        <div className="col-3 col-xs-12 col-sm-6 col-lg-3 pb-3">
            <p></p>
            <div className="card h-100 d-flex flex-column">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={product.img} className="card-img-top img-fluid" alt="..."/>
                </div>
                <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p>{product.price.toLocaleString()} VNĐ</p>
                    <a
                        onClick={changeColor}
                        className={"btn  text-center p-2 pl-2 pr-2 " + (isInCart ? " btn-danger " : " btn-primary")}>{isInCart ? "Xóa khỏi giỏ hàng" : "Thêm vào giỏ hàng"}</a>
                    <p></p>
                    <Link to={`/product/${product.id}`} className={"btn btn-success p-2 pl-2 pr-2"}>
                        Chi tiết
                    </Link>
                </div>
            </div>
        </div>
    );
}

