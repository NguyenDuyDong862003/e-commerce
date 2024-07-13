import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addCart, decrementPage, delCart, incrementPage, setCheckoutItem, setQuantityItem} from "../store/Action";
import "./ProductList.css";
import getDataAtPage, {getTotalPageProduct} from "../data/FakeServerAPI";

export default function ProductList() {
    // const products = useSelector(state => state.products);
    const page = useSelector(state => state.page);
    const listProductAtPage = getDataAtPage(page);
    const totalPage = getTotalPageProduct();
    const dispatch = useDispatch();
    return (<div>
            <div className="row">
                {/*{products.map(product => (*/}
                {listProductAtPage.map(product => (
                    <Product key={product.id}
                             id={product.id}
                             name={product.name}
                             url={product.url}
                             img={product.img}
                             price={product.price}
                             cate={product.category}
                             votes={product.votes}
                             submitterAvatarUrl={product.submitterAvatarUrl}
                             color={product.color}
                             isBuying={product.isBuying}
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

export function Product(data) {
    var [product, setProduct] = useState(data);

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const isInCart = cart.some(item => item.id === product.id);

    const changeColor = (e) => {
        // if (product.isBuying) {
        if (isInCart) {
            // dispatch({type: 'cart.minus', payload: {product: product}})
            dispatch(delCart(product));
        } else {
            // dispatch({type: 'cart.add', payload: {product: product}})
            dispatch(addCart(product));
            dispatch(setQuantityItem({id: product.id, quantity: 1}));
            dispatch(setCheckoutItem({id: product.id, isCheckout: false}));
        }
        // setProduct({
        //     ...product,
        //     // color: product.color === 'blue' ? 'red' : 'blue',
        //     // color: isInCart ? 'red' : 'blue',
        //     // isBuying: !product.isBuying
        // })
    }

    return (
        <div className="col-3 col-xs-12 col-sm-6 col-lg-3 pb-3">
            <p></p>
            <div className="card h-100 d-flex flex-column">
                <div className="d-flex justify-content-center align-items-center"
                     style={{height: "200px", overflow: "hidden"}}>
                    <img src={product.img} className="card-img-top img-fluid" alt="..."/>
                </div>
                <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p>{product.price.toLocaleString()} VNĐ</p>
                    <p className="card-text text-center">{product.des}.</p>
                    <a onClick={changeColor}
                        // className={"btn  text-center p-2 pl-2 pr-2 " + (product.isBuying === true ? " btn-danger " : " btn-primary")}>{product.isBuying ? "Xóa khỏi giỏ hàng" : "Thêm vào giỏ hàng"}</a>
                       className={"btn  text-center p-2 pl-2 pr-2 " + (isInCart ? " btn-danger " : " btn-primary")}>{isInCart ? "Xóa khỏi giỏ hàng" : "Thêm vào giỏ hàng"}</a>
                    <p></p>
                    <Link to={`/product/${product.id}`} className={"btn btn-success p-2 pl-2 pr-2"}>Chi tiết</Link>
                </div>
            </div>
        </div>
    );
}